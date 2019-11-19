<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
export default {
  name: "five",
  created() {
    //兩個攔截器
    axios.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        return Promise.reject(err); //請求錯誤包括常見404沒找到接口，401請求超時
      }
    );
    axios.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        return Promise.reject(err);
      }
    );

    //請求成功進入then，請求失敗進入catch
    axios
      .get("/data.JSON")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        //請求錯誤和響應錯誤都會進入catch
        console.log(err);
      });

    //栗子：實際開發中，一般添加統一錯誤處理
    let instance = axios.create({});
    instance.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        //請求錯誤一般http碼以4開頭
        return Promise.reject(err);
      }
    );
    instance.interceptors.response.use(
      config => {
        return config;
      },
      err => {
        //響應錯誤一般http狀態碼以5開頭，500系統錯誤 502系統重啟
        $("#modal").show();
        setTimeout(() => {
          $("#modal").hide();
        }, 2000);
        return Promise.reject(err);
      }
    );
  }
};
</script>
