<style type="text/css">
	.box{
		border: 1px solid black;
		width: 100px;
		height: 100px;
		overflow: hidden;
	}
	.bat{
		width: 50px;
		height:50px;
		background-color: red;
	}
</style>
<template>
	<div class="box">
			<button class="boxWrap" ref="boxWrap" @click="tap">同一个组件，点击我</button>
			{{isShow}}
			<div v-if="isShow" class="bat">
			</div>
	</div>
</template>
<script>
	export default {
		props:{
			name:''
		},
		data(){
			return {
				isShow:false
			}
		},
		mounted(){
			this.$listen('dog', function (value) {
				console.log(this.name, value)
			})
		},
		methods:{
			tap () {
				this.$action('dog', this.name)
			},
			add(){
				let that = this;
				// 此处绑定点击事件的class：boxWrap请设置特殊一点，尽量只保证只在这个组件内出现
				let doms=document.getElementsByClassName('boxWrap');
				for(let i = 0;i<doms.length;i++){
					doms[i].addEventListener('click',function(e){
						if(that.$refs.boxWrap === this){
							that.isShow = !that.isShow
						} else {
							that.isShow = false;
						}
					})
				}
			}
		}
	}
</script>