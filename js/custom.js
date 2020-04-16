console.log("loaded");

const targetElement = document.querySelector('#someElementId');
 
// 2. ...in some event handler after showing the target element...disable body scroll
bodyScrollLock.disableBodyScroll(targetElement);
