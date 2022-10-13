<template>
  <div class="nav">

    <TieredMenu :model="sections" >

    </TieredMenu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          label:'Inicio',
          link:'/',
          icon:'pi pi-fw pi-home'
        },
        {
          label:'Leasing',
          link:'/',
          icon:'pi pi-fw pi-money-bill',
        },
        {
          label:'Reportes',
          link:'/',
          icon:'pi pi-fw pi-file',
        },
        {
          label:'Configuración',
          link:'/',
          icon:'pi pi-fw pi-wrench',
        },
        {
          separator:true
        },
        {
          label:'Salir',
          link:'/',
          icon:'pi pi-fw pi-power-off'
        }
      ]
    }
  }
}
</script>

<style scoped>
.p-tieredmenu {
  padding: 0.25rem 0;
  background: #FB8C00;
  color: #495057;
  border: 1px solid #dee2e6;
  border-radius: 3px;
  width: 325px;
  height: 1006px;
}
</style>