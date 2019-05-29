import { Toast } from 'vant'
let loading
function startLoading () {
  loading = Toast.loading({
    mask: false,
    duration: 0,
    forbidClick: true,
    loadingType: 'spinner',
    message: '加载中...'
  })
}

function endLoading () {
  loading.clear()
}
let needLoadingRequestCount = 0

export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
