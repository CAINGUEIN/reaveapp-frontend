<template>
  <div
    v-if="personnalStat"
    class="w-[930px] h-52 bg-Gravel m-2 rounded-2xl px-6 py-3"
  >
    <div class="flex items-end">
      <h5 class="mr-1">
        {{ personnalStat.statTotal.win ? "victory" : "defeat" }}
      </h5>
      <p class="mr-1">
        {{ $dayjs(info.gameStartTimestamp).format("DD-MM-YYYY HH:mm") }}
      </p>
      <p class="mr-1">{{ timeDuration(info.gameDuration) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "personnalId"],
  data() {
    return {
      info: this.data._id_lolMatch.info,
      players: this.data._id_lolMatch.players,
      personnalStat: "",
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
  },
  mounted() {
    this.feadPersonnalStat();
  },
};
</script>
