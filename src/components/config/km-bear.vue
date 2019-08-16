<template>
	<div class="kmBear">
		<canvas width="200" height="200" id="bear"></canvas>
		{{dataBase}}
		<div v-for="item,index in dataBase"  class="line">
			<div v-for="initem,inindex in item">
				<span class="add bat" @click="adds(index, inindex)">+10</span>
				<span class="add bat" @click="add(index, inindex)">+</span>
				<span>{{initem}}</span>
				<span class="minus bat" @click="minus(index, inindex)">-</span>
				<span class="minus bat" @click="minuss(index, inindex)">-10</span>
			</div>
			----------------------
		</div>
	</div>
</template>
<script>
	export default {
		name:'km-bear',
		data () {
			return {
				dataBase: [[55, 21, 39, 40],[55, 21, 39, 40]]
			}
		},
		mounted () {
			this.draw()
		},
		methods: {
			draw () {
				let data = this.dataBase;
				var canvas = document.getElementById('bear');
				var ctx = canvas.getContext('2d');
				ctx.clearRect(0,0,200,200);
				ctx.beginPath();
				ctx.moveTo(100,25);
				this.curve(ctx, data[0][0], data[0][1], data[0][2], data[0][3])
				this.curve(ctx, data[1][0], data[1][1], data[1][2], data[1][3])
				// ctx.fill();
				ctx.stroke();
			},
			curve (ctx, a, b, c, d) {
				ctx.quadraticCurveTo(a, b, c, d);
			},
			add (index, inindex) {
				this.dataBase[index][inindex] ++
				console.log(this.dataBase)
				this.draw()
			},
			minus (index, inindex) {
				this.dataBase[index][inindex] --
				console.log(this.dataBase)
				this.draw()
			},
			adds (index, inindex) {
				this.dataBase[index][inindex] +=10
				console.log(this.dataBase)
				console.log(this.dataBase)
				this.draw()
			},
			minuss (index, inindex) {
				this.dataBase[index][inindex] -=10
				console.log(this.dataBase)
				this.draw()
				console.log(1)
			}
		}
	}
</script>
<style scoped lang="less">
	.kmBear{
		background-color: white;
		height: 500px;
	}
	#bear{
		background-color: white;
		border: 1px solid black;
	}
	.line{
		
	}
	.bat{
		display: inline-block;
		background-color: yellow;
		width: 40px;
		height: 20px;
		color: white;
		text-align: center;
		line-height:20px;
		cursor: pointer;
	}
	.add{
		background-color: blue;
	}
	.minus{
		background-color: green; 
	}
</style>