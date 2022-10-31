  <template>
    <div class="container">
    <div class="content">
    <div>
    <h1 class="title">CONFIGURACIÓN</h1>
    </div>

    <div>
        <h3>País:</h3>
    <select class="select">
      <option>Perú</option>
      <option>Estados Unidos</option>
      <option>China</option>
      <option>Brasil</option>
    </select>
    </div>

    <div>
        <h3>Idioma:</h3>
    <select class="select">
      <option>Español</option>
      <option>Inglés</option>
      <option>Chino</option>
      <option>Portugués</option>
    </select>
    </div>

    <div class="imagen_content">
    
        <img class="imagenen_content__img" src="/assets/image 13.png" alt="">
    </div>

    <div class="button">
    <button class="button_Guardar">Guardar</Button>
    </div>
    </div>
    </div>
    
  </template>
  
  <script>
  import { ConfigurationApiService } from "../service/configuration.service.js";
  export default {
    name: "configuration",
    data() {
        return {
            loading: [false, false, false]
        }
    },
    methods: {
        load(index) {
            this.loading[index] = true;
            setTimeout(() => this.loading[index] = false, 1000);
        }
    },

    
    created() {
      const configurationApiService = new ConfigurationApiService();
      configurationApiService.getLoans()
      .then((response) =>  {
        console.log(response.data);
      })
      .catch((error) => {
        
      })
    }
  }

  </script>
  
  <style scoped>

   .container{
    display:flex;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   }

   .title{
    text-align: center;
    color: #FB8C00;
   }

   .select{
    width: 100%;
    padding: 10px;
   }

   .imagen_content{
    padding-top: 40px;
    
   }

   .button{
    text-align: center;
   }
   .button_Guardar{
    border:0;
    border-radius:10px;
    padding: 15px;
    width: 250px;
    background: #FB8C00;
    color:white;
   
  }

  .button_Guardar:hover{
    background: #e28718;
  }

   @media only screen
  and (max-width: 600px){
    
    
    .container{
    display:block;
    max-width: 100%;
    }

    .imagenen_content__img{
      width: 100%;
    }

    .select{
    width: 100%;
    padding: 10px 0;
   }

  }
  
  
  
  
  </style>
  