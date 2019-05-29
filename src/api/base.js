import { getToken } from '@/utils/auth'
let BASE, wxDomain, wxApi, diagImg
switch (process.env.NODE_ENV) {
  case 'prod':
    BASE = 'https://api.km-union.com/'
    wxApi = 'http://web.km-union.com/'
    wxDomain = 'http://wap.km-union.com/#'
    diagImg = 'https://km-diagns.oss-cn-hangzhou.aliyuncs.com/'
    // BASE = 'https://apisit.km-union.com/'
    break
  case 'uat':
    BASE = 'https://apiuat.km-union.com/'
    wxApi = 'http://webtest.km-union.com/'
    wxDomain = 'http://waptest.km-union.com/#'
    diagImg = 'https://km-diagns.oss-cn-hangzhou.aliyuncs.com/'
    break
  case 'sit':
    BASE = 'https://apisit.km-union.com/'
    wxApi = 'http://webtest.km-union.com/'
    wxDomain = 'http://waptest.km-union.com/#'
    diagImg = 'https://km-diagns.oss-cn-hangzhou.aliyuncs.com/'
    break
  default:
    // BASE = 'https://apiuat.km-union.com/'
    // wxApi = 'http://webtest.km-union.com/'
    // wxDomain = 'http://waptest.km-union.com/#'
    // diagImg = 'https://km-diagns.oss-cn-hangzhou.aliyuncs.com/'
    BASE = 'https://apisit.km-union.com/'
    wxApi = 'http://webtest.km-union.com/'
    wxDomain = 'http://waptest.km-union.com/#'
    diagImg = 'https://km-diagns.oss-cn-hangzhou.aliyuncs.com/'
}

let uploadUrl = BASE + 'BASE-API/fileUpload'
let shopFileUpload = BASE + 'BASE-API/shopFileUpload'

let smsType = 14
let imgDomain = 'https://ke-meng.oss-cn-hangzhou.aliyuncs.com/'
let token = getToken()
function config (url, params, method = 'GET') {
  return {
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null,
    params: method === 'GET' || method === 'DELETE' ? params : null
  }
}
let cb = (res, callback) => {
  if (res && res.data) {
    if (typeof callback === 'function') callback(res)
  }
}

export {
  BASE,
  config,
  cb,
  uploadUrl,
  token,
  imgDomain,
  smsType,
  shopFileUpload,
  wxDomain,
  wxApi,
  diagImg
}
