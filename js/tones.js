"use strict";
const TONE_INFO = [
{ n: 1, th: "สามัญ", name: "Mid", ipa: "˧", lv: [3, 3], desc: "Flat and relaxed, at your normal speaking pitch.", w: "มา", wr: "maa1", we: "to come" },
{ n: 2, th: "เอก", name: "Low", ipa: "˨˩", lv: [2, 1], desc: "Starts a little below mid and drops lower, like a flat sigh.", w: "ใหม่", wr: "mai2", we: "new" },
{ n: 3, th: "โท", name: "Falling", ipa: "˥˩", lv: [5, 1], desc: "Starts high and drops sharply, like an emphatic “No!”.", w: "ไม่", wr: "mai3", we: "not" },
{ n: 4, th: "ตรี", name: "High", ipa: "˦˥", lv: [4, 5], desc: "Starts above mid and rises a little, higher and tenser than mid.", w: "ม้า", wr: "maa4", we: "horse" },
{ n: 5, th: "จัตวา", name: "Rising", ipa: "˩˩˦", lv: [1, 4], desc: "Starts low, dips slightly, then rises, like a question “Huh?”.", w: "หมา", wr: "maa5", we: "dog" }
];
const lvY = l => 50 - (l - 1) * 11;
function contourSVG(t) {
const info = TONE_INFO[t - 1];
let d;
if (t === 5) d = `M6 ${lvY(1.6)} Q30 ${lvY(0.9)} 50 ${lvY(1.4)} T94 ${lvY(4)}`;
else if (t === 2) d = `M6 ${lvY(2.4)} Q50 ${lvY(2)} 94 ${lvY(1.1)}`;
else if (t === 3) d = `M6 ${lvY(5)} Q40 ${lvY(4.2)} 94 ${lvY(1)}`;
else if (t === 4) d = `M6 ${lvY(3.8)} Q50 ${lvY(3.9)} 94 ${lvY(5)}`;
else d = `M6 ${lvY(3)} L94 ${lvY(3)}`;
return `<svg class="contour tone-${t}" viewBox="0 0 100 56" role="img" aria-label="${info.name} tone contour"><line class="axis" x1="0" y1="${lvY(1)}" x2="100" y2="${lvY(1)}"/><line class="axis" x1="0" y1="${lvY(3)}" x2="100" y2="${lvY(3)}"/><line class="axis" x1="0" y1="${lvY(5)}" x2="100" y2="${lvY(5)}"/><path d="${d}"/></svg>`;
}

function toneCalc(cls, kind, mark) {
const steps = [];
const MK = ["no tone mark", "mai ek ( ่ )", "mai tho ( ้ )", "mai tri ( ๊ )", "mai chattawa ( ๋ )"];
const clsText = { mid: "mid-class", high: "high-class", low: "low-class" }[cls];
const kindText = { live: "live syllable (long vowel or ends in m, n, ng, y, w)", deadShort: "dead syllable with a short vowel", deadLong: "dead syllable with a long vowel (ends in k, p, t)" }[kind];
steps.push(`Consonant: ${clsText}`);
steps.push(`Syllable: ${kindText}`);
steps.push(`Mark: ${MK[mark]}`);
let tone = 0;
let note = "";
if ((cls === "high" || cls === "low") && mark > 2) return { tone: 0, steps, note: "Mai tri and mai chattawa are only written on mid-class consonants." };
if (mark === 0) {
if (kind === "live") tone = cls === "high" ? 5 : 1;
else if (cls === "low") tone = kind === "deadShort" ? 4 : 3;
else tone = 2;
note = kind === "live" ? (cls === "high" ? "No mark, live syllable, high class → rising." : "No mark, live syllable, " + cls + " class → mid.") : cls === "low" ? `No mark, dead syllable, low class → ${kind === "deadShort" ? "high (short vowel)" : "falling (long vowel)"}.` : "No mark, dead syllable, " + cls + " class → low.";
} else if (mark === 1) {
tone = cls === "low" ? 3 : 2;
note = cls === "low" ? "Mai ek on a low-class consonant → falling." : "Mai ek on a " + cls + "-class consonant → low.";
} else if (mark === 2) {
tone = cls === "low" ? 4 : 3;
note = cls === "low" ? "Mai tho on a low-class consonant → high." : "Mai tho on a " + cls + "-class consonant → falling.";
} else if (mark === 3) {
tone = 4;
note = "Mai tri on a mid-class consonant → high.";
} else {
tone = 5;
note = "Mai chattawa on a mid-class consonant → rising.";
}
if (mark > 0) steps.push("A tone mark overrides the default rule.");
else steps.push(kind === "live" ? "No mark: use the live-syllable default for the class." : "No mark: use the dead-syllable rule for the class.");
return { tone, steps, note };
}

const TN = { tab: "intro", cls: "mid", kind: "live", mark: 0 };
const MINIMAL = [
{ t: "maa", items: [["มา", "maa1", "to come"], ["ม้า", "maa4", "horse"], ["หมา", "maa5", "dog"]] },
{ t: "mai", items: [["ไม่", "mai3", "not"], ["ใหม่", "mai2", "new"], ["ไหม", "mai5", "(question particle)"], ["ไม้", "maai4", "wood"]] },
{ t: "kao", items: [["เขา", "kao5", "he; she"], ["เข่า", "kao2", "knee"], ["เข้า", "kao3", "to enter"], ["เก้า", "gao3", "nine"], ["เก่า", "gao2", "old"], ["เกา", "gao1", "to scratch"]] },
{ t: "kaao", items: [["ขาว", "kaao5", "white"], ["ข่าว", "kaao2", "news"], ["ข้าว", "kaao3", "rice"]] },
{ t: "kaa", items: [["คา", "kaa1", "to be stuck"], ["ค่า", "kaa3", "price; value"], ["ค้า", "kaa4", "to trade"]] },
{ t: "glai", items: [["ไกล", "glai1", "far"], ["ใกล้", "glai3", "near"]] },
{ t: "sɯa", items: [["เสือ", "sɯa5", "tiger"], ["เสื้อ", "sɯa3", "shirt"]] },
{ t: "sɔɔng", items: [["สอง", "sɔɔng5", "two"], ["ซอง", "sɔɔng1", "envelope"]] },
{ t: "naa", items: [["นา", "naa1", "rice field"], ["หน้า", "naa3", "face; front"], ["น้า", "naa4", "aunt/uncle (mother's sibling)"]] },
{ t: "suai", items: [["สวย", "suai5", "beautiful"], ["ซวย", "suai1", "unlucky"]] },
{ t: "kai", items: [["ไก่", "gai2", "chicken"], ["ไข่", "kai2", "egg"], ["ไกล", "glai1", "far"]] },
{ t: "bpaa", items: [["ป่า", "bpaa2", "forest"], ["ปา", "bpaa1", "to throw"], ["ป้า", "bpaa3", "aunt (older)"]] }
].map(g => ({ t: g.t, items: g.items.map(x => ({ th: x[0], rom: x[1], en: x[2] })) }));

VIEW_ENTER.tones = () => {
const tabs = [["intro", "chart", "Five tones"], ["calc", "scale", "Tone calculator"], ["rules", "list", "Rules chart"], ["drill", "target", "Drills"], ["pairs", "repeat", "Minimal pairs"]];
$("#tones-root").innerHTML = `<div class="page-head"><div><span class="eyebrow">วรรณยุกต์</span><h1 class="title" tabindex="-1">Tone lab</h1><p class="lede">Thai has five tones. The same sound can mean different things: <span class="han">ไกล</span> is “far” and <span class="han">ใกล้</span> is “near”. Learn the pitch shapes, then the spelling rules that predict them.</p></div></div>
<div class="seg mb" role="tablist" aria-label="Tone sections">${tabs.map(t => `<button role="tab" class="${TN.tab === t[0] ? "on" : ""}" data-act="tn-tab" data-t="${t[0]}">${ico(t[1])}${t[2]}</button>`).join("")}</div><div id="tn-body"></div>`;
renderTones();
};
function renderTones() {
const b = $("#tn-body");
({ intro: tnIntro, calc: tnCalc, rules: tnRules, drill: tnDrill, pairs: tnPairs })[TN.tab](b);
}
A["tn-tab"] = el => {
TN.tab = el.dataset.t;
$$("#v-tones [data-act='tn-tab']").forEach(x => x.classList.toggle("on", x === el));
renderTones();
};
function tnIntro(b) {
b.innerHTML = `<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:.8rem">${TONE_INFO.map(t => `<div class="card center"><div class="tone-${t.n}" style="font-weight:800;font-size:1.1rem">${t.name}</div><div class="han small muted">${t.th}</div>${contourSVG(t.n)}<div class="small muted">${t.ipa}</div><button class="chip mt-s" data-act="speak" data-t="${esc(t.w)}"><span class="han">${t.w}</span> <span class="py">${romHTML(t.wr)}</span></button><div class="tiny muted mt-s">${t.we}</div><p class="tiny mt-s">${t.desc}</p></div>`).join("")}</div>
<div class="card mt"><h3 class="sec">Color and pattern</h3><p class="small">Tones are colored in the romanization everywhere in the app. If colors are hard to tell apart, turn on tone patterns: each tone also gets its own underline style.</p>
<div class="row mt-s"><span class="chip tone-1"><b>Mid</b> solid</span><span class="chip tone-2"><b>Low</b> dotted</span><span class="chip tone-3"><b>Falling</b> wavy</span><span class="chip tone-4"><b>High</b> double</span><span class="chip tone-5"><b>Rising</b> dashed</span></div>
<label class="row small mt" style="gap:.5rem"><span class="switch"><input type="checkbox" data-setting="tonePattern" data-type="bool" aria-label="Tone patterns"><span></span></span>Show underline patterns</label></div>
<div class="card mt"><h3 class="sec">Tips</h3><ul class="small" style="padding-left:1.1rem;display:flex;flex-direction:column;gap:.3rem"><li>Tone is a property of the whole syllable, not a mood. Keep pitch steady inside a tone.</li><li>Practise with the five “maa” words, then record yourself and compare with the audio.</li><li>Thai tones are relative to your own voice range, not an absolute pitch.</li><li>Fast speech softens tones in unstressed syllables. Learn the rules, then listen for exceptions.</li></ul></div>`;
applySettings();
}

function tnCalc(b) {
const r = toneCalc(TN.cls, TN.kind, TN.mark);
const btn = (grp, val, label, cur) => `<button class="q-opt${cur === val ? " correct" : ""}" data-act="tn-set" data-g="${grp}" data-v="${val}"><span class="grow">${label}</span></button>`;
b.innerHTML = `<div class="card"><h3 class="sec">Tone calculator</h3><p class="small mb">Pick the three ingredients of a written syllable. The calculator shows which tone Thai spelling gives you, step by step.</p>
<div class="small muted mb">1. Consonant class</div><div class="calc-grid mb">${btn("cls", "mid", "Mid class", TN.cls)}${btn("cls", "high", "High class", TN.cls)}${btn("cls", "low", "Low class", TN.cls)}</div>
<div class="small muted mb">2. Syllable type</div><div class="calc-grid mb">${btn("kind", "live", "Live", TN.kind)}${btn("kind", "deadShort", "Dead · short vowel", TN.kind)}${btn("kind", "deadLong", "Dead · long vowel", TN.kind)}</div>
<div class="small muted mb">3. Tone mark</div><div class="calc-grid mb">${btn("mark", 0, "None", TN.mark)}${btn("mark", 1, "ก่ mai ek", TN.mark)}${btn("mark", 2, "ก้ mai tho", TN.mark)}${btn("mark", 3, "ก๊ mai tri", TN.mark)}${btn("mark", 4, "ก๋ mai chattawa", TN.mark)}</div>
<div class="calc-result">${r.tone ? `<div>${contourSVG(r.tone)}</div><div><div class="cr-tone tone-${r.tone}">${TONE_INFO[r.tone - 1].name} tone</div><div class="small muted">${TONE_INFO[r.tone - 1].th} · ${TONE_INFO[r.tone - 1].ipa}</div></div>` : `<div class="cr-tone">Not used</div>`}<div class="grow small">${esc(r.note)}</div></div>
<ul class="calc-steps mt">${r.steps.map((s, i) => `<li class="${i === r.steps.length - 1 ? "now" : ""}">${esc(s)}</li>`).join("")}</ul></div>
<div class="card mt"><h3 class="sec">Challenge</h3><p class="small mb">A random syllable appears. Use the rules to name its tone. Correct answers build a streak.</p><div id="tn-chal"></div></div>`;
const gen = () => {
const pool = LETTERS.filter(l => !l.obs && l.ch !== "อ" && l.ch !== "ห" && l.ch !== "ฮ" && !["ญ", "ณ", "ฬ"].includes(l.ch));
const cls = pick(["mid", "high", "low"]);
const kind = pick(["live", "deadShort", "deadLong"]);
const markPool = cls === "mid" ? [0, 0, 1, 2, 3, 4] : [0, 0, 1, 2];
const mark = pick(markPool);
const cons = pick(pool.filter(l => l.cls === cls));
const mk = ["", "่", "้", "๊", "๋"][mark];
const syl = kind === "live" ? cons.ch + mk + "า" : kind === "deadShort" ? cons.ch + mk + "ะ" : cons.ch + mk + "าก";
const r2 = toneCalc(cls, kind, mark);
const lab = { live: "live", deadShort: "dead, short", deadLong: "dead, long" }[kind];
return { prompt: `<div class="hz-xl">${syl}</div><div class="hint">${cons.cls} class · ${lab} · ${mark ? ["", "mai ek", "mai tho", "mai tri", "mai chattawa"][mark] : "no mark"}</div>`, say: syl, opts: [1, 2, 3, 4, 5].map(t => ({ html: `<span class="tone-${t}"><b>${TONE_INFO[t - 1].name}</b></span>`, ok: t === r2.tone })), explain: esc(r2.note) };
};
const q = makeQuiz("tonecalc", $("#tn-chal"), gen, {});
q.next();
}
A["tn-set"] = el => {
const g = el.dataset.g;
TN[g] = g === "mark" ? Number(el.dataset.v) : el.dataset.v;
if ((TN.cls !== "mid") && TN.mark > 2) TN.mark = 0;
tnCalc($("#tn-body"));
};

function tnRules(b) {
const cell = n => `<td><span class="tone-${n}"><b>${TONE_INFO[n - 1].name}</b></span></td>`;
b.innerHTML = `<div class="card mb"><p class="small">Find the consonant class, then the row for the syllable type. A tone mark always overrides the default.</p></div>
<div class="tbl-wrap"><table><thead><tr><th>Class</th><th>Syllable</th><th>No mark</th><th>่ ek</th><th>้ tho</th><th>๊ tri</th><th>๋ chattawa</th></tr></thead><tbody>
<tr><td rowspan="2"><span class="class-dot mid"></span><b>Mid</b></td><td>Live</td>${cell(1)}${cell(2)}${cell(3)}${cell(4)}${cell(5)}</tr>
<tr><td>Dead</td>${cell(2)}${cell(2)}${cell(3)}${cell(4)}${cell(5)}</tr>
<tr><td rowspan="2"><span class="class-dot high"></span><b>High</b></td><td>Live</td>${cell(5)}${cell(2)}${cell(3)}<td>–</td><td>–</td></tr>
<tr><td>Dead</td>${cell(2)}${cell(2)}${cell(3)}<td>–</td><td>–</td></tr>
<tr><td rowspan="3"><span class="class-dot low"></span><b>Low</b></td><td>Live</td>${cell(1)}${cell(3)}${cell(4)}<td>–</td><td>–</td></tr>
<tr><td>Dead, short vowel</td>${cell(4)}${cell(3)}${cell(4)}<td>–</td><td>–</td></tr>
<tr><td>Dead, long vowel</td>${cell(3)}${cell(3)}${cell(4)}<td>–</td><td>–</td></tr></tbody></table></div>
<div class="grid g-auto mt"><div class="card"><h3 class="sub">Live syllable</h3><p class="small">Ends in a long vowel or in a sonorant final: m, n, ng, y, w. Example: <span class="han">มา</span>, <span class="han">ชื่อ</span>, <span class="han">คน</span>.</p></div>
<div class="card"><h3 class="sub">Dead syllable</h3><p class="small">Ends in a short vowel, or in a stop final: k, p, t. Example: <span class="han">จะ</span>, <span class="han">นก</span>, <span class="han">ลูก</span>.</p></div>
<div class="card"><h3 class="sub">Special cases</h3><p class="small"><span class="han">ห</span> in front of a low sonorant (<span class="han">หมา</span>, <span class="han">หนู</span>) makes the syllable behave as high class. <span class="han">อ</span> before <span class="han">ย</span> (<span class="han">อย่า</span>, <span class="han">อยู่</span>) makes it mid class.</p></div></div>`;
}

function tnDrill(b) {
const modes = { tone: "Tone ID from word", rom: "Pick the sound", listen: "Listening" };
const cur = TN.drill || "tone";
const controls = `<div class="center mb"><div class="seg" role="group" aria-label="Drill type">${Object.keys(modes).map(m => `<button data-act="tn-drill" data-m="${m}" class="${cur === m ? "on" : ""}">${modes[m]}</button>`).join("")}</div></div>`;
const q = makeQuiz("tonedrill", b, wordQuizGen(() => S.vocab.filter(w => w.lvl <= 3), () => TN.drill || "tone"), { controls, srs: false });
q.next();
}
A["tn-drill"] = el => {
TN.drill = el.dataset.m;
tnDrill($("#tn-body"));
};

function tnPairs(b) {
b.innerHTML = `<div class="card mb"><div class="row between"><div><h3 class="sec" style="margin:0">Listening game</h3><p class="small muted">Hear a word from a minimal pair set and pick the right meaning.</p></div></div><div id="mp-game" class="mt"></div></div>
<h3 class="sec">All sets</h3><div class="stack">${MINIMAL.map(g => `<div class="card"><div class="mp-row">${g.items.map(i => `<button class="mp-card" data-act="mp-say" data-t="${esc(i.th)}"><div class="gl han">${esc(i.th)}</div><div class="py">${romHTML(i.rom)}</div><div class="tiny muted">${esc(i.en)}</div></button>`).join("")}</div></div>`).join("")}</div>`;
const gen = () => {
const g = pick(MINIMAL.filter(x => x.items.length >= 2));
const w = pick(g.items);
const o = shuffle(g.items.slice(0, 4).includes(w) ? g.items.slice(0, 4) : g.items.slice(0, 3).concat([w]));
return { key: null, prompt: `<div class="hint">Which word did you hear?</div>`, say: w.th, autoSay: true, opts: o.map(x => ({ html: `<span class="han">${esc(x.th)}</span> <span class="py">${romHTML(x.rom)}</span> · ${esc(x.en)}`, ok: x === w })), explain: `<b>${esc(w.th)}</b> ${romHTML(w.rom)} · ${esc(w.en)}` };
};
const q = makeQuiz("pairs", $("#mp-game"), gen, {});
q.next();
}
A["mp-say"] = el => speak(el.dataset.t);
