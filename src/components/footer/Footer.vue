<template>
  <footer class="footer">
    <div>
        <!-- <div class="footer-link-container">
          <router-link to="/">  
            <p class="footer-link">UIquidocs</p> </router-link>
          
          <router-link to="videos">
              <p class="footer-link">Videos</p>
          </router-link>
          
          <router-link to="diccionario" >
            <p class="footer-link">UIccionario</p>
          </router-link>
          <router-link to="guias">
            <span class="footer-link">Guías</span>
          </router-link>
        </div> -->
        <img src="@/assets/FooterLogo.svg" alt="uiquipedia-logo">
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
  box-sizing: border-box;
  width: 100%;
  background-color: var(--text-purple) ;
  color: white;
  margin-top: 64px;
  padding: 16px 64px;
  display: flex;
  justify-content: center;
}
.footer-link-container{
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
}
.footer-link{
  margin-bottom: 8px;
  cursor: pointer;
  color: white;
}
img{
  margin: 0 auto;
}
</style>