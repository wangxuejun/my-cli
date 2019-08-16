<template>
	<div class="button" @click="tap">
		<span>22222</span>
	</div>
</template>
<script>
	import {circle} from './circle'
	console.log(circle)
	export default {
		methods:{
			tap (e) {
				// circle(this, e)
				let target = this.$el;
				let offsetX = e.offsetX;
				let offsetY = e.offsetY;
				console.log(offsetX, offsetY)
				let i = document.createElement('i');
				i.style.left = offsetX + 'px';
				i.style.top = offsetY + 'px';
				i.className = 'circleBase circleMove';
				target.appendChild(i);
				setTimeout(() => {
					target.removeChild(i)
				}, 1000)
			}
		}
	}
</script>
<style scoped lang="less">
	.button{
		width: 100px;
		height: 30px;
		border: 1px solid black;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
	}
</style>