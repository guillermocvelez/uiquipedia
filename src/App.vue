<template>
  <div class="app-container">
    <Header></Header>
    <main class="main-container"> 
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
import Header from '@/components/shared/Header'

export default {
  name: 'App',
  components:{
    Header,
  }
}
</script>



<style>
*{
  font-family: 'Montserrat', sans-serif;
  list-style: none;
  margin: 0;
  text-decoration: none;
}

.app-container{
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-container{
  width: 80%;
}

</style>
