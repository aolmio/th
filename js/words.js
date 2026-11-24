"use strict";
const WD = { q: "" };
const wordCat = id => S.cats.find(c => c.id === id) || null;
const matchQ = (th, rom, en, q) => {
if (!q) return true;
const low = q.toLowerCase();
const pl = low.replace(/[^a-z]/g, "");
return th.includes(q) || (en || "").toLowerCase().includes(low) || (pl.length > 1 && plainRom(rom || "").includes(pl));
};
function wdCard(it, cat, showCat) {
const hz = `<button class="wd-hz" data-act="open-word" data-key="${esc(it.th)}">${esc(it.th)}</button>`;
const cc = showCat ? `<a class="chip cat" href="#/words/${cat.id}">${esc(cat.short)}</a>` : "";
const ex = it.ex ? `<div class="wd-ex"><div class="ruby-view wd-exz">${rubyHTML(analyzeThai(it.ex))}</div><div class="wd-exe"><span>${esc(it.exen)}</span><button class="mini" data-act="speak" data-t="${esc(it.ex)}" aria-label="Listen to example" title="Listen">${ico("volume")}</button></div></div>` : "";
return `<article class="wd card"><div class="wd-top">${hz}<div class="grow"><div class="py">${romHTML(it.rom)}</div><div class="wd-en mn-hide">${esc(it.en)}</div></div><button class="mini" data-act="speak" data-t="${esc(it.th)}" aria-label="Listen" title="Listen">${ico("volume")}</button></div><div class="row wd-meta"><span class="chip">Level ${it.lvl}</span>${cc}</div>${ex}</article>`;
}
function wdList() {
const box = $("#wd-list");
if (!box) return;
const cat = wordCat(S.route.args[0]);
const q = WD.q.trim();
let html = "";
if (cat) {
cat.groups.forEach(g => {
const items = g.items.filter(it => matchQ(it.th, it.rom, it.en, q));
if (!items.length) return;
html += `<section class="mb"><h2 class="sec">${esc(g.h)}<span class="chip">${items.length}</span></h2><div class="grid g-wide">${items.map(it => wdCard(it, cat, false)).join("")}</div></section>`;
});
} else if (q) {
const found = [];
S.cats.forEach(c => c.groups.forEach(g => g.items.forEach(it => {
if (matchQ(it.th, it.rom, it.en, q)) found.push([it, c]);
})));
html = found.length ? `<div class="grid g-wide">${found.slice(0, 80).map(([it, c]) => wdCard(it, c, true)).join("")}</div>${found.length > 80 ? `<p class="hint mt">Showing 80 of ${found.length} matches.</p>` : ""}` : "";
}
box.innerHTML = html || (q ? '<div class="empty small">No words match.</div>' : "");
}
VIEW_ENTER.words = () => {
WD.q = "";
const root = $("#words-root");
const cat = wordCat(S.route.args[0]);
const strip = `<nav class="wd-strip" aria-label="Function word categories"><a class="chip${cat ? "" : " on"}" href="#/words">All</a>${S.cats.map(c => `<a class="chip${cat && cat.id === c.id ? " on" : ""}" href="#/words/${c.id}">${esc(c.short)}</a>`).join("")}</nav>`;
const search = `<div class="search-box mb"><input class="input" id="wd-q" type="search" placeholder="${cat ? "Filter this page…" : "Search all function words by Thai, sound or meaning…"}" autocomplete="off" spellcheck="false" aria-label="Search words"></div>`;
let head;
let tail = "";
if (cat) {
const i = S.cats.indexOf(cat);
const prev = S.cats[i - 1];
const next = S.cats[i + 1];
head = `<div class="page-head"><div><span class="eyebrow">${esc(cat.zh)} · ${cat.count} words</span><h1 class="title" tabindex="-1">${esc(cat.title)}</h1><p class="lede">${esc(cat.desc)}</p></div></div>${strip}<div class="card mb"><h3 class="sub">How they work</h3><ul class="facts">${cat.tips.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>${search}`;
tail = `<div class="row between mt wd-pager">${prev ? `<a class="btn" href="#/words/${prev.id}">${ico("left")}${esc(prev.short)}</a>` : "<span></span>"}${next ? `<a class="btn" href="#/words/${next.id}">${esc(next.short)}${ico("right")}</a>` : "<span></span>"}</div>`;
} else {
const total = S.cats.reduce((n, c) => n + c.count, 0);
head = `<div class="page-head"><div><span class="eyebrow">คำหน้าที่ · ${total} words</span><h1 class="title" tabindex="-1">Function words</h1><p class="lede">The small words that hold Thai sentences together: particles, questions, pronouns, prepositions and more. Each category has its own page with usage tips and example sentences. For classifiers see <a href="#/classifiers">Classifiers</a>.</p></div></div>${search}<div id="wd-hub" class="grid g-auto mb">${S.cats.map(c => `<a class="tool-card" href="#/words/${c.id}"><span class="ti">${ico(c.icon)}</span><div><b>${esc(c.title)} · ${esc(c.zh)}</b><span>${c.count} words · ${c.groups.map(g => g.h).slice(0, 3).join(", ")}</span></div></a>`).join("")}</div>`;
}
root.innerHTML = `${head}<div id="wd-list"></div>${tail}`;
$("#wd-q").addEventListener("input", e => {
WD.q = e.target.value;
const hub = $("#wd-hub");
if (hub) hub.hidden = !!WD.q.trim();
wdList();
});
wdList();
};

const PH = { q: "", sit: "" };
VIEW_ENTER.phrases = () => {
const sits = Array.from(new Set(S.phrases.map(p => p.sit)));
$("#phrases-root").innerHTML = `<div class="page-head"><div><span class="eyebrow">ประโยคที่ใช้บ่อย · ${S.phrases.length} phrases</span><h1 class="title" tabindex="-1">Phrasebook</h1><p class="lede">Ready-to-use phrases grouped by situation. Tap the speaker to hear them, the star to save them for review.</p></div><div class="row"><button class="btn primary" data-act="ph-quiz">${ico("target")}Practice</button></div></div>
<div class="toolbar"><input class="input grow-input" id="ph-q" type="search" placeholder="Search Thai, sound or English…" autocomplete="off" aria-label="Search phrases" value="${esc(PH.q)}"><select class="select" id="ph-sit" aria-label="Situation"><option value="">All situations</option>${sits.map(s => `<option value="${esc(s)}" ${PH.sit === s ? "selected" : ""}>${esc(s)}</option>`).join("")}</select></div>
<div id="ph-quiz" hidden></div><div id="ph-list"></div>`;
renderPhrases();
};
function renderPhrases() {
const list = S.phrases.filter(p => (!PH.sit || p.sit === PH.sit) && matchQ(p.th, p.rom, p.en, PH.q.trim()));
const groups = {};
list.forEach(p => (groups[p.sit] = groups[p.sit] || []).push(p));
$("#ph-list").innerHTML = Object.keys(groups).map(s => `<section class="mb"><h2 class="sec">${esc(s)}<span class="chip">${groups[s].length}</span></h2><div class="grid g-wide">${groups[s].map(p => `<article class="card"><div class="row between" style="flex-wrap:nowrap;align-items:flex-start"><div class="zh han" style="font-size:1.2rem;font-weight:600;line-height:1.7">${esc(p.th)}</div><span class="acts"><button class="mini ${S.deck.has(p.key) ? "on" : ""}" data-act="save" data-key="${esc(p.key)}" aria-label="Save">${ico("star")}</button><button class="mini" data-act="speak" data-t="${esc(p.th)}" aria-label="Listen">${ico("volume")}</button></span></div><div class="py">${romHTML(p.rom)}</div><div class="mn-hide mt-s">${esc(p.en)}</div>${p.note ? `<div class="tiny faint mt-s">${esc(p.note)}</div>` : ""}</article>`).join("")}</div></section>`).join("") || '<div class="empty">No phrases match.</div>';
}
document.addEventListener("input", e => {
if (e.target.id === "ph-q") {
PH.q = e.target.value;
renderPhrases();
}
});
document.addEventListener("change", e => {
if (e.target.id === "ph-sit") {
PH.sit = e.target.value;
renderPhrases();
}
});
A["ph-quiz"] = () => {
const box = $("#ph-quiz");
box.hidden = false;
const pool = S.phrases;
const gen = () => {
const p = pick(pool);
const mode = Math.random() < 0.5;
const o = choices(p, pool, 4, x => x.th);
if (mode) return { key: p.key, prompt: `<div class="hz-xl" style="font-size:1.5rem">${esc(p.th)}</div><div class="py">${romHTML(p.rom)}</div>`, say: p.th, opts: o.map(x => ({ html: esc(x.en), ok: x === p })), explain: esc(p.en) };
return { key: p.key, prompt: `<div style="font-size:1.3rem;font-weight:700">${esc(p.en)}</div><div class="hint">Choose the Thai phrase</div>`, opts: o.map(x => ({ html: `<span class="han">${esc(x.th)}</span>`, ok: x === p })), explain: `<span class="han">${esc(p.th)}</span> ${romHTML(p.rom)}` };
};
makeQuiz("phrases", box, gen, { srs: true }).next();
box.scrollIntoView({ behavior: "smooth", block: "start" });
};

VIEW_ENTER.classifiers = () => {
$("#classifiers-root").innerHTML = `<div class="page-head"><div><span class="eyebrow">ลักษณนาม · ${S.classifiers.length} classifiers</span><h1 class="title" tabindex="-1">Classifiers</h1><p class="lede">Thai counts things with classifiers: <span class="han">แมวสองตัว</span> (cat · two · <i>animal</i>). The order is noun + number + classifier. Learn which classifier goes with which noun.</p></div><div class="row"><button class="btn primary" data-act="cl-quiz">${ico("target")}Quiz</button></div></div>
<div id="cl-quiz" hidden class="mb"></div>
<div class="card mb"><h3 class="sub">Pattern</h3><div class="row mt-s" style="gap:1rem"><span class="sylab"><span class="s-th">แมว</span><span class="s-r">mɛɛo</span><span class="s-m">noun</span></span><span class="sylab"><span class="s-th">สอง</span><span class="s-r">sɔ̌ɔng</span><span class="s-m">number</span></span><span class="sylab"><span class="s-th">ตัว</span><span class="s-r">dtua</span><span class="s-m">classifier</span></span></div><p class="small muted mt-s">With “one”, the number follows the classifier: <span class="han">แมวตัวหนึ่ง</span>. With “this/that”: <span class="han">แมวตัวนี้</span>.</p></div>
<div class="grid g-wide">${S.classifiers.map(c => `<article class="card"><div class="row between" style="flex-wrap:nowrap"><div><span class="mw-big han">${esc(c.th)}</span> <span class="py">${romHTML(c.rom)}</span></div><span class="acts"><button class="mini ${S.deck.has(c.key) ? "on" : ""}" data-act="save" data-key="${esc(c.key)}" aria-label="Save">${ico("star")}</button><button class="mini" data-act="speak" data-t="${esc(c.th)}" aria-label="Listen">${ico("volume")}</button></span></div><p class="small mt-s">${esc(c.use)}</p><div class="row mt-s">${c.nouns.map(n => `<button class="chip" data-act="speak" data-t="${esc(n.th + "สอง" + c.th)}" title="Hear: ${esc(n.en)} two"><span class="han">${esc(n.th)}</span> ${esc(n.en)}</button>`).join("")}</div></article>`).join("")}</div>`;
};
A["cl-quiz"] = () => {
const box = $("#cl-quiz");
box.hidden = false;
const all = [];
S.classifiers.forEach(c => c.nouns.forEach(n => all.push({ c, n })));
const gen = () => {
const x = pick(all);
const o = choices(x.c, S.classifiers, 4, y => y.th);
return { key: null, prompt: `<div class="hz-xl">${esc(x.n.th)}</div><div class="py">${romHTML(x.n.rom)}</div><div class="hint">${esc(x.n.en)} · which classifier counts it?</div>`, say: x.n.th, thOpts: true, opts: o.map(y => ({ html: `${esc(y.th)} <span class="small muted">${esc(shortMean(y.use, 1).slice(0, 30))}</span>`, ok: y === x.c })), explain: `${esc(x.n.th)} uses <b>${esc(x.c.th)}</b> (${esc(x.c.use)}): <span class="han">${esc(x.n.th)}สอง${esc(x.c.th)}</span>` };
};
makeQuiz("classifiers", box, gen, {}).next();
box.scrollIntoView({ behavior: "smooth", block: "start" });
};
