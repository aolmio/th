"use strict";
const AN = { text: "", tokens: [], view: "ruby", trans: "" };
const AN_SAMPLE = "สวัสดีครับ ผมชื่อทอม ผมมาจากประเทศอังกฤษ ผมกำลังเรียนภาษาไทย ภาษาไทยไม่ยากเกินไปสำหรับผม";
VIEW_ENTER.analyzer = () => {
const root = $("#analyzer-root");
if (!$("#an-input")) {
root.innerHTML = `<div class="page-head"><div><span class="eyebrow">วิเคราะห์ข้อความ</span><h1 class="title" tabindex="-1">Text analyzer</h1><p class="lede">Paste any Thai text. It is split into words (Thai has no spaces), romanized with tones, and translated.</p></div></div>
<div class="card"><textarea class="textarea" id="an-input" maxlength="5000" spellcheck="false" aria-label="Thai text" placeholder="วางข้อความภาษาไทยที่นี่…"></textarea>
<div class="row between mt-s"><div class="row"><button class="btn primary" data-act="an-run">${ico("type")}Analyze</button><button class="btn ghost" data-act="an-sample">${ico("sparkle")}Sample</button><button class="btn ghost" data-act="an-paste">${ico("copy")}Paste</button><button class="btn ghost" data-act="an-clear">${ico("trash")}Clear</button></div><span class="chip" id="an-count">0 / 5000</span></div></div>
<div id="an-out" class="stack mt" hidden></div>`;
}
if (S.pendingAnalyze) {
$("#an-input").value = S.pendingAnalyze;
S.pendingAnalyze = null;
analyzerRun();
}
};
A["an-sample"] = () => {
$("#an-input").value = AN_SAMPLE;
analyzerRun();
};
A["an-clear"] = () => {
$("#an-input").value = "";
$("#an-out").hidden = true;
$("#an-count").textContent = "0 / 5000";
};
A["an-paste"] = async () => {
try {
$("#an-input").value = await navigator.clipboard.readText();
analyzerRun();
} catch (e) {
toast("Paste with Ctrl/Cmd+V instead");
}
};
A["an-run"] = () => analyzerRun();
document.addEventListener("input", e => {
if (e.target.id === "an-input") $("#an-count").textContent = `${e.target.value.length} / 5000`;
});
function analyzerRun() {
const text = $("#an-input").value.trim();
const out = $("#an-out");
if (!text) {
out.hidden = true;
return;
}
AN.text = text;
AN.tokens = analyzeThai(text);
AN.trans = "";
out.hidden = false;
if (!AN.tokens.some(t => t.th)) {
out.innerHTML = `<div class="banner"><span class="grow">No Thai characters found. Use the Translator to turn text into Thai first.</span><button class="btn sm" data-act="an-to-tr">${ico("globe")}Open translator</button></div>`;
return;
}
renderAnalysis();
runAnTrans();
}
A["an-to-tr"] = () => {
S.pendingTranslate = AN.text;
go("/translate");
};
function renderAnalysis() {
const out = $("#an-out");
const words = AN.tokens.filter(t => t.th && !t.rep);
const uniq = new Map();
words.forEach(t => {
if (!uniq.has(t.text)) uniq.set(t.text, t);
});
const known = words.filter(t => t.entry).length;
const lv = {};
words.forEach(t => {
const l = t.entry ? t.entry.lvl || 0 : -1;
lv[l] = (lv[l] || 0) + 1;
});
const views = [["ruby", "Reading"], ["table", "Words"], ["rom", "Romanization"], ["tones", "Tones"]];
let body = "";
if (AN.view === "ruby") body = `<div class="ruby-view" id="an-ruby">${rubyHTML(AN.tokens)}</div><p class="tiny faint">Tap a word for details. Italic romanization was generated from spelling rules and may be off for irregular words.</p>`;
else if (AN.view === "table") body = `<div class="tbl-wrap"><table><thead><tr><th>Word</th><th>Sound</th><th>Meaning</th><th>Level</th></tr></thead><tbody>${Array.from(uniq.values()).map(t => `<tr><td class="hz-cell han"><button class="wd-hz" data-act="open-word" data-key="${esc(t.text)}" style="font-size:1.2rem">${esc(t.text)}</button></td><td class="py">${romHTML(t.rom)}</td><td>${t.entry && t.entry.en ? esc(shortMean(t.entry.en, 2)) : '<span class="faint">—</span>'}</td><td>${t.entry && t.entry.lvl ? levelTag(t.entry.lvl) : ""}</td></tr>`).join("")}</tbody></table></div>`;
else if (AN.view === "rom") body = `<div class="card" style="background:var(--sunken)"><p class="py" style="font-size:1.15rem;line-height:1.9" id="an-romtext">${AN.tokens.map(t => (t.th ? romHTML(t.rom) : esc(t.text))).join(" ")}</p><div class="row mt-s"><button class="btn sm" data-act="copy" data-t="${esc(tokensRom(AN.tokens))}">${ico("copy")}Copy</button></div></div>`;
else body = `<div class="row">${Array.from(uniq.values()).map(t => `<div class="card" style="padding:.7rem"><div class="han" style="font-size:1.3rem">${esc(t.text)}</div><div class="row" style="gap:.3rem">${sylBreakdown(t.text, t.rom)}</div></div>`).join("")}</div>`;
const stat = [1, 2, 3, 4].filter(l => lv[l]).map(l => `<span class="chip lvl l-${l}">L${l} · ${lv[l]}</span>`).join("") + (lv[-1] ? `<span class="chip">Other · ${lv[-1]}</span>` : "");
out.innerHTML = `<div class="card"><div class="row between mb"><div class="seg" role="group" aria-label="View">${views.map(v => `<button class="${AN.view === v[0] ? "on" : ""}" data-act="an-view" data-v="${v[0]}">${v[1]}</button>`).join("")}</div><div class="row"><button class="btn sm" data-act="speak" data-t="${esc(AN.text)}">${ico("volume")}Listen</button><button class="btn sm" data-act="speak" data-t="${esc(AN.text)}" data-slow="1">Slow</button></div></div>${body}</div>
<div class="grid g-4 keep"><div class="card stat"><span class="k">Words</span><span class="v">${words.length}</span><span class="s">${uniq.size} unique</span></div><div class="card stat"><span class="k">In dictionary</span><span class="v">${words.length ? Math.round((known / words.length) * 100) : 0}%</span><span class="s">${known} of ${words.length}</span></div><div class="card stat" style="grid-column:span 2"><span class="k">By level</span><div class="row mt-s">${stat || '<span class="muted small">—</span>'}</div></div></div>
<div class="card"><h3 class="sub">Translation</h3><div id="an-trans" class="mt-s muted">Translating…</div></div>`;
if (AN.trans) fillAnTrans();
}
A["an-view"] = el => {
AN.view = el.dataset.v;
renderAnalysis();
};
function fillAnTrans() {
const box = $("#an-trans");
if (box) box.innerHTML = AN.trans ? `<p>${esc(AN.trans)}</p>` : '<p class="muted small">Translation is unavailable right now (you may be offline).</p>';
}
async function runAnTrans() {
const text = AN.text;
const chunks = splitForTranslate(text);
const parts = await mapLimit(chunks, 3, c => translateText(c, { from: "th", to: S.settings.glossLang || "en" }));
if (AN.text !== text) return;
AN.trans = parts.filter(Boolean).join(" ");
fillAnTrans();
}

const LANGS = [["en", "English"], ["my", "Burmese · မြန်မာ"], ["zh-CN", "Chinese (Simplified)"], ["zh-TW", "Chinese (Traditional)"], ["ja", "Japanese"], ["ko", "Korean"], ["vi", "Vietnamese"], ["id", "Indonesian"], ["ms", "Malay"], ["tl", "Filipino"], ["hi", "Hindi"], ["bn", "Bengali"], ["ar", "Arabic"], ["fr", "French"], ["de", "German"], ["es", "Spanish"], ["pt", "Portuguese"], ["it", "Italian"], ["ru", "Russian"], ["tr", "Turkish"], ["nl", "Dutch"], ["pl", "Polish"], ["uk", "Ukrainian"], ["sv", "Swedish"], ["he", "Hebrew"], ["lo", "Lao"], ["km", "Khmer"]];
const TRS = { mode: store.get("thai_hub_tr_mode", "to"), other: store.get("thai_hub_tr_other", "en"), hist: store.get("thai_hub_tr_hist", []), run: 0 };
VIEW_ENTER.translate = () => {
const root = $("#translate-root");
if (!$("#tr-input")) {
root.innerHTML = `<div class="page-head"><div><span class="eyebrow">Translator · แปลภาษา</span><h1 class="title" tabindex="-1">Translate to and from Thai</h1><p class="lede">Translate any language into Thai with romanization and audio, or translate Thai into English, Burmese and more.</p></div><div class="seg" id="tr-mode"><button data-act="tr-mode" data-m="to">Any language → Thai</button><button data-act="tr-mode" data-m="from">Thai → any language</button></div></div>
<div class="card"><div class="row mb"><label class="small muted" for="tr-from">From</label><select class="select" id="tr-from" aria-label="Source language"></select><button class="btn ghost icon" data-act="tr-swap" aria-label="Swap languages">${ico("shuffle")}</button><label class="small muted" for="tr-to">To</label><select class="select" id="tr-to" aria-label="Target language"></select></div>
<textarea class="textarea" id="tr-input" maxlength="3000" spellcheck="false" aria-label="Text to translate"></textarea>
<div class="row between mt-s"><div class="row"><button class="btn primary" data-act="tr-run">${ico("globe")}Translate</button><button class="btn ghost" data-act="tr-paste">${ico("copy")}Paste</button><button class="btn ghost" data-act="tr-clear">${ico("trash")}Clear</button></div><span class="chip" id="tr-count">0 / 3000</span></div>
<p class="hint mt-s">Press Ctrl or Cmd + Enter to translate. Machine translation is a guide, not a reference.</p></div>
<div class="mt" id="tr-out" hidden></div><div class="card mt" id="tr-hist" hidden></div>`;
}
trFillSelects();
if (S.pendingTranslate) {
$("#tr-input").value = S.pendingTranslate;
if (isTh(S.pendingTranslate)) {
TRS.mode = "from";
trFillSelects();
}
S.pendingTranslate = null;
trRun();
}
trHist();
};
function trFillSelects() {
const from = $("#tr-from");
const to = $("#tr-to");
const opts = (sel, auto) => (auto ? '<option value="auto">Detect language</option>' : "") + LANGS.map(l => `<option value="${l[0]}">${l[1]}</option>`).join("");
if (TRS.mode === "to") {
from.innerHTML = opts(from, true);
from.value = "auto";
from.disabled = false;
to.innerHTML = '<option value="th">Thai · ไทย</option>';
to.disabled = true;
$("#tr-input").dir = "auto";
} else {
from.innerHTML = '<option value="th">Thai · ไทย</option>';
from.disabled = true;
to.innerHTML = opts(to, false);
to.value = TRS.other;
to.disabled = false;
}
$$("#tr-mode button").forEach(b => b.classList.toggle("on", b.dataset.m === TRS.mode));
}
A["tr-mode"] = el => {
TRS.mode = el.dataset.m;
store.set("thai_hub_tr_mode", TRS.mode);
trFillSelects();
$("#tr-out").hidden = true;
};
A["tr-swap"] = () => {
const inp = $("#tr-input");
const last = TRS.last;
TRS.mode = TRS.mode === "to" ? "from" : "to";
store.set("thai_hub_tr_mode", TRS.mode);
trFillSelects();
if (last && last.out) inp.value = last.out;
$("#tr-out").hidden = true;
};
A["tr-clear"] = () => {
$("#tr-input").value = "";
$("#tr-out").hidden = true;
$("#tr-count").textContent = "0 / 3000";
};
A["tr-paste"] = async () => {
try {
$("#tr-input").value = await navigator.clipboard.readText();
} catch (e) {
toast("Paste with Ctrl/Cmd+V instead");
}
};
document.addEventListener("input", e => {
if (e.target.id === "tr-input") $("#tr-count").textContent = `${e.target.value.length} / 3000`;
});
document.addEventListener("change", e => {
if (e.target.id === "tr-to" && TRS.mode === "from") {
TRS.other = e.target.value;
store.set("thai_hub_tr_other", TRS.other);
}
});
document.addEventListener("keydown", e => {
if (e.target.id === "tr-input" && e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
e.preventDefault();
trRun();
}
});
A["tr-run"] = () => trRun();
async function trRun() {
const text = $("#tr-input").value.trim();
const out = $("#tr-out");
if (!text) return;
const id = ++TRS.run;
const from = TRS.mode === "to" ? $("#tr-from").value : "th";
const to = TRS.mode === "to" ? "th" : $("#tr-to").value;
out.hidden = false;
out.innerHTML = '<div class="card muted">Translating…</div>';
const chunks = splitForTranslate(text);
const res = await mapLimit(chunks, 3, c => translateFull(c, { from, to }));
if (id !== TRS.run) return;
const outText = res.map(r => r.text).filter(Boolean).join(" ");
if (!outText) {
out.innerHTML = `<div class="banner"><span class="grow">Translation is unavailable right now. Check your connection and try again.${TR.report ? `<br><span class="tiny">${esc(TR.report)}</span>` : ""}</span></div>`;
return;
}
const prov = Array.from(new Set(res.map(r => r.provider).filter(Boolean))).join(", ");
const det = res.find(r => r.detected);
TRS.last = { out: outText, text, from, to };
const thText = to === "th" ? outText : from === "th" ? text : "";
out.innerHTML = `<div class="card"><div class="row between mb"><span class="chip">${esc(from === "auto" && det ? "Detected: " + det.detected : from === "auto" ? "Auto" : from)} → ${esc(to)}</span><span class="tiny faint">via ${esc(prov)}</span></div>
${to === "th" ? `<div class="ruby-view">${rubyHTML(analyzeThai(outText))}</div>` : `<p style="font-size:1.1rem">${esc(outText)}</p>`}
<div class="row mt-s">${thText ? `<button class="btn sm" data-act="speak" data-t="${esc(thText)}">${ico("volume")}Listen</button><button class="btn sm" data-act="speak" data-t="${esc(thText)}" data-slow="1">Slow</button>` : ""}<button class="btn sm" data-act="copy" data-t="${esc(outText)}">${ico("copy")}Copy</button>${thText ? `<button class="btn sm" data-act="tr-analyze" data-t="${esc(thText)}">${ico("type")}Analyze</button>` : ""}</div></div>`;
TRS.hist = [{ text, out: outText, from, to, t: Date.now() }].concat(TRS.hist.filter(h => h.text !== text)).slice(0, 12);
store.set("thai_hub_tr_hist", TRS.hist);
trHist();
}
A["tr-analyze"] = el => {
S.pendingAnalyze = el.dataset.t;
go("/analyzer");
};
function trHist() {
const box = $("#tr-hist");
if (!box) return;
box.hidden = !TRS.hist.length;
box.innerHTML = TRS.hist.length ? `<div class="row between"><h3 class="sub" style="margin:0">Recent</h3><button class="btn ghost sm" data-act="tr-hist-clear">Clear</button></div>${TRS.hist.map((h, i) => `<button class="char-row" data-act="tr-hist-use" data-i="${i}"><span class="grow small">${esc(h.text.slice(0, 80))}<br><span class="muted">${esc(h.out.slice(0, 80))}</span></span></button>`).join("")}` : "";
}
A["tr-hist-clear"] = () => {
TRS.hist = [];
store.set("thai_hub_tr_hist", []);
trHist();
};
A["tr-hist-use"] = el => {
const h = TRS.hist[Number(el.dataset.i)];
$("#tr-input").value = h.text;
TRS.mode = h.to === "th" ? "to" : "from";
trFillSelects();
if (TRS.mode === "from") $("#tr-to").value = h.to;
trRun();
};

const SEN = { q: "", online: [] };
VIEW_ENTER.sentences = () => {
const root = $("#sentences-root");
if (!$("#sen-q")) {
root.innerHTML = `<div class="page-head"><div><span class="eyebrow">ประโยคตัวอย่าง</span><h1 class="title" tabindex="-1">Sentence search</h1><p class="lede">Find example sentences by Thai word, sound or English meaning. Results come from the built-in corpus; online Tatoeba sentences are added when available.</p></div></div>
<div class="card"><div class="row" style="flex-wrap:nowrap"><input class="input grow-input" id="sen-q" type="search" placeholder="e.g. ไป, gin khaao, eat…" autocomplete="off" aria-label="Search sentences"><button class="btn primary" data-act="sen-search">${ico("search")}Search</button></div></div><div id="sen-out" class="stack mt"></div>`;
}
if (S.pendingSearch) {
$("#sen-q").value = S.pendingSearch;
S.pendingSearch = null;
senSearch();
}
};
document.addEventListener("keydown", e => {
if (e.target.id === "sen-q" && e.key === "Enter") senSearch();
});
A["sen-search"] = () => senSearch();
async function senSearch() {
const q = $("#sen-q").value.trim();
const out = $("#sen-out");
if (!q) return;
const hits = S.corpus.filter(c => matchQ(c.th, TH.romanize(c.th), c.en, q)).slice(0, 60);
const render = extra => {
const all = hits.concat(extra);
out.innerHTML = all.length ? all.map(it => `<div class="card"><div class="row between" style="flex-wrap:nowrap;align-items:flex-start"><div class="zh han" style="font-size:1.15rem;font-weight:600;line-height:1.8">${isTh(q) ? hi(it.th, q) : esc(it.th)}</div><span class="acts"><button class="mini ${S.deck.has(it.th) ? "on" : ""}" data-act="save" data-key="${esc(it.th)}" aria-label="Save">${ico("star")}</button><button class="mini" data-act="speak" data-t="${esc(it.th)}" aria-label="Listen">${ico("volume")}</button></span></div><div class="small py">${romHTML(TH.romanize(it.th))}</div><div class="small muted">${esc(it.en)} <span class="chip">${esc(it.src)}</span></div></div>`).join("") : '<div class="empty">No sentences found.</div>';
};
render([]);
if (!isTh(q) && !/^[a-z]/i.test(q)) return;
const from = isTh(q) ? "tha" : "eng";
const to = isTh(q) ? "eng" : "tha";
const data = await fetchRemote(`https://tatoeba.org/en/api_v0/search?from=${from}&to=${to}&query=${encodeURIComponent(q)}&trans_filter=limit&orphans=no&unapproved=no&sort=relevance`);
if (!data || !Array.isArray(data.results) || $("#sen-q").value.trim() !== q) return;
const extra = [];
data.results.slice(0, 20).forEach(r => {
const tr = (r.translations || []).flat().find(t => t.lang === to);
if (!tr) return;
const thS = from === "tha" ? r.text : tr.text;
const enS = from === "tha" ? tr.text : r.text;
if (isTh(thS) && !hits.some(h => h.th === thS)) extra.push({ th: thS, en: enS, src: "Tatoeba" });
});
render(extra);
}

const WS = { source: "custom", level: 1, cls: "all", style: "classic", font: "sarabun", trace: 3, blank: 2, size: 34, rom: true, en: true, title: "Thai writing practice", text: "สวัสดี ขอบคุณ ยินดีที่ได้รู้จัก" };
VIEW_ENTER.worksheet = () => {
const root = $("#worksheet-root");
if (!$("#ws-sheet")) {
const sel = (id, opts, cur) => `<select class="select" style="width:100%" id="${id}">${opts.map(o => `<option value="${o[0]}" ${String(cur) === String(o[0]) ? "selected" : ""}>${o[1]}</option>`).join("")}</select>`;
root.innerHTML = `<div class="page-head no-print"><div><span class="eyebrow">ฝึกเขียน</span><h1 class="title" tabindex="-1">Practice worksheets</h1><p class="lede">Printable writing sheets with a model word, faint tracing copies and blank lines. Print or save as PDF.</p></div><button class="btn primary lg" data-act="ws-print">${ico("print")}Print / save PDF</button></div>
<div class="card no-print"><div class="grid g-4" style="gap:1rem">
<div><label class="lbl" for="ws-source">Source</label>${sel("ws-source", [["custom", "Custom text"], ["saved", "My saved words"], ["review", "My review words"], ["level", "Level words"], ["letters", "Consonants"], ["phrases", "Phrasebook"]], WS.source)}</div>
<div id="ws-level-wrap" hidden><label class="lbl" for="ws-level">Level</label>${sel("ws-level", [[1, "Level 1"], [2, "Level 2"], [3, "Level 3"], [4, "Level 4"]], WS.level)}</div>
<div id="ws-cls-wrap" hidden><label class="lbl" for="ws-cls">Class</label>${sel("ws-cls", [["all", "All classes"], ["mid", "Mid"], ["high", "High"], ["low", "Low"]], WS.cls)}</div>
<div><label class="lbl" for="ws-title">Title</label><input class="input" id="ws-title" value="${esc(WS.title)}"></div>
<div><label class="lbl" for="ws-style">Style</label>${sel("ws-style", [["classic", "Model + tracing + blanks"], ["sound", "Write the sound"], ["tone", "Tone-class practice"]], WS.style)}</div>
<div><label class="lbl" for="ws-font">Font</label><select class="select font-select" style="width:100%" id="ws-font"></select></div>
<div><label class="lbl" for="ws-trace">Tracing copies</label>${sel("ws-trace", [[0, "None"], [2, "2 faint"], [3, "3 faint"], [4, "4 faint"]], WS.trace)}</div>
<div><label class="lbl" for="ws-blank">Blank boxes</label>${sel("ws-blank", [[0, "None"], [1, "1"], [2, "2"], [3, "3"]], WS.blank)}</div>
<div><label class="lbl" for="ws-size">Size <span id="ws-size-val">${WS.size}</span>px</label><input class="range" id="ws-size" type="range" min="24" max="60" value="${WS.size}"></div>
<div class="row" style="align-self:end;gap:1rem"><label class="row small" style="gap:.4rem"><span class="switch"><input type="checkbox" id="ws-rom" ${WS.rom ? "checked" : ""}><span></span></span>Sound</label><label class="row small" style="gap:.4rem"><span class="switch"><input type="checkbox" id="ws-en" ${WS.en ? "checked" : ""}><span></span></span>Meaning</label></div></div>
<div class="mt" id="ws-text-wrap"><label class="lbl" for="ws-text">Words or sentences (one per line or separated by spaces)</label><input class="input han" id="ws-text" value="${esc(WS.text)}" style="font-size:1.1rem"></div></div>
<div class="sheet" id="ws-sheet"></div>`;
fillFontSelects();
}
$("#ws-font").value = WS.font;
renderSheet();
};
function wsItems() {
let list = [];
if (WS.source === "custom") {
const toks = analyzeThai(WS.text).filter(t => t.th && !t.rep);
const seen = new Set();
toks.forEach(t => {
if (!seen.has(t.text)) {
seen.add(t.text);
list.push({ th: t.text, rom: t.rom, en: t.entry ? shortMean(t.entry.en, 2) : "" });
}
});
const sents = WS.text.split(/\n/).map(x => x.trim()).filter(x => x.length > 14);
if (sents.length && !list.length) list = sents.map(s => ({ th: s, rom: TH.romanize(s), en: "" }));
} else if (WS.source === "saved") list = Array.from(S.deck.values()).filter(d => isTh(d.th)).map(d => ({ th: d.th, rom: d.rom, en: d.en }));
else if (WS.source === "review") list = Object.keys(S.srs).map(k => itemFromKey(k)).filter(Boolean).map(d => ({ th: d.th, rom: d.rom, en: d.en }));
else if (WS.source === "level") list = S.vocab.filter(v => v.lvl === Number(WS.level)).slice(0, 30).map(d => ({ th: d.th, rom: d.rom, en: d.en }));
else if (WS.source === "letters") list = LETTERS.filter(l => !l.obs && (WS.cls === "all" || l.cls === WS.cls)).map(l => ({ th: l.ch, rom: l.rom, en: `${l.cls} class · ${l.w} ${l.en}`, cls: l.cls }));
else list = S.phrases.slice(0, 20).map(d => ({ th: d.th, rom: d.rom, en: d.en }));
return list.slice(0, 40);
}
function renderSheet() {
const sheet = $("#ws-sheet");
const f = fontById(WS.font);
ensureFont(f.id);
sheet.style.setProperty("--wsf", f.stack);
sheet.style.setProperty("--wss", WS.size + "px");
$("#ws-level-wrap").hidden = WS.source !== "level";
$("#ws-cls-wrap").hidden = WS.source !== "letters";
$("#ws-text-wrap").hidden = WS.source !== "custom";
const items = wsItems();
const cell = (th, cls, extra = "") => `<span class="ws-cell ${cls}" style="min-width:calc(var(--wss) * ${Math.max(1.6, Array.from(th).length * 0.62)})">${extra}${cls === "blank" ? "" : esc(th)}</span>`;
const row = it => {
const meta = `<div class="ws-meta"><div class="ws-hz">${esc(it.th)}</div>${WS.rom ? `<div class="ws-py">${esc(romText(it.rom, "paiboon"))}</div>` : ""}${WS.en && it.en ? `<div class="ws-en">${esc(it.en)}</div>` : ""}</div>`;
if (WS.style === "sound") return `<div class="ws-row">${meta}<div class="ws-boxes">${cell(it.th, "model")}${cell("      ", "blank")}${cell("      ", "blank")}</div></div>`;
if (WS.style === "tone") {
const cl = it.cls || (LETTER_BY.get(Array.from(it.th)[0]) || {}).cls || "";
return `<div class="ws-row">${meta}<div class="ws-boxes">${cell(it.th, "model")}<span class="ws-q">Class: ____ &nbsp; Live/dead: ____ &nbsp; Tone: ____</span>${cl ? `<span class="tiny ws-key">(${cl})</span>` : ""}</div></div>`;
}
let boxes = cell(it.th, "model");
for (let i = 0; i < WS.trace; i++) boxes += cell(it.th, "trace");
for (let i = 0; i < WS.blank; i++) boxes += cell(it.th, "blank");
return `<div class="ws-row">${meta}<div class="ws-boxes">${boxes}</div></div>`;
};
sheet.innerHTML = `<div class="ws-head"><div><h2 style="font-size:1.4rem">${esc(WS.title)}</h2><div class="small">Name: ______________________ &nbsp; Date: ____________</div></div><div class="small">Thai Hub</div></div>${items.length ? items.map(row).join("") : '<p class="muted">Nothing to show. Add words or choose another source.</p>'}`;
}
A["ws-print"] = () => window.print();
document.addEventListener("input", e => {
const m = { "ws-title": "title", "ws-text": "text", "ws-size": "size" }[e.target.id];
if (m) {
WS[m] = m === "size" ? Number(e.target.value) : e.target.value;
if (m === "size") $("#ws-size-val").textContent = WS.size;
renderSheet();
}
});
document.addEventListener("change", e => {
const m = { "ws-source": "source", "ws-level": "level", "ws-cls": "cls", "ws-style": "style", "ws-font": "font", "ws-trace": "trace", "ws-blank": "blank" }[e.target.id];
if (m) {
WS[m] = ["trace", "blank", "level"].includes(m) ? Number(e.target.value) : e.target.value;
renderSheet();
}
if (e.target.id === "ws-rom" || e.target.id === "ws-en") {
WS[e.target.id.slice(3)] = e.target.checked;
renderSheet();
}
});

const FL = { sample: "สวัสดีครับ ยินดีที่ได้รู้จัก ภาษาไทยสนุกมาก", size: 28, group: "all", tab: "lab" };
const CONFUSE = ["คดตฅ", "ขชซ", "ถฐภ", "พผฟฝ", "บปษ", "มฆฌ", "วอฮ", "ธงฐ", "จฉฌ", "ยญล", "นณ", "ทฑฒ", "ศสษ", "ฎฏ", "หฬ", "อยย"];
VIEW_ENTER.fonts = () => {
const root = $("#fonts-root");
root.innerHTML = `<div class="page-head"><div><span class="eyebrow">แบบอักษร</span><h1 class="title" tabindex="-1">Font lab</h1><p class="lede">Thai fonts come as <b>looped</b> (traditional, with a small head loop on letters such as ก ค ม) and <b>loopless</b> (modern, no loops). Learn to read both.</p></div></div>
<div class="seg mb" role="tablist" aria-label="Font tools">${[["lab", "Compare fonts"], ["game", "Font compare game"], ["match", "Match the letter"]].map(t => `<button role="tab" class="${FL.tab === t[0] ? "on" : ""}" data-act="fl-tab" data-t="${t[0]}">${t[1]}</button>`).join("")}</div><div id="fl-body"></div>`;
renderFontTab();
};
A["fl-tab"] = el => {
FL.tab = el.dataset.t;
$$("#v-fonts [data-act='fl-tab']").forEach(x => x.classList.toggle("on", x === el));
renderFontTab();
};
function renderFontTab() {
const b = $("#fl-body");
if (FL.tab === "lab") flLab(b);
else if (FL.tab === "game") flGame(b);
else flMatch(b);
}
function flLab(b) {
FONTS.forEach(f => ensureFont(f.id));
const list = FONTS.filter(f => FL.group === "all" || f.g === FL.group);
b.innerHTML = `<div class="card mb"><label class="lbl" for="fl-sample">Sample text</label><input class="input han" id="fl-sample" value="${esc(FL.sample)}" style="font-size:1.1rem"><div class="row mt-s"><label class="small muted" for="fl-size">Size <span id="fl-size-val">${FL.size}</span>px</label><input class="range" id="fl-size" type="range" min="16" max="64" value="${FL.size}" style="max-width:240px"><div class="seg" role="group" aria-label="Style filter">${[["all", "All"], ["looped", "Looped"], ["loopless", "Loopless"], ["serif", "Serif"], ["hand", "Handwriting"], ["display", "Display"]].map(g => `<button class="${FL.group === g[0] ? "on" : ""}" data-act="fl-group" data-g="${g[0]}">${g[1]}</button>`).join("")}</div></div></div>
<div class="grid g-wide" id="fl-grid">${list.map(f => `<div class="card"><div class="row between"><b class="small">${esc(f.label)}</b><button class="btn sm ${S.settings.thFont === f.id ? "primary" : ""}" data-act="fl-use" data-f="${f.id}">${S.settings.thFont === f.id ? "In use" : "Use"}</button></div><div class="fl-sample han" style="font-family:${f.stack};font-size:${FL.size}px;line-height:1.7;margin-top:.4rem">${esc(FL.sample)}</div></div>`).join("")}</div>`;
}
document.addEventListener("input", e => {
if (e.target.id === "fl-sample" || e.target.id === "fl-size") {
if (e.target.id === "fl-sample") FL.sample = e.target.value;
else {
FL.size = Number(e.target.value);
$("#fl-size-val").textContent = FL.size;
}
$$("#fl-grid .fl-sample").forEach(el => {
el.textContent = FL.sample;
el.style.fontSize = FL.size + "px";
});
}
});
A["fl-group"] = el => {
FL.group = el.dataset.g;
flLab($("#fl-body"));
};
A["fl-use"] = el => {
S.settings.thFont = el.dataset.f;
persist.settings();
applySettings();
flLab($("#fl-body"));
toast(`Font: ${fontById(el.dataset.f).label}`);
};
const STYLE_LABEL = { looped: "Looped", loopless: "Loopless", serif: "Serif", hand: "Handwriting", display: "Display" };
async function flGame(b) {
FONTS.forEach(f => ensureFont(f.id));
const words = S.vocab.filter(v => v.lvl <= 2).slice(0, 200);
const gen = () => {
const f = pick(FONTS);
const w = pick(words);
const sets = ["looped", "loopless", "serif", "hand"];
const group = f.g === "display" ? "loopless" : f.g;
return { prompt: `<div class="gl-big" style="font-family:${f.stack};font-size:3.2rem">${esc(w.th)}</div><div class="hint">Which style is this font?</div>`, opts: sets.map(s => ({ html: `<b>${STYLE_LABEL[s]}</b>`, ok: s === group })), explain: `${esc(f.label)}. Looped fonts have small head loops on letters like ก ค ม ถ; loopless fonts replace them with plain strokes.` };
};
b.innerHTML = '<div id="fg"></div>';
if (document.fonts && document.fonts.ready) await Promise.race([document.fonts.ready, sleep(1500)]);
makeQuiz("fontgame", $("#fg"), gen, {}).next();
}
async function flMatch(b) {
FONTS.forEach(f => ensureFont(f.id));
const gen = () => {
const g = pick(CONFUSE.filter(x => x.length > 2));
const chars = Array.from(new Set(Array.from(g)));
const target = pick(chars);
const f = pick(FONTS.filter(x => x.g === "loopless" || x.g === "hand" || x.g === "display"));
const others = LETTERS.filter(l => !l.obs && !chars.includes(l.ch)).map(l => l.ch);
const opts = shuffle(chars.concat(shuffle(others).slice(0, Math.max(0, 4 - chars.length)))).slice(0, 4);
if (!opts.includes(target)) opts[0] = target;
return { prompt: `<div class="gl-big" style="font-family:${f.stack};font-size:4.4rem">${target}</div><div class="hint">${esc(f.label)} · pick the same letter in the standard looped font</div>`, thOpts: true, opts: shuffle(opts).map(o => ({ html: `<span style="font-family:'Sarabun','Noto Sans Thai Looped',sans-serif">${o}</span>`, ok: o === target })), explain: `${target} · ${(LETTER_BY.get(target) || {}).cls || ""} class, keyword ${(LETTER_BY.get(target) || {}).w || ""}.` };
};
b.innerHTML = '<div id="fm"></div>';
if (document.fonts && document.fonts.ready) await Promise.race([document.fonts.ready, sleep(1500)]);
makeQuiz("fontmatch", $("#fm"), gen, {}).next();
}
