<template>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
         Pop Up
        </v-btn>
      </template>
      <v-card> 
        <v-card-title> Ejemplo de Editor de texto Enriquecido  </v-card-title>  
        <v-row align="center" justify="center">
            <v-col cols="11">
            
            <ckeditor
              tag-name="textarea"
              ref="cktext"
              @blur="onBlur($event)"
              :editor="editor"
              v-model="content"
              :config="editorConfig"
            ></ckeditor>
               
            </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.ck-editor .ck-editor__main .ck-content {
    height: 200px;
}
</style>

<script>
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
    import '@ckeditor/ckeditor5-build-classic/build/translations/es';
    
    export default {
        name: 'app',
        components: {
            ClassicEditor
        },
        data() {
            return {
                dialog: false,
                content: "",
                editor: ClassicEditor,
                editorData: "<p>What's on your mind ?</p>",
                editorConfig: {
                    //toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'clipboard','image' ],
                    // The configuration of the editor.
                    fillEmptyBlocks: false,
                     basicEntities: false,
        entities: false,
        entities_greek: false,
        entities_latin: false,
        entities_additional: "",
        language: "es",
        
        ckfinder: {
          // Upload the images to the server using the CKFinder QuickUpload command.
          uploadUrl:
            "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",

          // Define the CKFinder configuration (if necessary).
          options: {
            resourceType: "Images"
          }
        },
        mediaEmbed: {
          previewsInData: true
        }
      }
    };
  },
  methods: {
    onSubmit() {
      console.log();
    },
    
    onBlur(e) {
      // when living the ckeditor
    }
  }, //methods
  mounted() {
    //this.$refs.form.validate();
  }
};
</script>
