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
    <MatchHistoryPage v-else />
    <!-- Card de match de base a la connection on en recup 20 faire un truc qui permet de recup 10 ou 20 de plus
      quand on arrive vers la fin de la liste -->
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
import InputModel from "@core/components/inputs/InputModel.vue";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import UsersServices from "@axios/services/userServices";
import MatchHistoryPage from "@core/components/MatchHistory/MatchHistoryPage.vue";

export default {
  components: { InputModel, ToolsButtonSubmit, MatchHistoryPage },
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
        // du coup retour des 20 dernier match direct et le puuid on le prend dans la request
        this.store.dataAccount.lolData.lolPuuid = forSubmit.lolPuuid;
        this.store.ListLastMatchLol = result.data.data;
        this.store.loading = false;
      } else {
        this.store.loading = false;
      }
    },
  },
};
</script>
