<template>
  <div class="home">
  </div>
</template>

<script>
// 並發請求：同時進行過個請求，並統一處理
import axios from "axios";
export default {
  name: "three",
  components: {

  },
  created() {
axios.all(
    [
        axios.get('/data.JSON'),
        axios.get('/city.JSON')
    ]
).then(
    axios.spread((dataRes,cityRes)=>{
        console.log(dataRes,cityRes)
    })
)
  }
};
</script>
