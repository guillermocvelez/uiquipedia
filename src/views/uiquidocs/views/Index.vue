<template>
  <div>
    <h3 class="section-title">UIquidocs</h3>

    <section class="uiquidocs-container">
      <DocSection>
        <img slot="icon" class="doc-icon" src="@/assets/BasicDesignIcon.svg">   
        <h3 class="doc-title" slot="title">Diseño básico</h3>
        <p class="doc-text" slot="paragraph">Conceptos básicos de diseño gráfico y diseño de interfaces.</p>        
      </DocSection>

      <DocSection>
        <img slot="icon" class="doc-icon" src="@/assets/UiUxIcon.svg">   
        <h3 class="doc-title" slot="title">UI/UX</h3>
        <p class="doc-text" slot="paragraph">Metodologías para el diseñode interfaces y el diseñod e experiencias.</p>        
      </DocSection>

      <DocSection>
        <img slot="icon" class="doc-icon" src="@/assets/DesignSystemsIcon.svg">   
        <h3 class="doc-title" slot="title">Sistemas de diseño</h3>
        <p class="doc-text" slot="paragraph">Colecciones de componentes reutilizables para aplicaciones web profesionales.</p>        
      </DocSection>
      
      <DocSection>
        <img slot="icon" class="doc-icon" src="@/assets/DesignSystemsIcon.svg">   
        <h3 class="doc-title" slot="title">HTML</h3>
        <p class="doc-text" slot="paragraph">Colecciones de componentes reutilizables para aplicaciones web profesionales.</p>        
      </DocSection>

      <DocSection>
        <img slot="icon" class="doc-icon" src="@/assets/DesignSystemsIcon.svg">   
        <h3 class="doc-title" slot="title">CSS</h3>
        <p class="doc-text" slot="paragraph">Colecciones de componentes reutilizables para aplicaciones web profesionales.</p>        
      </DocSection>

      
      <DocSection>
        <img slot="icon" class="doc-icon" src="@/assets/DesignSystemsIcon.svg">   
        <h3 class="doc-title" slot="title">JavaScripit</h3>
        <p class="doc-text" slot="paragraph">Colecciones de componentes reutilizables para aplicaciones web profesionales.</p>        
      </DocSection>
      


    </section>
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
.section-title{
  margin-top: 32px;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 32px;
  color: var(--main-text);
}
.uiquidocs-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
@media screen and (max-width: 992px){
  .uiquidocs-container{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

</style>