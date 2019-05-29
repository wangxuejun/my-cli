import http from '../utils/axios'
import {BASE, config, cb} from './base'
// const SERVICE = 'BASE-API/'
// const SYSAPI = 'SYS-API/'
const WECHAT = 'WECHAT-API/'

// 检测报告列表
export function apiDiagList (params, callback) {
  http(config(BASE + WECHAT + 'diagns/list', params)).then(res => cb(res, callback))
}
// 检测报告详情
export function apiDiagDtl (params, callback) {
  http(config(BASE + WECHAT + 'diagns/detail', params)).then(res => cb(res, callback))
}
