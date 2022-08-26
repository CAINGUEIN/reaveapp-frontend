<template>
  <div class="h-[202px] w-[202px] bg-DarkRock rounded-2xl mt-5 hover:bg-Rock">
    {{ Math.round(((dataToday * 100) / dataYesterday - 100) * 100) / 100 }}
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      today: this.$dayjs().format("D-M"),
      dataToday: "",
      yesterday: this.$dayjs(this.today).subtract(1, "day").format("D-M"),
      dataYesterday: "",
    };
  },
  methods: {
    triageToday() {
      //ici j'ai besoin de toute les stat du today et yesterday
      let arrayToday = [];
      for (let index = 0; index < this.data.length; index++) {
        const match = this.data[index];
        let dateMatch = this.$dayjs(match.start).format("D-M");
        if (dateMatch === this.today) {
          console.log(match);
          arrayToday.push(match.KDA);
        }
      }
      let div = arrayToday.length;
      this.dataToday =
        arrayToday.reduce((partialSum, a) => partialSum + a, 0) / div;
    },
    triageYesterday() {
      //ici j'ai besoin de toute les stat du today et yesturday
      let arrayYesterday = [];
      console.log(this.data);
      for (let index = 0; index < this.data.length; index++) {
        const match = this.data[index];
        let dateMatch = this.$dayjs(match.start).format("D-M");
        if (dateMatch === this.yesterday) {
          console.log(match);
          arrayYesterday.push(match.KDA);
        }
      }
      let div = arrayYesterday.length;
      this.dataYesterday =
        arrayYesterday.reduce((partialSum, a) => partialSum + a, 0) / div;
    },
  },
  mounted() {
    this.triageToday();
    this.triageYesterday();
  },
};
</script>
