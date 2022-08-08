<template>
  <div>
    <div class="flex flex-col">
      <h2>Match History</h2>
      <h4>CLASS</h4>
      <div class="flex">
        <div
          class="border-2 w-9 h-9 rounded-sm mr-1"
          :class="lane === 'TOP' ? 'border-gravel' : 'border-LightRock'"
          @click="lanePosition('TOP')"
        >
          Top
        </div>
        <div
          class="border-2 w-9 h-9 rounded-sm mr-1"
          :class="lane === 'MIDDLE' ? 'border-gravel' : 'border-LightRock'"
          @click="lanePosition('MIDDLE')"
        >
          Mid
        </div>
        <div
          class="border-2 w-9 h-9 rounded-sm mr-1"
          :class="lane === 'BOTTOM' ? 'border-gravel' : 'border-LightRock'"
          @click="lanePosition('BOTTOM')"
        >
          Bot
        </div>
        <div
          class="border-2 w-9 h-9 rounded-sm mr-1"
          :class="lane === 'JUNGLE' ? 'border-gravel' : 'border-LightRock'"
          @click="lanePosition('JUNGLE')"
        >
          Jungle
        </div>
      </div>
      <h4>Summoner Name</h4>
      <label for="search" class="sr-only">Search</label>
      <div class="relative text-gray-400 border-White m-2">
        <SearchIcon class="absolute h-5 w-5 z-10 m-3" aria-hidden="true" />
        <!-- voir a comprendre pourquoi j'ai un ring bleu -->
        <input
          id="search"
          class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
          placeholder="Search Summoner name"
          type="search"
          name="summonerName"
          v-model="summonerName"
          :disabled="wait"
        />
      </div>
      <h4>SUCCESS</h4>
      <div class="flex">
        <div
          class="border-2 text-center w-9 h-9 rounded-sm mr-1"
          :class="win === true ? 'border-gravel' : 'border-LightRock'"
          @click="winSet(true)"
        >
          <h4 class="text-Green">W</h4>
        </div>
        <div
          class="border-2 text-center w-9 h-9 rounded-sm mr-1"
          :class="win === false ? 'border-gravel' : 'border-LightRock'"
          @click="winSet(false)"
        >
          <h4 class="text-Red">L</h4>
        </div>
      </div>
      <h4>CHAMPION PLAYED</h4>
      <label for="search" class="sr-only">Search</label>
      <div class="relative text-gray-400 border-White m-2">
        <SearchIcon class="absolute h-5 w-5 z-10 m-3" aria-hidden="true" />
        <!-- voir a comprendre pourquoi j'ai un ring bleu -->
        <input
          id="search"
          class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
          placeholder="Search Champions"
          type="search"
          name="championName"
          v-model="championName"
          :disabled="wait"
        />
      </div>
      <div class="w-[353PX]">
        <div class="not-prose relative overflow-hidden">
          <div
            class="absolute inset-0"
            style="background-position: 10px 10px"
          ></div>
          <div class="relative overflow-auto">
            <div
              class="relative flex w-full overflow-x-auto scrollbar3 rounded-lg pb-1"
            >
              <div v-for="champion in storeData.champions" class="shrink-0">
                <img
                  v-if="compareChampionName(champion.id) || championName === ''"
                  :src="formateImgChampion(champion.id)"
                  alt=""
                  class="h-9 w-9 mx-1 shrink-0 rounded-full"
                  @click="championNameSet(champion.id)"
                />
              </div>
            </div>
          </div>
          <div class="absolute inset-0 pointer-events-none rounded-xl"></div>
        </div>
      </div>
      <h4>MAP PLAYED</h4>
      <div class="flex">
        <div v-for="map in storeData.maps">
          <img
            :src="formateImgMap(map.image.full)"
            :class="map.MapId === mapId ? 'border-gravel' : 'border-LightRock'"
            :alt="map.MapId"
            class="h-9 w-9 mx-1 shrink-0 border-2 rounded-lg"
            @click="mapSet(map.MapId)"
          />
        </div>
      </div>
      <h4>ITEM PLAYED</h4>
      <div class="relative text-gray-400 border-White m-2">
        <SearchIcon class="absolute h-5 w-5 z-10 m-3" aria-hidden="true" />
        <!-- voir a comprendre pourquoi j'ai un ring bleu -->
        <input
          id="search"
          class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
          placeholder="Search Item"
          type="search"
          name="item"
          v-model="item.name"
          :disabled="wait"
        />
      </div>
      <div class="w-[353PX]">
        <div class="not-prose relative overflow-hidden">
          <div
            class="absolute inset-0"
            style="background-position: 10px 10px"
          ></div>
          <div class="relative overflow-auto">
            <div
              class="relative flex w-full overflow-x-auto scrollbar3 rounded-lg pb-1"
            >
              <div v-for="(oneItem, key) in storeData.items" class="shrink-0">
                <img
                  v-if="compareItem(oneItem.name) || item === ''"
                  :src="formateImgItem(oneItem)"
                  alt=""
                  class="h-9 w-9 mx-1 shrink-0 rounded-full"
                  @click="itemSet(oneItem, key)"
                />
              </div>
            </div>
          </div>
          <div class="absolute inset-0 pointer-events-none rounded-xl"></div>
        </div>
      </div>
      <ToolsButtonSubmit
        @action="submit"
        txtButton="Apply Filter"
        class="w-[200px]"
        :color="''"
      />
    </div>
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
import useStoreData from "@stores/data";
import { SearchIcon } from "@heroicons/vue/outline";
import UsersServices from "../../../plugins/axios/services/userServices";
import ToolsButtonSubmit from "../buttons/ToolsButtonSubmit.vue";
export default {
  components: {
    SearchIcon,
    ToolsButtonSubmit,
  },
  data() {
    const store = useStoreAuth();
    const storeData = useStoreData();
    return {
      store,
      storeData,
      win: "",
      summonerName: "",
      championName: "",
      item: { name: "", value: "" },
      mapId: "",
      lane: "",
      wait: false,
    };
  },
  methods: {
    async submit() {
      let body = {};
      if (this.win !== "") {
        body["win"] = this.win
      }
      if (this.mapId !== "") {
        body["mapId"] = this.mapId
      }
      if (this.lane !== "") {
        body["lane"] = this.lane
      }
      if (this.summonerName !== "") {
        body["summonerName"] = this.summonerName
      }
      if (this.championName !== "") {
        body["championName"] = this.championName
      }
      if (this.item.value !== "") {
        body["item"] = this.item.value
      }

      let result = await UsersServices.feadFilteredMatch(body);
      //le bute est de faire une verification des dernier match a chaque mounted de la page
      this.store.setter(result.data.data, "ListLastMatchLol");
    },
    lanePosition(value) {
      if (this.lane === value) {
        this.lane = "";
      } else {
        this.lane = value;
      }
    },
    winSet(value) {
      if (this.win === value) {
        this.win = "";
      } else {
        this.win = value;
      }
    },
    formateImgChampion(name) {
      return (
        "http://ddragon.leagueoflegends.com/cdn/" +
        this.storeData.data.version +
        "/img/champion/" +
        name +
        ".png"
      );
    },
    championNameSet(value) {
      if (this.championName === value) {
        this.championName = "";
      } else {
        this.championName = value;
      }
    },
    compareChampionName(name) {
      let nameLowerCase = name.toLowerCase();
      return nameLowerCase.includes(this.championName.toLowerCase());
    },
    itemSet(target, key) {
      if (this.item.value === key) {
        this.item.value = "";
        this.item.name = "";
      } else {
        this.item.value = key;
        this.item.name = target.name;
      }
    },
    compareItem(target) {
      let itemLowerCase = target.toLowerCase();
      return itemLowerCase.includes(this.item.name.toLowerCase());
    },
    formateImgItem(target) {
      return (
        "http://ddragon.leagueoflegends.com/cdn/" +
        this.storeData.data.version +
        "/img/item/" +
        target.image.full
      );
    },
    mapSet(value) {
      console.log(value);
      if (this.mapId === value) {
        this.mapId = "";
      } else {
        this.mapId = value;
      }
    },
    formateImgMap(target) {
      return (
        "http://ddragon.leagueoflegends.com/cdn/" +
        this.storeData.data.version +
        "/img/map/" +
        target
      );
    },
  },
};
</script>
