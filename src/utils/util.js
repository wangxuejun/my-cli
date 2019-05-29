// 获取分页
export function setPageList (totle, pagesize) {
  let arr = []

  if (totle) {
    let num = Math.floor(totle / pagesize)
    for (let i = 0; i <= num; i++) {
      arr.push(i * pagesize + pagesize)
    }
  } else {
    arr.push(pagesize)
  }
  return arr
}
// 设置元数据
export function setInitialMeta (listMeta, target, choose = [], selectArr = []) {
  if (!(listMeta instanceof Array)) return ''
  let origin = []
  listMeta.forEach(function (ele) {
    let obj = {}
    let items = ['entryDesc', 'entryCode', 'ctrlNum1', 'ctrlChar1']
    if (choose.length === 0 || choose.includes(ele['entryCode'])) {
      for (let i = 0; i < target.length; i++) {
        obj[target[i]] = ele[items[i]] ? ele[items[i]] : ''
        if (selectArr.length > 0 && selectArr.includes(ele['entryCode'])) {
          obj.selected = true
        } else {
          obj.selected = false
        }
      }
      origin.push(obj)
    }
  })
  return origin
}

// 两个数组对比，返回属性值相同的数组列表
export function getArrItem (origin, originProp, target, targetProp) {
  let item, arr
  for (let i = 0; i < target.length; i++) {
    item = target[i]
    arr = origin.filter(ele => ele[originProp] === item[targetProp])
    if (arr.length > 0) {
      return arr[0]
    }
  }
  return []
}
let regexp = {
  empty: /^\S+/,
  tel: /^1[34578]\d{9}$/,
  phone: /(^1[34578]\d{9}$)|(^0\d{2,3}-?\d{7,8}$)/,
  number: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
  array: function (value) {
    if (Array.isArray(value) && value.length > 0) {
      return true
    } else {
      return false
    }
  }
}
export const reg = regexp
// 验证
export function pattern (type, msg) {
  return {pattern: regexp[type], message: msg, err: true}
}
// 表单验证
export function validate (pattern, value) {
  let regx = typeof (pattern)
  if (regx === 'function') {
    return pattern(value)
  } else if (regx === 'object') {
    if (pattern.test(value)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
// 星期几
export function toWeek (i) {
  let font = ''
  switch (String(i)) {
    case '1':
      font = '星期一'
      break
    case '2':
      font = '星期二'
      break
    case '3':
      font = '星期三'
      break
    case '4':
      font = '星期四'
      break
    case '5':
      font = '星期五'
      break
    case '6':
      font = '星期六'
      break
    default:
      font = '星期日'
      break
  }
  return font
}
// 周几缩写
export function toWeekShort (i) {
  let font = ''
  switch (Number(i)) {
    case 1:
      font = '周一'
      break
    case 2:
      font = '周二'
      break
    case 3:
      font = '周三'
      break
    case 4:
      font = '周四'
      break
    case 5:
      font = '周五'
      break
    case 6:
      font = '周六'
      break
    default:
      font = '周日'
      break
  }
  return font
}
// 获取URL参数
export function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
// 获取弧度
export function getRound (num) {
  let deg = (Math.PI * (num / 100 * 360 - 90)) / 180
  return deg
}
// 获取角度
export function getDegrees (rads) {
  return (rads * 180) / Math.PI
}
