<template>
  <div id="app">
    
    <router-view></router-view>
    <br><br>
    <button @click="open">open</button>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins';
import http from '@/utils/http'
import {showFullScreenLoading, hideFullScreenLoading} from '@/utils/loading'
export default {
  mixins: [mixin],
  data(){
    return {
    }
  },
  created(){
    // showFullScreenLoading()
    
    let config = {
      method: 'GET',
      // url: 'http://localhost:8081/article',
      url:'http://localhost:8081/article',
      data: {},
      params: {}
    }
    // console.log(http)
    // http(config).then(res => {
    //   console.log(res)
    //   hideFullScreenLoading()
    // })
  },
  methods:{
    open () {
      showFullScreenLoading()
       setTimeout(() => {
        showFullScreenLoading()
      }, 300)
      setTimeout(() => {
        hideFullScreenLoading()
      }, 1000)
      setTimeout(() => {
        hideFullScreenLoading()
      }, 2000)
    }
  },
  computed:{
  },
  watch: {
  }
}
</script>
<style lang="less" scoped>
  .a{
    color:red;
    .b{
      color:blue;
    }
  }
</style>





