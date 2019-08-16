<template>
	<div class="login">
		<!-- <kmBear></kmBear> -->
		<div class="login-wrap shadow bodR10">
			<kmLogin></kmLogin>
		</div>
	</div>
</template>
<script>
	import mini from '@/mixins/mixins'
	export default {
		name: 'login',
		mixins: [mini],
		components:{
			kmLogin:() => import ('@/components/config/km-login'),
			kmBear:() => import ('@/components/config/km-bear')
		},
		data () {
			return {
			}
		}
	}
</script>
<style lang="less" scoped>
	.login{
		min-height: 100%;
		width: 100%;
		// background: linear-gradient(@color-main, @color-light);
		background: url("../../../static/images/bg.jpg") 100% 100%;
		.login-wrap{
			position: absolute;
			top: 25%;
			right: 10%;
			// transform: translateY(-50%);
			overflow: hidden;
		}
	}
</style>