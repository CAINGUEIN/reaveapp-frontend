<template>
  <div v-if="personnalStat" class="relative w-[930px] p-3 h-52 mb-[22px] flex">
    <div
      class="absolute w-[930px] top-0 left-0 h-52 overflow-hidden rounded-2xl"
      @click="goTo()"
    >
      <img :src="formateUrlSplash(info.mapId)" alt="" class="" />
    </div>
    <div @click="goTo()" class="w-[930px] h-52">
      <div class="flex items-center mx-3">
        <h3
          class="mr-2"
          :class="personnalStat.statTotal.win ? 'text-Green' : 'text-Red'"
        >
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
        <div v-if="info.gameMode === 'CLASSIC'">
          <p
            class="mr-2 font-medium"
            v-html="formateKDA(personnalStat.statTotal.challenges.kda)"
          ></p>
        </div>
        <div class="bg-Cloud h-1 w-1 rounded-full mr-2"></div>
        <p
          class="mr-2"
          :class="
            personnalStat.statTotal.teamId === 100
              ? 'font-black'
              : 'font-normal'
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
            personnalStat.statTotal.teamId === 200
              ? 'font-black'
              : 'font-normal'
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
          class="h-[60px] w-[60px] rounded-full mr-3"
        />
        <div class="w-[101px] mr-8">
          <p
            class="leading-none text-[24px] font-bold mb-[5px]"
            v-if="info.gameMode === 'CLASSIC'"
          >
            {{ Math.round(personnalStat.statTotal.challenges.kda * 100) / 100 }}
            <span class="text-[12px]">KDA</span>
          </p>
          <p class="leading-none font-medium text-[16px]">
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
      <div class="flex ml-[217px]">
        <div class="flex items-start mr-8 mt-6">
          <img
            src="https://via.placeholder.com/32"
            alt=""
            class="rounded-full"
          />
          <div class="ml-2">
            <p class="text-[18px] leading-3 font-medium mt-[1px]">
              {{ personnalStat.statTotal.goldEarned }}
              <span class="text-[12px]">Gold</span>
            </p>
            <p class="text-[14px] leading-3 font-medium mt-[5px]">
              {{ goldPercentTeam(personnalStat.statTotal)
              }}<span class="text-[12px] font-medium">%</span
              ><span class="text-[12px]"> of team's gold</span>
            </p>
          </div>
        </div>
        <div
          v-if="info.gameMode === 'CLASSIC'"
          class="flex items-start mr-8 mt-6"
        >
          <img
            src="https://via.placeholder.com/32"
            alt=""
            class="rounded-full"
          />
          <div class="ml-2">
            <p class="text-[18px] leading-3 font-medium mt-[1px]">
              {{
                Math.round(
                  personnalStat.statTotal.challenges.visionScorePerMinute * 100
                ) / 100
              }}
              <span class="text-[12px]">Vis/min</span>
            </p>
            <p class="text-[14px] leading-3 font-medium mt-[5px]">
              {{ VisPercentTeam(personnalStat.statTotal)
              }}<span class="text-[12px] font-medium">%</span
              ><span class="text-[12px]"> of team's Ward</span>
            </p>
          </div>
        </div>
        <div class="flex items-start mr-8 mt-6">
          <img
            src="https://via.placeholder.com/32"
            alt=""
            class="rounded-full"
          />
          <div class="ml-2">
            <p class="text-[18px] leading-3 font-medium mt-[1px]">
              {{
                minionsPerMin(
                  personnalStat.statTotal.totalMinionsKilled,
                  info.gameDuration
                )
              }}
              <span class="text-[12px]">CS/min</span>
            </p>
            <p class="text-[14px] leading-3 font-medium mt-[5px]">
              {{ personnalStat.statTotal.totalMinionsKilled }}
              <span class="text-[12px]">CS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-6 right-6 overflow-hidden rounded-2xl">
      <div class="flex -space-x-[17px]">
        <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
        <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
        <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
        <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
        <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
        <div class="h-9 w-9 flex justify-center bg-Stone rounded-full">
          <p class="m-auto text-White font-bold text-[16px]">
            <span class="font-bold text-[12px]">+</span>5
          </p>
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
        return "https://media.reave.dev/reave/LOL/Medium_SummonersRift.png";
      } else {
        return "https://media.reave.dev/reave/LOL/Medium_HowlingAbyss.png";
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
            return index + 1 + '<span class="text-[16px]">st</span>';
          } else if (index === 1) {
            return index + 1 + '<span class="text-[16px]">nd</span>';
          } else if (index === 2) {
            return index + 1 + '<span class="text-[16px]">rd</span>';
          } else {
            return index + 1 + '<span class="text-[16px]">th</span>';
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
          return "https://media.reave.dev/reave/LOL/" + this.dataStore.runesReforged[index].icon;
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