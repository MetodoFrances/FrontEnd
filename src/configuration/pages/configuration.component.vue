  <template>
    <div class="container">
    <div class="content">
    <div>
    <h1>CONFIGURACIÓN</h1>
    </div>

    <div>
        <h3>País:</h3>
    <select >
      <option>Perú</option>
      <option>Estados Unidos</option>
      <option>China</option>
      <option>Brasil</option>
    </select>
    </div>

    <div>
        <h3>Idioma:</h3>
    <select >
      <option>Español</option>
      <option>Inglés</option>
      <option>Chino</option>
      <option>Portugués</option>
    </select>
    </div>

    <div class="imagen_content">
    
        <img src="/assets/image 13.png" alt="">
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
   *{
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

   .container{
    display:flex;
    justify-content: center;
  
   }

   h1{
    text-align: center;
    color: #FB8C00;
   }

   select{
    width: 100%;
    padding: 10px;
   }

   .imagen_content{
    padding-top: 40px;
    
   }

   @media only screen
  and (max-width: 600px){
    
    
    .container{
    display:block;
    max-width: 100%;
    }

    img{
      width: 100%;
    }

    select{
    width: 100%;
    padding: 10px 0;
   }

  }
  
  
  </style>
  