<template>
  <div>

    <router-view></router-view>
    <div  class="main-container" v-if="$route.path == '/'" >
      
      <h3 class="section-title">UIquidocs</h3>
      <div class="section-description-container">
        <p class="section-description" >Los UIquidcos son una colección personal de mi aprendizaje y tips útiles que he aprendido en mi camino de desarrollador Front End. <br> <br> En ningún momento pretende ser una guía definitiva, solo un punto de vista más. Todo lo que encuentres en ésta página lo puedes utilizar de manera libre, no te voy a pedir donaciones ni créditos en tus proyectos. <br> <br> Si encuentras algo útil compártelo, si tienes aportes comentarios o feedback siéntete libre en contactarme.
        </p>
        <div class="card-container">
          <div class="card">
            <div class="card-avatar">
      
            </div>
            <div>
              <p class="card-text name">Guillermo Castaño Vélez</p>
              <p class="card-text about-me">Diseñador UI/UX - Desarrollador Front End</p>
            </div>
            <div class="personal-web">
              <a class="web-link" href="https://guillermocv.com/" target="_blank">Web personal</a>
            </div>
          </div>
        </div>
      </div>
      
      <section class="uiquidocs-container">
        <router-link :to="{ name: 'diseno' }">
          <DocSection>
            <img slot="icon" class="doc-icon" src="@/assets/BasicDesignIcon.svg">
            <h3 class="doc-title" slot="title">Diseño básico</h3>
            <p class="doc-text" slot="paragraph">Conceptos básicos de diseño gráfico y diseño de interfaces</p>
          </DocSection>
        </router-link>
        <DocSection>
          <img slot="icon" class="doc-icon" src="@/assets/UiUxIcon.svg">
          <h3 class="doc-title" slot="title">UI/UX</h3>
          <p class="doc-text" slot="paragraph">Metodologías para el diseño de interfaces y el diseño de experiencias</p>
        </DocSection>
        <DocSection>
          <img slot="icon" class="doc-icon" src="@/assets/DesignSystemsIcon.svg">
          <h3 class="doc-title" slot="title">Sistemas de diseño</h3>
          <p class="doc-text" slot="paragraph">Colecciones de componentes reutilizables para aplicaciones web profesionales</p>
        </DocSection>
      
        <DocSection>
          <img slot="icon" class="doc-icon" src="@/assets/HtmlDocIcon.svg">
          <h3 class="doc-title" slot="title">HTML</h3>
          <p class="doc-text" slot="paragraph">Guías detalladas sobre el lenguaje de marcado y etiquetado de la Web.</p>
        </DocSection>
        <DocSection>
          <img slot="icon" class="doc-icon" src="@/assets/CssDocIcon.svg">
          <h3 class="doc-title" slot="title">CSS</h3>
          <p class="doc-text" slot="paragraph">Tips y trucos de CSS para darle vida a los sitios Web Sistemas de grillas, animaciones</p>
        </DocSection>
      
        <DocSection>
          <img slot="icon" class="doc-icon" src="../../../assets/JsDocIcon.svg">
          <h3 class="doc-title" slot="title">JavaScripit</h3>
          <p class="doc-text" slot="paragraph">Cómo unir todo el conocimiento para hacer aplicaciones y páginas Web con la mejor experiencia de usiario.</p>
        </DocSection>
      
      </section>
    </div>

    
  </div>
</template>

<script>
import DocSection from '../components/DocSection'
export default {
  name: 'UIquidocsIndex',

  components: {
    DocSection,
  },

  data(){
    return{
      basicDesignIcon: '',
    }
  }

}
</script>

<style scoped>
.main-container{
  width: 80vw;
  margin: 0 auto;
  
}
.section-title{
  margin-top: 32px;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 32px;
  color: var(--main-text);
}

.section-description-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 32px;
}
.section-description{
  margin-bottom: 32px;
  font-size: 1.1rem;
}
.uiquidocs-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px; 
  
}

.card-container{
  justify-self: center;
  justify-content: center;
}

.card{
  background-color: var(--text-purple);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  width: 60%;
  align-items: center;
  color: white;  
  justify-self: center;
  margin:0 auto;
}
.card-avatar{
  width: 75px;
  height: 75px;
  background:url('../../../assets/Avatar.png');
  background-position: center;
  background-size: cover;
  background-color: white;
  border-radius: 100px;
  margin-bottom: 16px;
  
}
.card-text{
  text-align: center;
}
.name {
  font-weight: 800;
  margin-bottom: 8px;
}

.about-me{
  margin-bottom: 16px;
}

.personal-web{
  background-color: var(--main-salmon);
  padding: 8px 32px;
  border-radius: 8px;
  cursor: pointer;
}

.personal-web:hover{
  box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
}
.personal-web:active{
  transform: scale(0.98);
}

.web-link{
  color: var(--text-purple);
  font-weight: 800;
}

.web-link:visited{
   color: var(--text-purple);
}

@media screen and (max-width: 992px){
  .uiquidocs-container{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .section-description-container{
    display: block;
    grid-auto-columns: 1fr;
  }
}

@media screen and (min-width: 1400px){
  .uiquidocs-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  }
}

</style>