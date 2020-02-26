//chrome.tabs.setZoom(50);
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "trello-bmc.js"});
});