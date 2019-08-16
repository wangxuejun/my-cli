<template>
	<div class="kmTop flex pdLR30">
		<div class="kmTop-left">
			<b>资</b><span>源网站后台管理系统</span>
		</div>
		<div class="kmTop-right flex alignC">
			<img src="../../../static/images/head.jpg" class="mgR20">
			<el-dropdown @visible-change="toggle">
				<span class="el-dropdown-link">
			    <div>
			    	<p>{{formtTime(time)}}</p>
			    	<p>陨落-管理员</p>
			    </div>
			    <i class="el-icon-arrow-down" :class="icon"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			  	<el-dropdown-item @click.native='select'>{{night? '日间模式': '黑夜模式'}}</el-dropdown-item>
			    <el-dropdown-item>编辑信息</el-dropdown-item>
			    <el-dropdown-item @click.native='loginOut'>退出登录</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>
<script>
	import mixin from '@/mixins/mixins'
	export default {
		name: 'km-top',
		mixins: [mixin],
		data () {
			return {
				time: new Date(),
				icon: 'el-icon-caret-bottom'
			}
		},
		created () {
			setInterval(() => {
				this.time = new Date()
			}, 1000)
			console.log(this.$store)
		},
		methods: {
			toggle (val) {
				if (val) {
					this.icon = 'el-icon-caret-top'
				} else {
					this.icon = 'el-icon-caret-bottom'
				}
			},
			select () {
				this.$store.commit('toggleNight')
			},
			loginOut () {
				this.createPage({name: 'login'})
			}
		}
	}
</script>
<style scoped lang="less">
	.kmTop{
		height: 60px;
		background-color: @color-main;
		transition: all .3s;
		.kmTop-left{
			flex: 1;
			display: flex;
			align-items: center;
			color: white;
			b{
				width: 30px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				border-radius: 15px;
				background-color: white;
				display: inline-block;
				color: @color-main;
				font-size: 20px;
			}
			span{
				letter-spacing: 2px;
				margin-left:10px;
				font-size: 18px;
			}
		}
		.kmTop-right{
			img{
				width: 50px;
				height: 50px;
				border-radius: 25px;
			}
			.el-dropdown-link{
				cursor: pointer;
				color: white;
				display: flex;
				align-items: center;
				p{
					text-align: center;
					font-size: 14px;
				}
				i{
					margin-left: 10px;
				}
			}
		}
	}
</style>