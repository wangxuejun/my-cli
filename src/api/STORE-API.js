import http from '../utils/axios'
import {BASE, config, cb} from './base'
// const SERVICE = 'BASE-API/'
// const SYSAPI = 'SYS-API/'
const WECHAT = 'WECHAT-API/'

// 我去过的店铺
export function apiMyStore (params, callback) {
  http(config(BASE + WECHAT + 'listMyConsumeStore', params)).then(res => cb(res, callback))
}
// 门店列表
export function apiStoreList (params, callback) {
  http(config(BASE + WECHAT + 'listBookingStoreByPage', params)).then(res => cb(res, callback))
}
// 门店详情
export function apiStoreDtl (params, callback) {
  http(config(BASE + WECHAT + 'store', params)).then(res => cb(res, callback))
}
// 美容师列表
export function apiTchncList (params, callback) {
  http(config(BASE + WECHAT + 'tchncList', params)).then(res => cb(res, callback))
}
// 美容师详情
export function apiTchnc (params, callback) {
  http(config(BASE + WECHAT + 'techcian', params)).then(res => cb(res, callback))
}
// 服务分类
export function apiCtlgList (params, callback) {
  http(config(BASE + WECHAT + 'service/ctlgList', params)).then(res => cb(res, callback))
}
// 服务列表
export function apiPrdctList (params, callback) {
  http(config(BASE + WECHAT + 'serviceList', params)).then(res => cb(res, callback))
}
// 服务详情
export function apiCtlgDtl (params, callback) {
  http(config(BASE + WECHAT + 'service', params)).then(res => cb(res, callback))
}
// 员工绑定微信
export function apiEmpBind (params, callback) {
  http(config(BASE + WECHAT + 'employee/binding', params, 'PUT')).then(res => cb(res, callback))
}
