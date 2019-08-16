<template>
	<div class="index">
	  <div>
	    <kmTop></kmTop>
	  </div>
	  <div class="main flex">
	    <kmNav></kmNav>
	    <router-view></router-view>
	  </div>
	</div>
</template> 
<script>
import mixin from '@/mixins/mixins'
import http from '@/utils/http'
import {showFullScreenLoading, hideFullScreenLoading} from '@/utils/loading'
export default {
  mixins: [mixin],
  components:{
    kmTop:() => import ('@/components/config/km-top'),
    kmNav:() => import ('@/components/config/km-nav')
  },
  data(){
    return {
    }
  },
  created(){
  },
  methods:{
    login () {
      let config = {
        method: 'POST',
        url:'http://localhost:8081/login',
        data: {
          user:'jun',
          id:1234
        }
      }
      http(config).then(res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        // hideFullScreenLoading()
      })
    },
    test () {
      let config = {
        method: 'POST',
        url:'http://localhost:8081/article',
        data: {
          user:'jun2',
          id:123422
        }
      }
      http(config).then(res => {
        console.log(res)
        // hideFullScreenLoading()
      })
    },
    open () {
    }
  },
  computed:{
  },
  watch: {
  }
}
</script>
<style lang="less" scoped>
  .index{
  	height: 100%;
    display: flex;
    flex-direction: column;
  }
  .main{
    // flex: 1;
    height: calc(100% - 60px);
  }
</style>