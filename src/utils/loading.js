let body = document.querySelector('body'),
  loadingWrap = document.createElement('div'),
  loadingMask = document.createElement('div'),
  loadingDom = document.createElement('i'),
  loadingConfig = {
    number: 0,
    isShow: false
  };
loadingWrap.className = 'loadingWrap';
loadingMask.className = 'loadingMask loadingNone';
loadingMask.innerHTML = `<i class='iconfont icon-loading loadingIcon loadingAnimation'></i>`;
loadingWrap.appendChild(loadingMask)
disabledMouseWheel();
// 遮罩加上滚动监听事件
function disabledMouseWheel() {
  if (loadingWrap.addEventListener) {
    loadingWrap.addEventListener('DOMMouseScroll', scrollFunc, false);
  }
  loadingWrap.onmousewheel = loadingWrap.onmousewheel = scrollFunc;
}
// 禁止滚动
function scrollFunc(evt) {
  evt = evt || window.event;
  if (evt.preventDefault) {
    evt.preventDefault();
    evt.stopPropagation();
  } else {
    evt.cancelBubble = true;
    evt.returnValue = false;
  }
  return false;
}
// 打开加载
function openLoading() {
  loadingConfig.number++;
  if (!loadingConfig.isShow) {
    loadingConfig.isShow = true;
    body.appendChild(loadingWrap);
    setTimeout(() => {
      loadingMask.className = 'loadingMask';
    }, 100)
  }
}
// 关闭加载
function closeLoading() {
  if(loadingConfig.number <= 0) return;
  loadingConfig.number--;
  if (loadingConfig.number === 0) {
    loadingConfig.isShow = false;
    loadingMask.className = 'loadingMask loadingNone';
    setTimeout(() => {
      body.removeChild(loadingWrap)
    }, 300)
  }
}
export function showFullScreenLoading() {
  openLoading();
}
export function hideFullScreenLoading() {
  closeLoading();
}