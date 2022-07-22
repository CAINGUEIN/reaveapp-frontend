<template>
  <div>
    <Filter />
    <div>
      <Card v-for="match in store.ListLastMatchLol" :data="match" :personnalId="store.dataAccount._id" />
    </div>
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
import Filter from "@core/components/MatchHistory/Filter.vue";
import Card from "@core/components/MatchHistory/Card.vue";
export default {
  components: { Filter, Card },
  data() {
    const store = useStoreAuth();
    return {
      store,
    };
  },
};
</script>
