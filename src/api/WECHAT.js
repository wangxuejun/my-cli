import axios from 'axios'
import {cb, wxApi} from './base'
const WX = 'weixin/'
// 获取微信openId
export function wachatAPI (url, callback) {
  axios.get(wxApi + WX + url).then(res => cb(res, callback))
}
