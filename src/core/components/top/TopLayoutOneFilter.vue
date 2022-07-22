<template>
  <div>
    <div class="mt-18 flex justify-between items-center">
      <div class="flex items-center">
        <p class="text-5xl font-bold text-White">
          {{ txtTitle
          }}<span class="text-5xl font-bold text-Gravel">{{ timeSelect }}</span>
        </p>
        <ChevronDownIcon class="w-9 mx-5" />
      </div>
      <a href="" class="flex items-center"><h3 class="font-book">View all ranking</h3><ChevronRightIcon class="w-9 mt-1 p-2" /></a>
    </div>
    <TopDisplay/>
  </div>
</template>

<script>
/* prendre une info
    et l'afficher
 */
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import TopDisplay from "@core/components/top/TopDisplay.vue";

export default {
  components: { ChevronDownIcon, ChevronRightIcon, TopDisplay },
  data() {
    return {
      timeSelect: " X days",
      txtTitle: "Top Collestions over",
    };
  },
};
</script>

<style lang="scss" scoped></style>
