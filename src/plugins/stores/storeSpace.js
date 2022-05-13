import { defineStore } from "pinia";
import SpaceServices from "../../modules/space/services/spaceServices"


const StoreSpace = defineStore("space", {
  state: () => {
    //ici mes variables
    return {
        DataSpace: "",
        isWaiting: false,
    };
  },
  getters: {},
  actions: {
    async feedDataSpace(id) {
      this.isWaiting = true;
      let result = await SpaceServices.checkSpace(id);
      this.DataSpace = result.data.data;
      if (result.status == "200") {
        this.isWaiting = false;
        return true
      } else {
        this.isWaiting = false;
        return false
      }
    },
    deleteDataSpace(state) {
      state.dataAccount = "";
    },
  },
});

export default StoreSpace;