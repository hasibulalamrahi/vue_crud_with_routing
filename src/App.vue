<template>
 <div>
   <div id="app" class= "container" >
    <img alt="Vue logo"  src="./assets/logo.png" class ="logo">
    <!-- <home-page></home-page>
    <category-page></category-page> -->
  </div>
  <modal-window/>
  <router-view></router-view>

 </div>
  
</template>

<script>
// import CategoryPage from './components/categoryPage.vue'
// import homePage from './components/homePage.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import ModalWindow from './components/modalWindow.vue'
export default {
  components: { 
    // homePage, 
    // CategoryPage 
    // ModalWindow
    },
  
}
</script>

<style>

.container{
  max-width: 60px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo{
    display: block;
    margin:20px auto;
    height: 75px;
}
</style>
