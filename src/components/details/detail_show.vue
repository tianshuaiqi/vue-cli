<template>
	<div class="app row col-md-12">
		<div style="color:red">
			儿子听到了爸爸说了一句话：" {{say}} ",已经说了 {{$parent.num}} 次了
		</div>
		<button v-on:click='toparent' class="btn bp-btn-primary">父组件++</button>
		
	</div>
</template>

<script>
	
	export default { 
		name: 'detail_show',
		data(){
			return {
				name:'this is detail_show',
				say:'',
				num:0
			}
		},
		methods:{
			toparent:function(){
				this.$emit('to-parent',{data:'这是从detail的儿子detail_show的信息'})
			},
			fromParent:function(el){
				console.log(el)
			}
		},
		props:['tell'],
		created:function(){
			this.say = this.tell.say;
		},
		watch:{
			num:{
				handler(cv,ov){
					console.log(cv)
				},
				deep:true
			}
		}
	}
</script>

<style>
	.app{
		background: #fff;
	}
</style>