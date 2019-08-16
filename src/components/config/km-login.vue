<template>
	<div class="kmLogin pdTB20 pdLR25">
		<h1 class="textC mgB15">资源博客网站管理系统</h1>
		<div class="mgB15">
			<el-switch
			  v-model="isRegister"
			  active-color="#FF6666"
			  inactive-color="#409EFF"
			  active-text="注册"
			  inactive-text="登录">
			</el-switch>
		</div>
		<el-input v-model="user"
							class="mgB15"
							size="small"
							clearable
							prefix-icon="el-icon-user" 
							placeholder="请输入用户名">
		</el-input>
		<el-input v-model="password"
							class="mgB15"
							size="small"
							clearable
							show-password
							prefix-icon="el-icon-lock" 
							placeholder="请输入密码">
		</el-input>
		<div class="kmLogin-register" :class="isRegister?'kmLogin-show mgB15':'kmLogin-hidden'">
			<el-input v-model="password2"
								class="mgB15"
								size="small"
								clearable
								show-password
								prefix-icon="el-icon-lock" 
								placeholder="请确认密码">
			</el-input>
		</div>
		<div class="kmLogin-check">
			<el-checkbox v-model="checked" class="">记住我</el-checkbox>
		</div>
		<el-button type="primary" size="small" class="kmLogin-button" @click="take">
			{{isRegister?"注册":"登录"}}
		</el-button>
	</div>
</template>
<script>
	import mini from '@/mixins/mixins'
	export default {
		name: 'km-login',
		mixins: [mini],
		data () {
			return {
				user: '',
				password: '',
				password2: '',
				checked: true,
				isRegister: false
			}
		},
		methods: {
			take () {
				this.createPage({name: 'index'})
			}
		}
	}
</script>
<style lang="less" scoped>
	.kmLogin{
		width: 350px;
		background-color: white;
		box-sizing: border-box;
		.kmLogin-register{
			transition: all .2s;
		}
		.kmLogin-hidden{
			height: 0;
			overflow: hidden;
		}
		.kmLogin-show{
			height: 32px;
		}
		.kmLogin-check{
			height: 50px;
		}
		.kmLogin-button{
			width: 100%;
		}
	}
</style>