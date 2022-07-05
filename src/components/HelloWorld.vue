<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
        	 :src="dub"
		transition="slide-x-transition"
       		 class="my-3"
       		 contain
       		 height="200"
        />

	
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Sejam Bem Vindos .
        </h1>

        <p class="subheading font-weight-regular">
    
          <br>
		Conheca nossos Serviços e Preços de forma agil através dos links que seguem abaixo:
	<br>
		
		<div  id="nav">
			<router-link
			to="/Home"
			>
				Home
			</router-link>
			/
			<router-link 
				v-for="category in categories"
				v-bind:key="category.id"
				:to="`/Products/${category.id}`"
			>
				{{category.category_name}}  /
			</router-link>
	
		</div>
	<v-divider></v-divider>
	<div class="mx-auto">
		<v-container fluid>
			<router-view />
		</v-container>
	</div>
	
		
	
        </p>
      </v-col>
	</v-row>
<!--
	<v-row>
		<v-col>
			<p>
				Este é um projeto Experimental desenvolvido por <b>Rafael Pádua</b>
				no intuito de sanar as pequenas necessidades e automatizar alguns de nossos serviços.
				Com esta tentativa de criação, pretendemos atender melhor e automatizar nossos serviços 
			</p>
		</v-col>
	</v-row>
	-->
  </v-container>
</template>

<script>
import dub from '../assets/layout/dub_icon.png'
import axios from 'axios'
export default {
  name: 'HelloWorld',

  data: () => ({
	dub,
	categories: [],
	products: [],
  }),
methods: {
	getCategories() {
		axios.get('http://localhost:8000/api/categories')
		.then((response) => {
			this.categories = response.data;
			return this.categories;
		})
		.catch((response) => {
			console.log('Erro: ' + response.error)
		});
	},
	getProducts(){
		axios.get('http://localhost:8000/api/products')
		.then((response) => {
			this.products = response.data;
			return this.products;
		})
		.catch((response) => {
			console.log('Error: ' + response.error);
		})
	}
},
created() {
	this.getCategories();
	this.getProducts();
	}

}
</script>
