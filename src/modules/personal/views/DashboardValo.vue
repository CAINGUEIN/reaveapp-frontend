<template>
  <div>
    <div v-if="!store.dataAccount.lolData.lolPuuid" class="mt-8 text-center">
      <h3>Valorante</h3>
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
  </div>
</template>

<script>
import useStoreAuth from "../../../plugins/stores/auth";
import InputModel from "../../../core/components/inputs/InputModel.vue";
import ToolsButtonSubmit from "../../../core/components/buttons/ToolsButtonSubmit.vue";
import UsersServices from "../services/userServices"

export default {
  components: { InputModel, ToolsButtonSubmit },
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
    };
  },
  methods: {
    
  },
};
</script>
