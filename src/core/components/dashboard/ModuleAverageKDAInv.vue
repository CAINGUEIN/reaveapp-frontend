<template>
  <div
    class="h-[202px] w-[202px] bg-DarkRock rounded-2xl mt-5 p-6 hover:bg-Rock flex flex-col justify-around"
  >
    <div class="flex flex-col text-center justify-around">
      <p class="text-[64px] leading-none font-black text-White">
        {{ sortByReduce() }}
      </p>
      <p class="text-[16px] font-normal text-White mt-1">Average KDA</p>
      <div v-if="!ifNan" class="flex flex-col items-center justify-around mt-1">
        <p
          class="text-[8px] w-[103px] leading-3 font-black text-White bg-Ruby rounded-full"
        >
          DATA INCOMPLETE
        </p>
        <p class="text-[10px] font-normal leading-3 text-White mt-0.5">
          to compare to yesterday
        </p>
      </div>
      <div v-else class="mt-1">
        <p class="text-[14px] font-normal leading-5 text-White mt-0.5">
          <span class="text-[16px] font-black text-Green leading-none mt-0.5"
            >+16% </span
          >compared to yesterday
        </p>
      </div>
    </div>
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
    sortByReduce() {
      let value = [];
      let div = this.data.length;
      for (let index = 0; index < this.data.length; index++) {
        value.push(this.data[index].KDA);
      }
      return (
        Math.round(
          (value.reduce((partialSum, a) => partialSum + a, 0) / div) * 100
        ) / 100
      );
    },
    ifNan() {
      let verif =
        Math.round(((dataToday * 100) / dataYesterday - 100) * 100) / 100;
      if (verif == NaN) {
        true;
      } else {
        false;
      }
    },
  },
  mounted() {
    this.triageToday();
    this.triageYesterday();
  },
};
</script>
