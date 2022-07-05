<template>
	<p>Clique em 'Home' e selecione uma nova categoria</p>
	<v-card
		v-for="product in products"
		v-bind:key="product.id"
		:loading="loading"
		class="mx-auto my-12"
		max-width="374"
	>
		<template slot="progress">
			<v-progress-linear
				color="deep-purple"
				height="10"
				indeterminate
			>
			</v-progress-linear>
		</template>

		<v-img
			:src="`http://localhost:8000/storage/products/${product.product_name}/${product.product_image} `"
			height="250"
		></v-img>

		<v-card-title>{{product.product_name}}</v-card-title>
		
		<v-card-text>
			<v-row
				align="center"
				class="mx-0"
			>
				<v-rating
					:value="4.5"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>
	
				<div class="grey--text ms-4">
					4.5 (413)
				</div>
			</v-row>
			
			<div class="my-4 text-subtitle-1" >
				R$  {{ product.product_price }} 
			</div>
			
			<div>
				<p>{{product.description_product}}</p>
			</div>
			
			<v-divider class="mx-4"></v-divider>

			<v-card-title>Tonight's availability</v-card-title>
			
			 <v-card-text>
			      <v-chip-group
			        v-model="selection"
			        active-class="deep-purple accent-4 white--text"
			        column
			      >
			        <v-chip>5:30PM</v-chip>
			
			        <v-chip>7:30PM</v-chip>
			
			        <v-chip>8:00PM</v-chip>
			
			        <v-chip>9:00PM</v-chip>
 			     </v-chip-group>
    </v-card-text>

			<v-card-actions>
				<v-btn
	
					text
				>
					Reserve
				</v-btn>
			</v-card-actions>
		</v-card-text>
	</v-card>

</template>

<script>
	import axios from 'axios'
	export default {
		data: () => ({
			products: [],
			loading: false,
			selection: 1,
		}),
	methods: {
			getProducts(){
				axios.get(`http://localhost:8000/api/products/read/${this.$route.params.id}`)
				.then((response) => {
					this.products = response.data;
					//return this.products.push(response.data);
				})
				.catch((response) => {
					console.log('Nenhum produto encontrado');
				});
			}
		},
		created(){
			this.getProducts();
			console.log('products mounted');
			
		}
	}
</script>