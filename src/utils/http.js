import axios from 'axios'
import qs from 'qs'
import {
  showFullScreenLoading,
  hideFullScreenLoading
} from './loading'
let http = axios.create({
  baseURL: '/api/',
  withCredentials: false,
  headers: {
    // 'Content-Type': 'application/json'
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    return data
  }]
})
http.defaults.timeout = 15000
http.interceptors.request.use(function (config) {
  config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  showFullScreenLoading()
  return config
}, function (err) {
  return Promise.reject(err)
})
http.interceptors.response.use(function (response) {
  hideFullScreenLoading()
  return response.data
}, function () {
  hideFullScreenLoading()
})
export default http
