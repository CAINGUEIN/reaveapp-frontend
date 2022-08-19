<template>
  <div>
    <div v-if="!store.dataAccount.lolData.lolPuuid" class="mt-8 text-center">
      <h3>pour commencer ici il va nous faloir votre Puuid</h3>
      <h5>suivre les infos pour le trouver si vous ne l'avais pas</h5>
      <InputModel
        class="mt-8 mx-auto w-144"
        :data="puuid"
        v-model="puuid.value"
        :errors="errors"
      />
      <ToolsButtonSubmit
        @action="submit"
        txtButton="enregistrer"
        class="w-96 mx-auto mt-8"
        :color="puuid.value === '' ? 'desactivated' : ''"
      />
    </div>
    <div v-if="show">
      <div name="content" class="flex flex-wrap">
        <ModuleAverageKDA :data="data" />
        <ModuleCompareKDA :data1month="data" />
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

export default {
  components: {
    InputModel,
    ToolsButtonSubmit,
    ModuleAverageKDA,
    ModuleCompareKDA,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      puuid: {
        label: "PUUID",
        name: "puuid",
        type: "text",
        value: "",
      },
      data: "",
      show: false,
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
      this.show = true
    },
  },
  mounted() {
    this.feadStat();
  },
};
</script>
