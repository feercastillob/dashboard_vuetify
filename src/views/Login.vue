<template>
    <v-app>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="6" md="6" class="pa-0 d-none d-sm-flex">
            <!-- Imagen del login     -->
            <v-img :src="require('../assets/login.jpg')" style="height: 100vh"></v-img>
            </v-col>

            <v-col cols="12" sm="6" md="6">  
  				    <v-row align="center" justify="center">
  				  	  <v-col cols="12">
  				  	    <v-img aspect-ratio="4" contain :src="require('../assets/logo.png')"></v-img>
  				  	  </v-col>
  				  	  <v-col cols="12">
  				  		  <p class="display-2 text-center">DASHBOARD</p>
  				  	  </v-col>
                    <v-col cols="12" class="py-0">
  				  		<p class="overline text-center">Por favor escribe tu usuario y password</p>
  				  	</v-col>
  				  </v-row>
  				
            <v-card-text>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    >
			  	            <v-row align="center" justify="center">
				  	            <v-col cols="12" sm="10" md="6" class="py-3">
				  		            <v-text-field
                            :rules="[rules.required]"
                            v-model="usuario" 
                            label="Usuario"
                            outlined
                            persistent-hint>
                          </v-text-field>
				  	            </v-col>
				              </v-row>
				              
                      <v-row align="center" justify="center">
				  	            <v-col cols="12" sm="10" md="6" class="py-0">
				  		            <v-text-field 
                            :rules="[rules.required, rules.min]"
                            v-model="password"
                            label="Password"
                            outlined
                            persistent-hint
                            :type="show1 ? 'text' : 'password'"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show1 = !show1">
                          </v-text-field>
				  	            </v-col>
				              </v-row>
                  </v-form>
			        </v-card-text>
              
              <v-card-actions>
                <v-row align="center" justify="center">
				  	      <v-col cols="4" sm="10" md="2" class="py-0">
			                <v-btn 
                      block 
                      @click="login" 
                      class="secondary">
                      Login
                      </v-btn>
                  </v-col>
                </v-row>
			        </v-card-actions>        

            </v-col>
        </v-row>
    </v-app>
</template>

<script src="./js/Login.js"></script>