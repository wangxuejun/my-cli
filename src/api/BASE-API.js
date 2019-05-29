import http from '../utils/axios'
import {BASE, config, cb} from './base'
const SERVICE = 'BASE-API/'
const WECHAT = 'WECHAT-API/'
// 获取元数据
export function apiListMeta (callback) {
  http(config(BASE + SERVICE + 'listAllMeta', {})).then(res => cb(res, callback))
}
// 获取省份
export function apiProvince (callback) {
  http(config(BASE + SERVICE + 'province', {})).then(res => cb(res, callback))
}
// 获取城市
export function apiCity (params, callback) {
  http(config(BASE + SERVICE + 'city', params)).then(res => cb(res, callback))
}
// 获取区县
export function apiDistrict (params, callback) {
  http(config(BASE + SERVICE + 'district', params)).then(res => cb(res, callback))
}
// 上传文件
export function apiFileUpload (params, callback) {
  http(config(BASE + SERVICE + 'fileUpload', params, 'POST')).then(res => cb(res, callback))
}
// 获取验证码
export function apiSendSms (params, callback) {
  http(config(BASE + SERVICE + 'sendSms', params, 'GET')).then(res => cb(res, callback))
}
// 校验验证码
export function apiVerifySms (params, callback) {
  http(config(BASE + SERVICE + 'verifySms', params, 'GET')).then(res => cb(res, callback))
}
// 商家注册-验证码发送
export function apiOrgRegisterSendSms (params, callback) {
  http(config(BASE + SERVICE + 'orgRegister/sendSms', params, 'GET')).then(res => cb(res, callback))
}
// 获取会员手机号
export function apiOpenid (params, callback) {
  http(config(BASE + WECHAT + 'phone', params)).then(res => cb(res, callback))
}
// 绑定会员手机号
export function apiBindOpenid (params, callback) {
  http(config(BASE + WECHAT + 'binding', params, 'PUT')).then(res => cb(res, callback))
}
// 获取用户信息
export function apiUser (callback) {
  http(config(BASE + WECHAT + 'cust', {})).then(res => cb(res, callback))
}
// 我的资料保存
export function apiUserSave (params, callback) {
  http(config(BASE + WECHAT + 'cust', params, 'PUT')).then(res => cb(res, callback))
}
// 修改手机号
export function apiEditPhone (params, callback) {
  http(config(BASE + WECHAT + 'phone', params, 'PUT')).then(res => cb(res, callback))
}
// 验证会员
export function apiCheckUser (params, callback) {
  http(config(BASE + WECHAT + 'phone/check', params, 'PUT')).then(res => cb(res, callback))
}
// 添加会员
export function apiUserCreate (params, callback) {
  http(config(BASE + WECHAT + 'cust', params, 'POST')).then(res => cb(res, callback))
}
// 我的卡项
export function apiCardList (params, callback) {
  http(config(BASE + WECHAT + 'card/list', params)).then(res => cb(res, callback))
}
// 卡项详情
export function apiCardDtl (params, callback) {
  http(config(BASE + WECHAT + 'card', params)).then(res => cb(res, callback))
}
// 我的订单
export function apiOrderList (params, callback) {
  http(config(BASE + WECHAT + 'order/list', params)).then(res => cb(res, callback))
}
// 订单详情
export function apiOrderDtl (params, callback) {
  http(config(BASE + WECHAT + 'order', params)).then(res => cb(res, callback))
}
// 我的分期
export function apiInstallList (params, callback) {
  http(config(BASE + WECHAT + 'instalment', params)).then(res => cb(res, callback))
}
// 验证手机号
export function apiCheckPhone (params, callback) {
  http(config(BASE + WECHAT + 'cust/check', params)).then(res => cb(res, callback))
}
// 获取标题
export function apiGetTitle (params, callback) {
  http(config(BASE + WECHAT + 'tenant', params)).then(res => cb(res, callback))
}
// 获取广告
export function apiGetAdv (params, callback) {
  http(config(BASE + WECHAT + 'tenantAdv', params)).then(res => cb(res, callback))
}
// 获取评论
export function apiOrdCmmnts (params, callback) {
  http(config(BASE + WECHAT + 'orderCmmnts', params, 'GET')).then(res => cb(res, callback))
}
// 提交评论
export function apiPutOrdCmmnts (params, callback) {
  http(config(BASE + WECHAT + 'orderCmmnts', params, 'PUT')).then(res => cb(res, callback))
}
