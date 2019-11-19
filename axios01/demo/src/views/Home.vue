<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {
    //local8080實際打開的就是public下的index.html，所以這裡是同級
    axios.get("/data.JSON").then(res => {
      alert(res);
    });
  }
};
</script>
