"use strict";
const OFF = { running: false, cancel: false, pct: 0, msg: "" };
const CORE_FONTS = ["sarabun", "notolooped", "notosans", "prompt", "notoserif"];

function fmtBytes(n) {
if (!n) return "0 MB";
if (n < 1024 * 1024) return `${Math.max(1, Math.round(n / 1024))} KB`;
if (n < 1073741824) return `${(n / 1048576).toFixed(n < 10485760 ? 1 : 0)} MB`;
return `${(n / 1073741824).toFixed(1)} GB`;
}
async function storageInfo() {
try {
if (navigator.storage && navigator.storage.estimate) {
const e = await navigator.storage.estimate();
const persisted = navigator.storage.persisted ? await navigator.storage.persisted() : false;
return { usage: e.usage || 0, quota: e.quota || 0, persisted };
}
} catch (e) {}
return null;
}
function offlineProgress(pct, msg) {
OFF.pct = clamp(pct, 0, 100);
OFF.msg = msg || OFF.msg;
renderOfflineCard();
}
async function warmFont(f) {
const cssUrl = `https://fonts.googleapis.com/css2?family=${f.gf}&display=swap`;
const res = await fetch(cssUrl);
if (!res.ok) throw new Error("css");
const css = await res.text();
const urls = Array.from(new Set((css.match(/https:\/\/fonts\.gstatic\.com[^)'"\s]+/g) || [])));
await Promise.all(urls.map(u => fetch(u, { mode: "cors" }).then(r => r.arrayBuffer()).catch(() => null)));
}
async function offlineDownload(opts = {}) {
if (OFF.running) return;
if (!navigator.onLine) {
toast("You are offline. Connect to the internet to download.");
return;
}
OFF.running = true;
OFF.cancel = false;
OFF.pct = 0;
OFF.msg = "Starting…";
try {
if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
} catch (e) {}
const fonts = opts.fonts === "all" ? FONTS : FONTS.filter(f => CORE_FONTS.includes(f.id) || f.id === S.settings.thFont);
const srcs = (S.misc.sources || []).filter(s => s.on);
const total = fonts.length + srcs.length + 1;
let done = 0;
let failed = 0;
for (const f of fonts) {
if (OFF.cancel) break;
offlineProgress((done / total) * 100, `Saving font ${f.label.split(" (")[0]}…`);
try {
await warmFont(f);
} catch (e) {
failed++;
}
done++;
}
for (const s of srcs) {
if (OFF.cancel) break;
offlineProgress((done / total) * 100, "Saving extra data sources…");
const d = await fetchRemote(s.url, /\.(csv|tsv|txt)$/i.test(s.url) ? "text" : "json", true);
if (d == null) failed++;
done++;
}
if (!OFF.cancel) {
offlineProgress((done / total) * 100, "Refreshing app files…");
try {
if (PWA.reg) await PWA.reg.update();
} catch (e) {}
}
const cancelled = OFF.cancel;
OFF.running = false;
if (!cancelled) {
S.misc.offlineAt = Date.now();
persist.misc();
}
OFF.pct = cancelled ? OFF.pct : 100;
OFF.msg = cancelled ? "Download cancelled. What was saved so far is kept." : failed ? "Finished with some items missing. Run it again when your connection is stable." : "Everything is saved on this device.";
renderOfflineCard();
toast(cancelled ? "Download cancelled" : failed ? "Saved most data for offline use" : "Ready to use offline");
}
async function renderOfflineCard() {
const card = $("#off-card");
if (!card || $("#v-settings").hidden) return;
const info = await storageInfo();
const sw = "serviceWorker" in navigator && navigator.serviceWorker.controller;
const parts = [];
parts.push(sw ? "All words, lessons and tools are cached, so the app opens without internet." : swSupported() ? "App files will be cached after the first load." : "Offline caching needs https. Open the published site to use it.");
if (S.misc.offlineAt) parts.push(`Fonts last saved: ${new Date(S.misc.offlineAt).toLocaleDateString()}.`);
$("#off-status").textContent = parts.join(" ");
$("#off-version").textContent = `v${APP_VERSION}`;
$("#off-detail").textContent = info ? `Stored on this device: ${fmtBytes(info.usage)} of ${fmtBytes(info.quota)} available${info.persisted ? " · protected from automatic cleanup" : ""}.` : "Thai fonts and extra data sources.";
const prog = $("#off-prog");
prog.hidden = !OFF.running && OFF.pct === 0;
$("i", prog).style.width = `${OFF.pct}%`;
$("#off-msg").textContent = OFF.msg;
$("#off-btn").disabled = OFF.running;
$("#off-btn").textContent = OFF.running ? `Downloading ${Math.round(OFF.pct)}%` : S.misc.offlineAt ? "Update download" : "Download fonts & sources";
$("#off-cancel").hidden = !OFF.running;
}
A["off-download"] = () => offlineDownload({ fonts: $("#off-allfonts").checked ? "all" : "core" });
A["off-cancel"] = () => {
OFF.cancel = true;
};
A["off-clear"] = async () => {
const ok = await dialogAsk({ title: "Remove downloaded data?", message: "Cached fonts and online sources will be removed from this device. Your saved words and progress stay. They download again when needed.", okLabel: "Remove", danger: true });
if (!ok) return;
await idb.clear();
try {
const keys = await caches.keys();
await Promise.all(keys.filter(k => k.indexOf("runtime") >= 0).map(k => caches.delete(k)));
} catch (e) {}
delete S.misc.offlineAt;
persist.misc();
OFF.pct = 0;
OFF.msg = "";
renderOfflineCard();
toast("Downloaded data removed");
};
