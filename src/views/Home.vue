<template>
<v-app>
  <h5>Selected: {{selected}}</h5>
     <transition name="slide-fade">
        <v-data-table
                v-model="selected"
                :headers="headers"
                :items="desserts"
                sort-by="calories"
                class="elevation-0 table-desserts"
                hide-default-footer
                show-select
                item-key="name"
              >
              
                <template v-slot:top>
                  <v-toolbar
                    flat>
                      <v-toolbar-title>Desserts</v-toolbar-title>
                        <v-divider
                          class="mx-4"
                          inset
                          vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                    <v-dialog
                      v-model="dialog"
                      max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="pink darken-4"
                          dark
                          class="mb-2 v-btn"
                          v-bind="attrs"
                          v-on="on"> New Item
                        </v-btn>
                      </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="pink darken-4"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn color="pink darken-4" text
                :loading="dialogLoading"
                @click="save"
              >
                Save
              </v-btn>
              <v-dialog
                v-model="dialogLoading"
                hide-overlay
                persistent
                width="300">
                <v-card
                  color="pink darken-4"
                  dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="pink darken-4" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="pink darken-4" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    
  
    <template v-slot:[`item.actions`]="{ item }">
  	  <v-row align="start" justify="start">
  	  	<v-menu offset-y transition="slide-y-transition">
  	  		<template v-slot:activator="{ on, attrs }">
  	  		  <v-icon small class="mr-2" color="pink darken-4" v-bind="attrs" v-on="on">mdi-sort-ascending</v-icon>
  	      </template>
          <v-list>
          <v-list-item @click="editItem(item)" >
                <v-list-item-title>Editar</v-list-item-title>
          </v-list-item>
          <v-list-item @click="deleteItem(item)" >
                <v-list-item-title>Delete</v-list-item-title>
          </v-list-item>
          <v-list-item @click="DeleteItem(item)">
                <v-list-item-title>More Options</v-list-item-title>
          </v-list-item>
      </v-list>
  	  	</v-menu>
  	  </v-row>
  	</template>
  </v-data-table>
  </transition>  
</v-app>
</template>

<style lang="scss">
  @import '@/assets/_variables.scss';

  .table-desserts{
    
  }
</style>


<script>
export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      dialogLoading: false,
      selected: [],
    
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
}),
computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      dialogLoading (val) {
        if (!val) return
        setTimeout(() => (this.dialogLoading = false), 2000)
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
        
        ]
      },
      
      
      
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
          this.dialogLoading = true;
        } else {
          this.desserts.push(this.editedItem)
          this.dialogLoading = true;
        } 
        this.close()
       
      },
    },

    
}
</script>>
