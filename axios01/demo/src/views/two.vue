<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
/*axios請求方法：get，post，put，patch，delete

get：獲取數據
post:提交數據（表單提交+文件上傳）
put：更新數據（所有數據推送到後端）
patch：更新數據（只將修改的數據推送到後端）
delete：刪除數據
*/

import axios from "axios";
export default {
  name: "two",
  component: {},
  created() {
    //get方法一
    axios
      .get("/data.JSON", {
        //http://localhost:8080/data.json?id=12
        params: {
          id: 12
        }
      })
      .then(res => {
        console.log(res);
      });
    //get方法二
    axios({
      method: "get",
      url: "/data.JSON",
      params: {
        id: 1
      }
    }).then(res => {
      console.log(res);
    });

    //post方法一
    let data = {
      id: 2
    };
    axios.post("/post", data).then(res => {
      console.log(res);
    });
    //post方法二
    axios({
      method: "post",
      url: "/post",
      data: data
    }).then(res => console.log(res));

    //form-data請求
    let formData = new formData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    axios.post("/post", formData).then(res => {
      console.log(res);
    });

    //put請求
    axios.put("/put", data).then(res => {
      console.log(res);
    });
    //patch請求
    axios.patch("/patch", data).then(res => {
      console.log(res);
    });
    //delete方法一
    //http://localhost:8080/data.json?id=12
    //直接寫params就是在url上傳參
    axios
      .delete("/delete", {
        params: {
          id: 12
        }
      })
      .then(res => console.log(res));
    //delete方法二
    //參數寫在請求體裡
    axios
      .delete("/delete", {
        data: {
          id: 12
        }
      })
      .then(res => console.log(res));
  }
};
</script>