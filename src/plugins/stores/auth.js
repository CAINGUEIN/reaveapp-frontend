import { defineStore } from "pinia";
import UsersServices from "@axios/services/userServices";

const Store = defineStore("auth", {
  state: () => {
    //ici mes variables
    return {
      view: "",
      dataAccount: "",
      //a mettre a jour aprés chaque modification d'un space
      dataSpaces: "",
      notifications: "",
      calendar: "",
      dm: "",
      invitationSended: "",
      calendarSpacesShow: "",
      friends: "",
      ban: "",
      ListLastMatchLol: "",
      //aide pour l'etat de connection pour la redirection du router
      isLogin: "",
      //pour desactiver certain boutton
      loading: false,
      avatarKey: 0,
      bannerKey: 0,
      spaceKey: 0,
    };
  },
  getters: {},
  actions: {
    async feedDataAccount() {
      //destructurer le plus la data pour pouvoir la modifier sur des requete plus petite a des endroit de l'app
      let result = await UsersServices.checkToken();
      console.log("dans le feedDataAccount", result);
      if (result.data.success) {
        this.dataSpaces = result.data.data.spaces;
        this.dataAccount = result.data.data;
        this.notifications = result.data.data.notifications;
        this.calendar = result.data.data.calendar;
        this.dm = result.data.data.dm;
        this.invitationSended = result.data.data.invitationSended;
        this.calendarSpacesShow = result.data.data.calendarSpacesShow;
        this.friends = result.data.data.friends;
        this.ban = result.data.data.ban;

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
    setter(value, target) {
      this[target] = value;
    },
    updateDataSpaces(value) {
      this.dataSpaces = value;
    },
    setInvitationSended(value) {
      this.invitationSended = value;
    },
    async deleteDataAccount() {
      this.dataAccount = "";
      this.dataSpaces = "";
      this.dataAccount = "";
      this.notifications = "";
      this.calendar = "";
      this.dm = "";
      this.invitationSended = "";
      this.calendarSpacesShow = "";
      this.friends = "";
      this.ban = "";
      this.isAdmin = false;
      this.isLogin = false;
    },
  },
});

export default Store;
