<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
export default {
  name: "four",
  components: {
   
  },
  created() {
//請求攔截器
axios.interceptors.request.use(
    //兩個參數，一個是請求前的回調函數，一個是請求錯誤的回調函數
    config=>{
        //在發送請求前做些什麼，比如修改配置或彈出內容
        return config
    },err=>{
        //在請求錯誤時做些什麼
        return Promise.reject(err)
    }
)
//響應攔截器
axios.interceptors.response.use(
    res=>{
        //請求成功對響應數據做處理
        return res
    },err=>{
        //響應錯誤做些什麼
        return Promise.reject(err)
    }
)
//then是請求成功的處理，catch是請求失敗的處理
axios.get().then().catch(err=>{

})
//請求錯誤和響應錯誤的區別在於有沒有到達後端
//請求錯誤是發送請求沒有到達後端，例如沒有這個接口，404
//響應錯誤是比如要從數據庫裡查一個人，數據庫查無此人，就返回500

//不常用：取消攔截器

//栗子：登錄狀態（token:''）
let instance= axios.create({})
instance.interceptors.request.use(
    config=>{
        config.headers.token=''
        return config
    }
)

  }
};
</script>
