<template>
<v-container>
<h3 class="grey--text text-darken-1 mb-2">Maestro</h3>

<v-data-table
    v-model="selected" 
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
    @click:row="datos" 
  >
  </v-data-table>
<TableDetalle :objeto="text" :porDato="text2"> </TableDetalle>
</v-container>
</template>
<script>

import TableDetalle from '@/components/TableDetalle.vue'

  export default {
      components: {
    TableDetalle,
  },
    data () {
      return {
        par: null,
        selected: [],
        headers: [
          { text: 'Dessert (100g serving)', align: 'start', sortable: false, value: 'name', },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },    
        ],
        desserts: [
          { id: 1, name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '5%', },
          { id: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '4%', },
          { id: 3, name: 'Eclair', calories: 262, fat:16, carbs: 23, protein: 6, iron: '7%', },
          { id: 4, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '10%',},
          { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '15%',},
         
        ],
      }
    },
    methods: {
        datos(desserts){
            console.log('El id es: '+ desserts.id);
            console.log('El nombre es  es: '+ desserts.name);
            console.log('El calorias es: '+ desserts.calories);
            console.log('El peso es: '+ desserts.fat);
            console.log('El carbos es: '+ desserts.carbs);
            console.log('El proteina es: '+ desserts.protein);
            console.log('El hierro es: '+ desserts.iron);
            this.par = desserts;
        },
    },
    computed: {
    text() {
      return this.par;
    },
    text2() {
      return 'Probando traspaso de objetos para tablas secundarias';
    },
    muestraTabla() {
      return true;
    }
  }
  }
</script>