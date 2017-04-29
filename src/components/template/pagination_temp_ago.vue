<template>
	<div class="pagination-paper row col-md-12" style="margin-left:0">
		<div class="row col-md-6 pull-left">
			<ul class="pagination pull-right">
				<li><a href="javascript:;" @click="numChange('first')">首页</a></li>
				<li><a href="javascript:;" v-on:click="numChange('reduce')">上一页</a></li>
				<!-- <li><a href="javascript:;">这是第{{}}页</a></li> -->
				<li><a href="javascript:;" v-on:click="numChange('add')">下一页</a></li>
				<li><a href="javascript:;" @click="numChange('last')">尾页</a></li>
			</ul>
		
			<ul class="pagination pull-left">
				<li><span>共 {{paper.goodsBasicInfo.paper}} 条数据</span></li>
				<li><span>当前是第 {{paper.goodsBasicInfo.pageNow}} 页</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default { 
		name: 'pagination_temp',
		data(){
			return {
				name:'this is detail_show',
				paperInfo:{
					paper: '',
					pageSize: '',
					pageNow: '',
					totalCount: '',
					pageCount: ''
				}
			}
		},

		methods:{
			toparent:function(){
				this.$emit('to-parent',{data:'这是从detail的儿子detail_show的信息'})
			},
			numChange(type){
				if(type === 'reduce'){
					this.paper.goodsBasicInfo.pageNow --
					if(this.paper.goodsBasicInfo.pageNow<=0){
						this.paper.goodsBasicInfo.pageNow =1
					}
				}else if(type === 'add'){
					this.paper.goodsBasicInfo.pageNow ++
				}else if(type === 'first'){
					this.paper.goodsBasicInfo.pageNow = 1;
				}else if(type === 'last'){
					this.paper.goodsBasicInfo.pageNow = 99;
				}
				//let sendParams = {data:}
				//console.log(sendParams)
				this.$emit('numChange',this.paper.goodsBasicInfo.pageNow)
			}
		},
		props:['paper'],
		created:function(){
			//console.log(this.paper)
			/*this.$on('PaginationInfo',el => {
				console.log(el)
			})*/
			//console.log(this.paper)
		}
	}
</script>

<style>
	.pagination-paper{
		background: #fff;
	}
</style>