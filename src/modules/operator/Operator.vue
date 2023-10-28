<template>
  <div class="h-full w-full max-h-screen overflow-auto scrollbarV">
    <div class="w-full flex h-16">
      <div class="mx-auto mt-3 mb-3 flex">
        <button
          v-for="item in nav"
          :key="item.name"
          class="py-1 px-4 mx-2 text-base hover:bg-LightRock hover:text-white rounded-lg font-medium flex items-center"
          :class="
            target === item.target
              ? 'bg-LightRock text-white'
              : 'hover:bg-LightRock hover:text-white'
          "
          @click="target = item.target"
        >
          <SvgTarget
            :target="item.icon"
            height="18"
            width="18"
            class="mr-2"
          ></SvgTarget>
          {{ item.name }}
        </button>
      </div>
    </div>
    <component
      :is="target"
      class="mx-auto w-[95%] max-w-[1680px] mb-8"
    ></component>
  </div>
</template>

<script>
//components
import XButton40 from "@components/buttons/XButton40.vue";
import SvgTarget from "@components/SvgTarget.vue";
import ImgFormated from "@core/components/img/ImgFormated.vue";
//pages
import projects from "./EventOperator.vue";
import items from "./ItemsOperator.vue";
import venue from "./VenueOperator.vue";
//tool
import useStoreAuth from "@stores/auth";
export default {
  components: {
    XButton40,
    SvgTarget,
    projects,
    ImgFormated,
    items,
    venue,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      target: "projects",
      nav: [
        { name: "Events", icon: "Stars", target: "projects" },
        { name: "Venues", icon: "Venue", target: "venue" },
        { name: "Packages", icon: "Packages", target: "package" },
        { name: "Equipement", icon: "Equipment", target: "items" },
      
        /* { name: "Calendar", icon: "Calendar", target: "calendar" },
        { name: "Analytics", icon: "Analytics", target: "analytics" },
        { name: "Finance", icon: "PileOfCoins", target: "finance" }, */
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    setUrl(value) {
      this.$router.replace({
        name: this.$route.name,
        params: { view: value },
      });
    },
    getUrl() {
      if (Object.keys(this.$route.params).length > 0) {
        this.target = this.$route.params.target;
      } else {
        this.target = "projects";
      }
    },
  },
  watch: {
    target() {
      this.setUrl(this.target);
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped></style>
