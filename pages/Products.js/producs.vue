<template>
<div class="products-container" style="margin:0 auto">

  <ul class="products_ul"
      v-for="item in lists"
      :key=item.id>
    <li class="products_list">
        <div class="products_example"> {{ item.id  }}</div>
        <h3> {{ item.name }} </h3>
        <p> {{ item.description }}</p>
        <p> {{ item.id }} </p>
<!--      {{ Date.now() }}-->
      <nuxt-link to="/fun"> <button> 구매하기 </button></nuxt-link> <br/><br/>
      <nuxt-link to="/fun"> <button> 장바구니 </button> </nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {

    const lists = ref([
      { id: 1, name: "project1", description: "설명란 첫번째" },
      { id: 2, name: "project2", description: "설명란 두번재" },
      { id: 3, name: "project3", description: "설명란 세번째" },
      { id: 4, name: "project4", description: "설명란 네번재" },
      { id: 5, name: "project5", description: "설명란 다섯번째" },
      { id: 6, name: "project5", description: "설명란 다섯번째" },
      { id: 7, name: "project5", description: "설명란 다섯번째" },
      { id: 8, name: "project5", description: "설명란 다섯번째" },
      { id: 9, name: "project5", description: "설명란 다섯번째" },
      { id: 10, name: "project5", description: "설명란 다섯번째" },
      { id: 11, name: "project5", description: "설명란 다섯번째" },
      { id: 12, name: "project5", description: "설명란 다섯번째" },
      { id: 13, name: "project5", description: "설명란 다섯번째" },
    ]);
    return { lists };
  },
}
</script>
<style scoped>

.products-container { max-width: 80%;}
/*.items-container {*/  /*}*/

.products-container {
  position: relative;
}
.products-container > .products_ul {
  display: inline-block;
  justify-content: space-between;
}

.products-container > .products_ul > .products_list {
  list-style:none;
}

.products_example {
    max-width: 1000px;
    border: 1px solid black; border-radius: 15px;
    width : 250px; height: 250px;
}














/*.products-container { max-width:1920px; }*/
/*.items-container {*/
/*  font-family: 'Noto Sans', sans-serif;*/
/*  font-weight:600;*/
/*}*/

/*.products-container > .products_ul {*/
/*  width: 80%;*/
/*  margin-top: 80px;*/
/*  display: flex;*/
/*}*/

/*.products-container > .products_ul > .products_list {*/
/*  list-style: none;*/
/*  width: 180px;*/
/*  height: 180px;*/

/*  margin: 20px;*/
/*}*/

/*.products_example {*/
/*  max-width: 1000px;*/
/*  border: 1px solid black; border-radius: 25px;*/
/*  width : 250px; height: 250px;*/
/*}*/
</style>