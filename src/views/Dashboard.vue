
<template>
    <v-app>
        <v-container class="container" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" md="12">
                    <CardHeader></CardHeader>                                    
                    <v-row class="mx-2" align-content="space-around">
                        <v-col cols="12" sm="4" md="4">
                            <v-hover v-slot="{ hover }">
                                <v-card class="v-card elevation-3 mt-15" rounded="lg">                 
                                        <v-sheet                                     
                                            class="v-sheet--offset d-flex transition-swing mx-4" :class="{ 'on-hover': hover }"
                                            color="pink"
                                            elevation="12"
                                            height="180"
                                            rounded>
                                            <v-sparkline class="graf"
                                                :labels="labels"
                                                :value="value"
                                                color="white"
                                                line-width="2"
                                                padding="16"
                                            ></v-sparkline>
                                        </v-sheet>
                                    
                                    <v-row align="center" justify="center" >
                                    <div
                                        v-if="hover" 
                                        class="mb-3 actions mt-n16">
                                        <v-tooltip>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn class="btn"
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="grey">mdi-view-split-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Views</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="green">mdi-pencil</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="red">mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Remove</span>
                                        </v-tooltip>
                                    </div>
                                </v-row>                             
                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2">Website Views</div>
                                    <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-icon class="mr-2" small>mdi-clock</v-icon>
                                    <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
                                </v-card-text>
                            </v-card>
                            </v-hover>
                        </v-col>
                        
                        <v-col cols="12" sm="4" md="4">
                            <v-hover v-slot="{ hover }">
                                <v-card class="card1 elevation-3 mt-15" rounded="lg">
                                <v-sheet
                                    class="v-sheet--offset d-flex transition-swing mx-4" :class="{ 'on-hover': hover }"
                                    color="green"
                                    elevation="12"
                                    height="180"
                                    rounded
                                    >
                                    <v-sparkline
                                        :labels="labels"
                                        :value="value"
                                        color="white"
                                        line-width="2"
                                        padding="16"
                                    ></v-sparkline>
                                </v-sheet>
                                
                                <v-row align="center" justify="center">
                                    <div v-if="hover" class="mb-3 actions mt-n16">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="grey">mdi-view-split-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Views</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="green">mdi-pencil</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="red">mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Remove</span>
                                        </v-tooltip>
                                    </div>
                                </v-row>

                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2">Daily Sales</div>
                                    <div class="subheading font-weight-light grey--text">55% increase in today's sales</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-icon class="mr-2" small>mdi-clock</v-icon>
                                    <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
                                </v-card-text>
                            </v-card>
                            </v-hover>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-hover v-slot="{ hover }">
                            <v-card class="card1 elevation-3 mt-15" rounded="lg">
                                <v-sheet
                                    class="v-sheet--offset d-flex transition-swing mx-4" :class="{ 'on-hover': hover }"
                                    color="cyan"
                                    elevation="12"
                                    height="180"
                                    >
                                    <v-sparkline
                                        :labels="labels"
                                        :value="value"
                                        color="white"
                                        line-width="2"
                                        padding="16"
                                    ></v-sparkline>
                                </v-sheet>

                                <v-row align="center" justify="center">
                                    <div v-if="hover" class="mb-3 actions mt-n16">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="grey">mdi-view-split-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Views</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="green">mdi-pencil</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="red">mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Remove</span>
                                        </v-tooltip>
                                    </div>
                                </v-row>
                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2">Completed Tasks</div>
                                    <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-icon class="mr-2" small>mdi-clock</v-icon>
                                    <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
                                </v-card-text>
                            </v-card>
                            </v-hover>
                        </v-col>
                     </v-row>

                    <v-row class="mx-2" align-content="space-around">
                         <v-col cols="12" sm="3" md="3">
                            <v-card class="elevation-3 mt-15" rounded="lg">
                                <v-row align="start" justify="start">
                                    <v-col cols="6" sm="3" md="3" >
                                        <v-sheet
                                            class="v-sheet--offset2 ml-5"
                                            color="orange"
                                            elevation="12"
                                            height="80"
                                            width="80"
                                            rounded
                                            >
                                            <div class="pa-5">
                                                <v-icon 
                                                large 
                                                color="white">mdi-sofa-single</v-icon>
                                            </div>
                                        </v-sheet>  
                                    </v-col>
                                    <v-col cols="6" md="8" sm="8">
                                        <v-card-text class="pt-0">
                                            <div class="subheading font-weight-light mb-2 text-end">Bookings</div>
                                            <div class="title font-weight-light black--text text-end">184</div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                                <v-row align="center" justify="center">
                                    <v-col cols="11" md="11" sm="11">
                                        <v-divider class="my-2"></v-divider>
                                        <v-icon class="mr-2 ml-5" small>mdi-alert</v-icon>
                                        <span class="caption grey--text font-weight-light text">Get More Space.</span>
                                    </v-col> 
                                </v-row>  
                            </v-card>
                         </v-col>
                         <v-col cols="12" sm="3" md="3">
                            <v-card class="elevation-3 mt-15" rounded="lg">
                                <v-row align="start" justify="start">
                                    <v-col cols="6" md="3">
                                        <v-sheet
                                            class="v-sheet--offset2 ml-5"
                                            color="pink"
                                            elevation="12"
                                            height="80"
                                            width="80"
                                            rounded
                                            >
                                             <div class="pa-5">
                                                <v-icon 
                                                large 
                                                color="white">mdi-chart-bar</v-icon>
                                            </div>
                                        </v-sheet>  
                                    </v-col>
                                    <v-col cols="6" md="8" sm="8">
                                        <v-card-text class="pt-0">
                                            <div class="subheading font-weight-light mb-2 text-end">Web Visits</div>
                                            <div class="title font-weight-light black--text text-end">75.521</div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" md="12" sm="12">
                                        <v-divider class="my-2"></v-divider>
                                        <v-icon class="mr-2 ml-5" small>mdi-tag</v-icon>
                                        <span class="caption grey--text font-weight-light text">Tracked Google Analytics...</span>
                                    </v-col> 
                                </v-row>  
                            </v-card>
                         </v-col>
                         <v-col cols="12" sm="3" md="3">
                            <v-card class="elevation-3 mt-15" rounded="lg">
                                <v-row align="start" justify="start">
                                    <v-col cols="6" md="3">
                                        <v-sheet
                                            class="v-sheet--offset2 ml-5"
                                            color="green"
                                            elevation="12"
                                            height="80"
                                            width="80"
                                            rounded
                                            >
                                             <div class="pa-5">
                                                <v-icon 
                                                large 
                                                color="white">mdi-store</v-icon>
                                            </div>      
                                        </v-sheet>  
                                    </v-col>
                                    <v-col cols="6" md="8">
                                        <v-card-text class="pt-0">
                                            <div class="subheading font-weight-light mb-2 text-end">Revenue</div>
                                            <div class="title font-weight-light black--text text-end">$34,245</div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" md="12" sm="12">
                                        <v-divider class="my-2"></v-divider>
                                        <v-icon class="mr-2 ml-5" small>mdi-calendar-range</v-icon>
                                        <span class="caption grey--text font-weight-light text">Last 24 Hours</span>
                                    </v-col> 
                                </v-row>  
                            </v-card>
                         </v-col>
                         <v-col cols="12" sm="3" md="3">
                            <v-card class="elevation-3 mt-15" rounded="lg">
                                <v-row align="start" justify="start">
                                    <v-col cols="6" md="3" sm="3">
                                        <v-sheet
                                            class="v-sheet--offset2 ml-5"
                                            color="cyan"
                                            elevation="12"
                                            height="80"
                                            width="80"
                                            rounded
                                            >
                                             <div class="pa-5">
                                                <v-icon 
                                                large 
                                                color="white">mdi-twitter</v-icon>
                                            </div> 
                                        </v-sheet>  
                                    </v-col>
                                    <v-col cols="6" md="8" sm="8">
                                        <v-card-text class="pt-0">
                                            <div class="subheading font-weight-light mb-2 text-end">Followers</div>
                                            <div class="title font-weight-light black--text text-end">+245</div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" md="12" sm="12">
                                        <v-divider class="my-2"></v-divider>
                                        <v-icon class="mr-2 ml-5" small>mdi-history</v-icon>
                                        <span class="caption grey--text font-weight-light text">Just Updated</span>
                                    </v-col> 
                                </v-row>  
                            </v-card>
                         </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="mx-2" align-content="space-around">
                        <v-col cols="12" sm="4" md="4">
                           <v-hover v-slot="{ hover }">
                                <v-card class="elevation-3 mt-15" rounded="lg">
                                        <v-img class="img mx-5 d-flex transition-swing" :class="{ 'on-hover': hover }" 
                                        style="border-radius: 5px;" 
                                        :src="require('../assets/card-2.jpg')"></v-img> 
                                    <v-row align="center" justify="center">
                                        <div v-if="hover" class="mb-3 actions mt-n15">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="grey">mdi-view-split-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Views</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="green">mdi-pencil</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="red">mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Remove</span>
                                        </v-tooltip>
                                    </div>
                                </v-row>                                                             
                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2 black--text text-center">Cozy 5 Stars Apartment</div>
                                    <div class="subheading font-weight-light grey--text text-center">The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the life in Barcelona.</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-row align="center" justify="space-around">
                                        <span class="h4 grey--text font-weight-light text-start mt-2">$899/night</span>
                                        <span class="h4 grey--text font-weight-light text-end mt-2">Barcelona, Spain</span>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                            </v-hover> 
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-hover v-slot="{ hover }">
                                <v-card class="elevation-3 mt-15" rounded="lg">
                                    
                                        <v-img class="img mx-5 d-flex transition-swing" :class="{ 'on-hover': hover }" 
                                        style="border-radius: 5px;" 
                                        :src="require('../assets/card-3.jpg')"></v-img>
                                    
                                    <v-row align="center" justify="center">
                                        <div v-if="hover" class="mb-3 actions mt-n15">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="grey">mdi-view-split-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Views</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="green">mdi-pencil</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="red">mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Remove</span>
                                        </v-tooltip>
                                    </div>
                                </v-row>                         
                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2 black--text text-center">Office Studio</div>
                                    <div class="subheading font-weight-light grey--text text-center"> The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-row align="center" justify="space-around">
                                        <span class="h4 grey--text font-weight-light text-start mt-2">$1.119/night</span>
                                        <span class="h4 grey--text font-weight-light text-end mt-2">Office Studio</span>
                                    </v-row>
                                    
                                </v-card-text>
                            </v-card>
                            </v-hover>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-hover v-slot="{ hover }">
                                <v-card class="elevation-3 mt-15" rounded="lg">
                                    
                                        <v-img class="img mx-5 d-flex transition-swing" :class="{ 'on-hover': hover }" 
                                        style="border-radius: 5px;" 
                                        :src="require('../assets/card-1.jpg')"></v-img>
                                    
                                    
                                        <v-row align="center" justify="center">
                                        <div v-if="hover" class="mb-3 actions mt-n15">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="grey">mdi-view-split-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Views</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="green">mdi-pencil</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Edit</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    icon
                                                    v-bind="attrs"
                                                    v-on="on">
                                                    <v-icon color="red">mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Remove</span>
                                        </v-tooltip>
                                    </div>
                                </v-row>                       
                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2 black--text text-center">Beautiful Castle</div>
                                    <div class="subheading font-weight-light grey--text text-center">The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-row align="center" justify="space-around">
                                        <span class="h4 grey--text font-weight-light text-start mt-2">$459/night</span>
                                        <span class="h4 grey--text font-weight-light text-end mt-2">Milan, Italy</span>
                                    </v-row>
                                </v-card-text>
                            </v-card> 
                            </v-hover>
                        </v-col>
                </v-row>
            <Footer></Footer>
        </v-container>
    </v-app>
</template>

<style >
.container{
    background: rgb(214, 212, 212);
    height: auto;
}
.v-sheet--offset {
    top: -65px;
    position: relative;
   
}
.v-sheet--offset:not(.on-hover) {
    top: -34px;
 }
.v-sheet--offset2 {
    top: -34px;
    position: relative; 
       
}

.img{
  top: -65px;
  position: relative;
}

.img:not(.on-hover) {
    top: -34px;
 }
</style>

<script src="./js/Dashboard.js"></script>

