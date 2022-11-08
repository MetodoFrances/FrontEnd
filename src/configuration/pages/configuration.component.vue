  <template>
    <div class="container">
    <div class="content">
    <div>
    <h1 class="title">CONFIGURACIÓN</h1>
    </div>

    <div>
        <h3>País:</h3>
    <select v-model="currentSettings.country" class="select" id="selector_1">
      <option value="Perú">Perú</option>
      <option value="Estados Unidos">Estados Unidos</option>
      <option value="China">China</option>
      <option value="Brasil">Brasil</option>
    </select>
    </div>

    <div>
        <h3>Idioma:</h3>
    <select v-model="currentSettings.languageName" class="select" id="selector_2">
      <option value="Español">Español</option>
      <option value="Inglés">Inglés</option>
      <option value="Chino">Chino</option>
      <option value="Portugués">Portugués</option>
    </select>
    </div>

    <div class="imagen_content">
    
        <img class="imagenen_content__img" src="/assets/image 13.png" alt="">
    </div >

    <div class="button">
    <button type="button" class="button_Guardar" @click="saveSettings">Guardar</Button>
    </div>
    </div>
    </div>

    
  </template>
  
  <script>
  import { Settings } from "../../shared/services/settings";
  import { ConfigurationApiService } from "../service/configuration.service.js";
  export default {
    name: "configuration",
    data() {
        return {
          loading: [false, false, false],
          configurationApiService: new ConfigurationApiService(),
          currentSettings: new Settings(null,null,null,null)
        }
    },
    methods: {
      load(index) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
      },
      saveSettings() {
        this.configurationApiService.updateSettings(this.currentSettings.id,this.currentSettings.toObjectForCreating())
          .then( response => {
            const data = response.data;
            this.currentSettings.setByObject(data);
            this.$toast.add({severity: "success", summary: "User settings saved succesfully", life: 3000})
          })
          .catch( reason => {
            console.error(reason);
          })
      }
    },
    mounted() {
      const user = JSON.parse(localStorage.getItem("auth"));
      this.configurationApiService.getByUserId(user.id)
      .then((response) =>  {
        const data = response.data[0];
        this.currentSettings.setByObject(data);
        console.log(data);
      })
      .catch(reason => {
        console.error(reason);
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
  