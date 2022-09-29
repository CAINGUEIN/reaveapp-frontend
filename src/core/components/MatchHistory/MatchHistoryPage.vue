<template>
  <div class="flex h-full overflow-hidden">
    <Filter class="w-1/5 mt-5" :filter="body" @action="feadFilteredMatch" />
    <div
      class="w-4/5 mt-[30px] flex flex-col items-center overflow-auto scrollbarV"
    >
      <Card
        class=""
        v-for="match in store.ListLastMatchLol"
        :data="match"
        :personnalId="store.dataAccount._id"
        :key="match._id"
      />
      <ToolsButtonSubmit
        class="w-[150px]"
        :txtButton="'more'"
        @action="moreMatch"
        :color="''"
      />
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
      this.store.loading = true;
      console.log(this.body);
      let result = await UsersServices.feadFilteredMatch(this.body);
      if (result.data.success) {
        //le bute est de faire une verification des dernier match a chaque mounted de la page
        this.store.setter(result.data.data, "ListLastMatchLol");
        this.store.loading = false;
      } else {
        //faire une notif d'erreur
        this.store.loading = false;
      }
    },
    async feadFilteredMatch(value) {
      if (value.win === "true" || value.win === true) {
        value.win = true;
      } else if (value.win == "false" || value.win === false) {
        value.win = false;
      } else {
        delete value.win;
      }
      console.log(value);
      this.body = value;
      this.setParamURL(this.body);
      this.feadMatch();
    },
    paramInURL() {
      if (Object.keys(this.$route.query).length === 0) {
        this.feadMatch();
      } else {
        let valueQuery = {};
        for (const [key, data] of Object.entries(this.$route.query)) {
          try {
            valueQuery[key] = JSON.parse(data);
          } catch {
            valueQuery[key] = data
          }
        }
        this.feadFilteredMatch(valueQuery);
      }
    },
    async moreMatch() {
      this.store.loading = true;
      console.log(this.body.page);
      if (this.body.page === undefined) {
        this.body["page"] = 2;
      } else {
        this.body.page = this.body.page + 1;
      }
      let result = await UsersServices.feadFilteredMatch(this.body);
      if (result.data.success) {
        let preparArray = [this.store.ListLastMatchLol, result.data.data];
        this.store.ListLastMatchLol = preparArray.flat();
        this.store.loading = false;
      } else {
        //faire une notif d'erreur
        this.store.loading = false;
      }
    },
    setParamURL(value) {
      let valueQuery = {};
      for (const [key, data] of Object.entries(value)) {
        if (Array.isArray(data)) {
          valueQuery[key] = JSON.stringify(data);
        } else {
          valueQuery[key] = data;
        }
      }
      this.$router.replace({
        query: valueQuery,
      });
    },
  },
  mounted() {
    this.paramInURL();
  },
};
</script>
