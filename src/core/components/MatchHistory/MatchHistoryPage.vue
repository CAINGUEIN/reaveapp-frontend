<template>
  <div>
    <Filter />
    <div>
      <Card v-for="match in store.ListLastMatchLol" :data="match" :personnalId="store.dataAccount._id" />
    </div>
  </div>
</template>

<script>
import useStoreAuth from "../../../plugins/stores/auth";
import Filter from "./Filter.vue";
import Card from "./Card.vue";
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
