<template>
  <div class="flex">
    <Filter class="w-1/5" />
    <div class="w-3/5">
      <Card
        class="m-auto"
        v-for="match in store.ListLastMatchLol"
        :data="match"
        :personnalId="store.dataAccount._id"
        :key="match._id_match"
      />
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
    };
  },
  methods: {
    async feadLastMatch() {
      if (this.store.ListLastMatchLol === "") {
        let result = await UsersServices.feadLastMatch();
        let list = [];
        for (let index = 0; index < result.data.data.length; index++) {
          list.push(result.data.data[index]._id_lolMatch);
        }
        this.store.setter(list, "ListLastMatchLol");
      }
    },
  },
  mounted() {
    this.feadLastMatch();
  },
};
</script>
