<template>
  <div id="nuxt_container">
    <div>
    </div>
    <HeaderMain />
    <div class="main" style="margin:0 auto; text-align:center;">
     <img class="main" src="https://www.ikea.com/images/F83/4c/834c451c43d59b6554e5373f13b86a70.jpg?f=xl"  style="margin-top:200px;"/>
    </div>
      <div class="app-container">
      <Producs />
      <!-- <NuxtWelcome />  -->
    </div>
    <Footer />
  </div>
</template>


<script>
import { ref } from "vue";
import HeaderMain from "./components/HeaderMain";
import Footer from "./components/Footer";
import Producs from "./Products.js/producs";
export default{
  components: {Producs, Footer, HeaderMain},

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&display=swap');

body, div, ul, li {
  margin: 0;
  padding: 0;
}
/* product ul */
#nuxt_container {
  height: 1020px;
  margin: 0;
  padding: 0;
}

</style>

