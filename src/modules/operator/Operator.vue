<template>
  <div class="w-full flex">
    <div
      class="absolute left-8 top-6 z-10 h-10 w-10 bg-white rounded-full"
      
    ></div>
    <div class="mx-auto mt-6">
      <button
        v-for="item in nav"
        class="py-1 px-4 mx-2 hover:bg-LightRock hover:text-white rounded-lg font-medium"
        :class="
          target === item.target
            ? 'bg-LightRock text-white'
            : 'hover:bg-LightRock hover:text-white'
        "
        @click="target = item.target"
      >
        {{ item.name }}
      </button>
    </div>
    <XButton36 @click="goBack" class="absolute right-8 top-6 z-10"></XButton36>
  </div>
  <component :is="target" class="mx-auto w-[95%] max-w-[1680px]"></component>
</template>

<script>
//components
import XButton36 from "@components/buttons/XButton36.vue";
import SvgTarget from "@components/SvgTarget.vue";
//pages
import projects from "./EventOperator.vue";
import items from "./ItemsOperator.vue";
export default {
  components: {
    XButton36,
    SvgTarget,
    projects,
    items,
  },
  data() {
    return {
      target: "projects",
      nav: [
        { name: "Projects", icon: "", target: "projects" },
        { name: "Equipement", icon: "", target: "items" },
        { name: "Calendar", icon: "", target: "calendar" },
        { name: "Analytics", icon: "", target: "analytics" },
        { name: "Finance", icon: "", target: "finance" },
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
