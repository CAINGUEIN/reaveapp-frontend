<template>
  <div v-if="personnalStat">
    <div name="resume" class="w-full h-40 p-3 my-3 flex justify-between">
      <div
        name="img-bg"
        class="absolute top-0 left-0 right-3 h-40 overflow-hidden rounded-2xl"
      >
        <img
          :src="formateUrlSplash(info.mapId)"
          alt=""
          class="blur-sm brightness-75 bg-center"
        />
      </div>
      <div name="content-left" class="flex h-full flex-col justify-evenly">
        <div name="ligne-top" class="flex items-center ml-3">
          <img src="../../assets/icons/Component_19.svg" />
          <h1 class="mr-1">
            {{ personnalStat.statTotal.win ? "VICTORY" : "DEFEAT" }}
          </h1>
          <h4 class="mr-1" v-if="info.gameMode === 'CLASSIC'">
            {{ personnalStat.statTotal.lane }}
          </h4>
          <img
            :src="formateImgChampion(personnalStat.statTotal.championName)"
            alt=""
            class="h-10 w-10 rounded-full"
          />
          <div>
            <img
              :src="
                formateImgRunesReforged(
                  personnalStat.statTotal.perks.styles[0].style
                )
              "
              alt=""
              class="ml-3 h-6 w-6 p-0.5 rounded-full bg-Anthracite"
            />
            <img
              :src="
                formateImgRunesReforged(
                  personnalStat.statTotal.perks.styles[1].style
                )
              "
              alt=""
              class="ml-3 h-6 w-6 p-0.5 rounded-full bg-Anthracite"
            />
          </div>

          <div class="ml-2 space-y-1">
            <img
              :src="formateImgSummonerCast(personnalStat.statTotal.summoner1Id)"
              alt=""
              class="h-6 w-6 rounded-lg bg-Anthracite"
            />
            <img
              :src="formateImgSummonerCast(personnalStat.statTotal.summoner2Id)"
              alt=""
              class="h-6 w-6 rounded-lg bg-Anthracite"
            />
          </div>
          <img
            v-if="personnalStat.statTotal.item0"
            :src="formateImgItem(personnalStat.statTotal.item0)"
            alt=""
            class="h-9 w-9 ml-1 rounded-lg bg-Anthracite"
          />
          <img
            v-if="personnalStat.statTotal.item1"
            :src="formateImgItem(personnalStat.statTotal.item1)"
            alt=""
            class="h-9 w-9 ml-1 rounded-lg bg-Anthracite"
          />
          <img
            v-if="personnalStat.statTotal.item2"
            :src="formateImgItem(personnalStat.statTotal.item2)"
            alt=""
            class="h-9 w-9 ml-1 rounded-lg bg-Anthracite"
          />
          <img
            v-if="personnalStat.statTotal.item3"
            :src="formateImgItem(personnalStat.statTotal.item3)"
            alt=""
            class="h-9 w-9 ml-1 rounded-lg bg-Anthracite"
          />
          <img
            v-if="personnalStat.statTotal.item4"
            :src="formateImgItem(personnalStat.statTotal.item4)"
            alt=""
            class="h-9 w-9 ml-1 rounded-lg bg-Anthracite"
          />
          <img
            v-if="personnalStat.statTotal.item5"
            :src="formateImgItem(personnalStat.statTotal.item5)"
            alt=""
            class="h-9 w-9 ml-1 rounded-lg bg-Anthracite"
          />
          <img
            v-if="personnalStat.statTotal.item6"
            :src="formateImgItem(personnalStat.statTotal.item6)"
            alt=""
            class="h-9 w-9 ml-1 rounded-lg bg-Anthracite"
          />
        </div>
        <div name="ligne-bottom" class="flex ml-3">
          <p class="mr-1">
            {{ $dayjs(info.gameStartTimestamp).format("DD/MM/YYYY") }}
          </p>
          <p class="mr-1">
            Match started at
            {{ $dayjs(info.gameStartTimestamp).format("HH:mm") }}
          </p>
          <p class="mr-1">{{ timeDuration(info.gameDuration) }}</p>
          <p class="mr-1" v-if="info.gameMode === 'CLASSIC'">
            {{ formateKDA(personnalStat.statTotal.challenges.kda) }} th
          </p>
          <p class="mr-1 text-Blue">
            {{
              team100[0].statTotal.kills +
              team100[1].statTotal.kills +
              team100[2].statTotal.kills +
              team100[3].statTotal.kills +
              team100[4].statTotal.kills
            }}
          </p>
          <p class="mr-1">/</p>
          <p class="mr-1 text-Red">
            {{
              team200[0].statTotal.kills +
              team200[1].statTotal.kills +
              team200[2].statTotal.kills +
              team200[3].statTotal.kills +
              team200[4].statTotal.kills
            }}
          </p>
        </div>
      </div>
      <div
        name="content-right"
        class="flex h-full flex-col justify-evenly items-end"
      >
        <div class="flex">
          <div class="h-15 w-15 p-2 bg-DarkRock rounded-full">
            <PaperAirplaneIcon class="h-11 w-11 rotate-[0deg]" />
          </div>
          <div class="h-15 w-15 p-2 bg-DarkRock rounded-full ml-3 mr-6">
            <XIcon class="h-11 w-11" />
          </div>
        </div>
        <div class="flex -space-x-4 mr-6">
          <div class="h-9 w-9 p-2 bg-DarkRock rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-DarkRock rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-DarkRock rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-DarkRock rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-DarkRock rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-Gravel rounded-full"><p>+5</p></div>
        </div>
      </div>
    </div>
    <div name="compared">
      <div name="title" class="mt-12 flex justify-between items-center">
        <div class="flex items-center">
          <p class="text-3xl font-bold text-White">
            Compared to<span class="text-3xl font-bold text-Gravel">
              previous match</span
            >
          </p>
          <ChevronDownIcon class="w-6 ml-2" />
        </div>
      </div>
      <div
        name="content"
        class="mt-6"
        v-on:mouseover="mouseover"
        v-on:mouseleave="mouseleave"
      >
        <div v-if="comparedContent" class="absolute inset-0 z-10 flex">
          <h3 class="m-auto bg-Purple rounded-full px-5 py-3">SOON</h3>
        </div>
        <div
          class="flex justify-between"
          :class="comparedContent ? 'blur-sm' : 'blur-[2px]'"
        >
          <div
            v-for="item in fakeData"
            :key="item.id"
            class="w-48 h-48 mx-3 flex flex-col justify-evenly first:ml-0 last::mr-0 bg-DarkRock rounded-2xl"
          >
            <h1
              class="text-center"
              :class="item.value > 0 ? 'text-Green' : 'text-Red'"
            >
              {{ item.value }}%
            </h1>
            <p class="w-36 text-center mx-auto font-medium text-White">
              {{ item.txt }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FindOneMatch from "../../../plugins/axios/services/servicesMatchSummary";
import useDataStore from "../../../plugins/stores/data";
import useAuthStore from "../../../plugins/stores/auth";
import {
  PaperAirplaneIcon,
  ChevronDownIcon,
  XIcon,
} from "@heroicons/vue/outline";
import fakeData from "./fakeData";
/* changement recup direct les datas dans le back du match
voir peut etre a mettre sur cette route la recup des datas timeline
 */
export default {
  components: {
    PaperAirplaneIcon,
    XIcon,
    ChevronDownIcon,
  },
  data() {
    const dataStore = useDataStore();
    const store = useAuthStore();
    return {
      fakeData,
      store,
      dataStore,
      comparedContent: false,
      info: "",
      players: "",
      personnalStat: "",
      team100: [],
      team200: [],
    };
  },
  methods: {
    QueryURL() {
      let idRiot = this.$route.query.match;
      //recup le query de l'URL
      this.feadData(idRiot);
    },
    async feadData(id) {
      //puis recup dans le back les datas lié
      let result = await FindOneMatch.lolMatchSummary(id);
      if (result.status === 200) {
        this.info = result.data.data[0].info;
        this.players = result.data.data[0].players;
        this.feadPersonnalStat();
        this.feadTeam();
      } else {
        //ça dégage
      }
    },
    feadPersonnalStat() {
      for (let index = 0; index < this.players.length; index++) {
        const player = this.players[index];
        if (player._id_user === this.store.dataAccount._id) {
          this.personnalStat = player;
        }
      }
    },
    feadTeam() {
      this.players.forEach((player) => {
        if (player.statTotal.teamId === 100) {
          this.team100.push(player);
        } else {
          this.team200.push(player);
        }
      });
    },
    formateUrlSplash(id) {
      console.log(id);
      if (id === 11) {
        return "https://cdn.discordapp.com/attachments/959875058745094225/996718845278556200/unknown.png";
      } else {
        return "https://cdn.discordapp.com/attachments/959875058745094225/996719094013374557/unknown.png";
      }
    },
    formateImgChampion(name) {
      return (
        "http://ddragon.leagueoflegends.com/cdn/" +
        this.dataStore.data.version +
        "/img/champion/" +
        name +
        ".png"
      );
    },
    formateImgRunesReforged(target) {
      for (
        let index = 0;
        index < this.dataStore.runesReforged.length;
        index++
      ) {
        if (this.dataStore.runesReforged[index].id === target) {
          return "/src/core/assets/" + this.dataStore.runesReforged[index].icon;
        }
      }
    },
    formateImgSummonerCast(target) {
      for (const key in this.dataStore.summoners) {
        console.log(this.dataStore.summoners[key].key, target);
        if (this.dataStore.summoners[key].key == target) {
          return (
            "http://ddragon.leagueoflegends.com/cdn/" +
            this.dataStore.data.version +
            "/img/spell/" +
            this.dataStore.summoners[key].image.full
          );
        }
      }
    },
    formateImgItem(target) {
      return (
        "http://ddragon.leagueoflegends.com/cdn/" +
        this.dataStore.data.version +
        "/img/item/" +
        this.dataStore.items[target].image.full
      );
    },
    timeDuration(value) {
      let sec = value % 60;
      let min = value - sec;
      let minute = min / 60;
      console.log(sec);
      if (sec < 10) {
        sec = "0" + sec;
      }
      return minute + ":" + sec;
    },
    formateKDA(target) {
      let result = [];
      for (let index = 0; index < this.players.length; index++) {
        result.push(this.players[index].statTotal.challenges.kda);
      }
      result.sort(function (a, b) {
        return a + b;
      });
      console.log(result);
      for (let index = 0; index < result.length; index++) {
        if (result[index] === target) {
          return index + 1;
        }
      }
    },
    mouseover: function () {
      this.comparedContent = true;
    },
    mouseleave: function () {
      this.comparedContent = false;
    },
  },
  computed: {
    setComparedContent(value) {
      this.comparedContent = value;
    },
  },
  mounted() {
    this.QueryURL();
  },
};
</script>
