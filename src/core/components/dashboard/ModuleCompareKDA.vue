<template>
  <div class="h-[202px] w-[650px] bg-DarkRock ml-[22px] rounded-md mt-5 p-6">
    <div>
      <div>
        <div class="flex items-center">
          <h5>K/D/A</h5>
          <h6>(kills/deaths/assists)</h6>
        </div>
        <div class="flex items-center">
          {{ txtStat }}
          <h6 @click="switchChart()">{{ txtLabel }}</h6>
        </div>
      </div>
      <div></div>
    </div>
    <div>
      <Line
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
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
  props: ["data1month"],
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
            label: "KDA",
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            pointHitRadius: 25,
            borderColor: "#0066FF",
            pointBackgroundColor: "white",
            borderWidth: 2,
            pointBorderColor: "white",
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
            //display: false,
            grid: {
              color: "#1A1A1A",
              borderColor: "#1A1A1A",
              tickColor: "#1A1A1A",
            },
          },
          y: {
            display: false,
            grid: {
              color: "#1A1A1A",
              borderColor: "#1A1A1A",
              tickColor: "#1A1A1A",
            },
          },
        },
      },
      chartId: "line",
      datasetIdKey: "label",
      width: 200,
      height: 110,
      show: "",
      cssClasses: "",
      styles: {},
      txtLabel: "",
      txtStat: "",
    };
  },
  methods: {
    createChart(labels, value) {
      this.chartData.labels = labels;
      this.chartData.datasets[0].data = value;
      this.chartData.datasets[0].backgroundColor = this.getGradient();
    },
    switchChart() {
      console.log(this.show);
      if (this.show === "teen") {
        this.lastDayMatch(7);
      } else {
        this.lastMatch(10);
      }
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
        if (this.data1month[index]?.KDA !== undefined) {
          value.push(this.data1month[index].KDA);
        }
      }
      console.log(value);

      if (!Number.isNaN(value[0]) && !Number.isNaN(value[indexSet - 1])) {
        let stat = (value[0] * 100) / value[indexSet - 1] - 100;
        this.txtStat = Math.round(stat * 100) / 100;
      } else {
        this.txtStat = "no data";
      }
      this.createChart(labels.reverse(), value.reverse());

      this.show = "teen";
    },
    lastDayMatch(indexSet) {
      if (indexSet > 31) {
        indexSet = 31;
      }
      this.txtLabel = "compared to last " + indexSet + " days";
      this.txtStat = "";
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
            dayData.push(match.KDA);
          }
        }
        labels.push(day);
        value.push(this.sortByReduce(dayData));
      }
      this.show = "day";
      if (!Number.isNaN(value[0]) && !Number.isNaN(value[indexSet - 1])) {
        let stat = (value[0] * 100) / value[indexSet - 1] - 100;
        this.txtStat = Math.round(stat * 100) / 100;
      } else {
        this.txtStat = "no data";
      }
      this.createChart(labels.reverse(), value.reverse());
    },
    sortByReduce(value) {
      let div = value.length;
      return value.reduce((partialSum, a) => partialSum + a, 0) / div;
    },
    getGradient() {
      console.log(document.getElementById("line"));
      let gradient = document
        .getElementById("line")
        .getContext("2d")
        .createLinearGradient(100, 10, 100, 100);
      gradient.addColorStop(0, "rgba(0,102,255,0.75)");
      gradient.addColorStop(0.5, "rgba(0,102,255,0.5)");
      gradient.addColorStop(0.99, "rgba(0, 0,0, 0)");
      return gradient;
    },
  },
  mounted() {
    this.lastMatch(10);
  },
};
</script>
