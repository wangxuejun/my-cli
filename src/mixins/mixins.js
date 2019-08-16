// import {imgDomain, smsType} from '@/api/base.js'
// import {apiUser} from '@/api/BASE-API'
// import Cookie from 'js-cookie'
import dayjs from 'dayjs'
export default {
  data () {
    return {
    }
  },
  computed: {
    night () {
      return this.$store.state.night
    }
  },
  methods: {
    // 跳转页面
    createPage (page) {
      let {name, params, query} = page
      this.$router.push({name, params, query})
    },
    formtTime (val, reg = 'YYYY-MM-DD HH:mm:ss') {
      return dayjs(val).format(reg)
    }
    // // 显示错误
    // showErr (str) {
    //   this.errorMask = true
    //   this.errorStr = str
    // },
    // // 关闭错误提示
    // closeErr (val) {
    //   this.errorMask = val
    // },
    // // 处理图片路径
    // realAvatar (avatar) {
    //   if (!avatar) return ''
    //   if (avatar.includes('http://') || avatar.includes('https://')) {
    //     return avatar
    //   } else {
    //     return this.imgDomain + avatar
    //   }
    // },
    // // 验证值是否有效
    // isValid (value) {
    //   if (value === '') { return false }
    //   if (value === null) { return false }
    //   if (value === undefined) { return false }
    //   if (value === 0) { return false }
    //   if (value === false) { return false }
    //   return true
    // },
    // // 验证值是否有效
    // isValidNot0 (value) {
    //   if (value === '') { return false }
    //   if (value === null) { return false }
    //   if (value === undefined) { return false }
    //   if (value === false) { return false }
    //   return true
    // }
  }
  // beforeRouteEnter (to, from, next) {
  //   let {title} = to.meta
  //   title = title || '珂盟美业'
  //   if (title) document.title = title
  //   next()
  // },
}
