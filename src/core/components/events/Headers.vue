<template>
  <div class="flex mx-auto flex-row justify-between">
    <div class="flex flex-row">
      <ToolsButtonNav
        v-if="props.visitor"
        :target="'PersonalMessages'"
        :dataClass="'reave'"
        class="mr-2 transition-all duration-300"
      >
        <Reave />
      </ToolsButtonNav>
      <Tabs class="flex-wrap my-auto" />
    </div>
    <div
      class="flex my-auto mr-40 rounded-full w-[400px] h-12 bg-DarkRock"
      :class="[props.visitor ? ' mr-24' : 'mr-40']"
    >
      <Search
        class="h-10 w-10 top-0.5 p-2 my-auto ml-3 text-Gravel rounded-full"
      />
      <input
        :type="searchBar.type"
        :placeholder="searchBar.placeholder"
        class="bg-DarkRock block w-full h-full border-transparent focus:ring-0 pl-1 border-0 rounded-full text-White placeholder-Gravel font-medium"
      />
      <div class="p-2 m-1 my-auto rounded-full bg-LightRock cursor-pointer">
        <Filters :width="24" :height="24" />
      </div>
    </div>
    <div class="flex flew-row space-x-1 text-White">
      <Translate
        class="my-auto"
        :width="32"
        :height="32"
        v-if="props.visitor"
      />
      <h3 class="py-2.5 my-auto px-3 flex-none text-base">Organise an Event</h3>
      <ToolsButtonNav :target="'Login'" v-if="props.visitor">
        <div class="py-2 px-5 bg-White my-auto rounded-full">
          <p class="text-Anthracite text-base font-bold">Login</p>
        </div>
      </ToolsButtonNav>
    </div>
  </div>
</template>

<script setup>
import Tabs from "./elements/Tabs.vue";
import Translate from "../../assets/icons/Translate.vue";
import Search from "@assets/icons/Operator/Search.vue";
import Filters from "@assets/icons/Filters.vue";
import Reave from "@assets/icons/Reave.vue";
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";

const props = defineProps({
  visitor: Boolean,
});

const searchBar = {
  type: "text",
  name: "eventSearch",
  value: "",
  placeholder: "Search Events, Venues, People...",
};
</script>
