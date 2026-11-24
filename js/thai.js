"use strict";
const TH = (() => {
const CONS = /[ก-ฮ]/;
const MID = new Set("กจฎฏดตบปอ");
const HIGH = new Set("ขฃฉฐถผฝศษสห");
const LEAD = new Set("เแโใไ");
const MARK = new Set("ัิีึืฺุู็");
const TONEM = new Set("่้๊๋");
const SONOR = new Set("งญนมยรลว");
const SON1 = new Set("งญนมยรลว");
const isCons = c => !!c && CONS.test(c);
const classOf = c => (MID.has(c) ? "m" : HIGH.has(c) ? "h" : "l");
const ON = { ก: "g", ข: "k", ฃ: "k", ค: "k", ฅ: "k", ฆ: "k", ง: "ng", จ: "j", ฉ: "ch", ช: "ch", ฌ: "ch", ซ: "s", ศ: "s", ษ: "s", ส: "s", ญ: "y", ย: "y", ฎ: "d", ด: "d", ฏ: "dt", ต: "dt", ฐ: "t", ฑ: "t", ฒ: "t", ถ: "t", ท: "t", ธ: "t", ณ: "n", น: "n", บ: "b", ป: "bp", ผ: "p", พ: "p", ภ: "p", ฝ: "f", ฟ: "f", ม: "m", ร: "r", ล: "l", ฬ: "l", ว: "w", ห: "h", ฮ: "h", อ: "" };
const FIN = {};
"กขคฆ".split("").forEach(c => (FIN[c] = "k"));
"ดจชซฎฏฐฑฒตถทธศษส".split("").forEach(c => (FIN[c] = "t"));
"บปพฟภ".split("").forEach(c => (FIN[c] = "p"));
"นญณรลฬ".split("").forEach(c => (FIN[c] = "n"));
FIN["ง"] = "ng";
FIN["ม"] = "m";
FIN["ย"] = "y";
FIN["ว"] = "w";
const CLUSTER = { กร: "gr", กล: "gl", กว: "gw", ขร: "kr", ขล: "kl", ขว: "kw", คร: "kr", คล: "kl", คว: "kw", ตร: "dtr", ปร: "bpr", ปล: "bpl", พร: "pr", พล: "pl", ผล: "pl", ฟร: "fr", ฟล: "fl", ทร: "s", บร: "br", บล: "bl", ดร: "dr" };
const LONG = new Set(["aa", "ii", "uu", "ɯɯ", "ee", "ɛɛ", "ɤɤ", "oo", "ɔɔ", "ia", "ɯa", "ua", "aai", "aao", "ɔɔi", "ɤɤi", "ooi", "ɛɛo", "iao", "uai", "ɯai"]);
const LIVE_OPEN = new Set(["ai", "ao", "ui", "iu", "eo"]);

function prep(w) {
let s = String(w || "").replace(/[ฯ]/g, "");
for (let guard = 0; guard < 8; guard++) {
const m = /([ก-ฮ])([ิีึืุู])?์/.exec(s);
if (!m) break;
let start = m.index;
const cur = m[1];
if (cur === "ร" && start > 0 && /[ทตธศษ]/.test(s[start - 1]) && (start < 2 || !/[ะาำ]/.test(s[start - 1]))) start--;
s = s.slice(0, start) + s.slice(m.index + m[0].length);
}
return s.replace(/์/g, "");
}

function readInitial(s, i, lead) {
const c1 = s[i];
const c2 = s[i + 1];
const c3 = s[i + 2];
const vowelAfter = (k) => {
const ch = s[k];
return !ch || MARK.has(ch) || TONEM.has(ch) || /[ะาำอ]/.test(ch) || isCons(ch) || LEAD.has(ch);
};
if (c1 === "ห" && SONOR.has(c2) && (!lead || true) && !(c2 === "ย" && !vowelAfter(i + 2)) && (MARK.has(c3) || TONEM.has(c3) || /[าะำอ]/.test(c3 || "") || isCons(c3) || !c3 || lead)) {
if (!(c3 === undefined && !lead && false)) return { on: ON[c2], cls: "h", end: i + 2, tag: "h" };
}
if (c1 === "อ" && c2 === "ย" && (MARK.has(c3) || TONEM.has(c3) || /[าะำอ]/.test(c3 || ""))) return { on: "y", cls: "m", end: i + 2, tag: "a" };
const cl = CLUSTER[c1 + c2];
if (cl && isCons(c1) && (MARK.has(c3) || TONEM.has(c3) || /[าะำอ]/.test(c3 || "") || lead || (isCons(c3) && !(c3 === "ร" || c3 === "ล")))) {
if (!(c1 === "ท" && c2 === "ร" && false)) return { on: cl, cls: classOf(c1), end: i + 2, tag: "c" };
}
return { on: ON[c1] === undefined ? "" : ON[c1], cls: classOf(c1), end: i + 1, tag: "s", ch: c1 };
}

function boundaryFinal(s, j) {
const x = s[j];
if (!isCons(x)) return false;
const y = s[j + 1];
if (y === undefined) return true;
if (LEAD.has(y)) return true;
if (isCons(y)) {
if (y === "อ" && s[j + 2] === undefined) return false;
return true;
}
return false;
}

function parseSyllable(s, i) {
let lead = null;
if (LEAD.has(s[i]) && isCons(s[i + 1])) {
lead = s[i];
i++;
}
const first = s[i];
if (first === "ฤ") {
let j = i + 1;
const tm = TONEM.has(s[j]) ? s[j++] : "";
return { end: j, on: "r", nu: "ɯ", co: "", cls: "l", tm, lead: null, open: true };
}
const ini = readInitial(s, i, lead);
let j = ini.end;
let marks = "";
while (j < s.length && (MARK.has(s[j]) || TONEM.has(s[j]))) marks += s[j++];
const has = c => marks.includes(c);
let tm = (marks.match(/[่้๊๋]/) || [""])[0];
let nu = "";
let co = "";
let noFinal = false;
const eat = c => {
if (s[j] === c) {
j++;
return true;
}
return false;
};
if (lead === "เ") {
if (has("ี") && s[j] === "ย") {
j++;
nu = "ia";
if (eat("ว")) {
nu = "iao";
noFinal = true;
} else {
eat("ะ");
noFinal = !boundaryFinal(s, j);
}
} else if (has("ื") && s[j] === "อ") {
j++;
nu = "ɯa";
eat("ะ");
noFinal = !boundaryFinal(s, j);
} else if (has("ิ")) {
nu = "ɤɤ";
} else if (s[j] === "า") {
j++;
if (eat("ะ")) nu = "ɔ";
else nu = "ao";
noFinal = true;
} else if (s[j] === "อ") {
j++;
nu = eat("ะ") ? "ɤ" : "ɤɤ";
noFinal = !s[j] || !isCons(s[j]) ? true : !boundaryFinal(s, j);
} else if (s[j] === "ย" && !has("็") && !(MARK.has(s[j + 1]) || /[าะำอ]/.test(s[j + 1] || ""))) {
j++;
nu = "ɤɤi";
noFinal = true;
} else if (s[j] === "ว" && !(MARK.has(s[j + 1]) || /[าะำอ]/.test(s[j + 1] || ""))) {
j++;
nu = "eo";
noFinal = true;
} else if (eat("ะ")) {
nu = "e";
noFinal = true;
} else if (has("็")) {
nu = "e";
} else {
nu = "ee";
}
} else if (lead === "แ") {
if (eat("ะ")) {
nu = "ɛ";
noFinal = true;
} else if (s[j] === "ว" && !(MARK.has(s[j + 1]) || /[าะำอ]/.test(s[j + 1] || ""))) {
j++;
nu = "ɛɛo";
noFinal = true;
} else nu = has("็") ? "ɛ" : "ɛɛ";
} else if (lead === "โ") {
if (eat("ะ")) {
nu = "o";
noFinal = true;
} else if (s[j] === "ย" && !(MARK.has(s[j + 1]) || /[าะำอ]/.test(s[j + 1] || ""))) {
j++;
nu = "ooi";
noFinal = true;
} else nu = "oo";
} else if (lead === "ไ" || lead === "ใ") {
nu = "ai";
noFinal = true;
if (s[j] === "ย" && !(s[j + 1] && (MARK.has(s[j + 1]) || /[าะำอ]/.test(s[j + 1])))) j++;
} else if (has("็") && ini.ch === "ก" && ini.tag === "s") {
nu = "ɔɔ";
noFinal = true;
marks += "้";
} else if (has("ั")) {
if (s[j] === "ว") {
j++;
nu = "ua";
eat("ะ");
noFinal = true;
} else if (s[j] === "ย" && !boundaryFinal(s, j + 1) && !isCons(s[j + 1])) {
j++;
nu = "ai";
noFinal = true;
} else nu = "a";
} else if (has("ิ")) {
if (s[j] === "ว") {
j++;
nu = "iu";
noFinal = true;
} else nu = "i";
} else if (has("ี")) nu = "ii";
else if (has("ึ")) nu = "ɯ";
else if (has("ื")) {
nu = "ɯɯ";
if (s[j] === "อ" && !(s[j + 1] && /[ะาำ]/.test(s[j + 1]) )) {
j++;
noFinal = true;
}
} else if (has("ุ")) {
if (s[j] === "ย" && !(s[j + 1] && /[ะาำ]/.test(s[j + 1]))) {
j++;
nu = "ui";
noFinal = true;
} else nu = "u";
} else if (has("ู")) nu = "uu";
else if (s[j] === "ะ") {
j++;
nu = "a";
noFinal = true;
} else if (s[j] === "า") {
j++;
nu = "aa";
if (s[j] === "ย" && !(s[j + 1] && (MARK.has(s[j + 1]) || /[าะำอ]/.test(s[j + 1])))) {
j++;
nu = "aai";
noFinal = true;
} else if (s[j] === "ว" && !(s[j + 1] && (MARK.has(s[j + 1]) || /[าะำอ]/.test(s[j + 1])))) {
j++;
nu = "aao";
noFinal = true;
} else if (s[j] === "ะ") {
j++;
nu = "a";
noFinal = true;
}
} else if (s[j] === "ำ") {
j++;
nu = "a";
co = "m";
noFinal = true;
} else if (s[j] === "อ" && !(s[j + 1] && /[ะาำ]/.test(s[j + 1]))) {
j++;
nu = "ɔɔ";
if (s[j] === "ย" && !(s[j + 1] && (MARK.has(s[j + 1]) || /[าะำอ]/.test(s[j + 1])))) {
j++;
nu = "ɔɔi";
noFinal = true;
}
} else if (s[j] === "ว" && (s[j + 1] === undefined || isCons(s[j + 1]) || LEAD.has(s[j + 1])) && boundaryFinalOrEnd(s, j + 1)) {
j++;
if (s[j] === "ย" && !boundaryFinal(s, j + 1) ) {
j++;
nu = "uai";
noFinal = true;
} else nu = "ua";
} else if (s[j] === "ร" && s[j + 1] === "ร") {
j += 2;
nu = "a";
if (!(isCons(s[j]) && boundaryFinal(s, j))) {
co = "n";
noFinal = true;
}
} else if (s[j] === "ร" && (s[j + 1] === undefined || isCons(s[j + 1]) || LEAD.has(s[j + 1])) && boundaryFinalOrEnd(s, j + 1) && ini.tag === "s") {
j++;
nu = "ɔɔ";
co = "n";
noFinal = true;
} else if (ini.tag === "s" && !marks && isCons(s[j]) && isCons(s[j + 1]) && s[j + 2] === undefined && SON1.has(s[j])) {
nu = "a";
noFinal = true;
} else if (isCons(s[j]) && boundaryFinal(s, j)) {
nu = "o";
} else {
nu = "a";
noFinal = true;
}
if (!noFinal && !co && isCons(s[j]) && boundaryFinal(s, j)) {
const f = FIN[s[j]];
if (f) {
co = f;
j++;
if (s[j] === "ว" && false) j++;
}
}
if (nu === "ɤɤ" && lead === "เ" && has("ิ") && !co && false) noFinal = true;
if (TONEM.has(s[j])) j++;
if (marks.includes("้") && !tm) tm = "้";
return { end: j, on: ini.on, nu, co, cls: ini.cls, tm, lead, tag: ini.tag, ch: ini.ch, explicit: !!lead || marks.replace(/[่้๊๋]/g, "").length > 0 || /[ะาำ]/.test(s[j - 1] || "") };
}

function boundaryFinalOrEnd(s, k) {
return s[k] === undefined || true;
}

function toneOf(p) {
let cls = p.cls;
const dead = (() => {
if (p.co === "k" || p.co === "t" || p.co === "p") return true;
if (p.co) return false;
if (LIVE_OPEN.has(p.nu)) return false;
return !LONG.has(p.nu);
})();
const long = LONG.has(p.nu);
if (p.tm === "่") return cls === "l" ? 3 : 2;
if (p.tm === "้") return cls === "l" ? 4 : 3;
if (p.tm === "๊") return 4;
if (p.tm === "๋") return 5;
if (!dead) return cls === "h" ? 5 : 1;
if (cls === "l") return long ? 3 : 4;
return 2;
}

function syllables(word) {
const s = prep(word);
const out = [];
let i = 0;
let guard = 0;
while (i < s.length && guard++ < 60) {
if (!(isCons(s[i]) || LEAD.has(s[i]))) {
i++;
continue;
}
const startIdx = i;
const p = parseSyllable(s, i);
if (!p || p.end <= i) {
i++;
continue;
}
const prev = out[out.length - 1];
if (prev && prev.bare && p.tag === "s" && !p.tm && SON1.has(p.ch) && p.cls === "l" && prev.ch !== "อ" && (prev.cls === "m" || prev.cls === "h")) p.cls = prev.cls;
p.bare = p.tag === "s" && p.nu === "a" && !p.co && !p.explicit;
p.tone = toneOf(p);
p.th = s.slice(startIdx, p.end);
p.rom = `${p.on}${p.nu}${p.co}${p.tone}`;
out.push(p);
i = p.end;
}
return out;
}

function romanize(word) {
return syllables(word).map(p => p.rom).join("-");
}

const SPECIAL = { "๐": "0", "๑": "1", "๒": "2", "๓": "3", "๔": "4", "๕": "5", "๖": "6", "๗": "7", "๘": "8", "๙": "9" };
const isThai = ch => /[฀-๿]/.test(ch);
return { syllables, romanize, toneOf, isThai, prep, classOf, SPECIAL, ON, FIN };
})();
