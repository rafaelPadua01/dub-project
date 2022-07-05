<template>
	<div class="d-flex align-center flex-column">
		<div class="text-subtitle-2">Petiscos</div>
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
				:src="petisco1"
				cover
				contain
			>
			
			</v-img>
			
			<v-card-header>
				<v-card-header-text>
					<v-card-title>Petisco 1</v-card-title>
					<v-card-subtitle>
						<span class="mr-1">Descrição do Petisco1</span>
					</v-card-subtitle>
					</v-card-header-text>
			</v-card-header>
			<v-card-text>
				<div class="text-grey ms-4">
					$ = R$ 17.00
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
		<v-divider></v-divider>
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
				:src="petisco2"
				cover
				contain
			>
			
			</v-img>
			
			<v-card-header>
				<v-card-header-text>
					<v-card-title>Petisco 2</v-card-title>
					<v-card-subtitle>
						<span class="mr-1">Descrição do Petisco12</span>
					</v-card-subtitle>
					</v-card-header-text>
			</v-card-header>
			<v-card-text>
				<div class="text-grey ms-4">
					$ = R$ 27.00
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

		<v-divider></v-divider>
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
				:src="petisco3"
				cover
				contain
			>
			
			</v-img>
			
			<v-card-header>
				<v-card-header-text>
					<v-card-title>Petisco 3</v-card-title>
					<v-card-subtitle>
						<span class="mr-1">Descrição do Petisco3</span>
					</v-card-subtitle>
					</v-card-header-text>
			</v-card-header>
			<v-card-text>
				<div class="text-grey ms-4">
					$ = R$ 37.00
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
	import petisco1 from '@/assets/Petiscos/petisco1.jpeg'
	import petisco2 from '@/assets/Petiscos/petisco2.jpeg'
	import petisco3 from '@/assets/Petiscos/petisco3.jpeg'

	export default {
		data: () =>( {
			petisco1,
			petisco2,
			petisco3
		}),
		methods: {
			reserve(){
			loading = true
			setTimeOut(() => (this.loading = false), 2000)
			},
		},
	}
</script>