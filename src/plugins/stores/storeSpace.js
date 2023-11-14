import { defineStore } from "pinia";
import SpaceServices from "@axios/services/spaceServices";
import UploadServices from "../axios/services/uploadServices";

const StoreSpace = defineStore("space", {
  state: () => {
    //ici mes variables
    return {
      dataSpace: {},
      isWaiting: false,
    };
  },
  getters: {
    getImg: (state) => {
      return (id) => state.dataSpace[id].picture;
    },
  },
  actions: {
    async feedDataSpace() {
      this.isWaiting = true;
      let result = await SpaceServices.checkSpace();
      let pic;
      for (let index = 0; index < result.data.data.length; index++) {
        this.dataSpace[result.data.data[index]._id] = result.data.data[index];
        pic = result.data.data[index].picture;
        if (pic) {
          this.dataSpace[result.data.data[index]._id].picture =
            await UploadServices.getImageFromBackend(pic);
        }
      }
      console.log("dans le dataSpace", this.dataSpace);
      if (result.status == "200") {
        this.isWaiting = false;
        return true;
      } else {
        this.isWaiting = false;
        return false;
      }
    },
    deleteDataSpace(state) {
      state.dataSpace = "";
    },

  },
});

export default StoreSpace;
