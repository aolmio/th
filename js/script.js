"use strict";
const CONS_RAW = `ก|m|g|k|ไก่|gai2|chicken
ข|h|k|k|ไข่|kai2|egg
ฃ|h|k|k|ขวด|kuat2|bottle (obsolete letter)
ค|l|k|k|ควาย|kwaai1|water buffalo
ฅ|l|k|k|คน|kon1|person (obsolete letter)
ฆ|l|k|k|ระฆัง|ra4-kang1|bell
ง|l|ng|ng|งู|nguu1|snake
จ|m|j|t|จาน|jaan1|plate
ฉ|h|ch|t|ฉิ่ง|ching2|small cymbals
ช|l|ch|t|ช้าง|chaang4|elephant
ซ|l|s|t|โซ่|soo3|chain
ฌ|l|ch|t|เฌอ|chɤɤ1|tree (literary)
ญ|l|y|n|หญิง|ying5|woman
ฎ|m|d|t|ชฎา|cha4-daa1|headdress
ฏ|m|dt|t|ปฏัก|bpa2-dtak2|goad
ฐ|h|t|t|ฐาน|taan5|base
ฑ|l|t|t|มณโฑ|mon1-too1|Montho (a queen)
ฒ|l|t|t|ผู้เฒ่า|puu3-tao3|elder
ณ|l|n|n|เณร|neen1|novice monk
ด|m|d|t|เด็ก|dek2|child
ต|m|dt|t|เต่า|dtao2|turtle
ถ|h|t|t|ถุง|tung5|bag
ท|l|t|t|ทหาร|ta4-haan5|soldier
ธ|l|t|t|ธง|tong1|flag
น|l|n|n|หนู|nuu5|mouse
บ|m|b|p|ใบไม้|bai1-maai4|leaf
ป|m|bp|p|ปลา|bplaa1|fish
ผ|h|p|p|ผึ้ง|pɯng3|bee
ฝ|h|f|p|ฝา|faa5|lid
พ|l|p|p|พาน|paan1|tray
ฟ|l|f|p|ฟัน|fan1|tooth
ภ|l|p|p|สำเภา|sam5-pao1|sailing junk
ม|l|m|m|ม้า|maa4|horse
ย|l|y|y|ยักษ์|yak4|giant
ร|l|r|n|เรือ|rɯa1|boat
ล|l|l|n|ลิง|ling1|monkey
ว|l|w|w|แหวน|wɛɛn5|ring
ศ|h|s|t|ศาลา|saa5-laa1|pavilion
ษ|h|s|t|ฤๅษี|rɯɯ4-sii5|hermit
ส|h|s|t|เสือ|sɯa5|tiger
ห|h|h|-|หีบ|hiip2|chest
ฬ|l|l|n|จุฬา|ju2-laa1|kite
อ|m|-|-|อ่าง|aang2|basin
ฮ|l|h|-|นกฮูก|nok4-huuk3|owl`;
const CLS_NAME = { m: "mid", h: "high", l: "low" };
const LETTERS = CONS_RAW.split("\n").map(ln => {
const [ch, c, ini, fin, w, wr, en] = ln.split("|");
const cls = CLS_NAME[c];
return { ch, cls, ini, fin, w, wr, en, obs: /obsolete/.test(en), rom: (ini === "-" ? "" : ini) + "ɔɔ" + (cls === "high" ? "5" : "1"), enName: en };
});
const LETTER_BY = new Map(LETTERS.map(l => [l.ch, l]));
const VOWELS_RAW = `ะ|-ะ|a|short|a|จะ|ja2|will
า|-า|aa|long|aa|มา|maa1|to come
ิ|-ิ|i|short|i|ผิด|pit2|wrong
ี|-ี|ii|long|ii|ดี|dii1|good
ึ|-ึ|ɯ|short|ɯ|ฝึก|fɯk2|to practise
ื|-ือ|ɯɯ|long|ɯɯ|มือ|mɯɯ1|hand
ุ|-ุ|u|short|u|คุณ|kun1|you; Mr/Ms
ู|-ู|uu|long|uu|ครู|kruu1|teacher
เะ|เ-ะ|e|short|e|เด็ก|dek2|child
เ|เ-|ee|long|ee|เพลง|pleeng1|song
แะ|แ-ะ|ɛ|short|ɛ|แพะ|pɛ4|goat
แ|แ-|ɛɛ|long|ɛɛ|แพง|pɛɛng1|expensive
โะ|โ-ะ|o|short|o|โต๊ะ|dto4|table
โ|โ-|oo|long|oo|โต|dtoo1|big
เาะ|เ-าะ|ɔ|short|ɔ|เกาะ|gɔ2|island
อ|-อ|ɔɔ|long|ɔɔ|พ่อ|pɔɔ3|father
เอะ|เ-อะ|ɤ|short|ɤ|เถอะ|tɤ2|let's
เอ|เ-อ|ɤɤ|long|ɤɤ|เธอ|tɤɤ1|you; she
เียะ|เ-ียะ|ia|short|ia|เกี๊ยะ|gia4|wooden clog
เีย|เ-ีย|iia|long|ia|เสีย|sia5|to lose; broken
เือะ|เ-ือะ|ɯa|short|ɯa|เฉือะ|chɯa2|slicing sound
เือ|เ-ือ|ɯɯa|long|ɯa|เรือ|rɯa1|boat
ัวะ|-ัวะ|ua|short|ua|ผัวะ|pua2|smack
ัว|-ัว|uua|long|ua|ตัว|dtua1|body
ำ|-ำ|am|short|am|น้ำ|nam4|water
ไ|ไ-|ai|short|ai|ไป|bpai1|to go
ใ|ใ-|ai|short|ai|ใจ|jai1|heart
เา|เ-า|ao|short|ao|เรา|rao1|we
ัย|-ัย|ai|short|ai|ไทย|tai1|Thai
าย|-าย|aai|long|aai|ขาย|kaai5|to sell
อย|-อย|ɔɔi|long|ɔɔi|น้อย|nɔɔi4|few
วย|-วย|uai|long|uai|ด้วย|duai3|with
เย|เ-ย|ɤɤi|long|ɤɤi|เคย|kɤɤi1|ever
ฤ|ฤ|rɯ|short|rɯ|ฤดู|rɯ4-duu1|season`;
const VOWELS = VOWELS_RAW.split("\n").map(ln => {
const [sym, form, snd, len, , w, wr, en] = ln.split("|");
return { sym, form, snd, len, w, wr, en };
});
const TONE_MARKS = [
{ ch: "่", name: "mai ek", th: "ไม้เอก", n: 1, note: "Low tone with a mid-class consonant; falling with a high or low-class consonant." },
{ ch: "้", name: "mai tho", th: "ไม้โท", n: 2, note: "Falling tone with a mid or high-class consonant; high with a low-class consonant." },
{ ch: "๊", name: "mai tri", th: "ไม้ตรี", n: 3, note: "High tone. Only used with mid-class consonants (mostly loanwords and onomatopoeia)." },
{ ch: "๋", name: "mai chattawa", th: "ไม้จัตวา", n: 4, note: "Rising tone. Only used with mid-class consonants (mostly loanwords)." }
];
const DIGITS = "๐๑๒๓๔๕๖๗๘๙".split("");
const DIGIT_NAMES = ["sǔun", "nɯ̀ng", "sɔ̌ɔng", "sǎam", "sìi", "hâa", "hòk", "jèt", "bpɛ̀ɛt", "gâo"];
const SC = { tab: "cons", filter: "all", showObs: false };

VIEW_ENTER.script = () => {
const tabs = [["cons", "type", "Consonants"], ["vowels", "blocks", "Vowels"], ["marks", "pen", "Tone marks & digits"], ["quiz", "target", "Practice"]];
$("#script-root").innerHTML = `<div class="page-head"><div><span class="eyebrow">อักษรไทย</span><h1 class="title" tabindex="-1">Thai script</h1><p class="lede">44 consonants in three classes, 32 vowel forms, four tone marks and Thai digits. Tap any tile to hear it.</p></div></div>
<div class="seg mb" role="tablist" aria-label="Script sections">${tabs.map(t => `<button role="tab" class="${SC.tab === t[0] ? "on" : ""}" data-act="sc-tab" data-t="${t[0]}">${ico(t[1])}${t[2]}</button>`).join("")}</div><div id="sc-body"></div>`;
renderScript();
};
function renderScript() {
const b = $("#sc-body");
if (SC.tab === "cons") scCons(b);
else if (SC.tab === "vowels") scVowels(b);
else if (SC.tab === "marks") scMarks(b);
else scQuiz(b);
}
A["sc-tab"] = el => {
SC.tab = el.dataset.t;
$$("#v-script [data-act='sc-tab']").forEach(x => x.classList.toggle("on", x === el));
renderScript();
};
function scCons(b) {
const list = LETTERS.filter(l => (SC.filter === "all" || l.cls === SC.filter) && (SC.showObs || !l.obs));
b.innerHTML = `<div class="card mb"><p class="small">Every consonant belongs to a <b>class</b>: <span class="class-dot mid"></span><b>mid</b> (9), <span class="class-dot high"></span><b>high</b> (11) or <span class="class-dot low"></span><b>low</b> (24). The class decides which tone a syllable gets, so learn it together with the letter. Each letter has an <b>initial</b> sound and often a different <b>final</b> sound.</p></div>
<div class="row mb"><div class="seg" role="group" aria-label="Class filter">${[["all", "All"], ["mid", "Mid"], ["high", "High"], ["low", "Low"]].map(x => `<button class="${SC.filter === x[0] ? "on" : ""}" data-act="sc-filter" data-f="${x[0]}">${x[1]}</button>`).join("")}</div><label class="row small muted" style="gap:.4rem"><span class="switch"><input type="checkbox" id="sc-obs" ${SC.showObs ? "checked" : ""} aria-label="Show obsolete letters"><span></span></span>Show obsolete (ฃ ฅ)</label></div>
<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:.6rem">${list.map(l => `<button class="letter-tile cls-${l.cls}" data-act="sc-letter" data-ch="${l.ch}" aria-label="${l.ch} ${l.cls} class"><span class="lt-ch">${l.ch}</span><span class="lt-r">${esc(l.ini === "-" ? "(silent)" : l.ini)}${l.fin !== "-" ? " / " + l.fin : ""}</span><span class="lt-n">${l.cls}</span></button>`).join("")}</div>
<div class="card mt" id="sc-detail" hidden></div>
<div class="card mt"><h3 class="sec">Class memory aids</h3><div class="grid g-auto">
<div><b><span class="class-dot mid"></span>Mid class (9)</b><p class="small">ก จ ด ต บ ป อ plus ฎ ฏ. Remember the phrase <span class="han">ไก่จิกเด็กตายบนปากโอ่ง</span> (“a chicken pecks a child dead on the rim of a jar”).</p></div>
<div><b><span class="class-dot high"></span>High class (11)</b><p class="small">ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห. Phrase: <span class="han">ผีฝากถุงข้าวสารให้ฉัน</span>. Every high-class letter has a low-class “twin” sound.</p></div>
<div><b><span class="class-dot low"></span>Low class (24)</b><p class="small">All the rest: ค ง ช ซ ท น พ ฟ ม ย ร ล ว ฮ and more. Sonorants (ง น ม ย ร ล ว ญ ณ ฬ) are “low sonorants”.</p></div></div></div>`;
}
A["sc-filter"] = el => {
SC.filter = el.dataset.f;
renderScript();
};
document.addEventListener("change", e => {
if (e.target.id === "sc-obs") {
SC.showObs = e.target.checked;
renderScript();
}
});
A["sc-letter"] = el => {
const l = LETTER_BY.get(el.dataset.ch);
speak(l.ch === "อ" ? "ออ" : l.ch + "อ");
const d = $("#sc-detail");
d.hidden = false;
const tonesRule = l.cls === "mid" ? "Mid tone by default; mai ek → low, mai tho → falling, mai tri → high, mai chattawa → rising." : l.cls === "high" ? "Rising tone by default; mai ek → low, mai tho → falling." : "Mid tone by default; mai ek → falling, mai tho → high.";
d.innerHTML = `<div class="row" style="align-items:flex-start;gap:1.2rem"><div class="gl-big han">${l.ch}</div><div class="grow"><h3 class="sub" style="margin:0">${l.ch} · ${l.cls} class${l.obs ? " · obsolete" : ""}</h3>
<p class="small mt-s">Name: <b class="py">${romHTML(l.rom)}</b> · initial sound <b>${l.ini === "-" ? "silent / glottal stop" : esc(l.ini)}</b> · final sound <b>${l.fin === "-" ? "none (not used as a final)" : esc(l.fin)}</b></p>
<p class="small mt-s">Keyword: <button class="chip" data-act="speak" data-t="${esc(l.w)}"><span class="han">${esc(l.w)}</span> <span class="py">${romHTML(l.wr)}</span> · ${esc(l.en)}</button></p>
<p class="small muted mt-s">${tonesRule}</p></div></div>`;
d.scrollIntoView({ block: "nearest", behavior: "smooth" });
};
function scVowels(b) {
b.innerHTML = `<div class="card mb"><p class="small">Thai vowels are written <b>before, after, above or below</b> the consonant. Some wrap around it. The dash <b>–</b> marks the consonant. Short and long vowels differ in length <i>and</i> change the tone rules (a dead syllable ends in a short vowel or a final k, p, t).</p></div>
<div class="tbl-wrap"><table><thead><tr><th>Written</th><th>Form</th><th>Sound</th><th>Length</th><th>Example</th></tr></thead><tbody>${VOWELS.map(v => `<tr><td class="hz-cell han" style="font-size:1.4rem">${esc(v.sym)}</td><td class="han">${esc(v.form)}</td><td><b class="py">${esc(v.snd)}</b></td><td>${v.len}</td><td><button class="chip" data-act="speak" data-t="${esc(v.w)}"><span class="han">${esc(v.w)}</span> <span class="py">${romHTML(v.wr)}</span> · ${esc(v.en)}</button></td></tr>`).join("")}</tbody></table></div>
<div class="card mt"><h3 class="sec">Pronunciation guide used in this app</h3><p class="small">Default: Paiboon+ style (ɯ ɤ ɛ ɔ with tone marks). You can switch to RTGS (official, no tones) or IPA in Settings.</p><div class="row mt-s">${["aa a", "ii i", "ɯɯ ɯ", "uu u", "ee e", "ɛɛ ɛ", "oo o", "ɔɔ ɔ", "ɤɤ ɤ"].map(x => `<span class="chip">${x}</span>`).join("")}</div></div>`;
}
function scMarks(b) {
b.innerHTML = `<div class="card mb"><h3 class="sec">Tone marks</h3><p class="small">Four marks sit above the consonant. What tone they give depends on the consonant class (see Tone lab).</p><div class="grid g-auto mt">${TONE_MARKS.map(m => `<div class="card"><div class="gl-big han">ก${m.ch}</div><b>${m.th}</b> <span class="muted small">${m.name}</span><p class="small mt-s">${m.note}</p></div>`).join("")}</div></div>
<div class="card"><h3 class="sec">Thai digits</h3><div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:.5rem">${DIGITS.map((d, i) => `<button class="letter-tile" data-act="speak" data-t="${["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"][i]}"><span class="lt-ch">${d}</span><span class="lt-r">${i}</span><span class="lt-n">${["sǔun", "nɯ̀ng", "sɔ̌ɔng", "sǎam", "sìi", "hâa", "hòk", "jèt", "bpɛ̀ɛt", "gâo"][i]}</span></button>`).join("")}</div></div>
<div class="card mt"><h3 class="sec">Other signs</h3><div class="stack">
<div class="row"><span class="gl-big han" style="font-size:2rem">ๆ</span><span class="small">Mai yamok. Repeat the previous word: <span class="han">เด็กๆ</span> “children”.</span></div>
<div class="row"><span class="gl-big han" style="font-size:2rem">์</span><span class="small">Thanthakhat. Silences the letter it sits on: <span class="han">ลิขิต</span>, <span class="han">โทรศัพท์</span> (final ท์ is not pronounced).</span></div>
<div class="row"><span class="gl-big han" style="font-size:2rem">ฯ</span><span class="small">Paiyannoi. Abbreviation mark, e.g. <span class="han">กรุงเทพฯ</span> for Bangkok.</span></div>
<div class="row"><span class="gl-big han" style="font-size:2rem">ฺ</span><span class="small">Phinthu. Marks the end of a syllable in Pali-Sanskrit words.</span></div>
<div class="row"><span class="gl-big han" style="font-size:2rem">ฯลฯ</span><span class="small">Etc.</span></div></div></div>`;
}
function scQuiz(b) {
const modes = { cls: "Letter class", sound: "Initial sound", final: "Final sound", word: "Keyword", vowel: "Vowel sound" };
const kind = SC.quizMode || "cls";
const controls = `<div class="center mb"><div class="seg" role="group" aria-label="Practice type">${Object.keys(modes).map(m => `<button data-act="sc-qmode" data-m="${m}" class="${kind === m ? "on" : ""}">${modes[m]}</button>`).join("")}</div></div>`;
const pool = LETTERS.filter(l => !l.obs);
const gen = () => {
const m = SC.quizMode || "cls";
if (m === "cls") {
const l = pick(pool);
return { prompt: `<div class="hz-xl">${l.ch}</div><div class="hint">Which class is this consonant?</div>`, say: l.ch === "อ" ? "ออ" : l.ch + "อ", opts: ["mid", "high", "low"].map(c => ({ html: `<span class="class-dot ${c}"></span>${c} class`, ok: c === l.cls })), explain: `${l.ch} is a ${l.cls}-class letter. Keyword: ${esc(l.w)} (${esc(l.en)}).` };
}
if (m === "sound" || m === "final") {
const fin = m === "final";
const cand = pool.filter(l => (fin ? l.fin : l.ini) !== "-");
const l = pick(cand);
const vals = Array.from(new Set(cand.map(x => (fin ? x.fin : x.ini))));
const right = fin ? l.fin : l.ini;
const o = choices(right, vals, 4, x => x);
return { prompt: `<div class="hz-xl">${l.ch}</div><div class="hint">${fin ? "Sound at the END of a syllable" : "Sound at the START of a syllable"}</div>`, say: l.ch + "อ", opts: o.map(x => ({ html: `<b>${esc(x)}</b>`, ok: x === right })), explain: `${l.ch}: initial ${esc(l.ini)}, final ${esc(l.fin)}.` };
}
if (m === "word") {
const l = pick(pool);
const o = choices(l, pool, 4, x => x.ch);
return { prompt: `<div class="hz-xl" style="font-size:1.9rem">${esc(l.w)}</div><div class="py">${romHTML(l.wr)}</div><div class="hint">Which letter is its keyword letter? (${esc(l.en)})</div>`, say: l.w, thOpts: true, opts: o.map(x => ({ html: x.ch, ok: x === l })), explain: `${l.ch} is the keyword letter for ${esc(l.w)}.` };
}
const v = pick(VOWELS);
const sounds = Array.from(new Set(VOWELS.map(x => x.snd)));
const o = choices(v.snd, sounds, 4, x => x);
return { prompt: `<div class="hz-xl">${esc(v.w)}</div><div class="hint">Which vowel sound is in this word? (${esc(v.en)})</div>`, say: v.w, opts: o.map(x => ({ html: `<b class="py">${esc(x)}</b>`, ok: x === v.snd })), explain: `${esc(v.w)} ${romHTML(v.wr)} uses the vowel ${esc(v.snd)} (${esc(v.form)}).` };
};
const q = makeQuiz("script", b, gen, { controls });
q.next();
}
A["sc-qmode"] = el => {
SC.quizMode = el.dataset.m;
scQuiz($("#sc-body"));
};
