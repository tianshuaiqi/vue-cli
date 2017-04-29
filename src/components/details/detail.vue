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
				<tbody v-if="loadingStatus">
					<moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
				</tbody>
				<tbody >
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
			<p class="app row col-md-12" style="margin-left:0">数据刷新,现在是第{{pageNow}}页</p>
			<pagination-paper :paper="{goodsBasicInfo}" @numChange="numChange" :pagination="{}"></pagination-paper>
			<div class="app row col-md-12" style="margin-left:0">{{from_child}}{{fromChildMsg}}</div>
			<detail-Show @to-parent="from_detail_show" :tell="{say}"></detail-Show>
			<button class="btn btn-default" @click="tellMonher">叫妈妈吃饭</button>
		</div>
</template>

<script>
	import DetailShow from './detail_show'
	import PaginationPaper from '../template/pagination_temp'
	import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
	import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
	console.log(PulseLoader)
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
				from_child: 1,
				send:'this is sending!',
				goodsBasicInfo:{
					paper: '',
					pageSize: 10,
					pageNow: 1, 
					totalCount: '',
					pageCount: 5
				},
				pageNow:1,
				fromChildMsg: '',
				loading:'',color:'#2a393c',size:'100px',
				loadingStatus:'',
				say:'儿子，你去叫妈妈吃饭',
				num: 1
			}
		},
		methods:{
			from_detail_show(msg){
				this.fromChildMsg = msg.data;
				this.from_child ++;
			},
			numChange(msg){
				this.pageNow = msg;
			},
			paginationInfo(){

			},
			tellMonher(){
				this.num ++;
				this.$emit('tellMonher',this.num)
			}
		},
		components:{
			DetailShow,
			PaginationPaper,PulseLoader,MoonLoader
/*			PulseLoader*/
		},
		created:function(){
			this.loadingStatus = true;
			this.title = this.$parent.created;
			this.$http.jsonp('http://datainfo.duapp.com/shopdata/getGoods.php').then(
				res => {
					this.goodsBasicInfo.paper = res.body.length;
					if(res){
						this.loadingStatus = false	
					}

					let basicListData = $.extend(true,{},res.body); 
					let tmp = [];
					$.each(basicListData,(idx,item) => {
						tmp.push(item)
					})
					this.tableList = tmp;
				})
		},
		watch:{
			tableList(val,oldVal){
				//console.log(val + '/' + oldVal)
			}
		},
		destroyed:function(){
			//console.log('destroyed')
			this.$emit('to-parent',{name:'child-to-parent!'})
		}
	}
</script>

<style>
	.app{
		background: #fff;
	}
</style>