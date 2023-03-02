<template>
<div class="footer-template">
  <div class="footer-container">
    <div class="footer-container-second">
      <div class="first">
        <p class="name" style="font-size: 15px; font-weight: 400;">  이름: 김동원  </p>
        <p class="tel" style="font-size: 15px; font-wegiht: 300;"> tel: 010 - 2623 - 3000 </p>
        <p class="address" style="font-size: 15px; font-wegiht: 400;"> 주소지: 관악구 서림동</p>
      </div>
    <div>
      <div class="second">
        <p class="name" style="font-size: 14px; font-weight: 600;">  문의사항: canyon920@gmail.com  </p>
        <p class="tel" style="font-size: 14px; font-wegiht: 500;">  Hello World </p>
      </div>
    </div>
    </div>

    <div>
      <div class="third">
<!--        <div class="second" style="">-->
<!--          <p class="name" style="font-size: 14px; font-weight: 600;">    </p>-->
<!--          <p class="tel" style="font-size: 14px; font-wegiht: 500;">  ss </p>-->
<!--          <p class="tel" style="font-size: 14px; font-wegiht: 500;">  ss </p>-->
<!--        </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      methods: {
      }
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&display=swap');
body { font-family: 'Noto Sans', sans-serif;}
.footer-container {
  width: 100%;
  height: 300px;
  display: flex;
  bottom:0;
  left: 0;
  bottom:0;
  justify-content: center;
  z-index: 99;
  overflow: hidden;
  background: rgba(199, 130, 145, 0.6);
  /*background-color: rgba(255,255,255, 0.5);*/
  color: rgba(255,255,255, 0.95);
}

.footer-container-second { margin-top: 100px; display: flex;  }
.first, .second {width: 400px;}
/*.third { max-width: 800px; }*/
/*.name { font-size: 14px; }*/


</style>