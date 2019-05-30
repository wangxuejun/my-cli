import axios from 'axios'
// import {showFullScreenLoading, tryHideFullScreenLoading} from './loading'
// import router from '../router'
// import { Toast } from 'vant'
let http = axios.create({
  baseURL: '/api/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [function (data) {
    return data
  }]
})
http.defaults.timeout = 15000
http.interceptors.request.use(function (config) {
  // if (!config.showLoading) {
  //   config.showLoading = true
  // }
  console.log(config)
  return config
}, function (error) {
  return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
  if (response.config.showLoading) {
  }
  console.log(response)
  return response
  // let code = response.data.errcode
  // if (code === 0) {
  //   return response
  // } else {
  //   return response
  // }
}, function () {
  // router.push({path: '/error'})
})

export default http
