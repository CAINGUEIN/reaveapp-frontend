import { defineStore } from "pinia";
import UsersServices from "../../modules/personal/services/userServices";

const Store = defineStore("auth", {
  state: () => {
    //ici mes variables
    return {
      dataAccount: "",
      //a mettre a jour aprés chaque modification d'un space
      dataSpaces:"",
      //aide pour l'etat de connection pour la redirection du router
      isLogin: "",
      //pour desactiver certain boutton
      loading: false,
    };
  },
  getters: {},
  actions: {
    async feedDataAccount() {
      let result = await UsersServices.checkToken();
      console.log("dans le feedDataAccount" , result);
      if (result.data.success) {
        this.dataSpaces = result.data.data.spaces;
        this.dataAccount = result.data.data;
        this.isLogin = true;
        this.loading = false;
        return true;
      } else {
        this.isLogin = false;
        this.loading = false;
        return false;
      }
    },
    //setter
    updateDataSpaces(value) {
      this.dataSpaces = value
    },
    async deleteDataAccount() {
      this.dataAccount = "";
      this.isAdmin = false;
      this.isLogin = false;
    },
  },
});

export default Store;
