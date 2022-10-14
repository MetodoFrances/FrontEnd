<template>
  <h1>{{ msg }}</h1>
</template>

<script>
// Pueden importar otros componentes aquí
import FeatureNameService from "../services/feature-name.service.js"; // Importando el archivo .js
export default {
    name: "FeatureNameComponent",
    data() {
        return {
            msg: "This is an sample component"
        }
    },
    created() {
        service = new FeatureNameService()
        console.log(service.doSomeStuff())
    }
}
</script>

<style scoped>
/*
    - con scoped => los estilos solo afectan a este componente
    - sin escoped => los estilos afectarán a los componentes que este componente contega
*/
</style>