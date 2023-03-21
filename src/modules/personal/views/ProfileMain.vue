<template>
  <div v-if="data !== ''" class="px-auto h-full max-h-full overflow-auto scrollbarV">
    <MainContent />
    <NavProfile :view="view" @action="changeView" />
    <component :is="view" :data="data"></component>
  </div>
</template>

<script>
import MainContent from "@core/components/profile/MainContent.vue";
import NavProfile from "@core/components/profile/NavProfile.vue";
//services
import EventServices from "@axios/services/eventServices";
//pages
import Events from "@components/profile/view/Events.vue";
import Posts from "@components/profile/view/Posts.vue";
import Career from "@components/profile/view/Career.vue";
import Products from "@components/profile/view/Products.vue";
import People from "@components/profile/view/People.vue";
import About from "@components/profile/view/About.vue";
export default {
  components: {
    MainContent,
    NavProfile,
    Events,
    Posts,
    Career,
    Products,
    People,
    About,
  },
  data() {
    return {
      view: "Events",
      data: "",
    };
  },
  methods: {
    async searchEventOperator() {
      //recup de toute les datas dans les event qui on pour owner le id du user
      let result = await EventServices.searchPersonalEventOperator();
      if (result.data.success) {
        this.data = result.data.data;
      }
    },
    changeView(value) {
      this.view = value;
    },
    setUrl(value) {
      this.$router.replace({
        name: this.$route.name,
        params: { view: value },
      });
    },
    getUrl() {
      if (Object.keys(this.$route.params).length > 0) {
        this.view = this.$route.params.view;
      } else {
        this.view = "Events";
      }
    },
  },
  watch: {
    view() {
      this.setUrl(this.view);
    },
  },
  mounted() {
    this.searchEventOperator();
    this.getUrl()
  },
};
</script>
