<template>
	<v-card>
		<v-layout>
			<v-navigation-drawer
				v-model="drawer"
				dark
				color="black"
				:rail="rail"
				permanent
				@click="rail = false"
			>
				<v-list-item
					prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
					title="John Leider"
				>
					<template v-slot:append>
						<v-btn
							variant="text"
							icon="mdi-chevron-left"
							@click.stop="rail = !rail"
						>
						</v-btn>
					</template>
				</v-list-item>

				<v-divider></v-divider>

				<v-list 
					class="navigation"		
					density="compact"
					 nav
				>
					<v-list-item class="items" prepend-icon="mdi-home-city" title="home" value="home">
					</v-list-item>
					<v-divider></v-divider>
				
					<v-list-item class="items" prepend-icon="mdi-account" title="My Account" value="account">
					</v-list-item>
					<v-divider></v-divider>
				
					<v-list-item class="items" prepend-icon="mdi-account-group-outline" title="Users" value="users">
					</v-list-item>
					<v-divider></v-divider>

					<v-list-item class="items" prepend-icon="mdi-account-group-outline" title="Login" value="login">
					</v-list-item>

				</v-list>
			</v-navigation-drawer>
			<v-main style="height: 250px"></v-main>
		</v-layout>
	</v-card>
</template>

<script>
	
	export default {
		data: () => ({
			
				drawer: true,
				items: [
					{title: 'Home', icon: 'mdi-home-city'},
					{title: 'My account', icon: 'mdi-account'},
					{title: 'Users', icon: 'mdi-account-group-outline'},
				],
				rail: true,
			
		}),
	}
</script>

<style scoped>
	.navigation {
		background: #000;
		color: white;
		
	}
	.items:hover {
		color:  red;
	}
</style>