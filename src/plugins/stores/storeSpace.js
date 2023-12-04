import { defineStore } from "pinia";
import SpaceServices from "@axios/services/spaceServices";
import UploadServices from "../axios/services/uploadServices";
import { defaultImgs } from "@assets/img/profilePicture/pictureImport";
const StoreSpace = defineStore("space", {
  state: () => {
    //ici mes variables
    return {
      dataSpace: {},
      isWaiting: false,
      defaultImgs: defaultImgs,
    };
  },
  getters: {
    getImg: (state) => {
      return (id) => {
        if (state.dataSpace[id]) {
          return state.dataSpace[id].picture;
        }
        return "";
      };
    },
  },
  actions: {
    async feedDataSpace() {
      this.isWaiting = true;
      let result = await SpaceServices.getSpace();
      let pic;
      for (let index = 0; index < result.data.data.length; index++) {
        this.dataSpace[result.data.data[index]._id] = result.data.data[index];
        pic = result.data.data[index].picture;
        if (pic) {
          this.dataSpace[result.data.data[index]._id].picture =
            await UploadServices.getImageFromBackend(pic);
        } else {
          this.dataSpace[result.data.data[index]._id].picture =
            "/src/core/assets/img/profilePicture/" +
            this.defaultImgs[index] +
            ".png";
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
    async feedDataSpaceUser() {
      this.isWaiting = true;
      let result = await SpaceServices.checkSpace();
      let pic;
      for (let index = 0; index < result.data.data.length; index++) {
        this.dataSpace[result.data.data[index]._id] = result.data.data[index];
        pic = result.data.data[index].picture;
        if (pic) {
          this.dataSpace[result.data.data[index]._id].picture =
            await UploadServices.getImageFromBackend(pic);
        } else {
          this.dataSpace[result.data.data[index]._id].picture =
            "/src/core/assets/img/profilePicture/" +
            this.defaultImgs[index] +
            ".png";
        }
      }
      console.log("dans le dataSpaceUser", this.dataSpace);
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
