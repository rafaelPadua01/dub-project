<template>
	<div class="d-flex align-center flex-column">
		<div class="text-subtitle-2">Bebidas</div>
		<v-card
			class="mx-auto my-12"
			width="400"
			max-width="374"
			:loading="loading"
		>
			<v-progress-linear
				v-if="loading"
				class="position-absolute"
				style="deep-purple"
				height="10"
				indeterminate
			>

			</v-progress-linear>
			
			<v-img
				height="250"
				:src="heineken"
				cover
				
			>
				<div class="text-right">
					<v-chip
						v-if="chip"
						class="ma-2"
						color="orange"
						text-color="white"
						label
						variant="outlined"
					>
						<h3><strong>R$ 7.00</strong></h3>
					</v-chip>
				</div>
				
			</v-img>
			
			<v-card-header>
				<v-card-header-text>
					<v-card-title>Cerveja 1</v-card-title>
					<v-card-subtitle>
						<span class="mr-1">Descrição da cerveja 1</span>
					</v-card-subtitle>
					</v-card-header-text>
			</v-card-header>
			<v-card-text>
				
			<v-divider class="mx-4 mb-1"></v-divider>
			</v-card-text>
				

				<v-card-actions>
					<v-btn
						color="deep-purple-lighten-2" 
						text
						@click="reserve">
						Reserve
					</v-btn>
				</v-card-actions>
		</v-card>

		<v-card
			class="mx-auto my-12"
			width="400"
			max-width="374"
			text="conteudo aqui..."
			:loading="loading"
		>
			<v-progress-linear
				v-if="loading"
				class="position-absolute"
				style="deep-purple"
				height="10"
				indeterminate
			>

			</v-progress-linear>
			
			<v-img
				height="250"
				:src="budweiser"
				cover
			>
				<div class="text-right">
					<v-chip
						v-if="chip"
						class="ma-2"
						color="orange"
						text-color="white"
						label
						variant="outlined"
					>
						<h3><strong>R$ 8.00</strong></h3>
					</v-chip>
				</div>
				
			</v-img>
			
			<v-card-header>
				<v-card-header-text>
					<v-card-title>Cerveja 2</v-card-title>
					<v-card-subtitle>
						<span class="mr-1">Descrição da cerveja 2</span>
					</v-card-subtitle>
					</v-card-header-text>
			</v-card-header>
			<v-card-text>
				
			<v-divider class="mx-4 mb-1"></v-divider>
			</v-card-text>
				
				<v-card-actions>
					<v-btn
						color="deep-purple-lighten-2" 
						text
						@click="reserve">
						Reserve
					</v-btn>
				</v-card-actions>
		</v-card>
		
	
		<v-card
			class="mx-auto my-12"
			width="400"
			max-width="374"
			:loading="loading"
		>
			<v-progress-linear
				v-if="loading"
				class="position-absolute"
				style="deep-purple"
				height="10"
				indeterminate
			>

			</v-progress-linear>
			
			<v-img
				height="250"
				:src="whiskey"
				cover
			>
				<div class="text-right">
					<v-chip
						v-if="chip"
						class="ma-2"
						color="orange"
						text-color="white"
						label
						variant="outlined"
					>
						<h3><strong>R$ 100.00</strong></h3>
					</v-chip>
				</div>
				
			</v-img>
			
			<v-card-header>
				<v-card-header-text>
					<v-card-title>Whiskey</v-card-title>
					<v-card-subtitle>
						<span class="mr-1">Descrição do Whiskey</span>
					</v-card-subtitle>
					</v-card-header-text>
			</v-card-header>
			<v-card-text>
				
			<v-divider class="mx-4 mb-1"></v-divider>
			</v-card-text>
			

				<v-card-actions>
					<v-btn
						color="deep-purple-lighten-2" 
						text
						@click="reserve">
						Reserve
					</v-btn>
				</v-card-actions>
		</v-card>
		
		
	</div>
</template>

<script>
	import budweiser from '@/assets/Bebidas/budweiser.jpeg'
	import heineken from '@/assets/Bebidas/heineken.jpg'
	import whiskey from '@/assets/Bebidas/whiskey.jpeg'
	
	export default {
		data: () => ({
		loading: false,
		selection: 1,
		budweiser,
		heineken,
		whiskey,
		chip:true,
	}),
	methods: {
		reserve() {
			this,loading = true
			setTimeOut(() => (this.loading = false), 2000)
		},
	},
}
</script>