// import {imgDomain, smsType} from '@/api/base.js'
// import {apiUser} from '@/api/BASE-API'
// import Cookie from 'js-cookie'
export default {
  data () {
    return {
      // imgDomain,
      // smsType,
      // errorMask: false,
      // errorStr: '',
      // list: [],
      // login: undefined,
      // pageConfig: {
      //   current: 1,
      //   total: 30
      // },
      // loading: false,
      // finished: false,
      // defaultImg: {
      //   storeLogo: 'saas/2c90071b670c3ce001670c9e5c2b0005.png',
      //   storeBanner: 'saas/2c90071b670c3ce001670c83bcd10003.png'
      // }
    }
  },
  methods: {
    // // 跳转页面
    // createPage (page) {
    //   let {name, params, query} = page
    //   this.$router.push({name, params, query})
    //   Cookie.remove('rediUrl')
    // },
    // // 获取元数据名称
    // getCodeDesc (code, item) {
    //   if (!Array.isArray(item) || code === undefined || code === '') return ''
    //   let arr = item.filter(ele => ele.value === code)
    //   if (arr.length > 0) {
    //     return arr[0].label
    //   } else {
    //     return ''
    //   }
    // },
    // // 显示错误
    // showErr (str) {
    //   this.errorMask = true
    //   this.errorStr = str
    // },
    // // 关闭错误提示
    // closeErr (val) {
    //   this.errorMask = val
    // },
    // getUserInfo () {
    //   if (!window.sessionStorage.getItem('openid')) return
    //   // alert('cust接口:' + localStorage.getItem('currentTenantId'));
    //   apiUser(res => {
    //     if (res.data.errcode === 0) {
    //       let data = res.data.data
    //       if (data) {
    //         this.$store.dispatch('getUserInfo', data)
    //       } else {
    //         if (this.login) {
    //           this.$router.push({name: 'login'})
    //         }
    //       }
    //     }
    //   })
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
    // // 订单状态
    // getOrdSttu (ordSttusCode) {
    //   let str = ''
    //   switch (ordSttusCode) {
    //     case '50501':
    //       str = '待确认'
    //       break
    //     case '50502':
    //       str = '支付中'
    //       break
    //     case '50503':
    //       str = '已完成 '
    //       break
    //     case '50504':
    //       str = '已取消'
    //       break
    //     default:
    //       str = '未支付'
    //   }
    //   return str
    // },
    // // 分期状态
    // getInsSttu (instlSttusCode) {
    //   let str = ''
    //   switch (instlSttusCode) {
    //     case '60401':
    //       str = '未提交'
    //       break
    //     case '60402':
    //       str = '待审核'
    //       break
    //     case '60403':
    //       str = '待补件'
    //       break
    //     case '60404':
    //       str = '分期失败'
    //       break
    //     case '60405':
    //       str = '分期成功'
    //       break
    //     case '60406':
    //       str = '分期未通过'
    //       break
    //     case '60407':
    //       str = '分期失效'
    //       break
    //     case '60408':
    //       str = '资料已提交'
    //       break
    //     default:
    //       str = '已取消'
    //   }
    //   return str
    // },
    // // 分期状态
    // getOnlnSttu (sttu) {
    //   let str = ''
    //   switch (sttu) {
    //     case '71501':
    //       str = '预约中'
    //       break
    //     case '71502':
    //       str = '已到店'
    //       break
    //     case '71503':
    //       str = '已取消'
    //       break
    //     default:
    //       str = '已超时'
    //   }
    //   return str
    // },
    // // 加载数据
    // loadList (data, count) {
    //   this.loading = false
    //   let pageNo = this.params.pageNo
    //   if (pageNo === 1) {
    //     this.list = [...data]
    //   } else {
    //     this.list.push(...data)
    //   }
    //   let len = this.list.length
    //   this.$set(this.params, 'pageNo', pageNo++)
    //   this.params.pageNo = pageNo++
    //   this.pageConfig.current = pageNo
    //   this.pageConfig.total = count
    //   if (len >= count) {
    //     this.finished = true
    //   } else {
    //     this.finished = false
    //   }
    // },
    // resetParams () {
    //   let params = this.params
    //   for (let prop in params) {
    //     if (prop !== 'pageNo') {
    //       params[prop] = ''
    //     }
    //     params.pageNo = 1
    //   }
    //   this.pageConfig.current = 1
    //   this.pageConfig.total = 0
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
  },
  computed: {
    // opendId () {
    //   return sessionStorage.getItem('openid')
    // },
    // phoneNo () {
    //   return sessionStorage.getItem('phone')
    // },
    // nickname () {
    //   return sessionStorage.getItem('nickname')
    // },
    // avatar () {
    //   return sessionStorage.getItem('headimgurl')
    // }
  }
  // beforeRouteEnter (to, from, next) {
  //   let {title} = to.meta
  //   title = title || '珂盟美业'
  //   if (title) document.title = title
  //   next()
  // },
}
