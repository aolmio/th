"use strict";
const ESC_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ESC_MAP[c]);
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const TH_RE = /[ก-๛]/;
const isTh = ch => TH_RE.test(ch);
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const pad2 = n => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const DAY = 86400000;
const MINUTE = 60000;
const shuffle = arr => {
const a = arr.slice();
for (let i = a.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[a[i], a[j]] = [a[j], a[i]];
}
return a;
};
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const debounce = (fn, ms) => {
let t;
return (...args) => {
clearTimeout(t);
t = setTimeout(() => fn(...args), ms);
};
};
const ico = (name, extra = "") => `<svg class="ico ${extra}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const sleep = ms => new Promise(r => setTimeout(r, ms));

const store = {
get(key, fallback) {
try {
const raw = localStorage.getItem(key);
return raw == null ? fallback : JSON.parse(raw);
} catch (e) {
return fallback;
}
},
set(key, value) {
try {
localStorage.setItem(key, JSON.stringify(value));
return true;
} catch (e) {
return false;
}
},
remove(key) {
try {
localStorage.removeItem(key);
} catch (e) {}
}
};

const K = { settings: "thai_hub_settings", deck: "thai_hub_deck", srs: "thai_hub_srs", stats: "thai_hub_stats", misc: "thai_hub_misc" };

const DEFAULT_SETTINGS = {
theme: "auto",
scale: 1,
thFont: "sarabun",
romSystem: "paiboon",
toneColors: true,
tonePattern: false,
hideRom: false,
hideMeaning: false,
speechRate: 0.8,
voiceURI: "",
autoSpeak: false,
dailyGoal: 20,
newPerSession: 10,
fcDirection: "th",
glossLang: "en",
reduceMotion: false
};

const S = {
settings: Object.assign({}, DEFAULT_SETTINGS, store.get(K.settings, {})),
deck: new Map(),
srs: store.get(K.srs, {}) || {},
stats: store.get(K.stats, { days: {}, best: 0 }) || { days: {}, best: 0 },
misc: store.get(K.misc, {}) || {},
dict: new Map(),
vocab: [],
func: [],
cats: [],
classifiers: [],
phrases: [],
grammar: [],
idioms: [],
facts: [],
corpus: [],
route: { name: "home", args: [] },
level: 1,
tab: "vocab",
noVoiceWarned: false
};
if (!S.stats.days) S.stats.days = {};

const persist = {
settings: () => store.set(K.settings, S.settings),
deck: () => store.set(K.deck, Array.from(S.deck.values())),
srs: () => store.set(K.srs, S.srs),
stats: () => store.set(K.stats, S.stats),
misc: () => store.set(K.misc, S.misc)
};

function loadDeck() {
const arr = store.get(K.deck, null);
if (Array.isArray(arr)) arr.forEach(it => it && it.th && S.deck.set(it.th, it));
}

const toasts = {
show(msg, action) {
const wrap = $("#toasts");
if (!wrap) return;
const el = document.createElement("div");
el.className = "toast";
el.setAttribute("role", "status");
el.append(document.createTextNode(msg));
if (action) {
const b = document.createElement("button");
b.type = "button";
b.textContent = action.label;
b.onclick = () => {
action.run();
el.remove();
};
el.append(b);
}
wrap.append(el);
setTimeout(() => {
el.style.opacity = "0";
el.style.transition = "opacity .25s";
setTimeout(() => el.remove(), 260);
}, action ? 5200 : 2400);
while (wrap.children.length > 3) wrap.firstChild.remove();
}
};
const toast = (msg, action) => toasts.show(msg, action);

function downloadFile(name, text, mime) {
const blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = name;
document.body.append(a);
a.click();
a.remove();
setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function copyText(text, label) {
try {
await navigator.clipboard.writeText(text);
} catch (e) {
const ta = document.createElement("textarea");
ta.value = text;
ta.style.position = "fixed";
ta.style.opacity = "0";
document.body.append(ta);
ta.select();
try {
document.execCommand("copy");
} catch (err) {}
ta.remove();
}
toast(`${label || "Text"} copied`);
}

function dialogAsk({ title, message, okLabel = "OK", input = null, danger = false, cancel = true }) {
return new Promise(resolve => {
const dlg = $("#dlg-confirm");
$("#confirm-title").textContent = title;
$("#confirm-msg").textContent = message || "";
const ta = $("#confirm-input");
ta.hidden = input === null;
ta.value = input === null ? "" : input;
const ok = $("#confirm-ok");
ok.textContent = okLabel;
ok.classList.toggle("danger", danger);
$("#confirm-cancel").hidden = !cancel;
const done = () => {
dlg.removeEventListener("close", done);
resolve(dlg.returnValue === "ok" ? (input === null ? true : ta.value) : null);
};
dlg.addEventListener("close", done);
dlg.returnValue = "cancel";
dlg.showModal();
if (input !== null) ta.focus();
});
}

const idb = {
db: null,
ready: null,
open() {
if (this.ready) return this.ready;
this.ready = new Promise(resolve => {
try {
const rq = indexedDB.open("thai_hub_cache", 1);
rq.onupgradeneeded = () => rq.result.createObjectStore("kv");
rq.onsuccess = () => {
this.db = rq.result;
resolve(true);
};
rq.onerror = () => resolve(false);
rq.onblocked = () => resolve(false);
} catch (e) {
resolve(false);
}
});
return this.ready;
},
async get(key) {
await this.open();
if (!this.db) return null;
return new Promise(resolve => {
try {
const rq = this.db.transaction("kv").objectStore("kv").get(key);
rq.onsuccess = () => resolve(rq.result || null);
rq.onerror = () => resolve(null);
} catch (e) {
resolve(null);
}
});
},
async set(key, value) {
await this.open();
if (!this.db) return;
try {
this.db.transaction("kv", "readwrite").objectStore("kv").put(value, key);
} catch (e) {}
},
async clear() {
await this.open();
if (!this.db) return;
return new Promise(resolve => {
try {
const tx = this.db.transaction("kv", "readwrite");
tx.objectStore("kv").clear();
tx.oncomplete = () => resolve();
tx.onerror = () => resolve();
} catch (e) {
resolve();
}
});
}
};

const NET = { inflight: new Map(), ok: 0, fail: 0 };
const CACHE_TTL = 120 * DAY;
async function netFetch(url, kind) {
if (typeof navigator !== "undefined" && navigator.onLine === false) return null;
const ctl = new AbortController();
const timer = setTimeout(() => ctl.abort(), 20000);
try {
const res = await fetch(url, { signal: ctl.signal });
if (!res.ok) return null;
return kind === "text" ? await res.text() : await res.json();
} catch (e) {
return null;
} finally {
clearTimeout(timer);
}
}
function fetchRemote(url, kind = "json", force = false) {
const id = `${kind}|${url}`;
if (NET.inflight.has(id)) return NET.inflight.get(id);
const p = (async () => {
const hit = force ? null : await idb.get(url);
if (hit && Date.now() - hit.t < CACHE_TTL) return hit.v;
const data = await netFetch(url, kind);
if (data != null) {
NET.ok++;
idb.set(url, { t: Date.now(), v: data });
return data;
}
NET.fail++;
return hit ? hit.v : null;
})();
NET.inflight.set(id, p);
p.finally(() => NET.inflight.delete(id));
return p;
}

const SYSTEMS = { paiboon: "Paiboon+", rtgs: "RTGS (official)", ipa: "IPA" };
const TONE_NAME = { 1: "Mid", 2: "Low", 3: "Falling", 4: "High", 5: "Rising" };
const TONE_MARK = { 1: "–", 2: "`", 3: "^", 4: "´", 5: "ˇ" };

function romText(rom, system) {
const sys = system || S.settings.romSystem;
if (!rom) return "";
if (sys === "rtgs") return ROM.toRtgs(rom);
if (sys === "ipa") return ROM.toIpa(rom);
return ROM.toPaiboon(rom);
}
function romHTML(rom, system) {
const sys = system || S.settings.romSystem;
if (!rom) return "";
return ROM.split(rom).map(tok => {
if (/^[\s\-]+$/.test(tok)) return /\s/.test(tok) ? " " : '<span class="dash">-</span>';
const p = ROM.parse(tok);
if (!p) return esc(tok);
const txt = sys === "rtgs" ? ROM.toRtgs(tok) : sys === "ipa" ? ROM.toIpa(tok) : ROM.toPaiboon(tok);
return `<span class="sy tone-${p.tone}">${esc(txt)}</span>`;
}).join("");
}
const plainRom = rom => ROM.toRtgs(rom).toLowerCase().replace(/[^a-z]/g, "");
const thaiOnly = s => String(s || "").replace(/[^ก-๛]/g, "");

const SP = (typeof Intl !== "undefined" && Intl.Segmenter) ? new Intl.Segmenter("th", { granularity: "word" }) : null;

function addEntry(e) {
const prev = S.dict.get(e.th);
if (prev) {
if (!prev.en && e.en) prev.en = e.en;
if (!prev.ex && e.ex) {
prev.ex = e.ex;
prev.exen = e.exen;
}
if (e.fn) prev.fn = (prev.fn || []).concat(e.fn);
if (e.kind === "cls") prev.cls = true;
if (!prev.lvl && e.lvl) prev.lvl = e.lvl;
return prev;
}
S.dict.set(e.th, e);
return e;
}

function parseLines(raw) {
return String(raw || "").split("\n").filter(l => l.trim() && l[0] !== "#");
}

function loadData() {
parseLines(RAW_VOCAB).forEach(ln => {
const [th, rom, pos, en, lvl, cat, ex, exen] = ln.split("|").map(x => x.trim());
const e = { th, key: th, rom, pos, en, lvl: Number(lvl), cat, ex, exen, kind: "vocab" };
if (!S.dict.has(th)) {
S.dict.set(th, e);
S.vocab.push(e);
}
});
let cat = null;
String(RAW_FUNC).split("\n").forEach(ln => {
if (!ln.trim()) return;
if (ln[0] === "@") {
const f = ln.slice(1).split("|");
cat = { id: f[0], short: f[1], zh: f[2], title: f[3], icon: f[4], desc: f[5], tips: (f[6] || "").split(";;"), groups: [], count: 0 };
S.cats.push(cat);
return;
}
if (ln[0] === "#") {
if (cat) cat.groups.push({ h: ln.slice(1), items: [] });
return;
}
if (!cat) return;
const [th, rom, en, lvl, ex, exen] = ln.split("|").map(x => x.trim());
if (!cat.groups.length) cat.groups.push({ h: "Words", items: [] });
const g = cat.groups[cat.groups.length - 1];
const e = { th, key: th, rom, pos: "fn", en, lvl: Number(lvl) || 1, cat: "func", ex, exen, kind: "func", fn: [cat.id] };
g.items.push(e);
cat.count++;
S.func.push(e);
const ex1 = S.dict.get(th);
if (ex1) {
ex1.fn = (ex1.fn || []).concat(cat.id);
if (!ex1.ex && ex) {
ex1.ex = ex;
ex1.exen = exen;
}
} else S.dict.set(th, e);
});
parseLines(RAW_CLS).forEach(ln => {
const [th, rom, use, nouns] = ln.split("|").map(x => x.trim());
const list = nouns.split(";").map(n => {
const p = n.split(":");
return { th: p[0].trim(), rom: (p[1] || "").trim(), en: (p[2] || "").trim() };
});
const e = { th, key: th, rom, pos: "cls", en: `classifier: ${use}`, use, nouns: list, lvl: 2, cat: "func", kind: "cls" };
S.classifiers.push(e);
if (!S.dict.has(th)) S.dict.set(th, e);
else S.dict.get(th).cls = true;
list.forEach(n => {
if (!S.dict.has(n.th) && n.rom) S.dict.set(n.th, { th: n.th, key: n.th, rom: n.rom, pos: "n", en: n.en, lvl: 2, cat: "basic", kind: "vocab" });
});
});
parseLines(RAW_PHRASES).forEach(ln => {
const [th, rom, en, sit, note] = ln.split("|").map(x => x.trim());
S.phrases.push({ th, key: th, rom, en, sit, note, kind: "phrase", lvl: 2 });
});
parseLines(RAW_GRAMMAR).forEach(ln => {
const [lvl, title, pattern, expl, exs] = ln.split("|").map(x => x.trim());
S.grammar.push({ lvl: Number(lvl), title, pattern, expl, ex: exs.split(";;").map(e => {
const p = e.split("=");
return { th: p[0].trim(), rom: (p[1] || "").trim(), en: (p[2] || "").trim() };
}) });
});
parseLines(RAW_IDIOMS).forEach(ln => {
const [th, rom, lit, mean, lvl] = ln.split("|").map(x => x.trim());
S.idioms.push({ th, key: th, rom, lit, en: mean, lvl: Number(lvl) || 3, kind: "idiom" });
});
parseLines(RAW_FACTS).forEach(ln => {
const [title, text, tag] = ln.split("|").map(x => x.trim());
S.facts.push({ title, text, tag });
});
LETTERS.forEach(l => {
S.dict.set(l.ch, { th: l.ch, key: l.ch, rom: l.rom, pos: "letter", en: l.en, lvl: 0, cat: "script", kind: "letter", cls: l.cls });
});
buildCorpus();
}

function buildCorpus() {
S.corpus = [];
const seen = new Set();
const add = (th, en, src) => {
if (!th || !en || seen.has(th)) return;
seen.add(th);
S.corpus.push({ th, en, src });
};
S.phrases.forEach(p => add(p.th, p.en, "Phrasebook"));
S.vocab.forEach(v => add(v.ex, v.exen, `Level ${v.lvl}`));
S.func.forEach(v => add(v.ex, v.exen, "Function words"));
S.grammar.forEach(g => g.ex.forEach(x => add(x.th, x.en, "Grammar")));
}

function getEntry(key) {
return S.dict.get(key) || null;
}

function splitKnown(seg) {
const chars = Array.from(seg);
const n = chars.length;
const best = new Array(n + 1).fill(null);
best[0] = { cost: 0, prev: -1, known: false };
for (let i = 0; i < n; i++) {
if (!best[i]) continue;
for (let j = i + 1; j <= Math.min(n, i + 14); j++) {
const w = chars.slice(i, j).join("");
const known = S.dict.has(w) && j - i >= 1;
const cost = best[i].cost + (known ? 1 : (j - i) * 4 + 2);
if (known || j === i + 1) {
if (!best[j] || cost < best[j].cost) best[j] = { cost, prev: i, known };
}
}
}
const out = [];
let k = n;
while (k > 0) {
const b = best[k];
out.unshift({ text: chars.slice(b.prev, k).join(""), known: b.known });
k = b.prev;
}
const merged = [];
out.forEach(p => {
const last = merged[merged.length - 1];
if (!p.known && last && !last.known) last.text += p.text;
else merged.push({ text: p.text, known: p.known });
});
return merged;
}

function wordRom(th) {
const e = S.dict.get(th);
if (e && e.rom) return { rom: e.rom, exact: true, entry: e };
const eng = TH.romanize(th);
return { rom: eng, exact: false, entry: e || null };
}

function analyzeThai(text) {
const tokens = [];
const src = String(text || "");
let segs;
if (SP) segs = Array.from(SP.segment(src)).map(s => ({ text: s.segment, word: s.isWordLike }));
else segs = src.split(/(\s+|[^ก-๛A-Za-z0-9]+)/).filter(Boolean).map(t => ({ text: t, word: /[ก-๛A-Za-z0-9]/.test(t) }));
segs.forEach(sg => {
if (!sg.word || !isTh(sg.text)) {
tokens.push({ text: sg.text, th: false });
return;
}
const parts = [];
let cur = "";
Array.from(sg.text).forEach(ch => {
if (isTh(ch) && ch !== "ๆ") cur += ch;
else {
if (cur) parts.push({ t: cur });
cur = "";
parts.push({ t: ch, rep: ch === "ๆ" });
}
});
if (cur) parts.push({ t: cur });
parts.forEach(pt => {
if (pt.rep) {
const prev = tokens[tokens.length - 1];
if (prev && prev.th) tokens.push(Object.assign({}, prev, { text: "ๆ", rep: true }));
return;
}
if (!isTh(pt.t)) {
tokens.push({ text: pt.t, th: false });
return;
}
if (S.dict.has(pt.t)) {
const r = wordRom(pt.t);
tokens.push({ text: pt.t, th: true, rom: r.rom, exact: true, entry: r.entry });
return;
}
const pieces = splitKnown(pt.t);
pieces.forEach(pc => {
const r = wordRom(pc.text);
tokens.push({ text: pc.text, th: true, rom: r.rom, exact: r.exact, entry: r.entry });
});
});
});
return tokens;
}

function tokensRom(tokens) {
const words = tokens.filter(t => t.th).map(t => t.rom);
return words.join(" ");
}

function rubyHTML(tokens, opts = {}) {
return tokens.map(t => {
if (t.text === "\n") return "<br>";
if (!t.th) return esc(t.text);
if (t.rep) return `<ruby class="rw rep">ๆ<rt>${romHTML(t.rom)}</rt></ruby>`;
const act = opts.noClick ? "" : ` data-act="open-word" data-key="${esc(t.text)}"`;
return `<ruby class="rw${t.exact ? "" : " guess"}"${act}>${esc(t.text)}<rt>${romHTML(t.rom)}</rt></ruby>`;
}).join("");
}

function sentenceRubyHTML(th) {
return `<div class="ruby-view">${rubyHTML(analyzeThai(th))}</div>`;
}

const TR = { pref: store.get("thai_hub_tr_pref", ""), cool: {}, fail: new Map(), src: new Map(), report: "", edge: null, pending: new Map(), mem: new Map() };
const TR_TTL = 365 * DAY;

async function trFetch(url, init, ms = 7000) {
const ctl = new AbortController();
const timer = setTimeout(() => ctl.abort(), ms);
try {
const res = await fetch(url, Object.assign({ signal: ctl.signal, credentials: "omit", referrerPolicy: "no-referrer" }, init || {}));
if (!res.ok) throw new Error(`HTTP ${res.status}`);
return await res.json();
} catch (e) {
throw new Error(e && e.name === "AbortError" ? "timeout" : e && e.message ? e.message : "network error");
} finally {
clearTimeout(timer);
}
}

function trLang(id, lang) {
if (id === "mymemory") return lang === "auto" ? "Autodetect" : lang;
if (id === "lingva") return lang === "zh-CN" ? "zh" : lang === "zh-TW" ? "zh_HANT" : lang;
if (id === "edge") return lang === "zh-CN" ? "zh-Hans" : lang === "zh-TW" ? "zh-Hant" : lang === "tl" ? "fil" : lang;
if (id === "libre") return lang === "zh-CN" ? "zh" : lang;
return lang;
}

const trGoogle = (id, base) => async (text, from, to) => {
const d = await trFetch(`${base}/translate_a/single?client=gtx&sl=${encodeURIComponent(trLang(id, from))}&tl=${encodeURIComponent(trLang(id, to))}&dt=t&q=${encodeURIComponent(text)}`);
return { text: d && Array.isArray(d[0]) ? d[0].map(x => (x && x[0]) || "").join("") : "", detected: d && typeof d[2] === "string" ? d[2] : "" };
};

const TR_PROVIDERS = [
{ id: "google", name: "Google Translate", run: trGoogle("google", "https://translate.googleapis.com") },
{ id: "google-web", name: "Google Translate (web)", run: trGoogle("google-web", "https://translate.google.com") },
{ id: "google-dict", name: "Google Translate (dictionary)", run: async (text, from, to) => {
const d = await trFetch(`https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=${encodeURIComponent(from)}&tl=${encodeURIComponent(to)}&q=${encodeURIComponent(text)}`);
if (d && Array.isArray(d.sentences)) return { text: d.sentences.map(x => x.trans || "").join(""), detected: d.src || "" };
if (Array.isArray(d)) {
if (typeof d[0] === "string") return { text: d[0], detected: "" };
if (Array.isArray(d[0]) && typeof d[0][0] === "string") return { text: d[0][0], detected: typeof d[0][1] === "string" ? d[0][1] : "" };
}
return { text: "", detected: "" };
} },
{ id: "mymemory", name: "MyMemory", run: async (text, from, to) => {
const d = await trFetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(trLang("mymemory", from) + "|" + trLang("mymemory", to))}`);
if (!d || Number(d.responseStatus) !== 200 || !d.responseData) return { text: "", detected: "" };
const box = document.createElement("textarea");
box.innerHTML = String(d.responseData.translatedText || "");
return { text: box.value, detected: "" };
} },
{ id: "lingva", name: "Lingva Translate", run: async (text, from, to) => {
const bases = ["https://lingva.ml", "https://lingva.thedaviddelta.com", "https://lingva.lunar.icu"];
let last = null;
for (const b of bases) {
try {
const d = await trFetch(`${b}/api/v1/${encodeURIComponent(trLang("lingva", from))}/${encodeURIComponent(trLang("lingva", to))}/${encodeURIComponent(text)}`, null, 6000);
if (d && d.translation) return { text: String(d.translation), detected: d.info && d.info.detectedSource ? String(d.info.detectedSource) : "" };
} catch (e) {
last = e;
}
}
throw last || new Error("no result");
} },
{ id: "edge", name: "Microsoft Translator", run: async (text, from, to) => {
if (!TR.edge || TR.edge.exp < Date.now()) {
const res = await fetch("https://edge.microsoft.com/translate/auth", { credentials: "omit", referrerPolicy: "no-referrer" });
if (!res.ok) throw new Error(`HTTP ${res.status}`);
TR.edge = { tok: (await res.text()).trim(), exp: Date.now() + 8 * 60000 };
}
const f = from === "auto" ? "" : `from=${encodeURIComponent(trLang("edge", from))}&`;
const d = await trFetch(`https://api-edge.cognitive.microsofttranslator.com/translate?${f}to=${encodeURIComponent(trLang("edge", to))}&api-version=3.0`, {
method: "POST",
headers: { "Content-Type": "application/json", Authorization: `Bearer ${TR.edge.tok}` },
body: JSON.stringify([{ Text: text }])
});
const first = d && d[0];
return { text: first && first.translations && first.translations[0] ? first.translations[0].text : "", detected: first && first.detectedLanguage ? first.detectedLanguage.language : "" };
} },
{ id: "libre", name: "LibreTranslate", run: async (text, from, to) => {
const bases = ["https://translate.argosopentech.com", "https://libretranslate.de", "https://translate.terraprint.co"];
const src = trLang("libre", from);
const tgt = trLang("libre", to);
let last = null;
for (const b of bases) {
try {
const d = await trFetch(`${b}/translate`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ q: text, source: src, target: tgt, format: "text" }) }, 6000);
if (d && d.translatedText) return { text: String(d.translatedText), detected: d.detectedLanguage && d.detectedLanguage.language ? d.detectedLanguage.language : "" };
} catch (e) {
last = e;
}
}
throw last || new Error("no result");
} }
];

function trValid(input, out, to) {
const t = String(out || "").trim();
if (!t || t === input) return false;
if (/MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID|PLEASE SELECT|NO QUERY SPECIFIED/i.test(t)) return false;
const chars = Array.from(t);
const th = chars.filter(isTh).length;
if (to === "th") return th / chars.length > 0.3 || th >= 1;
return th / chars.length < 0.5;
}

function trOrder() {
const now = Date.now();
const list = TR_PROVIDERS.slice();
list.sort((a, b) => (a.id === TR.pref ? -1 : 0) - (b.id === TR.pref ? -1 : 0));
const ready = list.filter(p => !(TR.cool[p.id] > now));
return ready.length ? ready : list;
}

async function translateFull(text, opts = {}) {
const key = String(text || "").trim();
const from = opts.from || "th";
const to = opts.to || "en";
if (!key) return { text: "", provider: "", detected: "" };
if (from === to) return { text: key, provider: "", detected: from };
const ck = `${from}>${to}|${key}`;
if (TR.mem.has(ck)) return TR.mem.get(ck);
if (opts.force) TR.fail.delete(ck);
const failedAt = TR.fail.get(ck);
if (failedAt && Date.now() - failedAt < 30000) return { text: "", provider: "", detected: "" };
if (TR.pending.has(ck)) return TR.pending.get(ck);
const p = (async () => {
const hit = await idb.get(`tr|${ck}`);
if (hit && hit.v && Date.now() - hit.t < TR_TTL) {
const r = { text: hit.v, provider: hit.s || "saved copy", detected: hit.d || "" };
TR.mem.set(ck, r);
TR.src.set(ck, r.provider);
return r;
}
const errors = [];
for (const prov of trOrder()) {
try {
const out = await prov.run(key, from, to);
if (trValid(key, out.text, to)) {
const r = { text: String(out.text).trim(), provider: prov.name, detected: out.detected || "" };
TR.mem.set(ck, r);
TR.src.set(ck, prov.name);
TR.pref = prov.id;
store.set("thai_hub_tr_pref", prov.id);
delete TR.cool[prov.id];
idb.set(`tr|${ck}`, { t: Date.now(), v: r.text, s: prov.name, d: r.detected });
return r;
}
errors.push(`${prov.name}: empty result`);
TR.cool[prov.id] = Date.now() + 20000;
} catch (e) {
errors.push(`${prov.name}: ${e.message}`);
TR.cool[prov.id] = Date.now() + 60000;
}
}
TR.report = errors.slice(0, 6).join("; ");
TR.fail.set(ck, Date.now());
return { text: "", provider: "", detected: "" };
})();
TR.pending.set(ck, p);
p.finally(() => TR.pending.delete(ck));
return p;
}
async function translateText(text, opts = {}) {
return (await translateFull(text, opts)).text;
}

function splitForTranslate(text) {
const src = String(text || "").replace(/\r/g, "").trim();
if (!src) return [];
const enc = new TextEncoder();
const pieces = src.split(/(?<=[.!?;।])\s+|\n+/u).map(x => x.trim()).filter(Boolean);
const chunks = [];
let cur = "";
const fits = s => Array.from(s).length <= 200 && enc.encode(s).length <= 450;
const push = piece => {
if (fits(piece)) {
if (cur && fits(cur + " " + piece)) cur += " " + piece;
else {
if (cur) chunks.push(cur);
cur = piece;
}
return;
}
if (cur) {
chunks.push(cur);
cur = "";
}
let buf = "";
for (const ch of Array.from(piece)) {
if (!fits(buf + ch)) {
chunks.push(buf);
buf = "";
}
buf += ch;
}
cur = buf;
};
pieces.forEach(push);
if (cur) chunks.push(cur);
return chunks;
}

async function mapLimit(items, limit, fn) {
const results = new Array(items.length);
let next = 0;
const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
while (next < items.length) {
const idx = next++;
results[idx] = await fn(items[idx], idx);
}
});
await Promise.all(workers);
return results;
}

function srsNext(rec, rating) {
let iv = rec ? rec.iv : 0;
let ease = rec ? rec.ease : 2.5;
let reps = rec ? rec.reps : 0;
let lapses = rec ? rec.lapses : 0;
let due;
if (rating === 0) {
reps = 0;
lapses++;
ease = Math.max(1.3, ease - 0.2);
iv = 0;
due = Date.now() + 10 * MINUTE;
} else {
if (rating === 1) {
iv = reps === 0 ? 1 : Math.max(1, Math.round(iv * 1.2));
ease = Math.max(1.3, ease - 0.15);
} else if (rating === 2) {
iv = reps === 0 ? 1 : reps === 1 ? 3 : Math.max(1, Math.round(iv * ease));
} else {
iv = reps === 0 ? 3 : Math.max(4, Math.round(iv * ease * 1.3));
ease += 0.15;
}
reps++;
due = Date.now() + iv * DAY;
}
return { iv, ease, reps, lapses, due };
}
function intervalLabel(rec, rating) {
if (rating === 0) return "10 min";
const iv = srsNext(rec, rating).iv;
if (iv < 30) return `${iv} d`;
if (iv < 365) return `${Math.round(iv / 30)} mo`;
return `${(iv / 365).toFixed(1)} y`;
}
function srsRate(item, rating, silent) {
const key = item.key;
const rec = S.srs[key] || null;
const nx = srsNext(rec, rating);
S.srs[key] = Object.assign({}, rec || {}, { k: key, iv: nx.iv, ease: nx.ease, reps: nx.reps, lapses: nx.lapses, due: nx.due, last: Date.now() });
persist.srs();
if (!silent) trackActivity("fc", rating >= 2);
refreshBadges();
}
function srsStatus(key) {
const rec = S.srs[key];
if (!rec) return "new";
if (rec.due <= Date.now()) return "due";
if (rec.iv >= 21) return "mature";
return "learning";
}
function dueKeys() {
const now = Date.now();
return Object.keys(S.srs).filter(k => S.srs[k].due <= now && S.dict.has(k) || S.srs[k].due <= now && S.phrases.some(p => p.key === k)).sort((a, b) => S.srs[a].due - S.srs[b].due);
}
function itemFromKey(key) {
return S.dict.get(key) || S.phrases.find(p => p.key === key) || S.idioms.find(p => p.key === key) || null;
}

function trackActivity(kind, ok) {
const k = dayKey();
const d = S.stats.days[k] || (S.stats.days[k] = { n: 0, ok: 0, fc: 0, rv: 0, qz: 0 });
d.n++;
if (ok) d.ok++;
d[kind] = (d[kind] || 0) + 1;
const s = calcStreak();
if (s > (S.stats.best || 0)) S.stats.best = s;
persist.stats();
}
function calcStreak() {
const d = new Date();
if (!(S.stats.days[dayKey(d)] && S.stats.days[dayKey(d)].n > 0)) d.setDate(d.getDate() - 1);
let n = 0;
for (;;) {
const e = S.stats.days[dayKey(d)];
if (e && e.n > 0) {
n++;
d.setDate(d.getDate() - 1);
} else break;
}
return n;
}
function todayCount() {
const e = S.stats.days[dayKey()];
return e ? e.n : 0;
}

let VOICES = [];
const TTS = { unlocked: false };
function normLang(l) {
return String(l || "").replace("_", "-");
}
function loadVoices() {
if (!("speechSynthesis" in window)) return 0;
const all = speechSynthesis.getVoices() || [];
VOICES = all.filter(v => /^th/i.test(normLang(v.lang)) || /thai|ไทย/i.test(v.name));
VOICES.sort((a, b) => (/^th-TH/i.test(normLang(b.lang)) ? 1 : 0) - (/^th-TH/i.test(normLang(a.lang)) ? 1 : 0));
const sel = $("#voice-select");
if (sel) {
sel.innerHTML = VOICES.length ? VOICES.map(v => `<option value="${esc(v.voiceURI)}">${esc(v.name)} (${esc(normLang(v.lang))})</option>`).join("") : '<option value="">Default system voice</option>';
sel.value = VOICES.some(v => v.voiceURI === S.settings.voiceURI) ? S.settings.voiceURI : VOICES[0] ? VOICES[0].voiceURI : "";
}
return VOICES.length;
}
function retryVoices() {
let n = 0;
const t = setInterval(() => {
if (loadVoices() || ++n > 16) clearInterval(t);
}, 400);
}
function unlockSpeech() {
if (TTS.unlocked || !("speechSynthesis" in window)) return;
TTS.unlocked = true;
try {
const u = new SpeechSynthesisUtterance(" ");
u.volume = 0;
u.lang = "th-TH";
speechSynthesis.speak(u);
} catch (e) {}
loadVoices();
}
function speak(text, slow) {
if (!("speechSynthesis" in window) || !text) {
toast("Speech is not supported in this browser");
return;
}
const synth = speechSynthesis;
if (!VOICES.length) loadVoices();
const raw = String(text).replace(/…/g, " ").trim();
const v = VOICES.find(x => x.voiceURI === S.settings.voiceURI) || VOICES.find(x => /^th-TH/i.test(normLang(x.lang))) || VOICES[0];
if (!v && !S.noVoiceWarned && (synth.getVoices() || []).length > 0) {
S.noVoiceWarned = true;
toast("No Thai voice found on this device. Add one in your system speech settings.");
}
const rate = slow ? Math.min(0.55, S.settings.speechRate) : S.settings.speechRate;
const run = () => {
const u = new SpeechSynthesisUtterance(raw);
u.lang = v ? normLang(v.lang) : "th-TH";
if (v) u.voice = v;
u.rate = rate;
u.onerror = ev => {
if (ev && ev.error && ev.error !== "canceled" && ev.error !== "interrupted") toast(`Speech failed (${ev.error}). On iPhone, check the silent switch and volume.`);
};
synth.speak(u);
try {
if (synth.paused) synth.resume();
} catch (e) {}
};
if (synth.speaking || synth.pending) {
synth.cancel();
setTimeout(run, 90);
} else run();
}

const FONTS = [
{ id: "sarabun", label: "Sarabun (looped, standard)", g: "looped", stack: '"Sarabun", "Thonburi", "Leelawadee UI", "Tahoma", sans-serif', gf: "Sarabun:wght@400;500;700" },
{ id: "notolooped", label: "Noto Sans Thai Looped (looped)", g: "looped", stack: '"Noto Sans Thai Looped", "Sarabun", sans-serif', gf: "Noto+Sans+Thai+Looped:wght@400;500;700" },
{ id: "notosans", label: "Noto Sans Thai (loopless, modern)", g: "loopless", stack: '"Noto Sans Thai", "Thonburi", "Leelawadee UI", sans-serif', gf: "Noto+Sans+Thai:wght@400;500;700" },
{ id: "prompt", label: "Prompt (loopless, geometric)", g: "loopless", stack: '"Prompt", "Noto Sans Thai", sans-serif', gf: "Prompt:wght@400;500;700" },
{ id: "kanit", label: "Kanit (loopless, rounded)", g: "loopless", stack: '"Kanit", "Noto Sans Thai", sans-serif', gf: "Kanit:wght@400;500;700" },
{ id: "mitr", label: "Mitr (loopless, bold)", g: "loopless", stack: '"Mitr", "Noto Sans Thai", sans-serif', gf: "Mitr:wght@400;500;700" },
{ id: "bai", label: "Bai Jamjuree (loopless)", g: "loopless", stack: '"Bai Jamjuree", "Noto Sans Thai", sans-serif', gf: "Bai+Jamjuree:wght@400;500;700" },
{ id: "chakra", label: "Chakra Petch (loopless, techno)", g: "loopless", stack: '"Chakra Petch", "Noto Sans Thai", sans-serif', gf: "Chakra+Petch:wght@400;500;700" },
{ id: "notoserif", label: "Noto Serif Thai (serif)", g: "serif", stack: '"Noto Serif Thai", "Thonburi", serif', gf: "Noto+Serif+Thai:wght@400;600;700" },
{ id: "pridi", label: "Pridi (looped serif)", g: "serif", stack: '"Pridi", "Noto Serif Thai", serif', gf: "Pridi:wght@400;500;700" },
{ id: "taviraj", label: "Taviraj (looped serif)", g: "serif", stack: '"Taviraj", "Noto Serif Thai", serif', gf: "Taviraj:wght@400;500;700" },
{ id: "trirong", label: "Trirong (looped serif)", g: "serif", stack: '"Trirong", "Noto Serif Thai", serif', gf: "Trirong:wght@400;500;700" },
{ id: "maitree", label: "Maitree (looped serif)", g: "serif", stack: '"Maitree", "Noto Serif Thai", serif', gf: "Maitree:wght@400;500;700" },
{ id: "mali", label: "Mali (handwriting)", g: "hand", stack: '"Mali", "Sarabun", cursive', gf: "Mali:wght@400;500;700" },
{ id: "itim", label: "Itim (casual handwriting)", g: "hand", stack: '"Itim", "Sarabun", cursive', gf: "Itim" },
{ id: "sriracha", label: "Sriracha (brush handwriting)", g: "hand", stack: '"Sriracha", "Sarabun", cursive', gf: "Sriracha" },
{ id: "kodchasan", label: "Kodchasan (playful)", g: "hand", stack: '"Kodchasan", "Sarabun", sans-serif', gf: "Kodchasan:wght@400;500;700" },
{ id: "charmonman", label: "Charmonman (calligraphy)", g: "hand", stack: '"Charmonman", "Noto Serif Thai", serif', gf: "Charmonman:wght@400;700" },
{ id: "pattaya", label: "Pattaya (display)", g: "display", stack: '"Pattaya", "Sarabun", sans-serif', gf: "Pattaya" },
{ id: "chonburi", label: "Chonburi (display)", g: "display", stack: '"Chonburi", "Noto Serif Thai", serif', gf: "Chonburi" }
];
const fontById = id => FONTS.find(f => f.id === id) || FONTS[0];
const fontLoaded = new Set();
function ensureFont(id) {
const f = fontById(id);
if (!f.gf || fontLoaded.has(f.id)) return;
fontLoaded.add(f.id);
const l = document.createElement("link");
l.rel = "stylesheet";
l.href = `https://fonts.googleapis.com/css2?family=${f.gf}&display=swap`;
document.head.append(l);
}
function fillFontSelects() {
const groups = { looped: "Looped (หัว)", loopless: "Loopless (ไม่มีหัว)", serif: "Serif", hand: "Handwriting", display: "Display" };
const opts = Object.keys(groups).map(g => `<optgroup label="${groups[g]}">${FONTS.filter(f => f.g === g).map(f => `<option value="${f.id}">${esc(f.label)}</option>`).join("")}</optgroup>`).join("");
$$('[data-setting="thFont"]').forEach(el => (el.innerHTML = opts));
$$(".font-select").forEach(el => (el.innerHTML = opts));
}
function applyFont(id) {
const f = fontById(id);
ensureFont(f.id);
document.documentElement.style.setProperty("--font-han", f.stack);
}

function applySettings() {
const st = S.settings;
const root = document.documentElement;
const dark = st.theme === "dark" || (st.theme === "auto" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
root.setAttribute("data-theme", dark ? "dark" : "light");
root.style.setProperty("--scale", String(st.scale));
applyFont(st.thFont);
document.body.classList.toggle("no-tone", !st.toneColors);
document.body.classList.toggle("tone-pat", !!st.tonePattern);
document.body.classList.toggle("hide-py", !!st.hideRom);
document.body.classList.toggle("hide-mn", !!st.hideMeaning);
document.body.classList.toggle("reduce-motion", !!st.reduceMotion);
const btn = $("#theme-btn");
if (btn) btn.innerHTML = ico(dark ? "sun" : "moon");
const meta = $('meta[name="theme-color"]');
if (meta) meta.setAttribute("content", dark ? "#16110c" : "#c2570c");
$$("[data-setting]").forEach(el => {
const v = st[el.dataset.setting];
if (el.type === "checkbox") el.checked = !!v;
else el.value = String(v);
});
const rv = $("#rate-val");
if (rv) rv.textContent = `${st.speechRate.toFixed(2)}×`;
}
