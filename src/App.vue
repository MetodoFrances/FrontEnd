<template>
  <div>
    <HistorialHome></HistorialHome>
  </div>

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import HistorialHome from "./historial-reportes-home/pages/historial-reportes-home.component.vue";
export default {
    name: "App",
    components: { HistorialHome }
}
</script>
