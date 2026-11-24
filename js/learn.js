"use strict";
const QZ = {};
const FC = {};

function makeQuiz(id, root, gen, opts = {}) {
const Q = { id, root, gen, score: 0, total: 0, streak: 0, best: store.get(`thai_hub_best_${id}`, 0), cur: null, answered: false, wrong: [], opts, controls: opts.controls || "" };
Q.next = () => {
Q.cur = Q.gen();
Q.answered = false;
Q.render();
if (Q.cur && Q.cur.say && Q.cur.autoSay) speak(Q.cur.say);
};
Q.render = () => {
const c = Q.cur;
const head = `<div class="row between mb"><span class="chip">Score ${Q.score}/${Q.total}${Q.total ? ` · ${Math.round((Q.score / Q.total) * 100)}%` : ""}</span><span class="chip gold">${ico("flame")}Streak ${Q.streak} · best ${Q.best}</span><button class="btn sm" data-act="q-reset">${ico("undo")}Restart</button></div>${Q.controls}`;
if (!c) {
Q.root.innerHTML = `<div class="quiz card" data-qz="${Q.id}">${head}<div class="empty">${esc(Q.opts.emptyMsg || "Not enough items to build a quiz.")}</div></div>`;
return;
}
const opts = c.opts.map((o, i) => {
const st = Q.answered ? (o.ok ? " correct" : o.picked ? " wrong" : "") : "";
return `<button class="q-opt${c.thOpts ? " hz-opt" : ""}${st}" data-act="q-pick" data-i="${i}" ${Q.answered ? "disabled" : ""}><span class="n">${i + 1}</span><span class="grow">${o.html}</span></button>`;
}).join("");
Q.root.innerHTML = `<div class="quiz card" data-qz="${Q.id}">${head}
<div class="q-prompt">${c.prompt}${c.say ? `<div class="row mt-s" style="justify-content:center"><button class="btn" data-act="speak" data-t="${esc(c.say)}">${ico("volume")}Listen</button><button class="btn" data-act="speak" data-t="${esc(c.say)}" data-slow="1">${ico("volume")}Slow</button></div>` : ""}</div>
<div class="q-opts">${opts}</div>
${Q.answered ? `<div class="feedback ${Q.lastOk ? "ok" : "bad"}">${Q.lastOk ? "✓ Correct. " : "✗ Not quite. "}${c.explain || ""}</div><div class="row mt" style="justify-content:flex-end"><button class="btn primary" data-act="q-next">Next <span class="kbd" style="color:var(--ink)">Enter</span></button></div>` : ""}</div>`;
};
Q.pick = i => {
if (Q.answered || !Q.cur) return;
const o = Q.cur.opts[i];
if (!o) return;
o.picked = true;
Q.answered = true;
Q.lastOk = !!o.ok;
Q.total++;
if (o.ok) {
Q.score++;
Q.streak++;
if (Q.streak > Q.best) {
Q.best = Q.streak;
store.set(`thai_hub_best_${Q.id}`, Q.best);
}
} else {
Q.streak = 0;
if (Q.cur.key) Q.wrong.push(Q.cur.key);
}
if (Q.cur.key && Q.opts.srs) srsRate({ key: Q.cur.key }, o.ok ? 2 : 0, true);
trackActivity("qz", o.ok);
refreshBadges();
Q.render();
if (Q.cur.say && Q.lastOk) speak(Q.cur.say);
};
Q.reset = () => {
Q.score = Q.total = Q.streak = 0;
Q.wrong = [];
Q.next();
};
QZ[id] = Q;
return Q;
}
function qOf(el) {
const host = el.closest("[data-qz]");
return host ? QZ[host.dataset.qz] : null;
}
A["q-pick"] = el => {
const Q = qOf(el);
if (Q) Q.pick(Number(el.dataset.i));
};
A["q-next"] = el => {
const Q = qOf(el);
if (Q) Q.next();
};
A["q-reset"] = el => {
const Q = qOf(el);
if (Q) Q.reset();
};
function activeQuiz() {
const hosts = $$("[data-qz]").filter(h => h.offsetParent !== null);
return hosts.length ? QZ[hosts[0].dataset.qz] : null;
}

function choices(correct, pool, n, keyFn) {
const out = [correct];
const seen = new Set([keyFn(correct)]);
const sh = shuffle(pool);
for (const p of sh) {
const k = keyFn(p);
if (seen.has(k)) continue;
seen.add(k);
out.push(p);
if (out.length >= n) break;
}
return shuffle(out);
}

const WQ_MODES = { meaning: "Thai → English", reverse: "English → Thai", listen: "Listening", rom: "Thai → sound", tone: "Tone ID", fill: "Fill the gap" };
function wordQuizGen(getPool, getMode) {
return () => {
const pool = getPool().filter(w => w.en && w.rom);
if (pool.length < 4) return null;
const mode = getMode();
const w = pick(pool);
const en = x => esc(shortMean(x.en, 2));
if (mode === "meaning") {
const o = choices(w, pool, 4, x => x.en);
return { key: w.key, prompt: `<div class="hz-xl">${esc(w.th)}</div><div class="py" style="font-size:1.1rem">${romHTML(w.rom)}</div>`, say: w.th, opts: o.map(x => ({ html: en(x), ok: x === w })), explain: `<b>${esc(w.th)}</b> = ${en(w)}` };
}
if (mode === "reverse") {
const o = choices(w, pool, 4, x => x.th);
return { key: w.key, prompt: `<div class="hz-xl" style="font-family:var(--font-ui);font-size:1.7rem">${en(w)}</div><div class="hint">Choose the Thai word</div>`, thOpts: true, opts: o.map(x => ({ html: esc(x.th), ok: x === w })), explain: `<b>${esc(w.th)}</b> ${romHTML(w.rom)}` };
}
if (mode === "listen") {
const o = choices(w, pool, 4, x => x.th);
return { key: w.key, prompt: `<div class="hint">Listen and choose the word you hear</div>`, say: w.th, autoSay: true, thOpts: true, opts: o.map(x => ({ html: esc(x.th), ok: x === w })), explain: `<b>${esc(w.th)}</b> ${romHTML(w.rom)} · ${en(w)}` };
}
if (mode === "rom") {
const o = choices(w, pool, 4, x => x.rom);
return { key: w.key, prompt: `<div class="hz-xl">${esc(w.th)}</div>`, say: w.th, opts: o.map(x => ({ html: romHTML(x.rom), ok: x === w })), explain: `<b>${esc(w.th)}</b> = ${romHTML(w.rom)} (${en(w)})` };
}
if (mode === "tone") {
const toks = ROM.split(w.rom).filter(t => !/^[\s\-]+$/.test(t));
const idx = Math.floor(Math.random() * toks.length);
const p = ROM.parse(toks[idx]);
if (!p) return wordQuizGen(getPool, () => "meaning")();
const th = null;
const opts = [1, 2, 3, 4, 5].map(t => ({ html: `<span class="tone-${t}"><b>${TONE_NAME[t]}</b></span>`, ok: t === p.tone }));
return { key: w.key, prompt: `<div class="hz-xl">${esc(w.th)}</div><div class="hint">What tone is syllable ${idx + 1}${toks.length > 1 ? ` of ${toks.length}` : ""}? <b>${esc(ROM.toRtgs(toks[idx]))}</b></div>`, say: w.th, opts, explain: `${esc(ROM.toPaiboon(toks[idx]))} is ${TONE_NAME[p.tone]} tone. <b>${esc(w.th)}</b> ${romHTML(w.rom)}` };
}
const ex = pool.filter(x => x.ex && x.ex.includes(x.th));
if (!ex.length) return wordQuizGen(getPool, () => "meaning")();
const t = pick(ex);
const o = choices(t, pool, 4, x => x.th);
return { key: t.key, prompt: `<div class="hz-xl" style="font-size:1.6rem">${esc(t.ex.replace(t.th, "＿＿＿"))}</div><div class="small muted mt-s">${esc(t.exen || "")}</div>`, thOpts: true, opts: o.map(x => ({ html: esc(x.th), ok: x === t })), explain: `${esc(t.ex)} · <b>${esc(t.th)}</b> = ${en(t)}` };
};
}

function buildQueue(pool) {
const now = Date.now();
const due = pool.filter(w => S.srs[w.key] && S.srs[w.key].due <= now).sort((a, b) => S.srs[a.key].due - S.srs[b.key].due);
const fresh = shuffle(pool.filter(w => !S.srs[w.key])).slice(0, S.settings.newPerSession);
return due.concat(fresh);
}

function createFlash(id, root, getWords, opts = {}) {
const F = { id, root, words: [], i: 0, flipped: false, mode: opts.mode || "study", results: [], startedAt: 0, getWords, opts };
F.start = mode => {
if (mode) F.mode = mode;
const pool = F.getWords();
F.words = F.mode === "study" ? (opts.queue ? opts.queue(pool) : buildQueue(pool)) : pool.slice();
F.i = 0;
F.flipped = false;
F.results = [];
F.startedAt = Date.now();
F.render();
};
F.render = () => {
const r = F.root;
if (!F.words.length) {
r.innerHTML = `<div class="empty"><div class="em-ico">${F.mode === "study" ? "✓" : "ก"}</div><b>${F.mode === "study" ? "Nothing to study right now" : "No cards match these filters"}</b><p class="small mt-s">${F.mode === "study" ? "No cards are due and no new words are available." : "Try clearing the filters."}</p>${F.opts.canBrowse && F.mode === "study" ? `<div class="mt"><button class="btn" data-act="fc-mode" data-m="browse">Browse all cards</button></div>` : ""}</div>`;
return;
}
const seg = F.opts.canBrowse ? `<div class="seg" role="group" aria-label="Mode"><button data-act="fc-mode" data-m="study" class="${F.mode === "study" ? "on" : ""}">Study</button><button data-act="fc-mode" data-m="browse" class="${F.mode === "browse" ? "on" : ""}">Browse</button></div>` : "<span></span>";
if (F.mode === "study" && F.i >= F.words.length) {
const good = F.results.filter(x => x >= 2).length;
r.innerHTML = `<div class="flash-wrap" data-fc="${F.id}"><div class="card center"><div class="summary-big">${F.results.length} cards</div><p class="muted">${F.results.length ? Math.round((good / F.results.length) * 100) : 0}% recalled · about ${Math.max(1, Math.round((Date.now() - F.startedAt) / 60000))} min</p><div class="row mt" style="justify-content:center"><button class="btn primary" data-act="fc-restart">${ico("repeat")}Another round</button><a class="btn" href="#/stats">${ico("chart")}Progress</a></div></div></div>`;
return;
}
const w = F.words[F.i];
const dir = S.settings.fcDirection;
const back = `<div class="hz-lg">${esc(w.th)}</div><div style="font-size:1.35rem" class="py">${romHTML(w.rom)}</div><div style="max-width:380px;margin-top:.3rem">${esc(shortMean(w.en, 4))}</div>${w.ex ? `<div class="small muted mt-s" style="max-width:380px"><span class="han">${esc(w.ex)}</span><br>${esc(w.exen || "")}</div>` : ""}<div class="row mt-s"><button class="btn sm" data-act="speak" data-t="${esc(w.th)}">${ico("volume")}Listen</button><button class="btn sm" data-act="speak" data-t="${esc(w.th)}" data-slow="1">Slow</button></div>`;
let front;
if (dir === "en") front = `<span class="chip">${w.lvl ? "Level " + w.lvl : "Card"}</span><div style="font-size:1.5rem;font-weight:700;max-width:400px;line-height:1.35">${esc(shortMean(w.en, 3) || "—")}</div><div class="hint">How do you say it in Thai?</div>`;
else if (dir === "audio") front = `<button class="btn primary lg" data-act="speak" data-t="${esc(w.th)}">${ico("volume")}Play audio</button><div class="hint">Listen, then recall the word</div>`;
else front = `<span class="chip">${w.lvl ? "Level " + w.lvl : "Card"}</span><div class="hz-xl">${esc(w.th)}</div><div class="hint">Tap or press Space to reveal</div>`;
const rec = S.srs[w.key] || null;
const controls = F.mode === "study"
? (F.flipped
? `<div class="rate">${["Again", "Hard", "Good", "Easy"].map((n, r2) => `<button class="r${r2}" data-act="fc-rate" data-r="${r2}"><span>${r2 + 1} · ${n}</span><small>${intervalLabel(rec, r2)}</small></button>`).join("")}</div>`
: `<button class="btn primary lg" style="width:100%" data-act="fc-flip">Show answer <span class="kbd" style="color:var(--ink)">Space</span></button>`)
: `<div class="row" style="justify-content:center"><button class="btn" data-act="fc-nav" data-d="-1">${ico("left")}Previous</button><button class="btn primary" data-act="fc-flip">${ico("repeat")}Flip</button><button class="btn" data-act="fc-nav" data-d="1">Next${ico("right")}</button><button class="btn ghost icon" data-act="fc-shuffle" aria-label="Shuffle">${ico("shuffle")}</button></div>`;
r.innerHTML = `<div class="flash-wrap" data-fc="${F.id}">
<div class="row between">${seg}<span class="chip">${F.i + 1} / ${F.words.length}</span></div>
<div class="prog mt-s"><i style="width:${Math.round((F.i / F.words.length) * 100)}%"></i></div>
<div class="flip ${F.flipped ? "flipped" : ""}" data-act="fc-flip" role="button" tabindex="0" aria-label="Flashcard, press to flip"><div class="flip-in"><div class="face front">${front}</div><div class="face back">${back}</div></div></div>
${controls}</div>`;
if (S.settings.autoSpeak && !F.flipped && dir !== "en") speak(w.th);
};
FC[id] = F;
return F;
}
function flashOf(el) {
const host = el.closest("[data-fc]");
if (host) return FC[host.dataset.fc];
return S.route.name === "review" ? FC.review : S.route.name === "level" ? FC.level : null;
}
A["fc-flip"] = el => {
const F = flashOf(el);
if (!F) return;
F.flipped = !F.flipped;
if (F.mode === "study") F.render();
else {
const wrap = F.root.querySelector(".flip");
if (wrap) wrap.classList.toggle("flipped", F.flipped);
}
};
A["fc-rate"] = el => {
const F = flashOf(el);
if (!F || !F.flipped) return;
const r = Number(el.dataset.r);
srsRate(F.words[F.i], r);
F.results.push(r);
F.i++;
F.flipped = false;
F.render();
if (F.opts.onRate) F.opts.onRate();
};
A["fc-nav"] = el => {
const F = flashOf(el);
if (!F) return;
F.i = (F.i + Number(el.dataset.d) + F.words.length) % F.words.length;
F.flipped = false;
F.render();
};
A["fc-shuffle"] = el => {
const F = flashOf(el);
F.words = shuffle(F.words);
F.i = 0;
F.flipped = false;
F.render();
};
A["fc-restart"] = el => {
const F = flashOf(el);
F.start();
};
A["fc-mode"] = el => {
const F = flashOf(el);
F.start(el.dataset.m);
};

const LV = { q: "", cat: "", pos: "", status: "", shown: 60 };
function levelWords() {
const q = LV.q.trim().toLowerCase();
const plain = q.replace(/[^a-z]/g, "");
return S.vocab.filter(w => {
if (w.lvl !== S.level) return false;
if (LV.cat && w.cat !== LV.cat) return false;
if (LV.pos && w.pos !== LV.pos) return false;
if (LV.status && srsStatus(w.key) !== LV.status) return false;
if (q) {
if (isTh(q)) return w.th.includes(q);
return w.en.toLowerCase().includes(q) || plain.length > 1 && plainRom(w.rom).includes(plain);
}
return true;
});
}
function wordFilterHTML() {
const cats = Array.from(new Set(S.vocab.filter(w => w.lvl === S.level).map(w => w.cat))).sort();
const poss = Array.from(new Set(S.vocab.filter(w => w.lvl === S.level).map(w => w.pos))).sort();
return `<div class="toolbar"><input class="input grow-input" id="lvl-search" type="search" placeholder="Filter by Thai, sound (sawatdii) or meaning…" aria-label="Filter words" autocomplete="off" value="${esc(LV.q)}">
<select class="select" id="lvl-cat" aria-label="Category"><option value="">All topics</option>${cats.map(c => `<option value="${c}" ${LV.cat === c ? "selected" : ""}>${c}</option>`).join("")}</select>
<select class="select" id="lvl-pos" aria-label="Part of speech"><option value="">All types</option>${poss.map(c => `<option value="${c}" ${LV.pos === c ? "selected" : ""}>${c}</option>`).join("")}</select>
<select class="select" id="lvl-status" aria-label="Status">${[["", "All status"], ["new", "New"], ["due", "Due"], ["learning", "Learning"], ["mature", "Mastered"]].map(x => `<option value="${x[0]}" ${LV.status === x[0] ? "selected" : ""}>${x[1]}</option>`).join("")}</select></div>`;
}
function renderLevelWords() {
const root = $("#lvl-body");
const list = levelWords();
const slice = list.slice(0, LV.shown);
root.innerHTML = `${wordFilterHTML()}<p class="small muted mb">${list.length} words</p><div class="grid g-wide wgrid">${slice.map(wordCardHTML).join("")}</div>${list.length > slice.length ? `<div class="center mt"><button class="btn" data-act="lvl-more">Show ${Math.min(60, list.length - slice.length)} more</button></div>` : ""}${list.length ? "" : '<div class="empty">No words match.</div>'}`;
}
function renderLevelGrammar() {
const g = S.grammar.filter(x => x.lvl === S.level);
$("#lvl-body").innerHTML = g.length ? `<div class="stack">${g.map(x => `<div class="card"><div class="row between"><h3 class="sub" style="margin:0">${esc(x.title)}</h3>${levelTag(x.lvl)}</div><p class="pattern han" style="margin:.4rem 0;font-weight:700;color:var(--seal)">${esc(x.pattern)}</p><p class="small">${esc(x.expl)}</p>${x.ex.map(e => `<div class="example"><div class="row between" style="flex-wrap:nowrap;align-items:flex-start"><div class="zh">${esc(e.th)}</div><button class="mini" data-act="speak" data-t="${esc(e.th)}" aria-label="Listen">${ico("volume")}</button></div><div class="small py">${romHTML(e.rom)}</div><div class="small muted">${esc(e.en)}</div></div>`).join("")}</div>`).join("")}</div>` : '<div class="empty">No grammar points at this level yet.</div>';
}
function renderLevelIdioms() {
const g = S.idioms.filter(x => x.lvl === S.level);
$("#lvl-body").innerHTML = g.length ? `<div class="grid g-wide">${g.map(x => `<div class="card"><div class="row between" style="flex-wrap:nowrap"><span class="hanzi" style="font-family:var(--font-han);font-size:1.4rem;font-weight:700">${esc(x.th)}</span><span class="acts"><button class="mini ${S.deck.has(x.key) ? "on" : ""}" data-act="save" data-key="${esc(x.key)}" aria-label="Save">${ico("star")}</button><button class="mini" data-act="speak" data-t="${esc(x.th)}" aria-label="Listen">${ico("volume")}</button></span></div><div class="py">${romHTML(x.rom)}</div><div class="small muted mt-s">Literal: ${esc(x.lit)}</div><div class="mt-s">${esc(x.en)}</div></div>`).join("")}</div>` : '<div class="empty">No idioms at this level yet. Try Level 3 or 4.</div>';
}
let levelQuizMode = "meaning";
function openLevel(lvl, tab) {
const root = $("#level-root");
const total = S.vocab.filter(w => w.lvl === lvl).length;
const tabs = [["vocab", "list", "Words"], ["flash", "cards", "Flashcards"], ["quiz", "target", "Quiz"], ["grammar", "book", "Grammar"], ["idioms", "sparkle", "Idioms"]];
root.innerHTML = `<div class="page-head"><div><span class="eyebrow">${LEVELS[lvl].band} · ${LEVELS[lvl].cefr}</span><h1 class="title" tabindex="-1">${LEVELS[lvl].name}</h1><p class="lede">${esc(LEVELS[lvl].desc)} ${total} words.</p></div></div>
<div class="row between mb" style="gap:.8rem"><div class="seg" role="tablist" aria-label="Level sections">${tabs.map(t => `<button role="tab" class="${tab === t[0] ? "on" : ""}" data-act="lvl-tab" data-tab="${t[0]}">${ico(t[1])}${t[2]}</button>`).join("")}</div><div class="tone-legend" aria-label="Tone colors">${[1, 2, 3, 4, 5].map(t => `<span class="tone-${t}">${TONE_NAME[t]}</span>`).join("")}</div></div>
<div id="lvl-body"></div>`;
if (tab === "vocab") renderLevelWords();
else if (tab === "grammar") renderLevelGrammar();
else if (tab === "idioms") renderLevelIdioms();
else if (tab === "flash") {
const f = createFlash("level", $("#lvl-body"), () => levelWords(), { canBrowse: true, onRate: refreshBadges });
f.start("study");
} else {
const modes = `<div class="center mb"><div class="seg" role="group" aria-label="Quiz type">${Object.keys(WQ_MODES).map(m => `<button data-act="lq-mode" data-m="${m}" class="${levelQuizMode === m ? "on" : ""}">${WQ_MODES[m]}</button>`).join("")}</div></div>`;
const q = makeQuiz("level", $("#lvl-body"), wordQuizGen(() => S.vocab.filter(w => w.lvl === S.level), () => levelQuizMode), { srs: true, controls: modes });
q.next();
}
}
A["lvl-tab"] = el => go(`/level/${S.level}/${el.dataset.tab}`);
A["lvl-more"] = () => {
LV.shown += 60;
renderLevelWords();
};
A["lq-mode"] = el => {
levelQuizMode = el.dataset.m;
const q = QZ.level;
q.controls = `<div class="center mb"><div class="seg" role="group" aria-label="Quiz type">${Object.keys(WQ_MODES).map(m => `<button data-act="lq-mode" data-m="${m}" class="${levelQuizMode === m ? "on" : ""}">${WQ_MODES[m]}</button>`).join("")}</div></div>`;
q.reset();
};
document.addEventListener("input", e => {
if (e.target.id === "lvl-search") {
LV.q = e.target.value;
LV.shown = 60;
const pos = e.target.selectionStart;
renderLevelWords();
const el = $("#lvl-search");
el.focus();
el.setSelectionRange(pos, pos);
}
});
document.addEventListener("change", e => {
const m = { "lvl-cat": "cat", "lvl-pos": "pos", "lvl-status": "status" }[e.target.id];
if (m) {
LV[m] = e.target.value;
LV.shown = 60;
renderLevelWords();
}
});

VIEW_ENTER.review = () => {
const root = $("#review-root");
const due = dueKeys();
const items = due.map(k => itemFromKey(k)).filter(Boolean).map(x => Object.assign({}, x, { key: x.key || x.th }));
root.innerHTML = `<div class="page-head"><div><span class="eyebrow">Spaced repetition</span><h1 class="title" tabindex="-1">Daily review</h1><p class="lede">${items.length ? `${items.length} cards are due.` : "Nothing is due. Add words from any level, or study new ones below."}</p></div><div class="row"><button class="btn" data-act="rv-new">${ico("plus")}Study new words</button></div></div><div id="rv-body"></div>`;
const f = createFlash("review", $("#rv-body"), () => items, { queue: p => p, onRate: refreshBadges });
f.start("study");
};
A["rv-new"] = () => {
const pool = S.vocab.filter(w => !S.srs[w.key] && w.lvl <= 2);
const items = shuffle(pool).slice(0, S.settings.newPerSession);
const f = createFlash("review", $("#rv-body"), () => items, { queue: p => p, onRate: refreshBadges });
f.start("study");
};
