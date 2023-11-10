import { defineStore } from "pinia";
import SpaceServices from "@axios/services/spaceServices";
import EventServices from "../axios/services/eventServices";

const StoreSpace = defineStore("space", {
  state: () => {
    //ici mes variables
    return {
      dataSpace: {},
      isWaiting: false,
    };
  },
  getters: {
    // getImg(id) {
    //   return this.dataSpace[result.data.data[index].picture]
    // }
  },
  actions: {
    async feedDataSpace() {
      this.isWaiting = true;
      let result = await SpaceServices.checkSpace();
      let pic;
      for (let index = 0; index < result.data.data.length; index++) {
        console.log(result.data.data[index]._id);
        this.dataSpace[result.data.data[index]._id] = result.data.data[index];
        pic = result.data.data[index].picture;
        if (pic) {
          this.dataSpace[result.data.data[index]._id].picture =
            await EventServices.getImageFromBackend(pic);
          console.log(this.dataSpace[result.data.data[index].picture]);
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
