<template>
  <div class="flex">
    <Filter class="w-1/5" @submit="feadLastMatchWithFilter" />
    <div class="w-3/5">
      <Card
        class="m-auto"
        v-for="match in store.ListLastMatchLol"
        :data="match"
        :personnalId="store.dataAccount._id"
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
      let result = await UsersServices.feadLastMatch();
      //le bute est de faire une verification des dernier match a chaque mounted de la page
      this.store.setter(result.data.data, "ListLastMatchLol");
      //la push dans le store
      //voir a mettre un CD
    },
    async feadLastMatchWithFilter(filters) {
      //recup less data dans le composant filter
      //les filtre
      // class user success champion map item
      //faire la requete avec les datas
      //recup les data et les afficher
      //2 chois 
      //créer une variable dans cette page qui va permettre de stocker la data
      // sotcker la data dans le store qui restera la jusqu'au prochaine chargement 
    },
  },
  mounted() {
    this.feadLastMatch();
  },
};
</script>
