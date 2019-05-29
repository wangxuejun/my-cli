<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins';
export default {
  mixins: [mixin],
  data(){
    return {
    }
  },
  created(){
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





