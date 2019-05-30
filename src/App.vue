<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins';
import http from '@/utils/http'
export default {
  mixins: [mixin],
  data(){
    return {
    }
  },
  created(){
    let config = {
      method: 'GET',
      // url: 'http://localhost:8081/article',
      url:'http://localhost:8081/article',
      data: {},
      params: {}
    }
    // console.log(http)
    http(config).then(res => {
      console.log(res)
    })
  },
  methods:{
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





