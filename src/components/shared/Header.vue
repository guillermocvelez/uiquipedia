<template>
  <header class="header">
    <div class="header-container">
      <div class="header-top">
        <logo-header class="header-logo"></logo-header>    
        <nav class="top-navbar">
          <ul class="top-navbar_items">
           
            <li class="top-navbar_item">
              <p class="top-navbar_item-text">sobre la uiqui</p>
            </li>
            <li class="top-navbar_item">
              <p class="top-navbar_item-text">Blog</p>
            </li>
            <li class="top-navbar_item">
              <i class="fab fa-behance-square fa-2x"></i>
            </li>
            <li class="top-navbar_item">
              <i class="fab fa-youtube fa-2x"></i>
            </li>
            
          </ul>
        </nav>
      </div>
      
    </div>
    
  </header>
</template>

<script>
import LogoHeader from './LogoHeader'
export default {
  name: 'Header',

  components:{
    LogoHeader
  }

}
</script>

<style scoped>
.header {
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
}
.top-navbar_item-text{
  font-weight: 700;
}


</style>