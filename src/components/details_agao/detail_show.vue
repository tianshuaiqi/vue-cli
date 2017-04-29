<template>
	<div>
		<div class="app">{{name}}</div>
		<button v-on:click='toparent'>给父组件发送</button>
	</div>
</template>

<script>
	
	export default { 
		name: 'detail_show',
		data(){
			return {
				name:'this is detail_show'
			}
		},
		methods:{
			toparent:function(){
				this.$emit('to-parent',{data:'这是从detail的儿子detail_show的信息'})
			}
		},
		created:function(){
			
		}
	}
</script>

<style>
	.app{
		background: #fff;
	}
</style>