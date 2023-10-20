<template>
  <div class=" h-full max-h-screen overflow-auto scrollbarV">
    <div class="w-full flex">
      <ImgFormated
        :key="store.avatarKey"
        :size="'s'"
        :type="'avatar'"
        class="absolute left-8 top-6 z-10 h-10 w-10 bg-white rounded-full"
      />
      <div class="mx-auto mt-6 flex">
        <button
          v-for="item in nav"
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
      <XButton40
        @click="goBack"
        class="absolute right-8 top-6 z-10"
      ></XButton40>
    </div>
    <component :is="target" class="mx-auto w-[95%] max-w-[1680px] mb-8"></component>
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
import venue from "./VenueOperator.vue"
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
