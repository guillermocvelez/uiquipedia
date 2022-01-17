<template>
  <header class="header">
    <div class="header-container">
      <div class="header-top">
        <logo-header class="header-logo"></logo-header> 

        <div class="top-navbar">
          <ul class="top-navbar_items">                     
            <li class="top-navbar_item">
              <router-link to="blog" class="top-navbar_item-text">Blog</router-link>
            </li>
            <li class="top-navbar_item">
              <a class="social-link" href="https://twitter.com/guillermo_cv" target="-blank">
                <i class="fab fa-twitter-square fa-2x"></i>
              </a> 
            </li>
            <li class="top-navbar_item">
              <a class="social-link"  href="https://www.youtube.com/channel/UCrBgIeIGzZZp3fEFVtEyqow" target="_blank">
                <i class="fab fa-youtube fa-2x"></i>
              </a> 
            </li>
            
          </ul>
        </div>
      </div>

      <div class="header-bottom">
        <nav class="main-nav">
          <ul class="main-nav-items-container">
            <router-link 
              to="/"               
              class="main-nav-item"
            >
              UIquidocs 
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/'}"  
              ></span>
            </router-link>

            <router-link 
              to="videos" 
              class="main-nav-item"
            >
              Videos 
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/videos'}"  
              ></span>
            </router-link>

            <router-link 
              to="diccionario" 
              class="main-nav-item"
            >
              UIccionario 
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/diccionario'}"  
              ></span>
            </router-link>

            <router-link 
              to="guias" 
              class="main-nav-item"
            >
              Guías
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/guias'}"  
              ></span>
            </router-link>

            <router-link 
              to="about" 
              class="main-nav-item"
            >
              Acerca de... 
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/about'}"  
              ></span></router-link>
          </ul>
        </nav>
      </div>      
    </div>

    <div class="menu-item-container">
      <span class="menu-item" @click="showMenu = !showMenu">menu</span>
    </div>

    <LateralMenu v-if="showMenu" @close="showMenu = !showMenu"/>
      
    
  </header>
</template>

<script>
import LogoHeader from './LogoHeader';
import LateralMenu from './LateralMenu.vue'
export default {
  name: 'Header',

  components:{
    LogoHeader,
    LateralMenu
  },


  data(){
    return{
      showMenu: false,
    }
  }

}
</script>

<style scoped>
.header {
  box-sizing: border-box;
  width: 100vw;
  height: 200px;
  background: url('../../assets/HeaderBkacground.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
}

.header-container{
  width: 80%;
  height: 100%;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.header-logo {  
  margin-top: 32px;
  margin-bottom: 32px;
}

.top-navbar_items{
  display: flex;
  align-items: center;
  
  
}
.top-navbar_item{
  margin-left: 16px;
  cursor: pointer;
  color: white;
}
.top-navbar_item-text{
  font-weight: 700;
  color: white;
}
.header-bottom{
  height:auto;
}
.main-nav{
  display: flex;
  justify-content: center;
  align-items: flex-end; 
  margin-top: 64px; 
}
.main-nav-items-container{
  display: flex;  
  gap: 16px;
  align-items: flex-end;  
  
}

.main-nav-item{
  color: white;
  font-weight: 700;
  cursor: pointer;
  position: relative;
}
.underline{
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  background-color: white;
  left: 0;
  bottom: -5px;  
  transition: transform 300ms ease;  
  transform-origin:left ;
}

.main-nav-item:hover .underline{
  transform: scaleX(1);
}
.route-active{
  transform: scaleX(1)
}

.social-link{
  color: white;
}
.social-link:visited{
  color: white;
}

@media screen and (max-width: 768px){
  .header{
    height: 75px;
  }
  .header-top{
    height: 100%;
  }
  .header-logo{
    margin: 0;
  }
  .top-navbar {
    display: none;
  }
  .main-nav{
    display: none;
  }

  .menu-item-container{
    display: flex;
    align-items: center;
  }

  .menu-item{
    color: white;
    cursor: pointer;
    font-weight: 800;
  }

}

</style>