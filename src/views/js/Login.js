export default{
  data:() =>({
      usuario: '',
      password: '',
        valid: false,
       show1: false,
      rules: {
          required: value => !!value || 'Requerido',
          min: v => v.length >= 8 || 'Minimo 10 caracteres',
      },

  }),

  methods: {
      login(){
          console.log(this.usuario)
          if(this.$refs.form.validate()){
               this.$router.push({name: 'Dashboard'})

          }
         
      }
  }
}