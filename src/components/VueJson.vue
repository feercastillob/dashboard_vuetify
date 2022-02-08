<template>
  <div class="container is-widescreen">
      <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
    ></v-data-table>
   
    <v-row align="center" justify="center" class="py-5">
        <v-col cols="12" md="4" sm="4" >
            <download-csv
            :data="desserts"
            :name="dataFile"
            :labels="labels"
            :fields="fields"
            v-on:export-finished="exported"
        >
          <v-btn color="pink darken-4" dark>Download CSV</v-btn>
        </download-csv>
        </v-col>
         <v-col cols="12" md="4" sm="4">
            <v-btn color="pink darken-4" dark @click="exportPDF">Export a PDF</v-btn>
            <v-btn color="pink darken-4" dark v-on:click="openPdf()" target="_blank">Ver PDF</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn color="pink darken-4" dark @click="exportExcel">Exportar a Excel</v-btn>
            
        </v-col>
        
    </v-row>
    
  </div>
    

</template>

<script>
import JsonCSV from 'vue-json-csv'
import 'jspdf-autotable'
import { jsPDF } from "jspdf";
import XLSX from 'xlsx';

export default {
  name: 'App',
  components: {'download-csv': JsonCSV},
  computed: {
    readableJson: function() { return JSON.stringify(this.desserts, null, 2)}
  },
  data() {
    return {
      headers: [
          { text: 'Dessert (100g serving)', value: 'name'},
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%', },
          { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%',},
          { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%',},
          { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%',},
        
        ],


      dataFile: 'my_export.csv',
      labels: {
        name: 'Name',
        calories: 'Calories'
      },
      fields: ['name', 'calories', 'fat', 'carbs' ,'protein', 'iron'],
      
    }
  },
  methods: {
    exported(event) {
      console.log(event)
      this.isExported = true
      setTimeout(() => {
        this.isExported = false
      }, 3 * 1000)
    },

    exportPDF() {
      var vm = this
      var columns = [
        {name: "Name", dataKey: "name"},
        {calories: "Calories", dataKey: "calories"},
        {fat: "Fat", dataKey: "fat"},
        {carbs: "Carbs", dataKey: "carbs"},
        {protein: "Protein", dataKey: "protein"},
        {iron: "Iron", dataKey: "iron"}
      ];
      var doc = new jsPDF('p', 'pt');
      doc.text('To Do List', 40, 40);
      doc.autoTable(columns, vm.desserts, {
        margin: {top: 60},
      });
      doc.save('desserts.pdf');
    },

    exportExcel: function () {
      let data = XLSX.utils.json_to_sheet(this.desserts)
      const workbook = XLSX.utils.book_new()
      const filename = 'desserts'
      XLSX.utils.book_append_sheet(workbook, data, filename)
      XLSX.writeFile(workbook, `${filename}.xlsx`)
    },

    openPdf () {
       window.open('src/assets/desserts.pdf')
    }
  
  
  }
  
}
</script>