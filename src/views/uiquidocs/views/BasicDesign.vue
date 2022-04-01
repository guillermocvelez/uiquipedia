<template>
  <section class="basic-design-section">
    <aside class="content-section">
      <ul>
        <p>Principios de diseño</p>
        <li>
          <ul class="first-level-list">
            <li><a href="">Qué es diseño</a></li>
            <li><a href="">Tipos de diseño</a></li>            
          </ul>          
        </li>
        <li>
          <p>Comunicación</p>
          <ul class="first-level-list">
            <li><a href="">Elementos visuales</a></li>
            <li><a href="">El punto</a></li>
            <li><a href="">La linea</a></li>
            <li><a href="">El plano</a></li>
            <li><a href="">El volumen</a></li>
          </ul>         
        </li>
        <li> 
          <p>Principios C.R.A.P</p>
          <ul class="first-level-list">
            <li><a href="">Contraste</a></li>
            <li><a href="">Repetición</a></li>
            <li><a href="">Alineación</a></li>
            <li><a href="">Proximidad</a></li>
          </ul>
        </li>
        <li> 
          <p>Composición</p>
          <ul class="first-level-list">
            <li><a href="">Contraste</a></li>
          </ul>
        </li>
        <li> 
          <p>Color</p>
          <ul class="first-level-list">
            <li><a href="">Contraste</a></li>
          </ul>
        </li>
        <li> 
          <p>Tipografía</p>
          <ul class="first-level-list">
            <li><a href="">Tipografía</a></li>
          </ul>
        </li>
        </ul>
    </aside>
    <section>

    </section>
  </section>
</template>

<script>
export default {
  created(){
    
  }
}
</script>

<style scoped>

.basic-design-section{
  display: grid;  
  grid-template-columns: 1fr 4fr;
  min-height: 100%;
  margin-top: 16px;
  width: 100vw;
  min-height: 100vh;  
  
}
.content-section{
  padding-left: 32px;
  overflow-y: scroll;
  height: 100%;
}
.first-level-list{
  margin-left: 16px;
}
</style>