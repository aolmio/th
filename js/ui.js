"use strict";
const A = {};
const LEVELS = {
1: { name: "Level 1", band: "Survival", cefr: "A1", desc: "Greetings, numbers, food, directions and the everyday words you need on day one." },
2: { name: "Level 2", band: "Everyday", cefr: "A2", desc: "Daily routines, shopping, travel, work and simple opinions." },
3: { name: "Level 3", band: "Independent", cefr: "B1", desc: "Longer conversations, feelings, news and abstract topics." },
4: { name: "Level 4", band: "Fluent", cefr: "B2+", desc: "Formal vocabulary, nuance, culture and professional language." }
};
const NAV_ITEMS = [
{ id: "home", label: "Home", icon: "home", group: "" },
{ id: "script", label: "Thai script", icon: "type", group: "Learn" },
{ id: "tones", label: "Tones", icon: "chart", group: "Learn" },
{ id: "phrases", label: "Phrasebook", icon: "chat", group: "Learn" },
{ id: "classifiers", label: "Classifiers", icon: "scale", group: "Learn" },
{ id: "analyzer", label: "Text analyzer", icon: "type", group: "Tools" },
{ id: "translate", label: "Translator", icon: "globe", group: "Tools" },
{ id: "sentences", label: "Sentence search", icon: "chat", group: "Tools" },
{ id: "worksheet", label: "Worksheets", icon: "print", group: "Tools" },
{ id: "fonts", label: "Font lab", icon: "pen", group: "Tools" },
{ id: "review", label: "Daily review", icon: "cards", group: "Library" },
{ id: "saved", label: "Saved words", icon: "star", group: "Library" },
{ id: "stats", label: "Progress", icon: "chart", group: "Library" },
{ id: "resources", label: "Courses & sources", icon: "link", group: "Guide" },
{ id: "facts", label: "Facts & tips", icon: "info", group: "Guide" },
{ id: "settings", label: "Settings", icon: "sliders", group: "Guide" }
];
const ROUTE_TITLES = { home: "Home", level: "Level", script: "Thai script", tones: "Tones", words: "Function words", analyzer: "Text analyzer", translate: "Translator", phrases: "Phrasebook", classifiers: "Classifiers", sentences: "Sentence search", worksheet: "Worksheets", fonts: "Font lab", saved: "Saved words", review: "Daily review", stats: "Progress", resources: "Courses & sources", facts: "Facts & tips", settings: "Settings" };
const VIEW_ENTER = {};
const PAL = { items: [], sel: 0 };

const levelTag = l => (l ? `<span class="chip lvl l-${l}">Level ${l}</span>` : '<span class="chip">Script</span>');
const thHTML = (th, cls = "") => `<span class="han ${cls}">${esc(th)}</span>`;
const romSpan = rom => `<span class="py">${romHTML(rom)}</span>`;
const shortMean = (s, n = 2) => String(s || "").split(";").slice(0, n).map(x => x.trim()).join("; ");
const toneName = t => TONE_NAME[t] || "";
const hi = (text, q) => {
if (!q) return esc(text);
const i = String(text).toLowerCase().indexOf(q.toLowerCase());
if (i < 0) return esc(text);
return esc(text.slice(0, i)) + `<span class="hl">${esc(text.slice(i, i + q.length))}</span>` + esc(text.slice(i + q.length));
};
const keyLabel = k => (k.length > 12 ? k.slice(0, 12) + "…" : k);

function deckEntryFor(key) {
const e = itemFromKey(key) || {};
const rom = e.rom || (isTh(key) && Array.from(key).length < 14 ? TH.romanize(key) : "");
return { th: key, key, rom, en: e.en || "", lvl: e.lvl || 0, note: "", added: Date.now() };
}
function toggleSave(key) {
if (!key) return;
if (S.deck.has(key)) {
const old = S.deck.get(key);
S.deck.delete(key);
persist.deck();
toast(`Removed “${keyLabel(key)}”`, { label: "Undo", run: () => {
S.deck.set(key, old);
persist.deck();
afterDeckChange();
} });
} else {
S.deck.set(key, deckEntryFor(key));
persist.deck();
toast(`Saved “${keyLabel(key)}”`);
}
afterDeckChange();
}
function afterDeckChange() {
refreshBadges();
$$('[data-act="save"]').forEach(b => b.classList.toggle("on", S.deck.has(b.dataset.key)));
if (S.route.name === "saved") VIEW_ENTER.saved();
}
function refreshBadges() {
const due = dueKeys().length;
const bn = $("#bn-due");
if (bn) {
bn.hidden = due === 0;
bn.textContent = due > 99 ? "99+" : String(due);
}
renderNav();
}

function renderNav() {
const nav = $("#nav");
if (!nav) return;
const cur = S.route.name;
const counts = { review: dueKeys().length, saved: S.deck.size };
const item = it => {
const on = cur === it.id ? " on" : "";
const c = counts[it.id];
const badge = c ? `<span class="nav-count${it.id === "review" ? " alert" : ""}">${c > 999 ? "999+" : c}</span>` : "";
return `<a class="nav-item${on}" href="#/${it.id}" ${on ? 'aria-current="page"' : ""}>${ico(it.icon)}<span class="grow">${it.label}</span>${badge}</a>`;
};
const fold = (key, label, count, body) => {
const st = S.misc.navFold || {};
const open = key in st ? st[key] : key === "levels";
return `<div class="nav-fold${open ? "" : " shut"}"><button class="nav-fold-h" data-act="nav-fold" data-f="${key}" aria-expanded="${open}"><span class="grow">${label}</span><span class="nf-count">${count}</span><svg class="ico nf-chev"><use href="#i-right"/></svg></button><div class="nav-fold-body">${body}</div></div>`;
};
let html = NAV_ITEMS.filter(i => i.id === "home").map(item).join("");
html += '<div class="nav-label">Learn</div>';
html += NAV_ITEMS.filter(i => i.group === "Learn" && i.id === "script").map(item).join("");
html += NAV_ITEMS.filter(i => i.group === "Learn" && i.id === "tones").map(item).join("");
let lv = "";
for (let l = 1; l <= 4; l++) {
const total = S.vocab.filter(v => v.lvl === l).length || 1;
const learned = S.vocab.filter(v => v.lvl === l && S.srs[v.key] && S.srs[v.key].reps >= 1).length;
const pct = Math.min(100, Math.round((learned / total) * 100));
const on = cur === "level" && S.level === l ? " on" : "";
lv += `<a class="nav-item nav-level${on}" href="#/level/${l}/${on ? S.tab : "vocab"}"><span class="lv-top"><span class="lv-dot l-${l}">${l}</span><span class="grow">${LEVELS[l].name}</span><span class="nav-count">${LEVELS[l].cefr}</span></span><span class="lv-bar"><i style="width:${pct}%"></i></span></a>`;
}
html += fold("levels", "Thai levels", "1–4", lv);
const wArg = S.route.args[0];
let wb = `<a class="nav-item${cur === "words" && !wArg ? " on" : ""}" href="#/words">${ico("book")}<span class="grow">Overview</span></a>`;
S.cats.forEach(c => (wb += `<a class="nav-item${cur === "words" && wArg === c.id ? " on" : ""}" href="#/words/${c.id}">${ico(c.icon)}<span class="grow">${esc(c.short)}</span></a>`));
html += fold("words", "Function words", S.cats.length, wb);
html += NAV_ITEMS.filter(i => i.group === "Learn" && i.id !== "script" && i.id !== "tones").map(item).join("");
["Tools", "Library", "Guide"].forEach(g => {
html += `<div class="nav-label">${g}</div>`;
html += NAV_ITEMS.filter(i => i.group === g).map(item).join("");
});
nav.innerHTML = html;
$$(".bn[data-nav]").forEach(b => b.classList.toggle("on", b.dataset.nav === cur));
}
A["nav-fold"] = el => {
const st = S.misc.navFold || (S.misc.navFold = {});
const cur = el.dataset.f in st ? st[el.dataset.f] : el.dataset.f === "levels";
st[el.dataset.f] = !cur;
persist.misc();
renderNav();
};

function parseHash() {
const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
return { name: parts[0] || "home", args: parts.slice(1) };
}
function go(path) {
if (location.hash === "#" + path) route();
else location.hash = path;
}
function route() {
let { name, args } = parseHash();
if (!ROUTE_TITLES[name]) name = "home";
const prev = S.route.name;
S.route = { name, args };
if ("speechSynthesis" in window) speechSynthesis.cancel();
$$(".view").forEach(v => (v.hidden = true));
const view = $(`#v-${name}`);
view.hidden = false;
view.style.animation = "none";
void view.offsetWidth;
view.style.animation = "";
let title = ROUTE_TITLES[name];
if (name === "words") {
const c = S.cats.find(x => x.id === args[0]);
title = c ? c.title : "Function words";
}
if (name === "level") {
const lvl = clamp(parseInt(args[0], 10) || 1, 1, 4);
const tab = ["vocab", "flash", "quiz", "grammar", "idioms"].includes(args[1]) ? args[1] : "vocab";
title = `${LEVELS[lvl].name} · ${tab}`;
S.level = lvl;
S.tab = tab;
renderNav();
openLevel(lvl, tab);
S.misc.last = `#/level/${lvl}/${tab}`;
persist.misc();
} else if (VIEW_ENTER[name]) VIEW_ENTER[name](args);
document.title = `${title} · Thai Hub`;
renderNav();
closeMenu();
if (prev !== name || name !== "level") window.scrollTo({ top: 0 });
const h1 = $(".title", view);
if (h1 && prev !== name) h1.focus({ preventScroll: true });
}
function closeMenu() {
$("#app").classList.remove("menu-open");
}
A["close-menu"] = closeMenu;
A["toggle-side"] = () => {
const app = $("#app");
if (window.innerWidth <= 640) app.classList.toggle("menu-open");
else app.classList.toggle("collapsed");
};
A["toggle-theme"] = () => {
const dark = document.documentElement.getAttribute("data-theme") === "dark";
S.settings.theme = dark ? "light" : "dark";
persist.settings();
applySettings();
};
A["open-more"] = () => {
const card = (href, icon, title, sub) => `<a class="tool-card" href="${href}" data-act="close-more"><span class="ti">${icon}</span><div><b>${title}</b>${sub ? `<span>${sub}</span>` : ""}</div></a>`;
const grp = t => `<div class="ms-group" style="grid-column:1/-1">${t}</div>`;
let html = "";
["", "Learn", "Tools", "Library", "Guide"].forEach(g => {
const items = NAV_ITEMS.filter(i => i.group === g);
if (g) html += grp(g);
html += items.map(i => card(`#/${i.id}`, ico(i.icon), i.label)).join("");
if (g === "Learn") {
html += grp("Thai levels") + [1, 2, 3, 4].map(l => card(`#/level/${l}/vocab`, l, LEVELS[l].name, LEVELS[l].cefr)).join("");
html += grp("Function words") + card("#/words", ico("book"), "Overview") + S.cats.map(c => card(`#/words/${c.id}`, ico(c.icon), esc(c.short), esc(c.zh))).join("");
}
});
$("#more-grid").innerHTML = html;
$("#dlg-more").showModal();
};
A["close-more"] = () => $("#dlg-more").close();
A["show-keys"] = () => $("#dlg-keys").showModal();
A.speak = el => speak(el.dataset.t, el.dataset.slow === "1");
A.save = el => toggleSave(el.dataset.key);
A.copy = el => copyText(el.dataset.t, "Copied");
A["open-word"] = el => openWord(el.dataset.key);
A["close-word"] = () => $("#dlg-word").close();
A.learn = el => {
const key = el.dataset.key;
if (S.srs[key]) {
toast("Already in your review");
return;
}
S.srs[key] = { k: key, iv: 0, ease: 2.5, reps: 0, lapses: 0, due: Date.now(), last: 0 };
persist.srs();
if (!S.deck.has(key)) {
S.deck.set(key, deckEntryFor(key));
persist.deck();
}
toast("Added to review");
refreshBadges();
if ($("#dlg-word").open) openWord(key);
};

function wordCardHTML(w) {
const saved = S.deck.has(w.key);
const st = srsStatus(w.key);
const badges = (w.pos ? `<span class="pos">${esc(w.pos)}</span>` : "") + (st === "due" ? '<span class="chip seal">Due</span>' : st === "mature" ? '<span class="chip jade">Mastered</span>' : "");
return `<div class="vcard ${st === "mature" ? "known" : ""}" tabindex="0" role="button" data-act="open-word" data-key="${esc(w.key)}" aria-label="${esc(w.th)} details">
<div><div class="hd"><span class="hanzi">${esc(w.th)}</span><span class="acts"><button class="mini ${saved ? "on" : ""}" data-act="save" data-key="${esc(w.key)}" aria-label="Save ${esc(w.th)}" title="Save">${ico("star")}</button><button class="mini" data-act="speak" data-t="${esc(w.th)}" aria-label="Listen" title="Listen">${ico("volume")}</button></span></div>
<div class="py py-hide">${romHTML(w.rom)}</div>
<div class="mean mn-hide" style="margin-top:.3rem">${w.en ? esc(w.en) : ""}</div></div>
<div class="badges">${badges}</div></div>`;
}

function sylBreakdown(th, rom) {
const toks = ROM.split(rom).filter(t => !/^[\s\-]+$/.test(t));
let pieces = null;
if (isTh(th) && !/\s/.test(th)) {
try {
const sy = TH.syllables(th);
if (sy.length === toks.length) pieces = sy.map(x => x.th);
} catch (e) {}
}
return toks.map((t, i) => {
const p = ROM.parse(t);
if (!p) return "";
return `<span class="sylab">${pieces ? `<span class="s-th">${esc(pieces[i])}</span>` : ""}<span class="s-r tone-${p.tone}">${esc(ROM.toPaiboon(t))}</span><span class="s-m">${toneName(p.tone)}</span></span>`;
}).join("");
}
function spellingRows(th) {
const rows = [];
Array.from(th).forEach(ch => {
const l = LETTER_BY.get(ch);
if (l) rows.push(`<span class="chip"><span class="class-dot ${l.cls}"></span><span class="han">${esc(ch)}</span> ${l.cls}</span>`);
});
return rows.join("");
}

function openWord(key) {
const found = itemFromKey(key);
const entry = found || { key, th: key, rom: "", en: "", lvl: 0, kind: "text" };
let rom = entry.rom;
let guess = false;
if (!rom && isTh(key)) {
rom = TH.romanize(key);
guess = true;
}
const th = entry.th || key;
const saved = S.deck.has(key);
const st = srsStatus(key);
const body = $("#word-body");
const others = rom ? Object.keys(SYSTEMS).filter(s => s !== S.settings.romSystem).map(s => `<span class="chip"><b>${SYSTEMS[s]}</b> ${esc(romText(rom, s))}</span>`).join("") : "";
const related = [];
if (entry.kind === "vocab" || entry.kind === "func") {
const first = Array.from(th)[0];
S.vocab.forEach(v => {
if (v.key !== key && (v.cat === entry.cat && v.lvl === entry.lvl || Array.from(v.th)[0] === first && Array.from(v.th).length > 1) && related.length < 14) related.push(v);
});
}
const extra = entry.kind === "cls" ? `<div class="d-sec"><h3 class="sub">Used with</h3><div class="row">${entry.nouns.map(n => `<button class="chip" data-act="open-word" data-key="${esc(n.th)}"><span class="han">${esc(n.th)}</span> ${esc(n.en)}</button>`).join("")}</div></div>` : "";
const letter = entry.kind === "letter" ? `<div class="d-sec"><h3 class="sub">Letter</h3><p class="small">Class: <b>${entry.cls}</b>. Open the Thai script page for sounds, final sounds and the tone rules for this class.</p></div>` : "";
const spell = isTh(th) && entry.kind !== "letter" ? spellingRows(th) : "";
body.innerHTML = `
<div class="d-top"><span class="chip">${entry.kind === "letter" ? "Letter" : levelTag(entry.lvl)}</span><button class="btn ghost icon" data-act="close-word" aria-label="Close">${ico("x")}</button></div>
<div class="d-hanzi">${esc(th)}</div>
${rom ? `<div style="font-size:1.4rem;margin:.2rem 0" class="py">${romHTML(rom)}</div>` : ""}
${guess ? '<p class="tiny faint">Romanization generated from spelling rules. Irregular words may differ.</p>' : ""}
${others ? `<div class="row mt-s">${others}</div>` : ""}
<div class="row mt">
<button class="btn" data-act="speak" data-t="${esc(th)}">${ico("volume")}Listen</button>
<button class="btn" data-act="speak" data-t="${esc(th)}" data-slow="1">${ico("volume")}Slow</button>
<button class="btn ${saved ? "on" : ""}" data-act="save" data-key="${esc(key)}">${ico("star")}${saved ? "Saved" : "Save"}</button>
<button class="btn" data-act="learn" data-key="${esc(key)}">${ico("cards")}${st === "new" ? "Add to review" : "In review"}</button>
</div>
<div class="d-sec"><h3 class="sub">Meaning</h3>
${entry.en ? `<p>${esc(entry.en)}</p>` : `<p class="muted small" id="gloss-slot">No definition in the built-in dictionary. <button class="btn sm" data-act="gloss" data-key="${esc(key)}">${ico("globe")}Translate</button></p>`}
<div class="row mt-s">${entry.pos ? `<span class="pos">${esc(entry.pos)}</span>` : ""}${entry.cat ? `<span class="chip">${esc(entry.cat)}</span>` : ""}${(entry.fn || []).map(f => `<a class="chip" href="#/words/${f}" data-act="close-word">${esc((S.cats.find(c => c.id === f) || {}).short || f)}</a>`).join("")}${entry.cls ? '<span class="chip">classifier</span>' : ""}${st !== "new" ? `<span class="chip ${st === "due" ? "seal" : "jade"}">${st}</span>` : ""}</div></div>
${rom && rom.indexOf("-") >= 0 || rom && isTh(th) ? `<div class="d-sec"><h3 class="sub">Syllables and tones</h3><div class="row">${sylBreakdown(th, rom)}</div></div>` : ""}
${spell ? `<div class="d-sec"><h3 class="sub">Consonant classes</h3><div class="row">${spell}</div></div>` : ""}
${letter}${extra}
${entry.ex ? `<div class="d-sec"><h3 class="sub">Example</h3><div class="example"><div class="row between" style="flex-wrap:nowrap;align-items:flex-start"><div class="zh">${esc(entry.ex)}</div><button class="mini" data-act="speak" data-t="${esc(entry.ex)}" aria-label="Listen">${ico("volume")}</button></div>${sentenceRubyHTML(entry.ex)}<div class="small muted">${esc(entry.exen || "")}</div></div></div>` : ""}
${entry.lit ? `<div class="d-sec"><h3 class="sub">Literal</h3><p>${esc(entry.lit)}</p></div>` : ""}
${entry.note ? `<div class="d-sec"><h3 class="sub">Note</h3><p class="small">${esc(entry.note)}</p></div>` : ""}
<div class="d-sec"><h3 class="sub">More sentences</h3><div id="d-examples"></div></div>
${related.length ? `<div class="d-sec"><h3 class="sub">Related words</h3><div class="row">${related.map(k => `<button class="chip" data-act="open-word" data-key="${esc(k.key)}"><span class="han">${esc(k.th)}</span></button>`).join("")}</div></div>` : ""}
<div class="row mt" style="margin-top:1.6rem"><a class="btn sm" href="#/analyzer" data-act="analyze-word" data-key="${esc(key)}">${ico("type")}Analyze</a><button class="btn sm" data-act="copy" data-t="${esc(th)}">${ico("copy")}Copy</button></div>`;
const dlg = $("#dlg-word");
if (!dlg.open) dlg.showModal();
body.parentElement.scrollTop = 0;
const list = S.corpus.filter(c => c.th.includes(key) && c.th !== entry.ex).slice(0, 4);
$("#d-examples").innerHTML = list.length ? list.map(it => `<div class="example"><div class="row between" style="flex-wrap:nowrap;align-items:flex-start"><div class="zh">${hi(it.th, key)}</div><button class="mini" data-act="speak" data-t="${esc(it.th)}" aria-label="Listen">${ico("volume")}</button></div><div class="small py">${romHTML(TH.romanize(it.th))}</div><div class="small muted">${esc(it.en)}</div></div>`).join("") : '<p class="small muted">No other sentences found.</p>';
S.drawerKey = key;
}
A.gloss = async el => {
const key = el.dataset.key;
const slot = $("#gloss-slot");
if (slot) slot.textContent = "Translating…";
const r = await translateFull(key, { from: "th", to: S.settings.glossLang || "en" });
if (S.drawerKey !== key || !$("#gloss-slot")) return;
$("#gloss-slot").innerHTML = r.text ? `${esc(r.text)} <span class="tiny faint">· ${esc(r.provider)}</span>` : "Translation unavailable right now.";
};
A["analyze-word"] = el => {
$("#dlg-word").close();
S.pendingAnalyze = el.dataset.key;
};

function paletteItems(q) {
const items = [];
const query = q.trim();
const low = query.toLowerCase();
NAV_ITEMS.filter(i => !low || i.label.toLowerCase().includes(low)).forEach(i => items.push({ group: "Go to", icon: i.icon, label: i.label, run: () => go(`/${i.id}`) }));
S.cats.forEach(c => {
if (!low || c.title.toLowerCase().includes(low) || c.short.toLowerCase().includes(low) || c.zh.includes(query) || "function words".includes(low)) items.push({ group: "Go to", icon: c.icon, label: `${c.title} · ${c.zh}`, run: () => go(`/words/${c.id}`) });
});
for (let l = 1; l <= 4; l++) if (!low || LEVELS[l].name.toLowerCase().includes(low) || LEVELS[l].band.toLowerCase().includes(low) || LEVELS[l].cefr.toLowerCase() === low) items.push({ group: "Go to", icon: "book", label: `${LEVELS[l].name} · ${LEVELS[l].band}`, run: () => go(`/level/${l}/vocab`) });
if (query) {
const th = isTh(query);
const plain = th ? "" : plainRom(query.replace(/[0-9]/g, "")) || low.replace(/[^a-z]/g, "");
const found = [];
for (const [k, d] of S.dict) {
if (!d.en && !d.rom) continue;
let hit = false;
if (th) hit = k.includes(query);
else {
if (low.length > 1 && d.en && d.en.toLowerCase().includes(low)) hit = true;
else if (plain.length > 1 && d.rom && plainRom(d.rom).startsWith(plain)) hit = true;
}
if (hit) {
found.push(k);
if (found.length > 400) break;
}
}
found.sort((a, b) => Array.from(a).length - Array.from(b).length);
found.slice(0, 8).forEach(k => {
const d = S.dict.get(k);
items.push({ group: "Words", hz: k, label: shortMean(d.en, 2) || "—", sub: d.rom, run: () => openWord(k) });
});
items.push({ group: "Actions", icon: "chat", label: `Find sentences for “${query}”`, run: () => {
S.pendingSearch = query;
go("/sentences");
} });
if (th) items.push({ group: "Actions", icon: "type", label: `Analyze “${query}”`, run: () => {
S.pendingAnalyze = query;
go("/analyzer");
} });
items.push({ group: "Actions", icon: "globe", label: `Translate “${query}”`, run: () => {
S.pendingTranslate = query;
go("/translate");
} });
}
return items;
}
function renderPalette() {
const items = paletteItems($("#pal-input").value);
PAL.items = items;
PAL.sel = clamp(PAL.sel, 0, Math.max(0, items.length - 1));
let html = "";
let last = "";
items.forEach((it, i) => {
if (it.group !== last) {
html += `<div class="pal-group">${it.group}</div>`;
last = it.group;
}
html += `<button class="pal-item ${i === PAL.sel ? "sel" : ""}" data-act="pal-run" data-i="${i}" role="option">${it.hz ? `<span class="hz han">${esc(it.hz)}</span>` : ico(it.icon)}<span class="grow">${esc(it.label)}</span>${it.sub ? `<span class="faint small py">${romHTML(it.sub)}</span>` : ""}</button>`;
});
$("#pal-list").innerHTML = html || '<div class="empty small">Nothing found</div>';
const sel = $(".pal-item.sel");
if (sel) sel.scrollIntoView({ block: "nearest" });
}
A["open-palette"] = () => {
const dlg = $("#dlg-palette");
if (!dlg.open) dlg.showModal();
$("#pal-input").value = "";
PAL.sel = 0;
renderPalette();
$("#pal-input").focus();
};
A["pal-run"] = el => {
const it = PAL.items[Number(el.dataset.i)];
$("#dlg-palette").close();
if (it) it.run();
};

function wotd() {
const pool = S.vocab.filter(v => v.lvl <= 2);
let h = 0;
for (const c of dayKey()) h = (h * 31 + c.charCodeAt(0)) >>> 0;
return pool.length ? pool[h % pool.length] : null;
}

function renderHome() {
const due = dueKeys().length;
const goal = S.settings.dailyGoal;
const done = todayCount();
const streak = calcStreak();
const hour = new Date().getHours();
const greet = hour < 12 ? "อรุณสวัสดิ์" : hour < 18 ? "สวัสดีตอนบ่าย" : "สวัสดีตอนเย็น";
const pct = Math.min(1, done / goal);
const circ = 2 * Math.PI * 36;
const last = S.misc.last;
const m = last && last.match(/level\/(\d)\/(\w+)/);
const wk = wotd();
$("#home-root").innerHTML = `
<div class="hero">
<div class="han" style="font-size:1.2rem;opacity:.9;margin-bottom:.3rem">${greet}</div>
<h1>${due ? `${due} ${due === 1 ? "word is" : "words are"} ready for review` : done >= goal ? "Daily goal complete. Nice work." : "Ready to learn some Thai?"}</h1>
<p>${Object.keys(S.srs).length ? "Short, regular sessions beat long cramming. Start with your review, then pick up where you left off." : "Start with the Thai script and tones, then pick a level. Star the words you want to keep and your review schedule builds itself."}</p>
<div class="row mt">
${due ? `<a class="btn primary lg" href="#/review">${ico("cards")}Start review</a>` : `<a class="btn primary lg" href="#/script">${ico("type")}Learn the script</a>`}
${m ? `<a class="btn lg" href="${esc(last)}">${ico("play")}Continue · ${LEVELS[m[1]].name} ${m[2]}</a>` : `<a class="btn lg" href="#/level/1/vocab">${ico("book")}Level 1 words</a>`}
<a class="btn lg" href="#/tones">${ico("chart")}Tone lab</a>
</div></div>
<div class="grid g-4 keep mb">
<div class="card stat"><span class="k">${ico("flame")}Streak</span><span class="v">${streak}</span><span class="s">${streak === 1 ? "day" : "days"} · best ${S.stats.best || 0}</span></div>
<div class="card stat" style="flex-direction:row;align-items:center;gap:.9rem"><div class="ring"><svg viewBox="0 0 84 84"><circle class="bg" cx="42" cy="42" r="36"/><circle class="fg" cx="42" cy="42" r="36" stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${(circ * (1 - pct)).toFixed(1)}"/></svg><div class="lab"><div>${done}<small>/ ${goal}</small></div></div></div><div><span class="k">Today</span><span class="s">${done >= goal ? "Goal reached" : `${goal - done} to go`}</span></div></div>
<div class="card stat"><span class="k">${ico("cards")}Due now</span><span class="v">${due}</span><span class="s">${Object.keys(S.srs).length} in review</span></div>
<div class="card stat"><span class="k">${ico("star")}Saved</span><span class="v">${S.deck.size}</span><span class="s"><a href="#/saved">Open library</a></span></div>
</div>
${wk ? `<div class="card mb"><div class="wotd"><div><span class="eyebrow">Word of the day</span><div class="big">${esc(wk.th)}</div></div><div class="grow"><div style="font-size:1.2rem" class="py">${romHTML(wk.rom)}</div><div class="muted">${esc(shortMean(wk.en, 3))}</div><div class="row mt-s">${levelTag(wk.lvl)}</div></div><div class="row"><button class="btn" data-act="speak" data-t="${esc(wk.th)}">${ico("volume")}Listen</button><button class="btn" data-act="open-word" data-key="${esc(wk.key)}">Details</button><button class="btn ${S.deck.has(wk.key) ? "on" : ""}" data-act="save" data-key="${esc(wk.key)}">${ico("star")}Save</button></div></div></div>` : ""}
<h2 class="sec">Levels</h2>
<div class="grid g-auto mb" style="grid-template-columns:repeat(auto-fill,minmax(210px,1fr))">
${[1, 2, 3, 4].map(l => {
const total = S.vocab.filter(v => v.lvl === l).length;
const learned = S.vocab.filter(v => v.lvl === l && S.srs[v.key] && S.srs[v.key].reps >= 1).length;
const p = Math.min(100, Math.round((learned / Math.max(1, total)) * 100));
return `<a class="level-card" href="#/level/${l}/vocab"><div class="row between"><span class="nm">${LEVELS[l].name}</span><span class="lv-dot l-${l}" style="width:auto;padding:0 .45rem">${LEVELS[l].cefr}</span></div><span class="small muted">${LEVELS[l].band} · ${total} words</span><div class="prog"><i style="width:${p}%"></i></div><span class="tiny faint">${learned} learned</span></a>`;
}).join("")}
</div>
<h2 class="sec">Tools</h2>
<div class="grid g-auto mb">
<a class="tool-card" href="#/script"><span class="ti">${ico("type")}</span><div><b>Thai script</b><span>44 consonants by class, vowels, tone marks and a practice quiz.</span></div></a>
<a class="tool-card" href="#/tones"><span class="ti">${ico("chart")}</span><div><b>Tone lab</b><span>Tone calculator, rules, drills and minimal pairs.</span></div></a>
<a class="tool-card" href="#/analyzer"><span class="ti">${ico("type")}</span><div><b>Text analyzer</b><span>Word splitting, romanization, tones and translation for any Thai text.</span></div></a>
<a class="tool-card" href="#/words"><span class="ti">${ico("book")}</span><div><b>Function words</b><span>Particles, questions, pronouns, prepositions and more.</span></div></a>
<a class="tool-card" href="#/phrases"><span class="ti">${ico("chat")}</span><div><b>Phrasebook</b><span>Ready-made phrases for ${new Set(S.phrases.map(p => p.sit)).size} situations.</span></div></a>
<a class="tool-card" href="#/classifiers"><span class="ti">${ico("scale")}</span><div><b>Classifiers</b><span>Reference and quiz for ${S.classifiers.length} classifiers.</span></div></a>
<a class="tool-card" href="#/fonts"><span class="ti">${ico("pen")}</span><div><b>Font lab</b><span>Compare looped and loopless fonts and play the font game.</span></div></a>
<a class="tool-card" href="#/resources"><span class="ti">${ico("link")}</span><div><b>Courses & sources</b><span>Free courses, dictionaries, apps and a study plan.</span></div></a>
</div>`;
}
VIEW_ENTER.home = renderHome;
