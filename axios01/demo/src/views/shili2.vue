<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
export default {
  name: "shili2",
  components: {},
  created() {
    axios.create({
      baseURL: "http://localhost:8080", //請求的域名，基本地址
      timeout: 1000, //請求超時時長（毫秒）
      url: "/data.JSON", //請求路徑
      method: "get,post,put,patch,delete",
      headers: {
        token: ""
      }, //請求頭
      params: {}, //請求參數拼接在url上
      data: {} //請求參數放在請求體
    });
    //1.axios全局配置
    axios.defaults.timeout=1000
    axios.defaults.baseURL='http://localhost:8080'
    //2.axios實例配置
    let instance=axios.create()
    instance.defaults.timeout=3000
    //3.axios請求配置
    instance.get('/data.JSON',{
        timeout:4000
    })
    //實際項目
    //http://localhost:8080
    //http://localhost:9090
    let instance= axios.create({
        baseURL:'http://localhost:8080',
        timeout:1000,
    })
    let instance2 = axios.create({
        baseURL:'http://localhost:9090',
        timeout:3000
    })
    //
    instance.get("./contactList",{
        params:{} 
    }).then(
        res=>{
            console.log(res)
        }
    )
    instance1.get('/orderList',{
        timeout:5000
    }).then(res=>{
        console.log(res)
    })
  }
};
</script>
