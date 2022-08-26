<template>
  <div>
    <div class="flex flex-col">
      <h2 class="font-bold mt-5">Match History</h2>
      <div name="class" class="mt-4">
        <h3 class="text-[20px] mb-3">ROLE</h3>
        <div class="flex">
          <div
            class="w-9 h-9 rounded mr-2"
            v-on:mouseover="mouseover('TOP')"
            v-on:mouseleave="mouseleave"
            @click="lanePosition('TOP')"
          >
            <TopLane
              :width="36"
              :height="36"
              :color1="
                lane === 'TOP'
                  ? '#FFFFFF'
                  : comparedContent === 'TOP'
                  ? '#BEBEBE'
                  : '#505050'
              "
              :color2="
                lane === 'TOP'
                  ? '#808080'
                  : comparedContent === 'TOP'
                  ? '#404040'
                  : '#2A2A2A'
              "
            />
          </div>
          <div
            class="w-9 h-9 rounded mr-2"
            v-on:mouseover="mouseover('MIDDLE')"
            v-on:mouseleave="mouseleave"
            @click="lanePosition('MIDDLE')"
          >
            <MidLane
              :width="36"
              :height="36"
              :color1="
                lane === 'MIDDLE'
                  ? '#FFFFFF'
                  : comparedContent === 'MIDDLE'
                  ? '#BEBEBE'
                  : '#505050'
              "
              :color2="
                lane === 'MIDDLE'
                  ? '#808080'
                  : comparedContent === 'MIDDLE'
                  ? '#404040'
                  : '#2A2A2A'
              "
            />
          </div>
          <div
            class="w-9 h-9 rounded mr-2"
            v-on:mouseover="mouseover('BOTTOM')"
            v-on:mouseleave="mouseleave"
            @click="lanePosition('BOTTOM')"
          >
            <BotLane
              :width="36"
              :height="36"
              :color1="
                lane === 'BOTTOM'
                  ? '#FFFFFF'
                  : comparedContent === 'BOTTOM'
                  ? '#BEBEBE'
                  : '#505050'
              "
              :color2="
                lane === 'BOTTOM'
                  ? '#808080'
                  : comparedContent === 'BOTTOM'
                  ? '#404040'
                  : '#2A2A2A'
              "
            />
          </div>
          <div
            class="w-9 h-9 rounded mr-2"
            v-on:mouseover="mouseover('JUNGLE')"
            v-on:mouseleave="mouseleave"
            @click="lanePosition('JUNGLE')"
          >
            <JungleLane
              :width="36"
              :height="36"
              :color1="
                lane === 'JUNGLE'
                  ? '#FFFFFF'
                  : comparedContent === 'JUNGLE'
                  ? '#BEBEBE'
                  : '#505050'
              "
              :color2="
                lane === 'JUNGLE'
                  ? '#808080'
                  : comparedContent === 'JUNGLE'
                  ? '#404040'
                  : '#2A2A2A'
              "
            />
          </div>
          <div
            class="w-9 h-9 rounded mr-2"
            v-on:mouseover="mouseover('SUPPORT')"
            v-on:mouseleave="mouseleave"
            @click="lanePosition('SUPPORT')"
          >
            <SupportLane
              :width="36"
              :height="36"
              :color1="
                lane === 'SUPPORT'
                  ? '#FFFFFF'
                  : comparedContent === 'SUPPORT'
                  ? '#BEBEBE'
                  : '#505050'
              "
              :color2="
                lane === 'SUPPORT'
                  ? '#808080'
                  : comparedContent === 'SUPPORT'
                  ? '#404040'
                  : '#2A2A2A'
              "
            />
          </div>
        </div>
      </div>
      <div name="summoner" class="mt-4">
        <h3 class="text-[20px] mb-3">PLAYER</h3>
        <label for="search" class="sr-only">Search</label>
        <div class="relative text-gray-400 border-White">
          <SearchIcon
            class="absolute h-5 w-5 z-10 my-3 ml-6"
            aria-hidden="true"
          />
          <input
            id="search"
            class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
            :class="
              summonerName === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
            "
            placeholder="Search Player's"
            type="search"
            name="summonerName"
            v-model="summonerName"
            :disabled="wait"
          />
        </div>
      </div>
      <div name="victory" class="mt-4">
        <h3 class="text-[20px] mb-3">SUCCESS</h3>
        <div class="flex">
          <div
            class="border-2 rounded w-9 h-9 mr-2"
            :class="win === true ? 'border-Platinium bg-Platinium' : 'border-LightRock hover:bg-LightRock'"
            @click="winSet(true)"
          >
            <Win class="-mt-0.5 -ml-0.5" />
          </div>
          <div
            class="border-2 rounded w-9 h-9 mr-2"
            :class="win === false ? 'border-Platinium bg-Platinium' : 'border-LightRock hover:bg-LightRock'"
            @click="winSet(false)"
          >
            <Loose class="-mt-0.5 -ml-0.5" />
          </div>
        </div>
      </div>
      <div name="champion" class="mt-4">
        <h3 class="text-[20px] mb-3">CHAMPION PLAYED</h3>
        <div class="w-[353PX] mb-3">
          <div class="not-prose relative overflow-hidden">
            <div
              class="absolute inset-0"
              style="background-position: 10px 10px"
            ></div>
            <div class="relative overflow-auto">
              <div
                class="relative flex w-full overflow-x-auto scrollbar rounded-lg pb-1"
              >
                <div v-for="champion in storeData.champions" class="shrink-0">
                  <img
                    v-if="
                      compareChampionName(champion.id) || championName === ''
                    "
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
        <label for="search" class="sr-only">Search</label>
        <div class="relative text-gray-400 border-White mb-3">
          <SearchIcon
            class="absolute h-5 w-5 z-10 my-3 ml-6"
            aria-hidden="true"
          />
          <!-- voir a comprendre pourquoi j'ai un ring bleu -->
          <input
            id="search"
            class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
            :class="
              summonerName === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
            "
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
                class="relative flex w-full overflow-x-auto scrollbar3 rounded-lg pb-2"
              >
                <div v-for="champion in storeData.champions" class="shrink-0">
                  <img
                    v-if="
                      compareChampionName(champion.id) || championName === ''
                    "
                    :src="formateImgChampion(champion.id)"
                    alt=""
                    class="h-9 w-9 mr-3 shrink-0 rounded-full"
                    @click="championNameSet(champion.id)"
                  />
                </div>
              </div>
            </div>
            <div class="absolute inset-0 pointer-events-none rounded-xl"></div>
          </div>
        </div>
      </div>
      <div name="map" class="mt-4">
        <h3 class="text-[20px] mb-3">MAP PLAYED</h3>
        <div class="flex">
          <div v-for="map in storeData.maps">
            <div
              v-if="map.MapId === '11' || map.MapId === '12'"
              class="h-9 w-[83px] mr-2"
              @click="mapSet(map.MapId)"
            >
              <div
                name="img-bg"
                class="absolute top-0 left-0 right-0 z-0 h-9 overflow-hidden rounded-lg"
              >
                <img
                  :src="formateImgMap(map.MapId)"
                  :alt="map.MapId"
                  class="bg-center"
                />
              </div>
              <div
                class="absolute top-0 left-0 right-0 z-0 h-9 overflow-hidden rounded-lg"
                :class="map.MapId === mapId ? '' : 'bg-Anthracite opacity-50'"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div name="item" class="mt-4">
        <h3 class="text-[20px] mb-3">ITEM PLAYED</h3>
        <div class="relative text-gray-400 border-White">
          <SearchIcon
            class="absolute h-5 w-5 z-10 my-3 ml-6"
            aria-hidden="true"
          />
          <!-- voir a comprendre pourquoi j'ai un ring bleu -->
          <input
            id="search"
            class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
            :class="
              summonerName === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
            "
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
      </div>

      <ToolsButtonSubmit
        @action="submit"
        txtButton="Apply"
        class="w-[150px] mx-auto mt-6"
        :color="''"
      />
    </div>
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
import useStoreData from "@stores/data";
import { SearchIcon } from "@heroicons/vue/outline";
import ToolsButtonSubmit from "../buttons/ToolsButtonSubmit.vue";
import TopLane from "../../assets/icons/TopLane.vue";
import MidLane from "../../assets/icons/MidLane.vue";
import BotLane from "../../assets/icons/BotLane.vue";
import JungleLane from "../../assets/icons/JungleLane.vue";
import SupportLane from "../../assets/icons/SupportLane.vue";
import Win from "../../assets/icons/Win.vue";
import Loose from "../../assets/icons/Loose.vue";
export default {
  components: {
    SearchIcon,
    ToolsButtonSubmit,
    TopLane,
    MidLane,
    BotLane,
    JungleLane,
    SupportLane,
    Win,
    Loose,
  },
  props: ["action"],
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
      comparedContent: false,
    };
  },
  methods: {
    async submit() {
      let body = {};
      if (this.win !== "") {
        body["win"] = this.win;
      }
      if (this.mapId !== "") {
        body["mapId"] = this.mapId;
      }
      if (this.lane !== "") {
        body["lane"] = this.lane;
      }
      if (this.summonerName !== "") {
        body["summonerName"] = this.summonerName;
      }
      if (this.championName !== "") {
        body["championName"] = this.championName;
      }
      if (this.item.value !== "") {
        body["item"] = this.item.value;
      }
      this.$emit("action", body);
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
      console.log("image map", target);
      if (target === "11") {
        return "https://media.reave.dev/reave/LOL/Light_Small_SummonersRift.png";
      } else {
        return "https://media.reave.dev/reave/LOL/Light_Small_HowlingAbyss.png";
      }
    },
    mouseover: function (e) {
      this.comparedContent = e;
    },
    mouseleave: function () {
      this.comparedContent = false;
    },
  },
};
</script>
