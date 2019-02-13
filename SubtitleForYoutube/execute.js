const rotateEvent = () => {
  document.body.style.transform = 'rotate(180deg)';
};

const onMessage = (message) => {
  switch (message.action) {
    case 'POPUP_SUBTITLE':
      rotateEvent();
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);
