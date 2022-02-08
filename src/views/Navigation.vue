<template>
    <v-app>
        <v-card>
            <v-app-bar 
                app
                color="rgb(214, 212, 212)"
                elevate-on-scroll
                >
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title>Dashboard</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-col cols="4" class="pa-0 d-none d-sm-flex">
                    <v-text-field 
                        label="Search">
                    </v-text-field>
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                <v-spacer></v-spacer>
                </v-col>

                <v-btn icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-badge
                        :content="messages"
                        :value="messages"
                        color="red"
                        overlap>
                        <v-icon>mdi-bell</v-icon>
                    </v-badge>
                </v-btn>
                
                <v-menu 
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x >
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon>mdi-account</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-avatar color="indigo">
                                            <v-icon dark>
                                                mdi-account-circle
                                            </v-icon>
                                        </v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>Maria Fernanda </v-list-item-title>
                                            <v-list-item-subtitle>feercastillob</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-btn
                                            :class="fav ? 'red--text' : ''"
                                            icon
                                            @click="fav = !fav">
                                            <v-icon>mdi-heart</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                        <v-list>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-switch
                                        v-model="message"
                                        color="purple"
                                    ></v-switch>
                                </v-list-item-action>
                            <v-list-item-title>Enable messages</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-action>
                                <v-switch
                                    v-model="hints"
                                    color="purple"
                                ></v-switch>
                            </v-list-item-action>
                            <v-list-item-title>Enable hints</v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                    <v-btn
                        text
                        @click="menu = false">Cancel
                    </v-btn>
                    <v-btn
                        color="primary"
                        text
                        @click="menu = false"
                        >Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
        </v-menu>
                            
            </v-app-bar>
        
            <v-navigation-drawer 
                app
                dark
                v-model="drawer"
                expand-on-hover    
                :src="require('../assets/nav.jpg')"
                >
                <v-list>
                     <v-list-item router to="/home" active-class="white--text">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                            <v-list-item-title>HOME</v-list-item-title>
                    </v-list-item>

                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-account-circle"
                        no-action
                        >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Maria Fernanda</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item router to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                             </v-list-item-icon>
                                <v-list-item-title>Mi Perfil</v-list-item-title>
                        </v-list-item>

                        <v-list-item router to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-account-edit</v-icon>
                             </v-list-item-icon>
                                <v-list-item-title>Editar Perfil</v-list-item-title>
                        </v-list-item>

                        <v-list-item router to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-cog-outline</v-icon>
                             </v-list-item-icon>
                                <v-list-item-title>Configuración</v-list-item-title>
                        </v-list-item>

                    </v-list-group>
        
                    <v-list-item router to="/dashboard">
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                            <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item>

                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-account-details"
                        no-action
                        >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Crud</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        
                        <v-list-item router to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                             </v-list-item-icon>
                                <v-list-item-title>Editar</v-list-item-title>
                        </v-list-item>

                        <v-list-item router to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-account-plus</v-icon>
                             </v-list-item-icon>
                                <v-list-item-title>Registrar</v-list-item-title>
                        </v-list-item>

                        <v-list-item router to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-trash-can</v-icon>
                             </v-list-item-icon>
                                <v-list-item-title>Eliminar</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <transition name="slide-fade">
                    <router-view></router-view>
                </transition>
            </v-main>

        </v-card>
    </v-app>
</template>

<style>

.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to{
    opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script src="./js/Navigation.js"></script>
