import {createWebHistory, createRouter}   from "vue-router"; 
import Home from '../components/Home.vue' 
import HelloWorld from '../components/HelloWorld.vue'
import Categories from '../components/views/Categories.vue'
import Products from '../components/Products.vue'
import Lounge from '../components/Lounge.vue'
import Bebidas from '../components/Bebidas.vue'
import Petiscos from '../components/Petiscos.vue'
import Teste from '../components/Teste.vue'


const routes = [
	{
		path: '/Home',
		name: 'home',
		component: Home,
	},
	/*Rotas das categorias*/
	{
		path: '/Categories',
		name: 'categories',
		component: Categories,
	},
	/* Rota dos Produtos*/
	{
		path: '/Products/:id',
		name: 'products',
		component: Products,
	},
	/* Remover estas rotas */
	{
		path: '/Lounge',
		name: 'lounge',
		component: Lounge,
	},
	{
		path: '/bebidas',
		name: '/bebidas',
		component: Bebidas,
	},
	{
		path: '/Petiscos',
		name: '/petiscos',
		component: Petiscos,
	},
	{
		path: '/teste',
		name: '/teste',
		component: Teste,
	},
	
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

