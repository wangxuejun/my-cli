export function scrollAnimation (targetY) {
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
  let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
  // 获取当前位置方法
  let currentY = document.documentElement.scrollTop || document.body.scrollTop
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  let timer
  // 1055 1673 667
  timer = setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 20)
    _currentY += dist
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (Math.abs(needScrollTop) > 10 && scrollHeight - _currentY > clientHeight && targetY !== 0) {
      window.scrollTo(0, _currentY)
      scrollAnimation(targetY)
    } else {
      clearTimeout(timer)
    }
  }, 1)
}
