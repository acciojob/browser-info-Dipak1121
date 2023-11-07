//your JS code here. If required.
document.addEventListener("DOMContentLoaded", findHistory);

function findHistory(){
    let browserName = navigator.appName;
    let browserVersion = navigator.appVersion;

    let message = `You are using ${browserName} ${browserVersion} version`;
    document.getElementById("browser-info").innerText = message;
}