<template prop={counter} style="margin:0; apdding:">
<div style="margin:0; padding:0; position: absolute;">
  <ul class="products">
    <nuxt-link to="/"> <li class="img_class"> T ME To SOON </li></nuxt-link>
      <li class="header_list" v-for="(header, index) in headers" :key="index">
        <nuxt-link to="fun">
          {{ header.name }}
        </nuxt-link>
    </li>
    <button onClick="counterExample"> 카운트 Example </button>
    <button onClick="include"> operation </button>
  </ul>
</div>
</template>
<script>
import {ref} from "vue";

export  default {
  setup(){
    const headers = ref([
      { id: 1, name: "My Home" },
      { id: 2, name: "My Web" },
    ]);
    const counter = (0)


    const counterExample = count => {
      count.include
    }
    function operation(){
      const result = {}
      console.log(lists)
      for(let i=0; i <= this.headers.length; i++){


      }
    }

  return  { headers, operation, counter, counterExample }
  }
}

</script>


<style scoped>
body, ul, li   { font-family: 'Noto Sans', sans-serif; font-weight:800; }
.products { width:100%; margin:0; padding:15px; overflows:hidden; position:fixed; z-index: 9999;}
.products > a { color: white; font-size: 25px;}
ul { display: flex; background-color: rgba(0,0,0, 0.9); color:white; }
sul > img { object-fit: contain; ;}
li { list-style: none; width: 200px; }
a { text-decoration: none; color: black}
.img_class { margin-right: 1000px;}
.header_list  a{ text-decoration:none; color: white; z-index: 999999;}
</style>j