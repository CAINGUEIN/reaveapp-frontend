import { defineStore } from "pinia";
import UsersServices from "../../modules/personal/services/userServices";

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
        this.loading = false;
        return true;
      } else {
        this.isLogin = false;
        this.loading = false;
        return false;
      }
    },
    deleteDataAccount(state) {
      state.dataAccount = "";
      state.isAdmin = false;
      state.isLogin = false;
    },
  },
});

export default Store;
