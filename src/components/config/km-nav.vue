<template>
	<div class="kmNav">
		<div v-for="item, index in navs" class="kmNav-item pdTB10">
			<div class="kmNav-item_line" @click="toggle(index)">
				<i :class="item.icon"></i>
				<span>{{item.name}}</span>
			</div>
			<div class="kmNav-item_draw" :style="{height:item.drawShow? 30 * item.child.length + 'px': 0}" 
						v-if="item.child && item.child.length !== 0">
				<div class="kmNav-item_line" v-for="initem in item.child">
					<i></i>
					<span>{{initem.name}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import mixin from '@/mixins/mixins'
	export default {
		name: 'km-nav',
		mixins: [mixin],
		data () {
			return {
				navs: [
					{
						name: '文章管理',
						path: '/article',
						icon: 'el-icon-document-copy',
						drawShow: false,
						child: [
							{
								name: '文章发布',
								path: '/article/write',
							},
							{
								name: '等待审核',
								path: '/article/read',
							}
						]
					},
					{
						name: '标签管理',
						path: '/tag',
						icon: 'el-icon-paperclip'
					},
					{
						name: '图片管理',
						path: '/images',
						icon: 'el-icon-picture-outline'
					},
					{
						name: '会员管理',
						path: '/member',
						icon: 'el-icon-user'
					},
					{
						name: '权限管理',
						path: '/power',
						icon: 'el-icon-lollipop'
					},
					{
						name: '设置管理',
						path: '/set',
						icon: 'el-icon-setting'
					},
				]
			}
		},
		methods: {
			toggle (index) {
				this.navs[index].drawShow = !this.navs[index].drawShow
			}
		}
	}
</script>
<style scoped lang="less">
	.kmNav{
		width: 150px;
		height: 100%;
		background-color: @color-back;
		box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
		overflow-y: scroll;
		transition: background-color .3s;
		&::-webkit-scrollbar {
	    display: none;
		}
		.kmNav-item{
			margin: 0 30px; 
			cursor: pointer;
			border-bottom: .5px solid #EBEBEB;
			transition: all .3s;
			&:last-child{
				border-bottom: none;
			}
			.kmNav-item_line{
				height: 30px;	
				line-height: 30px;
				i{
					display: inline-block;
					width: 20px;
				}
				span{

				}
				&:hover{
					color: @color-main;
				}
			}
			.kmNav-item_draw{
				transition: all .3s;
				overflow: hidden;
				box-sizing: border-box;
				.kmNav-item_line{
					height: 30px;
					line-height: 30px;
				}
				span{
					font-size: 12px;
				}
			}
		}
	}
</style>