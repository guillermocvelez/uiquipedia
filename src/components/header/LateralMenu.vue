<template>  
  <aside class="lateral-menu">

    <div class="close-btn-container">
      <span class="close-btn" @click="$emit('close')">cerrar</span>
    </div>

    <nav>
      <ul class="main-nav-items-container">
            <router-link 
              to="/"               
              class="main-nav-item"
              
            >
              <span @click="$emit('close')">
                UIquidocs 
              </span>
              
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/'}"  
              ></span>
            </router-link>

            <router-link 
              to="videos" 
              class="main-nav-item"
               @click="$emit('close')"
            >
              <span  @click="$emit('close')">
                Videos 
              </span>
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/videos'}"  
              ></span>
            </router-link>

            <router-link 
              to="diccionario" 
              class="main-nav-item"
            >
              <span @click="$emit('close')">
                Diccionario 
              </span>
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/diccionario'}"  
              ></span>
            </router-link>

            <router-link 
              to="guias" 
              class="main-nav-item"
            >
              <span @click="$emit('close')">
                Guías
              </span>
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/guias'}"  
              ></span>
            </router-link>

            <router-link 
              to="about" 
              class="main-nav-item"
            >
              <span @click="$emit('close')">
                Hacerca de... 
              </span>
              <span 
                class="underline"
                :class="{'route-active': $route.path == '/about'}"  
              ></span></router-link>
          </ul>
    </nav>


    
  </aside>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.lateral-menu{
  position: absolute;
  width: 50%;  
  height: 100vh;
  background-color: white;
  right:0;
  box-shadow: -5px 0px 4px rgba(0, 0, 0, 0.2);
}
.close-btn-container{
  display: flex;
  padding: 32px;
  justify-content: flex-end;
}
.close-btn{
  font-weight: 800;
  cursor: pointer;
}
.main-nav-items-container{
  display: flex;  
  flex-direction: column;
  gap: 32px;
  padding-left: 32px;
  
}
.main-nav-item{
  color: black;
  width: auto;
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
}
.underline{
  position: absolute;
  width: 50%;
  transform: scaleX(0);
  height: 3px;
  background-color: black;
  left: 0;
  bottom: -5px;  
  transition: transform 300ms ease;  
  transform-origin:left ;
}

.route-active{
  transform: scaleX(1)
}
</style>