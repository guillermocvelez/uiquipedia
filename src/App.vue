<template>
  <div class="app-container">
    <Header/>
    <main class="main-container"> 
      <router-view></router-view>
    </main>

    <Footer/>

  </div>
</template>

<script>
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>



<style>
*{
  font-family: 'Montserrat', sans-serif;  
  list-style: none;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0;
}

:root{
  --main-text: #2B2C34;
  --main-purple: #6246EA;
  --secondary-purple: #B9C0E2;
  --text-purple:#232946; 
}

.app-container{
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.main-container{
  width: 80%;
}

</style>
