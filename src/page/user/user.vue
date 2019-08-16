<template>
	<div>
		<p class="main">{{name}}</p>
		<button @click='cahnge'>改变</button>
		<kmButton></kmButton>
	</div>
</template>
<script>
	export default {
		name:'userPage',
		components:{
			kmButton:() => import ('@/components/basis/kmButton')
		},
		data(){
			return {
				name:'hello'
			}
		},
		methods:{
			cahnge(){
				this.name = 'hello world'
			}
		}
	}
</script>
<style lang="less">
	@import '../../assets/css/var.less';
	.aaa{
		color: @color-font1;
	}
</style>