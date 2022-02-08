<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="5" sm="5">
      <h5>Selected: {{selected}}</h5>
        <v-card height="300" class="scroll" elevation="1">
          <v-list shaped >
            <v-list-item-group 
              v-model="selected" 
              multiple>
              <draggable v-model="disponibles" group="permisos" tag="ul">
                <template v-for="item in disponibles">
                  <v-list-item
                    :key="item.id"
                    active-class="deep-purple--text text--accent-4"
                  >{{item.title}}
                  </v-list-item>
                </template>
              </draggable>
            </v-list-item-group>
          </v-list>
        </v-card>
    </v-col>

      <v-col cols="12" md="2" sm="2">
        <v-card elevation="0">
          <v-row align="center" justify="center">
            <v-btn color="pink darken-4" dark @click="pushAll">ALL</v-btn>
          </v-row>
           <v-row align="center" justify="center" class="py-5">      
           <v-btn icon color="pink darken-4"  
              @click="pushRightSelect">
              <v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-row>
          <v-row align="center" justify="center">
            <v-btn icon color="pink darken-4"
              @click="pushLeftSelect">
              <v-icon>mdi-arrow-left-thick</v-icon>
            </v-btn>
          </v-row>
        </v-card>
    </v-col>

    <v-col cols="12" md="5" sm="5">
        <v-card height="300" class="scroll" elevation="1">
           <v-list shaped>
      <v-list-item-group v-model="selected2" multiple>
      <draggable v-model="seleccionados" group="permisos" tag="ul">
        <template v-for="item in seleccionados">
          <v-list-item
            :key="item.id"
            active-class="deep-purple--text text--accent-4"
          >{{item.title}}
          </v-list-item>
        </template>  
        </draggable>
      </v-list-item-group>
    </v-list>
        </v-card>
    </v-col>
  </v-row>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data: () => ({
   selected: [],
   selected2: [],

   disponibles: [
      { id: 1, title: "Consulta" },
      { id: 2, title: "SOLO LECTURA - Admin de Reportes" },
      { id: 3, title: "SOLO LECTURA - Admin Catálogos" },
      { id: 4, title: "SOLO LECTURA - Admin de Menús" },
      { id: 5, title: "SOLO LECTURA - Admin Aplicados" },
      { id: 6, title: "SOLO LECTURA - Admin de Personal" },
      { id: 7, title: "SOLO LECTURA - Admin Calendarios" },
      { id: 8, title: "SOLO LECTURA - Admin de Personal" },
      { id: 9, title: "SOLO LECTURA - Admin Calendarios" },
    ],
    seleccionados: [
      { id: 10, title: "SOLO LECTURA - Admin de Personal" },
      { id: 11, title: "SOLO LECTURA - Admin Calendarios" },
    ],
  }),
  methods: {
    log: function (evt) {
      window.console.log(evt);
      console.log("Tamaño lista1: " + this.disponibles.length);
    },
    pushAll() {
      console.log(this.seleccionados.length);
      this.disponibles.forEach((item) => {
        this.seleccionados.push(item);
      });
      console.log(this.seleccionados.length);
      this.disponibles = [];
    },

    pushRightSelect(){
          
    },

    pushLeftSelect(){
          
    },
        
  },
};
</script>

<style>
.scroll {
   overflow-y: scroll
}

</style>
