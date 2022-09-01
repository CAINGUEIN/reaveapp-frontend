<template>
  <div class="flex max-h-fit flex-col sticky top-0 left-0 bottom-0 w-[390px]">
    <h2 class="font-bold">Match History</h2>
    <div class="hover:overflow-auto overflow-hidden scrollbarV">
      <div name="player" class="mt-4 overflow-hidden">
        <h3
          class="text-[20px] flex items-center cursor-pointer"
          @click="
            playerState === true
              ? ((playerState = false), (summonerName = ''))
              : (playerState = true)
          "
        >
          PLAYER<span class="ml-2"
            ><Chevron
              :class="
                playerState === true
                  ? 'transition-all ease-in-out'
                  : 'transition-all ease-in-out rotate-180'
              "
          /></span>
        </h3>
        <label for="search" class="sr-only">Search</label>
        <div
          class="relative w-[360PX] text-gray-400 border-White"
          :class="
            playerState
              ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
              : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-11'
          "
        >
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
      <div name="role" class="mt-4 overflow-hidden">
        <h3
          class="text-[20px] flex items-center cursor-pointer"
          @click="
            roleState === true
              ? ((roleState = false), (lane = ''))
              : (roleState = true)
          "
        >
          ROLE
          <span class="ml-2"
            ><Chevron
              :class="
                roleState === true
                  ? 'transition-all ease-in-out'
                  : 'transition-all ease-in-out rotate-180'
              "
          /></span>
        </h3>
        <div
          class="flex"
          :class="
            roleState
              ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
              : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-9'
          "
        >
          <div
            class="w-9 h-9 rounded mr-2 cursor-pointer"
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
            class="w-9 h-9 rounded mr-2 cursor-pointer"
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
            class="w-9 h-9 rounded mr-2 cursor-pointer"
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
            class="w-9 h-9 rounded mr-2 cursor-pointer"
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
            class="w-9 h-9 rounded mr-2 cursor-pointer"
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
      <div name="victory" class="mt-4 overflow-hidden">
        <h3
          class="text-[20px] flex items-center cursor-pointer"
          @click="
            victoryState === true
              ? ((victoryState = false), (win = ''))
              : (victoryState = true)
          "
        >
          SUCCESS<span class="ml-2"
            ><Chevron
              :class="
                victoryState === true
                  ? 'transition-all ease-in-out'
                  : 'transition-all ease-in-out rotate-180'
              "
          /></span>
        </h3>
        <div
          class="flex"
          :class="
            victoryState
              ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
              : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-9'
          "
        >
          <div
            class="border-2 rounded w-9 h-9 mr-2 cursor-pointer"
            :class="
              win === true
                ? 'border-Platinium bg-Platinium'
                : 'border-LightRock hover:bg-LightRock'
            "
            @click="winSet(true)"
          >
            <Win class="-mt-0.5 -ml-0.5" />
          </div>
          <div
            class="border-2 rounded w-9 h-9 mr-2 cursor-pointer"
            :class="
              win === false
                ? 'border-Platinium bg-Platinium'
                : 'border-LightRock hover:bg-LightRock'
            "
            @click="winSet(false)"
          >
            <Loose class="-mt-0.5 -ml-0.5" />
          </div>
        </div>
      </div>
      <div name="map" class="mt-4 overflow-hidden">
        <h3
          class="text-[20px] flex items-center cursor-pointer"
          @click="
            mapState === true
              ? ((mapState = false), (mapId = ''))
              : (mapState = true)
          "
        >
          MAP PLAYED<span class="ml-2"
            ><Chevron
              :class="
                mapState === true
                  ? 'transition-all ease-in-out'
                  : 'transition-all ease-in-out rotate-180'
              "
          /></span>
        </h3>
        <div
          class="flex"
          :class="
            mapState
              ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
              : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-9'
          "
        >
          <div v-for="map in storeData.maps">
            <div
              v-if="map.MapId === '11' || map.MapId === '12'"
              class="h-9 w-[83px] mr-2 cursor-pointer"
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
      <div name="champion" class="mt-4 overflow-hidden">
        <h3
          class="text-[20px] flex items-center cursor-pointer"
          @click="
            championState === true
              ? ((championState = false), (championSelect = []))
              : (championState = true)
          "
        >
          CHAMPION PLAYED<span class="ml-2"
            ><Chevron
              :class="
                championState === true
                  ? 'transition-all ease-in-out'
                  : 'transition-all ease-in-out rotate-180'
              "
          /></span>
        </h3>
        <div
          :class="
            championState
              ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
              : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-[109px]'
          "
        >
          <div v-if="championSelect.length > 0" name="selectedChampion">
            <div class="w-[360PX] mb-3">
              <div class="not-prose relative overflow-hidden">
                <div
                  class="absolute inset-0"
                  style="background-position: 10px 10px"
                ></div>
                <div class="relative overflow-auto">
                  <div
                    class="relative flex w-full overflow-x-auto scrollbar rounded-lg pb-1"
                  >
                    <div v-for="champion in championSelect" class="flex">
                      <img
                        :src="formateImgChampion(champion)"
                        alt=""
                        class="h-9 w-9 mr-2 shrink-0 rounded-full cursor-pointer"
                        @click="championNameSet(champion)"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="absolute inset-0 pointer-events-none rounded-xl"
                ></div>
              </div>
            </div>
          </div>
          <div name="inputChampion">
            <label for="search" class="sr-only">Search</label>
            <div class="relative w-[360PX] text-gray-400 border-White mb-3">
              <SearchIcon
                class="absolute h-5 w-5 z-10 my-3 ml-6"
                aria-hidden="true"
              />
              <input
                id="search"
                class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
                :class="
                  championName === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
                "
                placeholder="Search Champions"
                type="search"
                name="championName"
                v-model="championName"
                :disabled="wait"
              />
            </div>
          </div>
          <div name="listChampion">
            <div class="w-[360PX]">
              <div class="not-prose relative overflow-hidden">
                <div
                  class="absolute inset-0"
                  style="background-position: 10px 10px"
                ></div>
                <div class="relative overflow-auto">
                  <div
                    class="relative flex w-full overflow-x-auto scrollbar3 rounded-lg pb-2"
                    :class="this.championSelect.length < 8 ? '' : 'opacity-50'"
                  >
                    <div
                      v-for="champion in storeData.champions"
                      class="shrink-0"
                    >
                      <img
                        v-if="
                          compareChampionName(champion.id) ||
                          championName === ''
                        "
                        :src="formateImgChampion(champion.id)"
                        alt=""
                        class="h-9 w-9 mr-2 shrink-0 rounded-full cursor-pointer"
                        @click="championNameSet(champion.id)"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="absolute inset-0 pointer-events-none rounded-xl"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div name="item" class="mt-4 overflow-hidden">
        <h3
          class="text-[20px] flex items-center cursor-pointer"
          @click="
            itemState === true
              ? ((itemState = false), (itemSelect = []))
              : (itemState = true)
          "
        >
          ITEM PLAYED<span class="ml-2"
            ><Chevron
              :class="
                itemState === true
                  ? 'transition-all ease-in-out'
                  : 'transition-all ease-in-out rotate-180'
              "
          /></span>
        </h3>
        <div
          :class="
            itemState
              ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
              : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-[109px]'
          "
        >
          <div v-if="itemSelect.length > 0" name="selectedItem">
            <div class="w-[360PX] mb-3">
              <div class="not-prose relative overflow-hidden">
                <div
                  class="absolute inset-0"
                  style="background-position: 10px 10px"
                ></div>
                <div class="relative overflow-auto">
                  <div
                    class="relative flex w-full overflow-x-auto scrollbar rounded-lg pb-1"
                  >
                    <div v-for="oneItem in itemSelect" class="flex">
                      <img
                        :src="formateImgItem(oneItem)"
                        alt=""
                        class="h-9 w-9 mr-2 shrink-0 rounded-full cursor-pointer"
                        @click="itemSet(oneItem, oneItem.value)"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="absolute inset-0 pointer-events-none rounded-xl"
                ></div>
              </div>
            </div>
          </div>
          <div name="inputItem">
            <label for="search" class="sr-only">Search</label>
            <div class="relative w-[360PX] text-gray-400 border-White mb-3">
              <SearchIcon
                class="absolute h-5 w-5 z-10 my-3 ml-6"
                aria-hidden="true"
              />
              <input
                id="search"
                class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
                :class="
                  item.name === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
                "
                placeholder="Search Item"
                type="search"
                name="item"
                v-model="item.name"
                :disabled="wait"
              />
            </div>
          </div>
          <div name="listItem">
            <div class="w-[360PX]">
              <div class="not-prose relative overflow-hidden">
                <div
                  class="absolute inset-0"
                  style="background-position: 10px 10px"
                ></div>
                <div class="relative overflow-auto">
                  <div
                    class="relative flex w-full overflow-x-auto scrollbar3 rounded-lg pb-2"
                    :class="this.itemSelect.length < 8 ? '' : 'opacity-50'"
                  >
                    <div
                      v-for="(oneItem, key) in storeData.items"
                      class="shrink-0"
                    >
                      <img
                        v-if="compareItem(oneItem.name) || item === ''"
                        :src="formateImgItem(oneItem)"
                        alt=""
                        class="h-9 w-9 mr-2 shrink-0 rounded-full cursor-pointer"
                        @click="itemSet(oneItem, key)"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="absolute inset-0 pointer-events-none rounded-xl"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToolsButtonSubmit
        @action="submit"
        txtButton="Apply"
        class="w-[150px] mx-auto mt-6 mb-10"
        :color="''"
      />
    </div>
    <div class="absolute inset-0 pointer-events-none rounded-xl"></div>
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
import Chevron from "../../assets/icons/Chevron.vue";
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
    Chevron,
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
      championSelect: [],
      item: { name: "", value: "" },
      itemSelect: [],
      mapId: "",
      lane: "",
      wait: false,
      comparedContent: false,
      roleState: true,
      playerState: true,
      victoryState: true,
      championState: true,
      mapState: true,
      itemState: true,
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
        let playersName = this.summonerName.split(", ");
        body["summonerName"] = playersName;
      }
      if (this.championSelect.length > 0) {
        body["championName"] = this.championSelect;
      }
      if (this.itemSelect.length > 0) {
        body["item"] = this.itemSelect;
      }
      console.log(body);
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
      let match = false;
      for (let index = 0; index < this.championSelect.length; index++) {
        if (this.championSelect[index] === value) {
          match = true;
        }
      }
      if (match) {
        this.championSelect = this.championSelect.filter(
          (champion) => champion !== value
        );
      } else {
        if (this.championSelect.length < 8) {
          this.championSelect.push(value);
        }
      }
    },
    compareChampionName(name) {
      let nameLowerCase = name.toLowerCase();
      return nameLowerCase.includes(this.championName.toLowerCase());
    },
    itemSet(target, key) {
      target["key"] = key;
      let match = false;
      for (let index = 0; index < this.itemSelect.length; index++) {
        if (this.itemSelect[index].key === key) {
          match = true;
        }
      }
      if (match) {
        this.itemSelect = this.itemSelect.filter((item) => item.key !== key);
      } else {
        if (this.itemSelect.length < 8) {
          this.itemSelect.push(target);
        }
      }
      console.log(this.itemSelect);
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