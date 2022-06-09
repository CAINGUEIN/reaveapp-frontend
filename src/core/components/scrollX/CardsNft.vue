<template>
  <div class="flex-none px-3 first:pl-0 last:pr-0">
    <div class="p-6 rounded-xl bg-DarkRock">
      <img :src="card.srcNft" alt="" class="rounded-md" />
      <div name="userLogo" class="relative mt-6 h-10">
        <div class="rounded-full bg-gray-300 h-10 w-10 absolute hover:z-10"></div>
        <div class="rounded-full bg-gray-500 h-10 w-10 absolute left-6 hover:z-10"></div>
        <div class="rounded-full bg-gray-700 h-10 w-10 absolute left-12 hover:z-10"></div>
      </div>
      <h4 class="mt-8"><span># {{card.collection}}</span> {{card.title}}</h4>
      <div class="flex mt-3">
        <img :src="card.srcToken" alt="" class="rounded-full" />
        <h4 class="my-auto ml-2">{{card.value}}</h4>
      </div>
      <div class="mt-8 flex justify-between">
        <ToolsButtonSubmit txtButton="Buy" :color="''" class="w-48" />
        <ToolsButtonNav :dataClass="'medium'" :slot="true" class="">
          <PlusIcon class="h-15 w-15" />
        </ToolsButtonNav>
      </div>
    </div>
  </div>
</template>

<script>
import ToolsButtonNav from "../buttons/ToolsButtonNav.vue";
import ToolsButtonSubmit from "../buttons/ToolsButtonSubmit.vue";
import { PlusIcon } from "@heroicons/vue/outline";
export default {
  components: { ToolsButtonNav, ToolsButtonSubmit, PlusIcon },
  props: ["card"],
};
</script>

<style lang="scss" scoped></style>
