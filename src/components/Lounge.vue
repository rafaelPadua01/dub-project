<template>
	<div
		class="d-flex align-center flex-column"
	>
		<div class="text-subtitle">Narguile</div>
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
				:src="narguile"
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
						<h3><strong>R$ 25.00</strong></h3>
					</v-chip>
				</div>
			</v-img>
			
			<v-card-header>
				<v-card-header-text>
					<v-card-title>Alguel do narguile completo (rosh, carvão e etc.).</v-card-title>
					<v-card-subtitle>
						<span class="mr-1">Apenas para uso na loja (+18)</span>
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
				:src="rosh"
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
						<h3><strong>R$ 15.00</strong></h3>
					</v-chip>
				</div>
			</v-img>
			
			<v-card-header>
				<v-card-header-text>
					<v-card-title>Reposição (rosh, carvão).</v-card-title>
					<v-card-subtitle>
						<span class="mr-1">Apenas para uso na loja (+18)</span>
					</v-card-subtitle>
					</v-card-header-text>
			</v-card-header>
			<v-card-text>
				<div class="text-grey ms-4">
					$ = R$ 15.00
				</div>
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
	import narguile from '@/assets/Narguile/narguile.jpg'
	import rosh from '@/assets/Narguile/rosh.jpeg'

	export default {
		data: () => ({
			narguile,
			rosh,
			chip: true,
		})
	}
</script>