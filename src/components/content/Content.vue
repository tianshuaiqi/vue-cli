<template>
	<div class="content pull-right">
		<router-view></router-view>
	</div>
	
</template>

<script>
	
	export default { 
		name: 'content'
	}
</script>

<style>
	.content{
		flex: 1;
	}

</style>