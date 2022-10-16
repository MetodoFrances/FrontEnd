<template>
  <h1>{{ msg }}</h1>
  <!-- Esta es una forma de usar las variables (interpolation) -->
</template>

<script>
// Pueden importar otros componentes aquí
import FeatureNameService from "../services/feature-name.service.js"; // Importando el archivo .js
export default {
  name: "FeatureNameComponent",
  data() {
    return {
      // Aquí declaran sus variables
      msg: "This is an sample component",
    };
  },
  created() {
    service = new FeatureNameService(); // Instanciamos el servicio
    console.log(service.doSomeStuff()); // Ejecutamos un método del servicio
  },
};
</script>

<style scoped>
/*
    - con scoped => los estilos solo afectan a este componente
    - sin escoped => los estilos afectarán a los componentes que este componente contega
*/
</style>
