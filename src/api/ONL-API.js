import http from '../utils/axios'
import {BASE, config, cb} from './base'
// const SERVICE = 'BASE-API/'
// const SYSAPI = 'SYS-API/'
const WECHAT = 'WECHAT-API/'

// 预约列表
export function apiOnlineList (params, callback) {
  http(config(BASE + WECHAT + 'bookingList', params)).then(res => cb(res, callback))
}
// 预约详情
export function apiOnlineDtl (params, callback) {
  http(config(BASE + WECHAT + 'booking', params)).then(res => cb(res, callback))
}
// 创建预约
export function apiOnlineCreate (params, callback) {
  http(config(BASE + WECHAT + 'booking', params, 'POST')).then(res => cb(res, callback))
}
// 修改预约
export function apiOnlineSave (params, callback) {
  http(config(BASE + WECHAT + 'booking', params, 'PUT')).then(res => cb(res, callback))
}
// 取消预约
export function apiOnlineCancel (params, callback) {
  http(config(BASE + WECHAT + 'booking/cancel', params, 'PUT')).then(res => cb(res, callback))
}
// 查询预约情况
export function apiOnlineTime (params, callback) {
  http(config(BASE + WECHAT + 'booking/technology', params)).then(res => cb(res, callback))
}
