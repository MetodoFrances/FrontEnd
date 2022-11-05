<template>
    <div class="nav-container">
      <div class="nav">
      <ul class="sections-top">
        <li class="menu-item" v-for="link in linksTop" :key="link.id" @click="sliderIndicator(link.id)" :ref="'menu-item' + link.id">
          <RouterLink :to="link.path" class="no-underline" >
            <a href="#" class="menu-link" :class="link.id === selectedIndex ? 'active': null">
              <i class="menu-icon" :class="link.icon"></i>
              <span>{{link.text}}</span>
            </a>
          </RouterLink>
        </li>
      </ul>

      <ul class="sections-bottom">
        <li class="menu-item" v-for="link in linksBottom" :key="link.id" @click="sliderIndicatorBottom(link.id)" :ref="'menu-item' + link.id">
          <RouterLink :to="link.path" class="no-underline" >
            <a href="#" class="menu-link" :class="link.id === selectedIndex ? 'active': null">
              <i class="menu-icon" :class="link.icon"></i>
              <span class="link-exit">{{link.text}}</span>
            </a>
          </RouterLink>
        </li>
      </ul>

    </div>
    <div class="nav__content">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import authService from '../../security/services/auth.service';
export default {
  data () {
    return {
      name: "",
      sliderPosition:0,
      selectedElementWidth:0,
      selectedIndex:0,
      linksTop:[
        {
          id:1,
          icon:'pi pi-fw pi-home',
          text: " Inicio",
          path: '/home',
        },
        {
          id:2,
          text: " Leasing",
          path: '/leasing',
          icon:'pi pi-fw pi-money-bill',
        },
        {
          id:3,
          text: " Reportes",
          path: '/reports',
          icon:'pi pi-fw pi-file',
        },
        {
          id:4,
          text: "Configuración",
          path: '/settings',
          icon:'pi pi-fw pi-wrench',
        },
      ],
      linksBottom:[
        {
          id:1,
          text: "Salir",
          path: '/sign-in',
          icon:'pi pi-fw pi-power-off',
        }
      ],
      displayable: true
    };

  },
  methods: {
    sliderIndicator(id) {

    },
    sliderIndicatorBottom(id) {
      // log out
      authService.logout();
      this.$emit("user-logged-out");
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
  text-decoration: none;
}

.nav-container {
  display: flex;
  flex-direction: row;
}
.nav{
  flex-basis: 15%;
  background:#FB8C00;
}
.nav__content {
  flex-basis: 85%;
  overflow: hidden;
}

.sections-top{
  width: 350px;
  margin: 150px auto;
}
.sections-bottom {
  margin: 350px auto;
}

@media screen and (max-height: 800px) {
  .sections-top {
    margin: 150px auto;
  }
  .sections-bottom {
    margin: 150px auto;
  }
}



/* li - ok*/
.menu-item{
  top:100px;
  display: inline-flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
}

/* a - ok*/
.menu-link{
  font-weight: bold;
  padding:21px;
  width: 142px;
  display: inline-flex;
  align-items: center;
  justify-content: left;
  color: black;
  text-decoration: none;
}
.menu-link:hover, .menu-link.active{
  color: white ;
  background-color: #625c5c;
  width: 330px;
}

.menu-icon{
  font-weight: bold;
  padding-right: 25px;
}

@media screen and (max-width: 880px) {
  #nav{
    width: 35%;
  }
  .menu-link:hover, .menu-link.active{
    color: white ;
    background: none;
  }
}
</style>