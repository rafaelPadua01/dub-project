<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavigationDrawer from './components/layout/NavigationDrawer.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import axios from 'axios';



</script>

<template>
	<v-main>
		<v-container fluid>
			<router-view></router-view>
		</v-container>
	</v-main>
	
  <HelloWorld msg="Dub Lounge Bar" />
	
	<Footer app></Footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
