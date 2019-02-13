var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('TEST').addEventListener('click', () => sendMessage({ action: 'POPUP_SUBTITLE' }));
}
chrome.tabs.getSelected(null, getSelectedTab);