<template>
	<v-card>
		 <v-tabs
      			v-model="tab"
    			  background-color="red-accent-4"
    		>
      <v-tab value="one">Categoria</v-tab>
      <v-tab value="two">Nova Categoria</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
    		{{item_categories}}
			<v-row no-gutters>
				<v-col
					cols="12"
					sm="4"
				>
				<v-card
					class="pa-2"
					outlined
					tile
					v-for="item in item_categories"
					v-bind:key="item.id"
				>
					{{item}}
				</v-card>
				</v-col>
			</v-row>
		
		
        </v-window-item>

        <v-window-item value="two">
         <v-form
		ref="form"
		v-model="valid"
		lazy-validation
		@submit.prevent
		>
		<v-text-field
			v-model="name_category"
			:counter="10"
			:rules="nameRules"
			label="Nome Categoria:"
			required
		>
			
		</v-text-field>

		<v-btn
			:disable="!valid"
			color="success"
			class="mr-4"
			@click="insert()"
		>
			Salvar
		</v-btn>
		
		<v-btn
			color="default"
			class="mr-4"
			@click="reset"
		>
			reset
		</v-btn>
	</v-form>
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>

	</v-card>
	
</template>

<script>
	import axios from 'axios';
	export default {
		data: () => ({
		tab: null,
		valid: true,
		headers: [{
			text: 'Nome Categoria',
			align: 'start',
			sortable: false,
			value: 'name_category',
		},
		{
			text: 'Criada Em:',
			value: 'created_at'
		},
		{
			text: 'Atualizada Em:',
			value: 'updated_at'
		}],
		item_categories: [],
		name_category: '',
		nameRules: [
				v => !!v || 'Name is required',
				v => (v && v.length < 10 || 'Name must be less than 10 characters '), 
			],
		}),
	methods: {
		validate() {
			this.$refs.form.validate();
			var data = this.$refs.form.validate();
		 	insert(data);
		},
		reset()	{
			this.$refs.form.reset()
		},
		resetValidation() {
			this.$refs.form.resetValidation()
		},
		receivedCategories(){
			axios.get('http://localhost:8000/api/categories')
			.then((response) => {
				return this.item_categories.push(response.data);

			})
			.catch((response) => {
				return console.log(response.error);
			});
		},
		insert() {
			const form = this.$refs.form.validate();	
			let data = {name_category: this.name_category};
			if(form) {
				axios.post('http://localhost:8000/api/categories/insert', data)
				.then((response) => {
					 return window.alert(response);		
				})
				.catch((response) => {
					return console.log(response);
				});
			}
		},
	},
	created(){
		this.receivedCategories();
	}
	
}
</script>