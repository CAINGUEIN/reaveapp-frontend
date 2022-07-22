<template>
  <div v-if="personnalStat" class="w-[930px] h-52 p-3 my-3" @click="goTo()">
    <div
      class="absolute w-[930px] top-0 left-0 h-52 overflow-hidden rounded-2xl"
    >
      <img
        :src="formateUrlSplash(info.mapId)"
        alt=""
        class="blur-sm brightness-75 bg-center"
      />
    </div>
    <div class="flex items-center mx-3">
      <h5 class="mr-1">
        {{ personnalStat.statTotal.win ? "VICTORY" : "DEFEAT" }}
      </h5>
      <p class="mr-1">
        - {{ $dayjs(info.gameStartTimestamp).format("DD/MM/YYYY HH:mm") }} -
      </p>
      <p class="mr-1">{{ timeDuration(info.gameDuration) }} -</p>
      <p class="mr-1" v-if="info.gameMode === 'CLASSIC'">
        {{ formateKDA(personnalStat.statTotal.challenges.kda) }} th -
      </p>
      <p class="mr-1">
        {{
          team100[0].statTotal.kills +
          team100[1].statTotal.kills +
          team100[2].statTotal.kills +
          team100[3].statTotal.kills +
          team100[4].statTotal.kills
        }}
        /
      </p>
      <p class="mr-1">
        {{
          team200[0].statTotal.kills +
          team200[1].statTotal.kills +
          team200[2].statTotal.kills +
          team200[3].statTotal.kills +
          team200[4].statTotal.kills
        }}
      </p>
      <p class="mr-1" v-if="info.gameMode === 'CLASSIC'">
        {{ personnalStat.statTotal.lane }}
      </p>
    </div>
    <div class="flex items-center mx-3">
      <img
        :src="formateImgChampion(personnalStat.statTotal.championName)"
        alt=""
        class="h-9 w-9 rounded-full"
      />
      <div>
        <p v-if="info.gameMode === 'CLASSIC'">
          {{ Math.round(personnalStat.statTotal.challenges.kda * 100) / 100 }}
          KDA
        </p>
        <p>
          {{
            personnalStat.statTotal.kills +
            " / " +
            personnalStat.statTotal.assists +
            " / " +
            personnalStat.statTotal.deaths
          }}
        </p>
      </div>

      <div class="ml-2 space-y-1">
        <img
          :src="
            formateImgRunesReforged(
              personnalStat.statTotal.perks.styles[0].style
            )
          "
          alt=""
          class="ml-3 h-6 w-6 p-1 rounded-full bg-Anthracite"
        />
        <img
          :src="
            formateImgRunesReforged(
              personnalStat.statTotal.perks.styles[1].style
            )
          "
          alt=""
          class="ml-3 h-6 w-6 p-1 rounded-full bg-Anthracite"
        />
      </div>
      <div class="ml-2 space-y-1">
        <img
          :src="formateImgSummonerCast(personnalStat.statTotal.summoner1Id)"
          alt=""
          class="h-5 w-5 p-1 rounded-lg bg-Anthracite"
        />
        <img
          :src="formateImgSummonerCast(personnalStat.statTotal.summoner2Id)"
          alt=""
          class="h-5 w-5 p-1 rounded-lg bg-Anthracite"
        />
      </div>
      <img
        v-if="personnalStat.statTotal.item0"
        :src="formateImgItem(personnalStat.statTotal.item0)"
        alt=""
        class="h-6 w-6 p-1 ml-1 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item1"
        :src="formateImgItem(personnalStat.statTotal.item1)"
        alt=""
        class="h-6 w-6 p-1 ml-1 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item2"
        :src="formateImgItem(personnalStat.statTotal.item2)"
        alt=""
        class="h-6 w-6 p-1 ml-1 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item3"
        :src="formateImgItem(personnalStat.statTotal.item3)"
        alt=""
        class="h-6 w-6 p-1 ml-1 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item4"
        :src="formateImgItem(personnalStat.statTotal.item4)"
        alt=""
        class="h-6 w-6 p-1 ml-1 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item5"
        :src="formateImgItem(personnalStat.statTotal.item5)"
        alt=""
        class="h-6 w-6 p-1 ml-1 rounded-lg bg-Anthracite"
      />
      <img
        v-if="personnalStat.statTotal.item6"
        :src="formateImgItem(personnalStat.statTotal.item6)"
        alt=""
        class="h-6 w-6 p-1 ml-1 rounded-lg bg-Anthracite"
      />
    </div>
    <div class="flex items-center mx-3">
      <div class="flex mr-8">
        <img
          src="http://via.placeholder.com/24"
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
          src="http://via.placeholder.com/24"
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
          src="http://via.placeholder.com/24"
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
export default {
  props: ["data", "personnalId"],
  data() {
    const dataStore = useDataStore();
    return {
      dataStore,
      info: this.data._id_lolMatch.info,
      players: this.data._id_lolMatch.players,
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
      this.data._id_lolMatch.players.forEach((player) => {
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
      console.log(sec);
      if (sec < 10) {
        sec = "0" + sec;
      }
      return minute + ":" + sec;
    },
    formateUrlSplash(id) {
      console.log(id);
      if (id === 11) {
        return "https://cdn.discordapp.com/attachments/959875058745094225/996718845278556200/unknown.png";
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
      console.log(result);
      for (let index = 0; index < result.length; index++) {
        if (result[index] === target) {
          return index + 1;
        }
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
        query: { match: this.data._id_riot },
      });
    },
  },
  mounted() {
    this.feadPersonnalStat();
    this.feadTeam();
  },
};
</script>
