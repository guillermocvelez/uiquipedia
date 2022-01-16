<template>
  <section class="section-container">    
    <slot name="icon"></slot> 
    <div class="doc-info-container">
      <slot name="title"></slot>
      <slot name="paragraph"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocSection',



}
</script>

<style scoped>
.section-container{
  width: 100%;
  height: auto;
  background-color: var(--secondary-purple);
  padding: 16px;
  border-radius: 8px;
  display: flex;
  gap: 32px;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  color: var(--main-text);
}

.doc-info-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.doc-title{
  color:var(--text-purple);
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 8px;
}
.doc-text{
  margin-bottom: 8px;
  font-size: 16px;
}



</style>