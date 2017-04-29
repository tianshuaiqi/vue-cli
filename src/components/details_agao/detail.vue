<template>
		<div>
			<table class="table table-bordered app">
				<caption>这是子级路由</caption>
				<thead>
					<tr>
						<th>分类ID</th>
						<th>商品ID</th>
						<th>商品名称</th>
						<th>库存(个/件)</th>
						<th>价格</th>
						<th>折扣</th>
						<th>缩略图</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item of tableList">
						<td><b>{{item.classID}}</b></td>
						<td>{{item.goodsID}}</td>
						<td>{{item.goodsName}}</td>
						<td>{{item.discount}}</td>
						<td>{{item.price}}元</td>
						<td>{{item.discount}}折</td>
						<td>
							<img :src="item.goodsListImg" :width="20" :height="20">
						</td>
					</tr>
				</tbody>
			</table>
			<!-- <div>{{from_child}}</div> -->
			<pagination-paper :paper="{send}"></pagination-paper>
			<!-- <detail-Show v-on:to-parent="from_detail_show"></detail-Show> -->
		</div>
</template>

<script>
	import DetailShow from './detail_show'
	import PaginationPaper from '../template/pagination_temp'
	export default { 
		name: 'detail',
		data(){
			return {
				tableList:[
					{
						name: 'Tanmay',
						city: 'Sachin',
						num: 'Uma'
					},
					{
						name: 'Tanmay',
						city: 'Sachin',
						num: 'Uma'
					},
					{
						name: 'Tanmay',
						city: 'Sachin',
						num: 'Uma'
					}
				],
				title:'',
				from_child: '',
				send:'this is sending!'
			}
		},
		methods:{
			from_detail_show:function(msg){
				console.log(msg)
				this.from_child = msg.data;
			}
		},
		components:{
			DetailShow,
			PaginationPaper
		},
		created:function(){
			console.log('created')
			this.title = this.$parent.created;
			this.$http.jsonp('http://datainfo.duapp.com/shopdata/getGoods.php').then(
				res => {
					console.log(new Date().getTime())
					let basicListData = $.extend(true,{},res.body); 
					let tmp = [];
					/*$.each(basicListData,function(index,item){
						$.each(item,function(key,value){

						})
					})*/
					$.each(basicListData,(idx,item) => {
						tmp.push(item)
					})
					/*$.each(basicListData,(idx,item) => {
						tmp.push(item) 
					})
					$.each(basicListData,(idx,item) => {
						tmp.push(item)
					})*/
					this.tableList = tmp;
					this.goodsBasicInfo = {
						paper: 'no',
						pageSize: 10,
						pageNow: 1, 
						totalCount: this.tableList.length,
						pageCount: ''
					}
					this.goodsBasicInfo.pageCount = Math.ceil(this.goodsBasicInfo.totalCount / this.goodsBasicInfo.pageCount.pageSize)
				})
		},
		destroyed:function(){
			//console.log('destroyed')
			this.$emit('to-parent',{name:'child-to-parent!'})
		}
	}
	if(this.default.data().tableList){
		
	}
	console.log(this.default.data().tableList)
</script>

<style>
	.app{
		background: #fff;
	}
</style>