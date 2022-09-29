import { defineStore } from "pinia";
import SpaceServices from "@axios/services/spaceServices"


const StoreSpace = defineStore("space", {
  state: () => {
    //ici mes variables
    return {
        dataSpace: {},
        isWaiting: false,
    };
  },
  getters: {},
  actions: {
    async feedDataSpace() {
      this.isWaiting = true;
      let result = await SpaceServices.checkSpace();
      for (let index = 0; index < result.data.data.length; index++) {
        console.log(result.data.data[index]._id);
        this.dataSpace[result.data.data[index]._id]= result.data.data[index]
      }
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