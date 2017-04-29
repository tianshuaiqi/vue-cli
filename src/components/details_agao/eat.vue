<template>
		<table class="table table-striped app">
			<caption>这是子级路由</caption>
			<thead>
				<tr>
					<th>名称</th>
					<th>城市</th>
					<th>邮编</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item of tableList">
					<td>{{item.name}}</td>
					<td>{{item.city}}</td>
					<td>{{item.num}}</td>
				</tr>
			</tbody>
		</table>

</template>

<script>
	
	export default { 
		name: 'eat',
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
				]
			}
		}
	}
</script>

<style>
	.app{
		background: #fff;
	}
</style>