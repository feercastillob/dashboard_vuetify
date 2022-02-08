<template>
  <v-card elevation="0">
    <v-toolbar
      color="pink darken-4"
      dark
      flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard Example</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab
            v-for="item in menu"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
          <v-card>
              <v-row align="center" justify="center" >
                  <v-col cols="12" md="12">
                    <TableMaestro></TableMaestro>   
                  </v-col>
                  
                  <v-col cols="12" md="12">
                    <TableDetalle></TableDetalle>
                  </v-col>
              </v-row>  
          </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-container class="container" fluid>
          <v-row align-content="space-around" class="mx-10">
            <v-col cols="12" md="12" sm="12">
              <Draggable></Draggable>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-card>
          <v-row justify="space-around" class="py-10">
            <v-col cols="10" md="8">
              <TableContextMenu></TableContextMenu>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
        <v-card>
          <v-row justify="space-around" class="py-10">
            <v-col cols="10" md="8">
              <VueJson></VueJson>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>

       <v-tab-item>
        <v-card>
          <v-row justify="space-around" class="py-10">
            <v-col cols="10" md="8">
              <Chartist></Chartist>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>

    </v-tabs-items>
    
  </v-card>
</template>

<style>
.container{
    background: rgb(255, 255, 255);
    height: auto;
}
</style>




<script src="./js/DashboardExample.js"></script>