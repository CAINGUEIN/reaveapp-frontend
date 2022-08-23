<template>
  <div v-if="personnalStat" class="w-[930px] h-52 p-3 my-3" @click="goTo()">
    <div
      class="absolute w-[930px] top-0 left-0 h-52 overflow-hidden rounded-2xl"
    >
      <img :src="formateUrlSplash(info.mapId)" alt="" class="" />
    </div>
    <div class="flex items-center mx-3">
      <h3 class="mr-2"
      :class="personnalStat.statTotal.win ? 'text-Green' : 'text-Red'">
        {{ personnalStat.statTotal.win ? "VICTORY" : "DEFEAT" }}
      </h3>
      <div class="bg-Cloud h-1 w-1 rounded-full mr-2"></div>
      <p class="mr-2">
        {{ $dayjs(info.gameStartTimestamp).format("DD/MM/YYYY") }} at
        {{ $dayjs(info.gameStartTimestamp).format("HH:mm") }}
      </p>
      <div class="bg-Cloud h-1 w-1 rounded-full mr-2"></div>
      <p class="mr-2">{{ timeDuration(info.gameDuration) }}</p>
      <div class="bg-Cloud h-1 w-1 rounded-full mr-2"></div>
      <div v-if="info.gameMode === 'CLASSIC'" class="flex items-center">
        <TopLane
          v-if="personnalStat.statTotal.lane === 'TOP'"
          :width="20"
          :height="20"
        />
        <JungleLane
          v-if="personnalStat.statTotal.lane === 'JUNGLE'"
          :width="20"
          :height="20"
        />
        <BotLane
          v-if="personnalStat.statTotal.lane === 'BOTTOM'"
          :width="20"
          :height="20"
        />
        <MidLane
          v-if="personnalStat.statTotal.lane === 'MIDDLE'"
          :width="20"
          :height="20"
        />
        <SupportLane
          v-if="personnalStat.statTotal.lane === 'SUP'"
          :width="20"
          :height="20"
        />
        <p class="ml-[3px] mr-2 font-medium">
          {{ formatTextLane(personnalStat.statTotal.lane) }}
        </p>
      </div>

      <div class="bg-Cloud h-1 w-1 rounded-full mr-2"></div>
      <p class="mr-2" v-if="info.gameMode === 'CLASSIC'">
        {{ formateKDA(personnalStat.statTotal.challenges.kda) }}
      </p>
      <div class="bg-Cloud h-1 w-1 rounded-full mr-2"></div>
      <p
        class="mr-2"
        :class="
          personnalStat.statTotal.teamId === 100 ? 'font-black' : 'font-normal'
        "
      >
        {{
          team100[0].statTotal.kills +
          team100[1].statTotal.kills +
          team100[2].statTotal.kills +
          team100[3].statTotal.kills +
          team100[4].statTotal.kills
        }}
        -
      </p>
      <p
        class="mr-2"
        :class="
          personnalStat.statTotal.teamId === 200 ? 'font-black' : 'font-normal'
        "
      >
        {{
          team200[0].statTotal.kills +
          team200[1].statTotal.kills +
          team200[2].statTotal.kills +
          team200[3].statTotal.kills +
          team200[4].statTotal.kills
        }}
      </p>
    </div>
    <div class="flex items-center mx-3 mt-3">
      <img
        :src="formateImgChampion(personnalStat.statTotal.championName)"
        alt=""
        class="h-[50px] w-[50px] rounded-full mr-2"
      />
      <div class=" w-24 mr-8">
        <p
          class="leading-none text-[18px] font-medium mb-[5px]"
          v-if="info.gameMode === 'CLASSIC'"
        >
          {{ Math.round(personnalStat.statTotal.challenges.kda * 100) / 100 }}
          <span class="text-[12px]">KDA</span>
        </p>
        <p class="leading-none font-medium text-[14px]">
          {{
            personnalStat.statTotal.kills +
            " / " +
            personnalStat.statTotal.assists +
            " / " +
            personnalStat.statTotal.deaths
          }}
        </p>
      </div>

      <div class="mr-3">
        <img
          :src="
            formateImgRunesReforged(
              personnalStat.statTotal.perks.styles[0].style
            )
          "
          alt=""
          class="h-6 w-6 mb-[5px] rounded-full bg-Anthracite"
        />
        <img
          :src="
            formateImgRunesReforged(
              personnalStat.statTotal.perks.styles[1].style
            )
          "
          alt=""
          class="h-6 w-6 rounded-full bg-Anthracite"
        />
      </div>
      <div class="mr-3">
        <img
          :src="formateImgSummonerCast(personnalStat.statTotal.summoner1Id)"
          alt=""
          class="h-6 w-6 mb-[5px] rounded-lg bg-Anthracite"
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
        class="h-6 w-6 mr-2 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item1"
        :src="formateImgItem(personnalStat.statTotal.item1)"
        alt=""
        class="h-6 w-6 mr-2 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item2"
        :src="formateImgItem(personnalStat.statTotal.item2)"
        alt=""
        class="h-6 w-6 mr-2 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item3"
        :src="formateImgItem(personnalStat.statTotal.item3)"
        alt=""
        class="h-6 w-6 mr-2 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item4"
        :src="formateImgItem(personnalStat.statTotal.item4)"
        alt=""
        class="h-6 w-6 mr-2 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item5"
        :src="formateImgItem(personnalStat.statTotal.item5)"
        alt=""
        class="h-6 w-6 mr-2 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item6"
        :src="formateImgItem(personnalStat.statTotal.item6)"
        alt=""
        class="h-6 w-6 mr-2 rounded-lg bg-Anthracite"
      />
    </div>
    <div class="flex items-center ml-[198px]">
      <div class="flex mr-8">
        <img
          src="https://via.placeholder.com/24"
          alt=""
          class="rounded-full my-auto"
        />
        <div class="ml-1">
          <p>{{ personnalStat.statTotal.goldEarned }} Gold</p>
          <p>{{ goldPercentTeam(personnalStat.statTotal) }}% of team's gold</p>
        </div>
      </div>
      <div v-if="info.gameMode === 'CLASSIC'" class="flex mr-8">
        <img
          src="https://via.placeholder.com/24"
          alt=""
          class="rounded-full my-auto"
        />
        <div class="ml-1">
          <p>
            {{
              Math.round(
                personnalStat.statTotal.challenges.visionScorePerMinute * 100
              ) / 100
            }}
            Vis/Min
          </p>
          <p>{{ VisPercentTeam(personnalStat.statTotal) }}% of team's Ward</p>
        </div>
      </div>
      <div class="flex mr-8">
        <img
          src="https://via.placeholder.com/24"
          alt=""
          class="rounded-full my-auto"
        />
        <div class="ml-1">
          <p>
            {{
              minionsPerMin(
                personnalStat.statTotal.totalMinionsKilled,
                info.gameDuration
              )
            }}
            CS/Min
          </p>
          <p>{{ personnalStat.statTotal.totalMinionsKilled }} CS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useDataStore from "@stores/data";
import TopLane from "../../assets/icons/TopLane.vue";
import JungleLane from "../../assets/icons/JungleLane.vue";
import BotLane from "../../assets/icons/BotLane.vue";
import MidLane from "../../assets/icons/MidLane.vue";
import SupportLane from "../../assets/icons/SupportLane.vue";
export default {
  props: ["data", "personnalId"],
  data() {
    const dataStore = useDataStore();
    return {
      dataStore,
      info: this.data.info,
      players: this.data.players,
      personnalStat: "",
      team100: [],
      team200: [],
    };
  },
  methods: {
    feadPersonnalStat() {
      for (let index = 0; index < this.players.length; index++) {
        const player = this.players[index];
        if (player._id_user === this.personnalId) {
          this.personnalStat = player;
        }
      }
    },
    feadTeam() {
      this.data.players.forEach((player) => {
        if (player.statTotal.teamId === 100) {
          this.team100.push(player);
        } else {
          this.team200.push(player);
        }
      });
    },
    timeDuration(value) {
      let sec = value % 60;
      let min = value - sec;
      let minute = min / 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      return minute + ":" + sec;
    },
    formateUrlSplash(id) {
      if (id === 11) {
        return "https://cdn.discordapp.com/attachments/951892638381010975/1011656609514135693/Group_953.png";
      } else {
        return "https://cdn.discordapp.com/attachments/959875058745094225/996719094013374557/unknown.png";
      }
    },
    formateKDA(target) {
      let result = [];
      for (let index = 0; index < this.players.length; index++) {
        result.push(this.players[index].statTotal.challenges.kda);
      }
      result.sort(function (a, b) {
        return a + b;
      });
      for (let index = 0; index < result.length; index++) {
        if (result[index] === target) {
          if (index === 0) {
            return index + 1 + "st";
          } else if (index === 1) {
            return index + 1 + "nd";
          } else if (index === 2) {
            return index + 1 + "rd";
          } else {
            return index + 1 + "th";
          }
        }
      }
    },
    formatTextLane(lane) {
      if (lane === "TOP") {
        return "Top";
      } else if (lane === "JUNGLE") {
        return "Jungle";
      } else if (lane === "BOTTOM") {
        return "Bot";
      } else if (lane === "MIDDLE") {
        return "Mid";
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
    goldPercentTeam(data) {
      if (data.teamId === 100) {
        let result =
          (data.goldEarned * 100) /
          (this.team100[0].statTotal.goldEarned +
            this.team100[1].statTotal.goldEarned +
            this.team100[2].statTotal.goldEarned +
            this.team100[3].statTotal.goldEarned +
            this.team100[4].statTotal.goldEarned);
        return Math.round(result * 100) / 100;
      } else {
        let result =
          (data.goldEarned * 100) /
          (this.team200[0].statTotal.goldEarned +
            this.team200[1].statTotal.goldEarned +
            this.team200[2].statTotal.goldEarned +
            this.team200[3].statTotal.goldEarned +
            this.team200[4].statTotal.goldEarned);
        return Math.round(result * 100) / 100;
      }
    },
    VisPercentTeam(data) {
      if (data.teamId === 100) {
        let result =
          (data.visionScore * 100) /
          (this.team100[0].statTotal.visionScore +
            this.team100[1].statTotal.visionScore +
            this.team100[2].statTotal.visionScore +
            this.team100[3].statTotal.visionScore +
            this.team100[4].statTotal.visionScore);
        return Math.round(result * 100) / 100;
      } else {
        let result =
          (data.visionScore * 100) /
          (this.team200[0].statTotal.visionScore +
            this.team200[1].statTotal.visionScore +
            this.team200[2].statTotal.visionScore +
            this.team200[3].statTotal.visionScore +
            this.team200[4].statTotal.visionScore);
        return Math.round(result * 100) / 100;
      }
    },
    minionsPerMin(totalKills, totalTime) {
      let div = totalTime / 60;
      return Math.round((totalKills / div) * 100) / 100;
    },
    goTo() {
      this.$router.push({
        name: "MatchSummary",
        query: { match: this.data._id_match },
      });
    },
  },
  mounted() {
    this.feadPersonnalStat();
    this.feadTeam();
  },
  components: { TopLane, JungleLane, BotLane, MidLane, SupportLane },
};
</script>
