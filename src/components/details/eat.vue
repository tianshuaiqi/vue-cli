<template>
	<div>
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
		<form class="form-horizontal form app_eat col-md-12" style="padding-top:15px">
			<input type="text" v-model="username">
			<input type="text" v-model="password">
			<input type="password" v-model="conform">
      		<input type="button" @click.prevent="handleSubmit">
		</form>
	</div>
</template>

<script>
 	export default { 
		name: 'eat',
		data(){
			return {
				tableList: [
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
				name: '',
				username: '',
				password: '',
				conform: ''
			}
		},
		vuerify: {
			username: 'required',
			password: {
		      test: /\w{4,}/,
		      message: '至少四位字符'
		    },
		    conform: {
		    	test(val){
		    		return val === this.password
		    	},
		    	message: '密码不一样'
		    }
		},
		computed: {
			errors(){
				return this.$vuerify.$errors
			}
		},
		methods:{
			handleSubmit(){
				console.log(this.$vuerify.$errors)
				console.log(this.$vuerify.check())
			}
		}
	}
</script>

<style>
	.app_eat{
		background: #fff;
	}
</style>