<template>
  <div class="h-[202px] w-[650px] bg-DarkRock ml-[22px] rounded-2xl mt-5 p-6 hover:bg-[#1f1f1f]">
    <div>
      <div>
        <div class="flex items-center">
          <p class="text-[20px] text-White font-bold">Gold earned</p>
          <p class="text-[16px] font-normal ml-[5px]"></p>
        </div>
        <div class="flex">
          <p
            class="text-[16px] font-black"
            :class="
              txtStat.sym === '+'
                ? 'text-Green'
                : txtStat.sym === '-'
                ? 'text-Red'
                : 'text-White'
            "
          >
            <span class="text-[14px] font-black">{{ txtStat.sym }}</span
            >{{ txtStat.value }}<span class="text-[12px] font-black">%</span>
          </p>
          <p class="text-[16px] ml-[5px]">{{ txtLabel }}</p>
        </div>
      </div>
      <div></div>
    </div>
    <div class="-ml-1 mt-2">
      <Line
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import ChartJS from "chart.js/auto";
export default {
  props: ["data1month", "paramOptionGame"],
  components: {
    Line,
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            display: true,
            label: "GOLD",
            fill: true,
            tension: 0.4,
            pointRadius: 0.25,
            pointHitRadius: 25,
            borderColor: "#FFB800",
            pointBackgroundColor: "#FFB800",
            borderWidth: 3,
            pointBorderColor: "#FFB800",
            backgroundColor: "",
            data: "",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            display: false,
          },
          title: {
            display: false,
          },
          absys: {
            display: false,
          },
        },
        scales: {
          x: {
            //grid: false,
            grid: {
              color: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 0, 0, 0)",
              tickColor: "rgba(0, 0, 0, 0)",
            },
          },
          y: {
            display: false,
            grid: {
              color: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 0, 0, 0)",
              tickColor: "rgba(0, 0, 0, 0)",
            },
          },
        },
      },
      chartId: "line",
      datasetIdKey: "label",
      width: 200,
      height: 90,
      show: false,
      cssClasses: "",
      styles: {},
      txtLabel: "",
      txtStat: { sym: "", value: "" },
      stat: "",
    };
  },
  methods: {
    createChart(labels, value) {
      this.chartData.labels = labels;
      this.chartData.datasets[0].data = value;
      this.chartData.datasets[0].backgroundColor = this.getGradient();
    },
    lastMatch(indexSet) {
      if (indexSet > this.data1month.length) {
        indexSet = this.data1month.length;
      }
      this.txtLabel = "compared to last " + indexSet + " matches";
      let labels = [];
      let value = [];
      for (let index = 0; index < indexSet; index++) {
        labels.push(index + 1);
        if (this.data1month[index]?.goldEarned !== undefined) {
          value.push(this.data1month[index].goldEarned);
        }
      }

      if (!Number.isNaN(value[0]) && !Number.isNaN(value[indexSet - 1])) {
        let stat = (value[0] * 100) / value[indexSet - 1] - 100;
        this.stat = Math.round(stat * 100) / 100;
        this.formatTxtStat();
      } else {
        this.formatTxtStat();
        this.stat = "?";
      }
      this.createChart(labels.reverse(), value.reverse());

      this.show = "teen";
    },
    lastDayMatch(indexSet) {
      if (indexSet > 31) {
        indexSet = 31;
      }
      this.txtLabel = "compared to last " + indexSet + " days";
      this.stat = "";
      let labels = [];
      let value = [];
      for (let index = 0; index < indexSet; index++) {
        let day = this.$dayjs().subtract(index, "day").format("D-M");
        console.log(day);
        let dayData = [];
        for (let index2 = 0; index2 < this.data1month.length; index2++) {
          const match = this.data1month[index2];
          let dateMatch = this.$dayjs(match.start).format("D-M");
          if (dateMatch === day) {
            dayData.push(match.goldEarned);
          }
        }
        labels.push(day);
        value.push(this.sortByReduce(dayData));
      }
      this.show = "day";
      if (!Number.isNaN(value[0]) && !Number.isNaN(value[indexSet - 1])) {
        let stat = (value[0] * 100) / value[indexSet - 1] - 100;
        this.stat = Math.round(stat * 100) / 100;
        this.formatTxtStat();
      } else {
        this.stat = "?";
        this.formatTxtStat();
      }
      this.createChart(labels.reverse(), value.reverse());
    },
    sortByReduce(value) {
      let div = value.length;
      return value.reduce((partialSum, a) => partialSum + a, 0) / div;
    },
    getGradient() {
      let gradient = document
        .getElementById("line")
        .getContext("2d")
        .createLinearGradient(100, 0, 100, 100);
      gradient.addColorStop(0, "rgba(255,184,0, 0.40)");
      gradient.addColorStop(0.25, "rgba(255,184,0, 0.20)");
      gradient.addColorStop(0.65, "rgba(26,26,26, 0.1)");
      gradient.addColorStop(0.95, "rgba(26,26,26, 0)");
      return gradient;
    },
    formatTxtStat() {
      if (this.stat > 0) {
        this.txtStat.sym = "+";
        this.txtStat.value = this.stat;
      } else if (this.stat < 0) {
        this.txtStat.sym = "-";
        this.txtStat.value = 0 - this.stat;
      } else {
        this.txtStat.sym = "";
        this.txtStat.value = "?";
      }
    },
  },
  watch: {
    paramOptionGame(newValue, oldValue) {
      if (this.paramOptionGame.selectTypeValue === "day") {
        this.lastDayMatch(this.paramOptionGame.numberValue);
      } else {
        this.lastMatch(this.paramOptionGame.numberValue);
      }
    },
  },
  mounted() {
    this.lastMatch(this.paramOptionGame.numberValue);
  },
};
</script>
