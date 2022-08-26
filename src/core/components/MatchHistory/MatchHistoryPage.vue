<template>
  <div class="flex">
    <Filter class="w-1/5" @action="feadFilteredMatch" />
    <div class="w-3/5 flex flex-col items-center">
      <Card
        class="m-auto"
        v-for="match in store.ListLastMatchLol"
        :data="match"
        :personnalId="store.dataAccount._id"
        :key="match._id"
      />
      <ToolsButtonSubmit :txtButton="'more'" @action="moreMatch" :color="''" />
    </div>
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
import Filter from "@core/components/MatchHistory/Filter.vue";
import Card from "@core/components/MatchHistory/Card.vue";
import UsersServices from "@axios/services/userServices";
import Order from "./Order.vue";
import ToolsButtonSubmit from "../buttons/ToolsButtonSubmit.vue";

export default {
  components: { Filter, Card, Order, ToolsButtonSubmit },
  data() {
    const store = useStoreAuth();
    return {
      store,
      body: {},
    };
  },
  methods: {
    async feadMatch() {
      let result = await UsersServices.feadFilteredMatch(this.body);
      //le bute est de faire une verification des dernier match a chaque mounted de la page
      this.store.setter(result.data.data, "ListLastMatchLol");
    },
    feadFilteredMatch(value) {
      this.body = value;
      this.feadMatch();
    },
    async moreMatch() {
      console.log(this.body.page);
      if (this.body.page === undefined) {
        this.body["page"] = 2;
      } else {
        this.body.page = this.body.page + 1;
      }
      let result = await UsersServices.feadFilteredMatch(this.body);
      let preparArray = [this.store.ListLastMatchLol, result.data.data];
      this.store.ListLastMatchLol = preparArray.flat();
    },
  },
  mounted() {
    this.feadMatch();
  },
};
</script>
