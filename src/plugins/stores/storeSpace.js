import { defineStore } from "pinia";
import SpaceServices from "../../modules/space/services/spaceServices"


const StoreSpace = defineStore("space", {
  state: () => {
    //ici mes variables
    return {
        dataSpace: "",
        isWaiting: false,
    };
  },
  getters: {},
  actions: {
    async feedDataSpace(id) {
      this.isWaiting = true;
      let result = await SpaceServices.checkSpace(id);
      this.dataSpace = result.data.data;
      console.log("dans le dataSpace", this.dataSpace);
      if (result.status == "200") {
        this.isWaiting = false;
        return true
      } else {
        this.isWaiting = false;
        return false
      }
    },
    deleteDataSpace(state) {
      state.dataSpace = "";
    },
  },
});

export default StoreSpace;