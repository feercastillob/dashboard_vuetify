<template>
    <v-container v-if="mostrarTabla">
    <h3 class="grey--text text-darken-1 mb-2">Detalle</h3>
    <v-data-table 
    :headers="headers"
    :items="datatable"
  >
  <div>{{mostrandoDatosObjeto}}</div>
    <div>{{}}</div>
  </v-data-table>
<!--<h1>Nombre: {{porDato}}</h1> -->
<h5 class="font-weight-medium">Objeto: {{objeto}}</h5>
<!--v-list>
        <v-list-item
          v-for="(objetos, index) in objeto"
          :key="index"
        >
          <v-list-item-title>{{ objeto.name}}</v-list-item-title>
        </v-list-item>
      </v-list-->
</v-container>
</template>
<script>
export default {
     data () {
      return {
        //actualizarTabla,
        headers: [
          { text: 'Identificador', align: 'start', sortable: false, value: 'id', },
          { text: 'Dessert (100g serving)', align: 'start', sortable: false, value: 'name', },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        datatable: [],
        validation: false,
      }
    },
    props: { //Se crea el prop para recibir la data del padre
        /* haveData: {
            type: Boolean,
            default: true,
            },*/
        objeto: { //tipo de objeto a recibir o tipo de dato
             dessert: Object, //declaracion del mismo 
             default: null //poner el objeto vacio
            // required: true // obligatorio el objeto
        },
       porDato: {
           name: String,
            default: 'No llego dato'
      //  calories: Number,
      //  fat: Number,
      //  carbs: Number,
      //  protein: Number,
      //  iron: Number,
       // required: true
       }
    },
    computed: { //metodos que se ejecutan al cargar la pagina quienes pueden manejar la data a gusto
        mostrandoDatos(){
            console.log('Llegue al metodo de mostrando Datos');
            return this.porDato;
        },
        mostrandoDatosObjeto(){
            //console.log('Llegue al metodo de mostrando datos objetos');
            this.datatable = [];
            this.datatable.push(this.objeto);
            return this.objeto;
        },
        mostrarTabla(){
            if (this.objeto != null) {
               return this.validation = true;
            } else {
                 return this.validation = false;
            }
        }
    },
    watch: {
      /*  actualizarTabla: function (objeto){
            if (objeto!=null) {
                this.datatable = this.objeto;
                console.log('Entre al watch...');
             return this.mostrandoDatosObjeto();
            } else {
                 console.log('Ya valio madres...')
            }
        }*/
    }
}
</script>