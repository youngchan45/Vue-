<template>
  <div id="app">
    <van-contact-list :list="list" @add="onAdd" @edit="onEdit" />
    <!--popup為另一個組件彈出層-->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      instance: null, //axios实例
      showEdit: false, //彈窗顯示隱藏
      editingContact: {}, //正在編輯的聯繫人數據
      isEdit: false //默認是新建，true就是編輯
    };
  },
  created() {
    //注意写this
    this.instance = axios.create({
      baseURL: "http://localhost:9000/api",
      timeout: 1000
    });
    this.getList();
  },
  methods: {
    //獲取聯繫人列表
    getList() {
      this.instance
        .get("/contactList")
        .then(res => {
          this.list = res.data.data;
        })
        .catch(error => {
          //和官网文档不同 且t为小写
          // console.log('error------', error.response.status)
          // let str='页面不见啦';
          // if(error.response.status=='500'){
          //   str='页面不见啦'
          // }
          // this.$toast(str);

          //重點 易錯
          console.log(error.response);
          if (error.response) {
            this.$toast("請求失敗");
          }
        });
    },
    // 添加联系人
    onAdd() {
      this.showEdit = true;
      this.isEdit = false;
    },

    // 编辑联系人
    onEdit(info) {
      this.showEdit = true;
      this.isEdit = true;
      this.editingContact = info;
    },

    // 保存联系人
    onSave(info) {
      if (this.isEdit) {
        //編輯保存
        this.instance.put("/contact/edit", info).then(res => {
          if (res.data.code === 200) {
            this.showEdit = false;
            this.getList();
          }
        });
      } else {
        //新建保存
        this.instance
          .post("/contact/new/json", info)
          .then(res => {
            if (res.data.code === 200) {
              this.$toast("Edit success");
              this.showEdit = false;
              this.getList();
            }
          })
          .catch(err => {
            if (err.response) {
              this.$toast("Edit failed");
            }
          });
      }
    },

    // 删除联系人
    onDelete(info) {
      this.instance
        .delete("/contact", {
          params: {
            id: info.id
          }
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$toast("delete success");
            this.showEdit = false;
            this.getList();
          } else {
            this.$toast("delete failed");
          }
        });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// .van-popup{
//   height: 100%
// }
</style>