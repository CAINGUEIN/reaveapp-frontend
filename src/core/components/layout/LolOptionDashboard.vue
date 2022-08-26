<template>
  <div class="flex"> 
    <NumberModel :data="number" v-model="numberValue" />
    <SelectModel :data="selectType" v-model="selectTypeValue" />
    <SelectModel :data="selectChampion" v-model="selectChampionValue" />
  </div>
</template>

<script>
import SelectModel from "../inputs/SelectModel.vue";
import NumberModel from "../inputs/NumberModel.vue";
export default {
  components: { SelectModel, NumberModel },
  props: ["dataOptionGame"],
  emits: ["actionParam"],
  data() {
    return {
      number: "",
      period: "",
      champion: "",
      selectType: {
        label: "",
        name: "type",
        type: "select",
        options: [
          { slot: "Days", value: "day" },
          { slot: "Matchs", value: "match" },
        ],
      },
      selectChampion: {
        label: "",
        name: "champion",
        type: "select",
        options: "",
      },
      number: {
        label: "",
        name: "number",
        type: "number",
      },
      numberValue: "10",
      selectTypeValue: "match",
      selectChampionValue: "",
    };
  },
  methods: {
    emitParam(param) {
      this.$emit("actionParam", param);
    },
  },
  watch: {
    numberValue(newValue, oldValue) {
      let param = {
        numberValue: this.numberValue,
        selectTypeValue: this.selectTypeValue,
        selectChampionValue: this.selectChampionValue,
      };
      this.emitParam(param);
    },
    selectTypeValue(newValue, oldValue) {
      let param = {
        numberValue: this.numberValue,
        selectTypeValue: this.selectTypeValue,
        selectChampionValue: this.selectChampionValue,
      };
      this.emitParam(param);
    },
    selectChampionValue(newValue, oldValue) {
      let param = {
        numberValue: this.numberValue,
        selectTypeValue: this.selectTypeValue,
        selectChampionValue: this.selectChampionValue,
      };
      this.emitParam(param);
    },
    dataOptionGame() {
      this.selectChampion.options = this.dataOptionGame
    }
  },
};
</script>
