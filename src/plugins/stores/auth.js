import { defineStore } from "pinia";
import UsersServices from "../../services/userServices";

const Store = defineStore("auth", {
  state: () => {
    //ici mes variables
    return {
      dataAccount: "",
      isLogin: "",
      loading: false,
    };
  },
  getters: {},
  actions: {
    async feedDataAccount() {
      let result = await UsersServices.checkToken();
      this.dataAccount = result.data.data;
      if (result.status == "200") {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
      this.loading = false;
    },
  },
});

export default Store
