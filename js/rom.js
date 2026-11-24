"use strict";
const ROM = (() => {
const ONSETS = ["bpr", "bpl", "dtr", "ng", "ch", "bp", "dt", "gr", "gl", "gw", "kr", "kl", "kw", "pr", "pl", "tr", "g", "k", "j", "s", "y", "d", "t", "n", "b", "p", "f", "m", "r", "l", "w", "h"];
const TAILS = ["aai", "aao", "ɔɔi", "ɤɤi", "ooi", "ɛɛo", "iao", "uai", "ɯai", "ai", "ao", "ui", "iu", "eo", "ia", "ɯa", "ua"];
const VOW = "aiuɯeɛɤoɔ";
const ON_RTGS = { g: "k", k: "kh", ng: "ng", j: "ch", ch: "ch", s: "s", y: "y", d: "d", dt: "t", t: "th", n: "n", b: "b", bp: "p", p: "ph", f: "f", m: "m", r: "r", l: "l", w: "w", h: "h", gr: "kr", gl: "kl", gw: "kw", kr: "khr", kl: "khl", kw: "khw", bpr: "pr", bpl: "pl", dtr: "tr", pr: "phr", pl: "phl", tr: "tr" };
const ON_IPA = { g: "k", k: "kʰ", ng: "ŋ", j: "tɕ", ch: "tɕʰ", s: "s", y: "j", d: "d", dt: "t", t: "tʰ", n: "n", b: "b", bp: "p", p: "pʰ", f: "f", m: "m", r: "r", l: "l", w: "w", h: "h", gr: "kr", gl: "kl", gw: "kw", kr: "kʰr", kl: "kʰl", kw: "kʰw", bpr: "pr", bpl: "pl", dtr: "tr", pr: "pʰr", pl: "pʰl", tr: "tr" };
const NU_RTGS = { a: "a", aa: "a", i: "i", ii: "i", u: "u", uu: "u", ɯ: "ue", ɯɯ: "ue", e: "e", ee: "e", ɛ: "ae", ɛɛ: "ae", ɤ: "oe", ɤɤ: "oe", o: "o", oo: "o", ɔ: "o", ɔɔ: "o", ia: "ia", ɯa: "uea", ua: "ua", ai: "ai", aai: "ai", ao: "ao", aao: "ao", ɔɔi: "oi", ɤɤi: "oei", ooi: "oi", ui: "ui", iu: "io", eo: "eo", ɛɛo: "aeo", iao: "iao", uai: "uai", ɯai: "ueai" };
const NU_IPA = { a: "a", aa: "aː", i: "i", ii: "iː", u: "u", uu: "uː", ɯ: "ɯ", ɯɯ: "ɯː", e: "e", ee: "eː", ɛ: "ɛ", ɛɛ: "ɛː", ɤ: "ɤ", ɤɤ: "ɤː", o: "o", oo: "oː", ɔ: "ɔ", ɔɔ: "ɔː", ia: "iːə", ɯa: "ɯːə", ua: "uːə", ai: "aj", aai: "aːj", ao: "aw", aao: "aːw", ɔɔi: "ɔːj", ɤɤi: "ɤːj", ooi: "oːj", ui: "uj", iu: "iw", eo: "ew", ɛɛo: "ɛːw", iao: "iaw", uai: "uaj", ɯai: "ɯaj" };
const CO_RTGS = { k: "k", t: "t", p: "p", ng: "ng", n: "n", m: "m", y: "i", w: "o" };
const CO_IPA = { k: "k̚", t: "t̚", p: "p̚", ng: "ŋ", n: "n", m: "m", y: "j", w: "w" };
const TONE_IPA = { 1: "˧", 2: "˨˩", 3: "˥˩", 4: "˦˥", 5: "˩˩˦" };
const MARKS = { 1: "", 2: "̀", 3: "̂", 4: "́", 5: "̌" };
const TONE_NAMES = { 1: "mid", 2: "low", 3: "falling", 4: "high", 5: "rising" };

function parse(s) {
const m = /^(.*?)([1-5])$/.exec(String(s || "").trim());
if (!m) return null;
let body = m[1];
let on = "";
for (const o of ONSETS) {
if (body.startsWith(o) && body.length > o.length && VOW.includes(body[o.length])) {
on = o;
break;
}
}
let rest = body.slice(on.length);
if (on === "" && rest !== body) return null;
if (!rest || !VOW.includes(rest[0])) return null;
let nu = rest;
let co = "";
if (!TAILS.includes(rest) && !NU_RTGS[rest]) {
const c = /^([aiuɯeɛɤoɔ]+)(ng|[ktpnmyw])$/.exec(rest);
if (!c) return null;
nu = c[1];
co = c[2];
if (!NU_RTGS[nu] && !TAILS.includes(nu)) return null;
}
if (!NU_RTGS[nu]) return null;
return { on, nu, co, tone: Number(m[2]) };
}

function split(str) {
return String(str || "").trim().split(/([\s\-]+)/).filter(x => x.length);
}

function eachSyl(str, fn) {
return split(str).map(tok => (/^[\s\-]+$/.test(tok) ? tok : fn(tok, parse(tok))));
}

function mark(nu, tone) {
if (!MARKS[tone]) return nu;
return (nu[0] + MARKS[tone]).normalize("NFC") + nu.slice(1);
}

function toPaiboon(str) {
return eachSyl(str, (tok, p) => (p ? p.on + mark(p.nu, p.tone) + p.co : tok)).join("");
}
function toRtgs(str) {
return eachSyl(str, (tok, p) => (p ? (ON_RTGS[p.on] || "") + NU_RTGS[p.nu] + (p.co ? CO_RTGS[p.co] : "") : tok)).join("");
}
function toIpa(str) {
return eachSyl(str, (tok, p) => (p ? (ON_IPA[p.on] || "") + NU_IPA[p.nu] + (p.co ? CO_IPA[p.co] : "") + TONE_IPA[p.tone] : tok)).join("");
}
function tones(str) {
return split(str).filter(t => !/^[\s\-]+$/.test(t)).map(t => {
const p = parse(t);
return p ? p.tone : 0;
});
}
function valid(str) {
const toks = split(str).filter(t => !/^[\s\-]+$/.test(t));
return toks.length > 0 && toks.every(t => parse(t));
}
const LONG_NU = new Set(["aa", "ii", "uu", "ɯɯ", "ee", "ɛɛ", "ɤɤ", "oo", "ɔɔ", "ia", "ɯa", "ua", "aai", "aao", "ɔɔi", "ɤɤi", "ooi", "ɛɛo", "iao", "uai", "ɯai"]);
return { parse, split, toPaiboon, toRtgs, toIpa, tones, valid, mark, TONE_NAMES, TONE_IPA, MARKS, LONG_NU };
})();
