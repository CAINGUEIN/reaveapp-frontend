import { defineStore } from "pinia";
import StoreDataServices from "@axios/services/storeData";

const StoreData = defineStore("data", {
  state: () => {
    //ici mes variables
    return {
      data: "",
      isWaiting: false,
      champions: "",
      items: "",
      maps: "",
      summoners: "",
      runesReforged: "",
    };
  },
  getters: {},
  actions: {
    async feedData() {
      this.isWaiting = true;
      let result = await StoreDataServices.version();
      this.data = result.data.data;
      this.champions = result.data.data.champion.data;
      this.items = result.data.data.item.data;
      this.maps = result.data.data.map.data;
      this.summoners = result.data.data.summoner.data;
      this.runesReforged = result.data.data.runesReforged;
      console.log("dans le data", this.data);
      if (result.status == "200") {
        this.isWaiting = false;
        return true;
      } else {
        this.isWaiting = false;
        return false;
      }
    },
    deleteDataSpace(state) {
      state.data = "";
    },
  },
});

export default StoreData;
