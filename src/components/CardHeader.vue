<template>
    <v-card class="elevation-3 mt-10 mx-5" rounded="lg">
                        <v-row align="start" justify="start">
                            <v-col cols="4" md="1">
                                <v-sheet 
                                    class="v-sheet--offset2 ml-3"
                                    color="green"
                                    elevation="0"
                                    width="80"
                                    height="80"
                                    rounded>
                                    <div class="pa-6">
                                        <v-icon 
                                            large 
                                            color="white">mdi-earth</v-icon>
                                    </div>
                                </v-sheet>
                            </v-col>
                            <v-col cols="8" md="6" >
                                <div class="subtitle font-weight-light mb-2 ">Global Sales by Top Locations</div>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12" sm="6" md="6" >
                                <v-simple-table class="table ml-2 font-weight-light">
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left"></th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img :src="require('../assets/flagUsa.png')" style="height: 30px" /></td>
                                                <td>USA</td>
                                                <td class="text-right">2920</td>
                                                <td class="text-right">42.82%</td>
                                            </tr>
                                            <tr>
                                                <td><img :src="require('../assets/flagGermany.png')" style="height: 30px"/></td>
                                                <td>Germany</td>
                                                <td class="text-right">1300</td>
                                                <td class="text-right">19.06%</td>
                                            </tr>
                                            <tr>
                                                <td><img :src="require('../assets/flagAustralia.png')" style="height: 30px"/></td>
                                                <td>Australia</td>
                                                <td class="text-right">760</td>
                                                <td class="text-right">11.14%</td>
                                            </tr>
                                            <tr>
                                                <td><img :src="require('../assets/flagKingdom.png')" style="height: 20px"/></td>
                                                <td>United Kingdom</td>
                                                <td class="text-right">690</td>
                                                <td class="text-right">10.12%</td>
                                            </tr>
                                            <tr>
                                                <td><img :src="require('../assets/flagRomania.png')" style="height: 30px"/></td>
                                                <td>Romania</td>
                                                <td class="text-right">600</td>
                                                <td class="text-right">8.80%</td>
                                            </tr>
                                            <tr>
                                                <td><img :src="require('../assets/flagBrasil.png')" style="height: 30px"/></td>
                                                <td>Brasil</td>
                                                <td class="text-right">550</td>
                                                <td class="text-right">8.06%</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-img :src="require('../assets/mapa.jpg')" ></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
</template>

<script>
export default {
    
}
</script>