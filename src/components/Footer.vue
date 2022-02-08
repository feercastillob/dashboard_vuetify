<template>
    <v-footer
        default
        color="rgb(214, 212, 212)">
        <v-row align-content="space-around" class="py-4">
            <v-col cols="12" md="10" >
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="black"
                    text
                    rounded
                    class="my-1 caption"> {{ link }}
                </v-btn>
            </v-col>
                
            <v-col cols="12" md="2" sm="6" class="py-5 body-1 black--text text-center"> 
                {{ new Date().getFullYear() }} — <strong class="body-1"> H I G H T E K</strong>
            </v-col>
        </v-row>
    </v-footer>    
</template>

<script>
  export default {
    data: () => ({
      links: [
        'VUETIFY DOCS',
        'ABOUT US',
        'BLOG',
        'LICENSES',
      ],
    }),
  }
</script>
