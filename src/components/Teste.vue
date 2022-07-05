<template>

		
{{message}}
	

</template>
<script>
	import axios from 'axios';
	export default {
	data: () => ({
		message: '',
	}),

	methods: {
		loadMessage() {
			
			axios.get('http://localhost:8000/api/teste')
			.then(response => {
				return this.message = response.data;
			})
			.catch(response => {
				return console.log('Não foi possível conectar agora...');
			});
		}

	},
	created(){
		this.loadMessage();
	}
}
</script>