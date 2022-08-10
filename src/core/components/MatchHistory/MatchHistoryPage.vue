<template>
  <div class="flex">
    <Filter class="w-1/5" @action="feadFilteredMatch" />
    <div class="w-3/5">
      <Card
        class="m-auto"
        v-for="match in store.ListLastMatchLol"
        :data="match"
        :personnalId="store.dataAccount._id"
        :key="match._id"
      />
      <button>20 more</button>
    </div>
    <Order class="W-1/5" />
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
import Filter from "@core/components/MatchHistory/Filter.vue";
import Card from "@core/components/MatchHistory/Card.vue";
import UsersServices from "@axios/services/userServices";
import Order from "./Order.vue";

export default {
  components: { Filter, Card, Order },
  data() {
    const store = useStoreAuth();
    return {
      store,
      body: "",
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
  },
  mounted() {
    this.feadMatch();
  },
};
</script>
