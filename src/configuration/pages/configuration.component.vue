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

    <div>
        <h3>Notificaciones:</h3>
    <select >
      <option>Activado</option>
      <option>Desactivado</option>
    </select>
    </div>

    <div>
        <img src="/assets/image 13.png" alt="">
    </div>

    </div>
    </div>
    
  </template>
  
  <script>
 
  

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
  
  </style>
  