<template>
  <div>
    <div v-if="!store.dataAccount.lolData.lolPuuid" class="mt-8 text-center">
      <h3>Enter your <LeagueOfLegend :width="24" :height="24" style="display: inline;" /> Puuid</h3>
      <InputModel
        class="mt-8 mx-auto w-144"
        :data="puuid"
        v-model="puuid.value"
        :errors="errors"
      />
      <ToolsButtonSubmit
        @action="submit"
        txtButton="Enter"
        class="w-32 mx-auto mt-8"
        :color="puuid.value === '' ? 'desactivated' : ''"
      />
    </div>
    <div v-if="show && store.dataAccount.lolData.lolPuuid">
      <div name="content" class="flex flex-wrap max-w-[1800px] m-auto gap-x-[22px]">
        <ModuleAverageKDA :data="data" />
        <!-- //TODO: voir a reglé l'affichage -->
        <ModuleCompareKDA
          :data="data"
          :data1month="dataProps"
          :paramOptionGame="paramOptionGame"
        />
        <ModuleCompareGoldEarned
          :data="data"
          :data1month="dataProps"
          :paramOptionGame="paramOptionGame"
        />
        <ModuleAverageKDA :data="data" />
        <ModuleCompareVisionPerMinute
          :data="data"
          :data1month="dataProps"
          :paramOptionGame="paramOptionGame"
        />
        <ModuleCompareVisionLaneOpponent
          :data="data"
          :data1month="dataProps"
          :paramOptionGame="paramOptionGame"
        />
        <ModuleAverageKDA :data="data" />
        <ModuleAverageKDAInv :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
import InputModel from "@core/components/inputs/InputModel.vue";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import UsersServices from "@axios/services/userServices";
import ModuleAverageKDA from "@core/components/dashboard/ModuleAverageKDA.vue";
import ModuleCompareKDA from "@core/components/dashboard/ModuleCompareKDA.vue";
import ModuleCompareGoldEarned from "../../../core/components/dashboard/ModuleCompareGoldEarned.vue";
import ModuleCompareVisionLaneOpponent from "../../../core/components/dashboard/ModuleCompareVisionLaneOpponent.vue";
import ModuleCompareVisionPerMinute from "../../../core/components/dashboard/ModuleCompareVisionPerMinute.vue";
import ModuleAverageKDAInv from "../../../core/components/dashboard/ModuleAverageKDAInv.vue";
import LeagueOfLegend from "../../../core/assets/icons/LeagueOfLegend.vue";


export default {
  components: {
    InputModel,
    ToolsButtonSubmit,
    ModuleAverageKDA,
    ModuleCompareKDA,
    ModuleCompareGoldEarned,
    ModuleCompareVisionLaneOpponent,
    ModuleCompareVisionPerMinute,
    ModuleAverageKDAInv,
    LeagueOfLegend
  },
  props: ["paramOptionGame", "action"],
  data() {
    const store = useStoreAuth();
    return {
      store,
      errors: "",
      puuid: {
        label: "PUUID",
        name: "puuid",
        type: "text",
        value: "",
      },
      data: "",
      show: false,
      dataProps: [],
    };
  },
  methods: {
    async submit() {
      //ici on envoie la data puuid
      this.store.loading = true;
      let forSubmit = {
        lolPuuid: this.puuid.value,
      };
      let result = await UsersServices.addLolPuuid(forSubmit);
      //peut etre mettre un waiting le temps de voir si le puuid est valide
      if (result.data.success) {
        //si une 200 on la recup se t le store et cela devrais changer la page auto
      }
    },
    async feadStat() {
      let result = await UsersServices.feadDataForDashboard();
      this.data = result.data.data;
      this.dataProps = result.data.data;
      this.show = true;
      this.championMatch(result.data.data);
    },
    championMatch(value) {
      let arrayChampionMatch = [];
      for (let index = 0; index < value.length; index++) {
        if (!arrayChampionMatch.includes(value[index].champion)) {
          arrayChampionMatch.push(value[index].champion);
        }
      }
      this.$emit("action", arrayChampionMatch);
    },
  },
  watch: {
    paramOptionGame(newValue, oldValue) {
      let selectChampion = this.paramOptionGame.selectChampionValue;
      if (selectChampion !== "") {
        this.dataProps = [];
        for (let index = 0; index < this.data.length; index++) {
          if (this.data[index].champion === selectChampion) {
            this.dataProps = [...this.dataProps, this.data[index]];
          }
        }
      } else {
        this.dataProps = this.data;
      }
    },
  },
  mounted() {
    this.feadStat();
  },
};
</script>
