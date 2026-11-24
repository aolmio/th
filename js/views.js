"use strict";
const anyDialogOpen = () => $$("dialog").some(d => d.open);

const SV = { q: "", sort: "recent" };
VIEW_ENTER.saved = () => {
const root = $("#saved-root");
if (!$("#sv-grid")) {
root.innerHTML = `<div class="page-head"><div><span class="eyebrow">Your library</span><h1 class="title" tabindex="-1">Saved words</h1><p class="lede">Everything you starred across the app. Practice it, print it or export it to Anki.</p></div><div class="row"><button class="btn" data-act="sv-quiz">${ico("target")}Quiz me</button><button class="btn" data-act="sv-learn">${ico("cards")}Add all to review</button><a class="btn" href="#/worksheet" data-act="sv-print">${ico("print")}Worksheet</a></div></div>
<div class="toolbar"><input class="input grow-input" id="sv-search" type="search" placeholder="Search saved words…" aria-label="Search saved words"><select class="select" id="sv-sort" aria-label="Sort saved"><option value="recent">Newest first</option><option value="oldest">Oldest first</option><option value="level">By level</option><option value="rom">Sound A–Z</option></select>
<button class="btn sm" data-act="sv-export" data-fmt="csv">${ico("download")}CSV</button><button class="btn sm" data-act="sv-export" data-fmt="anki">${ico("download")}Anki</button><button class="btn sm" data-act="sv-export" data-fmt="json">${ico("download")}JSON</button><button class="btn sm" data-act="sv-import">${ico("upload")}Import</button><button class="btn sm danger" data-act="sv-clear">${ico("trash")}Clear</button><input type="file" id="sv-file" accept=".json,application/json" hidden></div>
<div id="sv-quiz-box" hidden class="card mb"></div><div class="wgrid" id="sv-grid"></div>`;
}
renderSaved();
};
function savedList() {
let list = Array.from(S.deck.values());
const q = SV.q.trim();
if (q) list = list.filter(d => matchQ(d.th, d.rom, d.en, q));
if (SV.sort === "oldest") list.sort((a, b) => a.added - b.added);
else if (SV.sort === "level") list.sort((a, b) => (a.lvl || 9) - (b.lvl || 9));
else if (SV.sort === "rom") list.sort((a, b) => plainRom(a.rom || "").localeCompare(plainRom(b.rom || "")));
else list.sort((a, b) => b.added - a.added);
return list;
}
function renderSaved() {
const grid = $("#sv-grid");
if (!grid) return;
const list = savedList();
grid.innerHTML = list.length ? `<div class="grid g-wide">${list.map(d => wordCardHTML(Object.assign({ pos: "" }, d))).join("")}</div>` : `<div class="empty"><div class="em-ico">★</div><b>${S.deck.size ? "No saved words match" : "Nothing saved yet"}</b><p class="small mt-s">Tap the star on any word, phrase or sentence to keep it here.</p></div>`;
}
document.addEventListener("input", e => {
if (e.target.id === "sv-search") {
SV.q = e.target.value;
renderSaved();
}
});
document.addEventListener("change", async e => {
if (e.target.id === "sv-sort") {
SV.sort = e.target.value;
renderSaved();
}
if (e.target.id === "sv-file") {
const f = e.target.files[0];
if (!f) return;
try {
const data = JSON.parse(await f.text());
const arr = Array.isArray(data) ? data : data.deck || [];
let n = 0;
arr.forEach(it => {
const th = it.th || it.key;
if (th && !S.deck.has(th)) {
S.deck.set(th, { th, key: th, rom: it.rom || "", en: it.en || "", lvl: it.lvl || 0, note: it.note || "", added: it.added || Date.now() });
n++;
}
});
persist.deck();
afterDeckChange();
toast(`Imported ${n} words`);
} catch (err) {
toast("That file could not be read");
}
e.target.value = "";
}
});
A["sv-learn"] = () => {
let n = 0;
S.deck.forEach(d => {
if (!S.srs[d.key]) {
S.srs[d.key] = { k: d.key, iv: 0, ease: 2.5, reps: 0, lapses: 0, due: Date.now(), last: 0 };
n++;
}
});
persist.srs();
refreshBadges();
toast(n ? `Added ${n} words to review` : "Everything is already in review");
};
A["sv-import"] = () => $("#sv-file").click();
A["sv-clear"] = async () => {
if (!S.deck.size) return;
const ok = await dialogAsk({ title: "Clear all saved words?", message: "This removes every saved word from your library. Review progress is kept.", okLabel: "Clear", danger: true });
if (!ok) return;
S.deck.clear();
persist.deck();
afterDeckChange();
};
A["sv-export"] = el => {
const list = savedList();
if (!list.length) return toast("Nothing to export");
const fmt = el.dataset.fmt;
if (fmt === "json") downloadFile("thai-hub-saved.json", JSON.stringify(list, null, 1), "application/json");
else if (fmt === "csv") downloadFile("thai-hub-saved.csv", "﻿thai,sound,meaning,level\n" + list.map(d => [d.th, d.rom, d.en, d.lvl || ""].map(x => `"${String(x).replace(/"/g, '""')}"`).join(",")).join("\n"), "text/csv;charset=utf-8");
else downloadFile("thai-hub-anki.txt", list.map(d => [d.th, romText(d.rom || "", "paiboon"), d.en].map(x => String(x).replace(/\t/g, " ")).join("\t")).join("\n"), "text/plain;charset=utf-8");
};
A["sv-quiz"] = () => {
const pool = Array.from(S.deck.values()).filter(d => d.en && d.rom);
const box = $("#sv-quiz-box");
if (pool.length < 4) return toast("Save at least 4 words with meanings first");
box.hidden = false;
makeQuiz("saved", $("#sv-quiz-box"), wordQuizGen(() => Array.from(S.deck.values()).map(d => Object.assign({}, d, { th: d.th })), () => "meaning"), { srs: true }).next();
};

VIEW_ENTER.stats = () => {
const days = S.stats.days;
const all = Object.values(days);
const reviewed = all.reduce((n, d) => n + d.n, 0);
const okTotal = all.reduce((n, d) => n + d.ok, 0);
const recs = Object.values(S.srs);
const now = Date.now();
const mature = recs.filter(r => r.iv >= 21 && r.due > now).length;
const learning = recs.filter(r => r.reps >= 1 && r.iv < 21 && r.due > now).length;
const due = recs.filter(r => r.due <= now).length;
const fresh = recs.filter(r => r.reps === 0 && r.due > now).length;
const goal = S.settings.dailyGoal;
const bars = [];
let max = 1;
for (let i = 13; i >= 0; i--) {
const d = new Date();
d.setDate(d.getDate() - i);
const n = (days[dayKey(d)] || { n: 0 }).n;
max = Math.max(max, n);
bars.push({ n, label: ["S", "M", "T", "W", "T", "F", "S"][d.getDay()], today: i === 0 });
}
const cells = [];
const start = new Date();
start.setDate(start.getDate() - start.getDay() - 15 * 7);
for (let i = 0; i < 16 * 7 + new Date().getDay() + 1; i++) {
const d = new Date(start);
d.setDate(start.getDate() + i);
if (d > new Date()) break;
const n = (days[dayKey(d)] || { n: 0 }).n;
cells.push(`<i class="${n === 0 ? "" : n >= goal ? "h4" : n >= goal * 0.6 ? "h3" : n >= goal * 0.3 ? "h2" : "h1"}" title="${dayKey(d)}: ${n}"></i>`);
}
const hardest = recs.filter(r => r.lapses > 0).sort((a, b) => b.lapses - a.lapses).slice(0, 12);
$("#stats-root").innerHTML = `<div class="page-head"><div><span class="eyebrow">Progress</span><h1 class="title" tabindex="-1">Your progress</h1><p class="lede">Streaks, accuracy and memory strength, stored only on this device.</p></div></div>
${!all.length && !recs.length ? `<div class="banner mb">${ico("info")}<span class="grow">No activity yet. Review a few cards or take a quiz and your progress shows up here.</span><a class="btn sm primary" href="#/level/1/flash">Start</a></div>` : ""}
<div class="grid g-4 keep mb"><div class="card stat"><span class="k">${ico("flame")}Streak</span><span class="v">${calcStreak()}</span><span class="s">best ${S.stats.best || 0} days</span></div><div class="card stat"><span class="k">${ico("check")}Answers</span><span class="v">${reviewed.toLocaleString()}</span><span class="s">${reviewed ? Math.round((okTotal / reviewed) * 100) : 0}% correct</span></div><div class="card stat"><span class="k">${ico("cards")}In review</span><span class="v">${recs.length}</span><span class="s">${due} due now</span></div><div class="card stat"><span class="k">${ico("star")}Saved</span><span class="v">${S.deck.size}</span><span class="s">${mature} mastered</span></div></div>
<div class="grid g-2 mb"><div class="card"><h2 class="sec">Last 14 days</h2><div class="bars">${bars.map(b => `<div class="b ${b.today ? "today" : ""}" title="${b.n} answers"><i style="height:${Math.max(2, Math.round((b.n / max) * 100))}%"></i><span>${b.label}</span></div>`).join("")}</div></div>
<div class="card"><h2 class="sec">Memory strength</h2><div class="stack-s">${[["New", fresh, "var(--ink-3)"], ["Learning", learning, "var(--gold)"], ["Due", due, "var(--seal)"], ["Mastered", mature, "var(--jade)"]].map(([n, c, col]) => `<div><div class="row between small"><span>${n}</span><b>${c}</b></div><div class="prog"><i style="width:${recs.length ? Math.round((c / recs.length) * 100) : 0}%;background:${col}"></i></div></div>`).join("")}</div></div></div>
<div class="card mb"><h2 class="sec">Activity</h2><div class="heat">${cells.join("")}</div></div>
<div class="card mb"><h2 class="sec">By level</h2>${[1, 2, 3, 4].map(l => {
const total = S.vocab.filter(v => v.lvl === l).length;
const learned = S.vocab.filter(v => v.lvl === l && S.srs[v.key] && S.srs[v.key].reps >= 1).length;
return `<div class="mb"><div class="row between small"><span>${LEVELS[l].name} · ${LEVELS[l].band}</span><b>${learned} / ${total}</b></div><div class="prog"><i style="width:${Math.round((learned / Math.max(1, total)) * 100)}%"></i></div></div>`;
}).join("")}</div>
${hardest.length ? `<div class="card"><h2 class="sec">Hardest words</h2><div class="row">${hardest.map(r => `<button class="chip" data-act="open-word" data-key="${esc(r.k)}"><span class="han">${esc(r.k)}</span> ×${r.lapses}</button>`).join("")}</div></div>` : ""}`;
};

const RES = [
{ g: "Courses", items: [
["Learn Thai with Mod (YouTube)", "https://www.youtube.com/results?search_query=Learn+Thai+with+Mod", "Free video lessons by a Thai teacher, from script basics to conversation."],
["ThaiPod101", "https://www.thaipod101.com", "Audio and video lessons by level (free tier plus subscription)."],
["Learn Thai Podcast", "https://www.learnthaipodcast.com", "Podcast and written lessons, strong on reading Thai script."],
["Thai Language Hut", "https://www.thailanguagehut.com", "Free lessons on vocabulary, grammar and pronunciation."],
["FSI Thai Basic Course", "https://www.fsi-language-courses.org", "Classic free US government course with audio, drill-heavy."],
["Wikibooks: Thai", "https://en.wikibooks.org/wiki/Thai", "Open textbook with script, tones and grammar."],
["Chulalongkorn University Thai courses", "https://www.chula.ac.th", "University language programs for foreign learners in Bangkok."]
] },
{ g: "Dictionaries & reading", items: [
["Thai-language.com", "https://www.thai-language.com", "Thai-English dictionary with audio, tone info and sentence examples."],
["Longdo Dictionary", "https://dict.longdo.com", "Thai-English and Thai-Thai dictionary with example sentences."],
["Wiktionary (Thai)", "https://en.wiktionary.org/wiki/Category:Thai_language", "Etymology, tones and romanization for many Thai words."],
["Thai2English", "https://www.thai2english.com", "Paste Thai text and read it with word splitting and romanization."],
["SEAlang Thai", "https://sealang.net/thai", "Thai dictionaries from the SEAlang library."],
["Forvo", "https://forvo.com/languages/th", "Pronunciations recorded by native speakers."]
] },
{ g: "Apps & flashcards", items: [
["Anki", "https://apps.ankiweb.net", "Import this app's Anki export (Saved words → Anki) into a spaced-repetition deck."],
["Ling App", "https://ling-app.com", "Gamified lessons for Thai."],
["LingoDeer", "https://www.lingodeer.com", "Structured grammar lessons."],
["Drops", "https://languagedrops.com", "Short visual vocabulary sessions."]
] },
{ g: "Books", items: [
["Thai for Beginners (Benjawan Poomsan Becker)", "https://www.paiboonpublishing.com", "Source of the Paiboon romanization used here as the default."],
["Thai: An Essential Grammar (Smyth)", "https://www.routledge.com", "Concise reference grammar."],
["Thai Reference Grammar (Higbie & Thinsan)", "https://www.google.com/search?q=Thai+Reference+Grammar+Higbie", "Detailed grammar with many example sentences."],
["Colloquial Thai", "https://www.routledge.com", "Course book with audio."]
] },
{ g: "Open data & tools", items: [
["Tatoeba", "https://tatoeba.org", "Community example sentences (used in Sentence search when online)."],
["PyThaiNLP", "https://pythainlp.org", "Open-source Thai language processing and word lists."],
["Thai National Corpus", "https://www.arts.chula.ac.th/ling/tnc3", "Large reference corpus from Chulalongkorn University."],
["aolmio/thcore on GitHub", "https://github.com/aolmio/thcore", "Your own Thai core data. Add its raw JSON as an extra source in Settings."]
] }
];
const PLAN = [
["Week 1–2", "Learn the 44 consonants by class, long and short vowels. Use Thai script → Practice daily. Learn Level 1 greetings and numbers."],
["Week 3–4", "Master the five tones and the tone calculator. Drill minimal pairs. Start Level 1 flashcards, 10 new words a day."],
["Week 5–6", "Finish Level 1. Learn particles (ครับ/ค่ะ, นะ, ไหม) and question words in Function words. Practise the Phrasebook."],
["Week 7–8", "Start Level 2. Learn classifiers and basic sentence patterns in Grammar. Read short texts in the Analyzer."],
["Week 9–10", "Level 2 review, time and location words, modal verbs. Use Sentence search to see words in context."],
["Week 11–12", "Level 3 words, idioms and longer reading. Switch flashcards to English → Thai and Listening quizzes."]
];
VIEW_ENTER.resources = () => {
$("#resources-root").innerHTML = `<div class="page-head"><div><span class="eyebrow">Learn more</span><h1 class="title" tabindex="-1">Courses & sources</h1><p class="lede">Where the content here comes from, plus free and paid resources to combine with this app.</p></div></div>
<div class="banner mb">${ico("info")}<span class="grow small">Links were written without being opened from the build environment. If one has moved, search for the name.</span></div>
<div class="card mb"><h2 class="sec">12-week starter plan</h2>${PLAN.map(p => `<div class="plan-day"><b>${p[0]}</b><span class="small">${esc(p[1])}</span></div>`).join("")}</div>
<div class="card mb"><h2 class="sec">Built-in content</h2><div class="grid g-4 keep"><div class="stat"><span class="k">Words</span><span class="v">${S.vocab.length}</span></div><div class="stat"><span class="k">Function words</span><span class="v">${S.func.length}</span></div><div class="stat"><span class="k">Phrases</span><span class="v">${S.phrases.length}</span></div><div class="stat"><span class="k">Grammar</span><span class="v">${S.grammar.length}</span></div></div><p class="small muted mt-s">Writing system, tone rules and romanization follow standard Thai references (Royal Institute RTGS, Paiboon-style tone marks, IPA). Vocabulary and sentences were authored for this app; romanization is checked by a spelling-rule engine.</p></div>
${RES.map(r => `<h2 class="sec">${r.g}</h2><div class="grid g-wide mb">${r.items.map(i => `<div class="res-card"><a href="${esc(i[1])}" target="_blank" rel="noopener">${esc(i[0])} ${ico("link")}</a><span class="small muted">${esc(i[2])}</span></div>`).join("")}</div>`).join("")}`;
};

const FACT_TAGS = {};
VIEW_ENTER.facts = () => {
const tags = Array.from(new Set(S.facts.map(f => f.tag)));
const cur = S.misc.factTag || "";
$("#facts-root").innerHTML = `<div class="page-head"><div><span class="eyebrow">Culture & tips</span><h1 class="title" tabindex="-1">Facts & tips</h1><p class="lede">Short notes on how Thai works and how to study it.</p></div></div>
<div class="row mb"><button class="chip ${cur ? "" : "on"}" data-act="fact-tag" data-t="">All</button>${tags.map(t => `<button class="chip ${cur === t ? "on" : ""}" data-act="fact-tag" data-t="${esc(t)}">${esc(t)}</button>`).join("")}</div>
<div class="grid g-wide">${S.facts.filter(f => !cur || f.tag === cur).map(f => `<article class="card"><span class="chip">${esc(f.tag)}</span><h3 class="sub mt-s">${esc(f.title)}</h3><p class="small">${esc(f.text)}</p></article>`).join("")}</div>`;
};
A["fact-tag"] = el => {
S.misc.factTag = el.dataset.t;
persist.misc();
VIEW_ENTER.facts();
};

const DEFAULT_SOURCES = [{ url: "https://raw.githubusercontent.com/aolmio/thcore/main/tone.json", name: "aolmio/thcore tone.json", on: true }];
const EXT = { added: 0, status: {} };
function parseExtra(data, url) {
let rows = [];
if (typeof data === "string") {
const sep = /\t/.test(data.split("\n")[0]) ? "\t" : ",";
rows = data.split("\n").filter(l => l.trim()).map(l => {
const p = l.split(sep).map(x => x.trim().replace(/^"|"$/g, ""));
return { th: p[0], rom: p[1], en: p[2] };
});
} else if (Array.isArray(data)) rows = data;
else if (data && typeof data === "object") {
const arr = Object.keys(data).map(k => {
const v = data[k];
return typeof v === "object" && v ? Object.assign({ th: k }, v) : { th: k, en: String(v) };
});
rows = Array.isArray(data.words) ? data.words : Array.isArray(data.data) ? data.data : arr;
}
return rows.map(r => {
if (!r || typeof r !== "object") return null;
const th = r.th || r.thai || r.word || r.text || r.w;
const en = r.en || r.english || r.meaning || r.definition || r.gloss || r.m || "";
let rom = r.rom || r.roman || r.romanization || r.paiboon || r.pron || r.pronunciation || "";
if (rom && !ROM.valid(rom)) rom = "";
return th && isTh(th) ? { th: String(th).trim(), rom, en: Array.isArray(en) ? en.join("; ") : String(en) } : null;
}).filter(Boolean);
}
async function loadExtraSources(force) {
const list = S.misc.sources || DEFAULT_SOURCES;
EXT.added = 0;
for (const s of list) {
if (!s.on) continue;
const kind = /\.(csv|tsv|txt)$/i.test(s.url) ? "text" : "json";
const data = await fetchRemote(s.url, kind, !!force);
if (data == null) {
EXT.status[s.url] = "unavailable";
continue;
}
const rows = parseExtra(data, s.url);
let n = 0;
rows.forEach(r => {
const e = S.dict.get(r.th);
if (e) {
if (!e.en && r.en) e.en = r.en;
if (!e.rom && r.rom) e.rom = r.rom;
} else if (r.en || r.rom) {
S.dict.set(r.th, { th: r.th, key: r.th, rom: r.rom, pos: "", en: r.en, lvl: 0, cat: "extra", kind: "ext" });
n++;
}
});
EXT.added += n;
EXT.status[s.url] = `${rows.length} rows, ${n} new`;
}
if (S.route.name === "settings") renderSources();
}

VIEW_ENTER.settings = () => {
const root = $("#settings-root");
const sw = (key, label, desc) => `<div class="setting"><div><b>${label}</b><span class="d">${desc}</span></div><label class="switch"><input type="checkbox" data-setting="${key}" data-type="bool" aria-label="${label}"><span></span></label></div>`;
const sel = (key, label, desc, opts) => `<div class="setting"><div><b>${label}</b><span class="d">${desc}</span></div><select class="select" data-setting="${key}" aria-label="${label}">${opts.map(o => `<option value="${o[0]}">${o[1]}</option>`).join("")}</select></div>`;
root.innerHTML = `<div class="page-head"><div><span class="eyebrow">Preferences</span><h1 class="title" tabindex="-1">Settings</h1><p class="lede">Everything is stored on this device.</p></div></div>
<div class="grid g-2">
<div class="card"><h2 class="sec">Display</h2>
${sel("theme", "Theme", "Follow your device or choose one.", [["auto", "Auto"], ["light", "Light"], ["dark", "Dark"]])}
${sel("scale", "Text size", "Scales the whole interface.", [[0.9, "Small"], [1, "Normal"], [1.1, "Large"], [1.25, "Extra large"]])}
<div class="setting"><div><b>Thai font</b><span class="d">Used for all Thai text. See the Font lab to compare.</span></div><select class="select font-select" data-setting="thFont" aria-label="Thai font"></select></div>
${sw("toneColors", "Tone colors", "Color the romanization by tone.")}
${sw("tonePattern", "Tone patterns", "Add underline styles for each tone, helpful for color blindness.")}
${sw("reduceMotion", "Reduce motion", "Turn off flip and slide animations.")}</div>
<div class="card"><h2 class="sec">Romanization</h2>
${sel("romSystem", "System", "How Thai is spelled in Latin letters everywhere.", Object.keys(SYSTEMS).map(k => [k, SYSTEMS[k]]))}
<div class="card" style="background:var(--sunken);margin-top:.6rem"><div class="small muted">Preview</div><div class="han" style="font-size:1.3rem">สวัสดีครับ</div><div class="py" id="rom-preview" style="font-size:1.1rem"></div></div>
<p class="small muted mt-s">Paiboon+ shows tone marks. RTGS is the official system without tones. IPA shows tone contours.</p>
${sw("hideRom", "Hide romanization", "Blur romanization until you hover or tap. Good for recall practice.")}
${sw("hideMeaning", "Hide meanings", "Blur meanings until you hover or tap.")}</div>
<div class="card"><h2 class="sec">Speech</h2>
<div class="setting"><div><b>Voice</b><span class="d">Uses your device's Thai voices. On iPhone, switch off silent mode and raise the volume.</span></div><select class="select" id="voice-select" data-setting="voiceURI" aria-label="Voice"></select></div>
<div class="setting"><div><b>Speed <span id="rate-val"></span></b><span class="d">Slower is easier for tone practice.</span></div><input class="range" type="range" min="0.4" max="1.2" step="0.05" data-setting="speechRate" data-type="num" aria-label="Speech speed"></div>
<div class="row mt-s"><button class="btn" data-act="speak" data-t="สวัสดีครับ ยินดีที่ได้รู้จัก">${ico("volume")}Test voice</button></div>
${sw("autoSpeak", "Auto-play on flashcards", "Speak each card when it appears.")}</div>
<div class="card"><h2 class="sec">Learning</h2>
${sel("dailyGoal", "Daily goal", "Answers per day.", [[10, "10"], [20, "20"], [30, "30"], [50, "50"], [100, "100"]])}
${sel("newPerSession", "New cards per session", "Fresh words added to each study round.", [[5, "5"], [10, "10"], [20, "20"], [30, "30"]])}
${sel("fcDirection", "Flashcard front", "What you see first.", [["th", "Thai"], ["en", "English"], ["audio", "Audio only"]])}
${sel("glossLang", "Translation language", "Used for word lookups and the analyzer.", LANGS.map(l => [l[0], l[1]]))}</div>
<div class="card" id="off-card" style="grid-column:1/-1"><h2 class="sec">Offline & install</h2>
<div class="setting"><div><b>App status</b><span class="d" id="off-status"></span></div><span class="chip" id="off-version"></span></div>
<div class="setting" id="install-row" hidden><div><b>Install Thai Hub</b><span class="d" id="install-state"></span></div><button class="btn primary" data-act="install-app">Install</button></div>
<div class="setting"><div><b>Download fonts and sources for offline use</b><span class="d" id="off-detail"></span></div><button class="btn primary" id="off-btn" data-act="off-download">Download fonts & sources</button></div>
<div class="setting"><div><b>Include all 20 fonts</b><span class="d">Off saves only the main five (about 3 MB).</span></div><label class="switch"><input type="checkbox" id="off-allfonts" aria-label="All fonts"><span></span></label></div>
<div class="prog prog-wrap" id="off-prog" hidden><i style="width:0%"></i></div><p class="hint mt-s" id="off-msg" aria-live="polite"></p>
<div class="row mt"><button class="btn" data-act="check-update">Check for updates</button><button class="btn" id="off-cancel" data-act="off-cancel" hidden>Cancel download</button><button class="btn danger" data-act="off-clear">Remove downloaded data</button></div></div>
<div class="card" style="grid-column:1/-1"><h2 class="sec">Extra data sources</h2><p class="small muted mb">Add public JSON or CSV word lists (columns: Thai, romanization, meaning). They fill gaps in the built-in dictionary. Data stays on this device. Sources that cannot be reached are skipped silently.</p><div id="src-list"></div>
<div class="row mt"><input class="input grow-input" id="src-url" type="url" placeholder="https://raw.githubusercontent.com/you/repo/main/words.json" aria-label="Source URL"><button class="btn" data-act="src-add">${ico("plus")}Add</button><button class="btn" data-act="src-refresh">${ico("repeat")}Reload all</button></div></div>
<div class="card" style="grid-column:1/-1"><h2 class="sec">Your data</h2><div class="row"><button class="btn" data-act="bk-export">${ico("download")}Back up everything</button><button class="btn" data-act="bk-import">${ico("upload")}Restore backup</button><button class="btn danger" data-act="bk-reset">${ico("trash")}Reset all data</button><input type="file" id="bk-file" accept=".json,application/json" hidden></div></div></div>`;
fillFontSelects();
loadVoices();
applySettings();
renderSources();
romPreview();
renderOfflineCard();
updateInstallUI();
};
function romPreview() {
const el = $("#rom-preview");
if (el) el.innerHTML = romHTML("sa2-wat2-dii1 kap2");
}
function renderSources() {
const box = $("#src-list");
if (!box) return;
const list = S.misc.sources || DEFAULT_SOURCES;
box.innerHTML = list.map((s, i) => `<div class="src-row"><label class="switch"><input type="checkbox" data-src="${i}" ${s.on ? "checked" : ""} aria-label="Enable source"><span></span></label><div class="grow"><b class="small">${esc(s.name || s.url)}</b><div class="tiny faint" style="word-break:break-all">${esc(s.url)}</div></div><span class="chip">${esc(EXT.status[s.url] || (s.on ? "not loaded yet" : "off"))}</span><button class="btn ghost icon" data-act="src-del" data-i="${i}" aria-label="Remove source">${ico("trash")}</button></div>`).join("") || '<p class="small muted">No sources.</p>';
}
A["src-add"] = () => {
const url = $("#src-url").value.trim();
if (!/^https:\/\//.test(url)) return toast("Enter an https:// link");
const list = (S.misc.sources || DEFAULT_SOURCES).slice();
if (list.some(s => s.url === url)) return toast("Already added");
list.push({ url, name: url.split("/").slice(-3).join("/"), on: true });
S.misc.sources = list;
persist.misc();
$("#src-url").value = "";
renderSources();
loadExtraSources();
};
A["src-del"] = el => {
const list = (S.misc.sources || DEFAULT_SOURCES).slice();
list.splice(Number(el.dataset.i), 1);
S.misc.sources = list;
persist.misc();
renderSources();
};
A["src-refresh"] = () => {
toast("Reloading sources…");
loadExtraSources(true);
};
A["bk-export"] = () => downloadFile("thai-hub-backup.json", JSON.stringify({ app: "thai-hub", v: 1, settings: S.settings, deck: Array.from(S.deck.values()), srs: S.srs, stats: S.stats, misc: S.misc }), "application/json");
A["bk-import"] = () => $("#bk-file").click();
A["bk-reset"] = async () => {
const ok = await dialogAsk({ title: "Reset all data?", message: "Saved words, review progress, streaks and settings will be erased from this device.", okLabel: "Reset", danger: true });
if (!ok) return;
Object.keys(K).forEach(k => store.remove(K[k]));
await idb.clear();
location.reload();
};
document.addEventListener("change", async e => {
if (e.target.id === "bk-file") {
const f = e.target.files[0];
if (!f) return;
try {
const d = JSON.parse(await f.text());
if (d.app !== "thai-hub") throw new Error("not a backup");
store.set(K.settings, d.settings || {});
store.set(K.deck, d.deck || []);
store.set(K.srs, d.srs || {});
store.set(K.stats, d.stats || { days: {}, best: 0 });
store.set(K.misc, d.misc || {});
location.reload();
} catch (err) {
toast("That is not a Thai Hub backup");
}
}
if (e.target.dataset && e.target.dataset.src !== undefined) {
const list = (S.misc.sources || DEFAULT_SOURCES).slice();
list[Number(e.target.dataset.src)] = Object.assign({}, list[Number(e.target.dataset.src)], { on: e.target.checked });
S.misc.sources = list;
persist.misc();
renderSources();
if (e.target.checked) loadExtraSources();
}
});
function onSettingEvent(e) {
const el = e.target;
const key = el.dataset && el.dataset.setting;
if (!key) return;
let v;
if (el.type === "checkbox") v = el.checked;
else if (el.dataset.type === "num" || ["scale", "dailyGoal", "newPerSession"].includes(key)) v = Number(el.value);
else v = el.value;
S.settings[key] = v;
persist.settings();
applySettings();
if (key === "romSystem") {
romPreview();
route();
}
if (["thFont", "fcDirection"].includes(key) && S.route.name === "level") route();
}
document.addEventListener("input", e => {
if (e.target.type === "range") onSettingEvent(e);
});
document.addEventListener("change", onSettingEvent);

document.addEventListener("click", e => {
const el = e.target.closest("[data-act]");
if (!el || el.tagName === "FORM") return;
const fn = A[el.dataset.act];
if (fn) fn(el, e);
});
document.addEventListener("click", e => {
if (e.target.tagName === "DIALOG" && e.target.open) e.target.close();
});
document.addEventListener("input", e => {
if (e.target.id === "pal-input") {
PAL.sel = 0;
renderPalette();
}
});
document.addEventListener("keydown", e => {
const t = e.target;
if ((e.key === "Enter" || e.key === " ") && t.classList && (t.classList.contains("vcard") || t.classList.contains("flip"))) {
e.preventDefault();
t.click();
return;
}
if (t.id === "pal-input") {
if (e.key === "ArrowDown" || e.key === "ArrowUp") {
e.preventDefault();
PAL.sel = clamp(PAL.sel + (e.key === "ArrowDown" ? 1 : -1), 0, Math.max(0, PAL.items.length - 1));
renderPalette();
} else if (e.key === "Enter") {
e.preventDefault();
const it = PAL.items[PAL.sel];
$("#dlg-palette").close();
if (it) it.run();
}
return;
}
if (e.ctrlKey || e.metaKey || e.altKey) {
if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
e.preventDefault();
A["open-palette"]();
}
return;
}
const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable;
if (typing || anyDialogOpen()) return;
if (e.key === "/") {
e.preventDefault();
A["open-palette"]();
} else if (e.key === "?") A["show-keys"]();
else if (e.key === "[") A["toggle-side"]();
else {
const F = flashOf({ closest: () => null });
const Q = activeQuiz();
if (F && F.words.length && $("[data-fc]")) {
if (e.key === " ") {
e.preventDefault();
A["fc-flip"]({ closest: () => null });
} else if (F.flipped && F.mode === "study" && /^[1-4]$/.test(e.key)) A["fc-rate"]({ closest: () => null, dataset: { r: String(Number(e.key) - 1) } });
else if (F.mode === "browse" && e.key === "ArrowRight") A["fc-nav"]({ closest: () => null, dataset: { d: "1" } });
else if (F.mode === "browse" && e.key === "ArrowLeft") A["fc-nav"]({ closest: () => null, dataset: { d: "-1" } });
} else if (Q) {
if (/^[1-5]$/.test(e.key) && !Q.answered) Q.pick(Number(e.key) - 1);
else if (e.key === "Enter" && Q.answered) Q.next();
}
}
});
window.addEventListener("hashchange", route);
window.addEventListener("online", () => {
document.body.classList.remove("offline");
toast("Back online");
});
window.addEventListener("offline", () => {
document.body.classList.add("offline");
toast("You are offline. Built-in words and your saved data still work.");
});
if ("speechSynthesis" in window && speechSynthesis.addEventListener) speechSynthesis.addEventListener("voiceschanged", loadVoices);
if (window.matchMedia) {
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const onMq = () => {
if (S.settings.theme === "auto") applySettings();
};
if (mq.addEventListener) mq.addEventListener("change", onMq);
}

function init() {
loadDeck();
loadData();
applySettings();
fillFontSelects();
applySettings();
loadVoices();
retryVoices();
["pointerdown", "touchend", "keydown"].forEach(ev => document.addEventListener(ev, unlockSpeech, { once: true, capture: true, passive: true }));
if (!navigator.onLine) document.body.classList.add("offline");
renderNav();
if (!location.hash) history.replaceState(null, "", "#/home");
route();
const idle = window.requestIdleCallback || (fn => setTimeout(fn, 600));
idle(() => loadExtraSources());
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
