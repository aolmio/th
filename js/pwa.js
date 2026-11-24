"use strict";
const APP_VERSION = "711044a5e7";
const ASK_KEY = "thai_hub_install_asked";
const PWA = { reg: null, deferred: null, timer: null, reloading: false };

const isStandalone = () => (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const swSupported = () => "serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1");

function updateInstallUI() {
const row = $("#install-row");
if (!row) return;
const can = !isStandalone() && (PWA.deferred || isIOS());
row.hidden = !can;
const state = $("#install-state");
if (state) state.textContent = isStandalone() ? "Running as an installed app." : can ? "Adds an app icon and opens full screen, even without internet." : "Use your browser menu (Install app or Add to Home Screen) if it offers it.";
}

function openInstallDialog() {
const ios = isIOS() && !PWA.deferred;
$("#install-ios").hidden = !ios;
$("#install-accept").textContent = ios ? "Got it" : "Install";
$("#install-later").hidden = ios;
$("#dlg-install").showModal();
}

function maybeAskInstall() {
if (store.get(ASK_KEY, false) || isStandalone() || PWA.timer) return;
if (!(PWA.deferred || isIOS())) return;
PWA.timer = setTimeout(function again() {
PWA.timer = null;
if (store.get(ASK_KEY, false) || isStandalone()) return;
if (anyDialogOpen()) {
PWA.timer = setTimeout(again, 4000);
return;
}
store.set(ASK_KEY, true);
openInstallDialog();
}, 3500);
}

function afterInstallChoice() {
const wantOffline = $("#install-offline").checked;
$("#dlg-install").close();
if (wantOffline && navigator.onLine) {
toast("Saving lessons for offline use. Progress is shown in Settings.");
offlineDownload({ fonts: "core" });
}
}

A["install-accept"] = async () => {
afterInstallChoice();
const d = PWA.deferred;
if (!d) return;
PWA.deferred = null;
try {
d.prompt();
const r = await d.userChoice;
if (r && r.outcome === "accepted") toast("Installing Thai Hub…");
} catch (e) {}
updateInstallUI();
};
A["install-later"] = () => afterInstallChoice();
A["install-app"] = async () => {
if (PWA.deferred) {
const d = PWA.deferred;
PWA.deferred = null;
try {
d.prompt();
await d.userChoice;
} catch (e) {}
updateInstallUI();
} else if (isIOS()) {
$("#install-offline").checked = false;
openInstallDialog();
} else toast("Use your browser menu to install this app.");
};

window.addEventListener("beforeinstallprompt", e => {
e.preventDefault();
PWA.deferred = e;
updateInstallUI();
maybeAskInstall();
});
window.addEventListener("appinstalled", () => {
PWA.deferred = null;
toast("Thai Hub installed");
updateInstallUI();
});

function watchWorker(reg) {
const announce = worker => {
toast("A new version is ready.", { label: "Reload", run: () => worker.postMessage({ type: "SKIP_WAITING" }) });
};
if (reg.waiting && navigator.serviceWorker.controller) announce(reg.waiting);
reg.addEventListener("updatefound", () => {
const w = reg.installing;
if (!w) return;
w.addEventListener("statechange", () => {
if (w.state === "installed" && navigator.serviceWorker.controller) announce(w);
});
});
}

async function registerSW() {
if (!swSupported()) return;
try {
PWA.reg = await navigator.serviceWorker.register("sw.js", { scope: "./", updateViaCache: "none" });
watchWorker(PWA.reg);
navigator.serviceWorker.addEventListener("controllerchange", () => {
if (PWA.reloading) return;
PWA.reloading = true;
location.reload();
});
document.addEventListener("visibilitychange", () => {
if (document.visibilityState === "visible" && PWA.reg) PWA.reg.update().catch(() => {});
});
setInterval(() => PWA.reg && PWA.reg.update().catch(() => {}), 3600000);
renderOfflineCard();
navigator.serviceWorker.ready.then(() => renderOfflineCard());
} catch (e) {}
}

A["check-update"] = async () => {
if (!PWA.reg) {
toast(swSupported() ? "Offline support is still starting. Try again in a moment." : "Updates are handled by your browser here.");
return;
}
toast("Checking for updates…");
try {
await PWA.reg.update();
setTimeout(() => {
if (!PWA.reg.installing && !PWA.reg.waiting) toast(`You have the latest version (v${APP_VERSION})`);
}, 1500);
} catch (e) {
toast("Could not check right now");
}
};

window.addEventListener("load", () => {
registerSW();
updateInstallUI();
maybeAskInstall();
const idle = window.requestIdleCallback || (fn => setTimeout(fn, 1500));
});
