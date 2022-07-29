<template>
  <div>
    <div class="flex flex-col">
      <h2>Match History</h2>
      <h4>CLASS</h4>
      <div class="flex">
        <div class="border-2 border-LightRock w-9 h-9 rounded-sm mr-1"></div>
        <div class="border-2 border-LightRock w-9 h-9 rounded-sm mr-1"></div>
        <div class="border-2 border-LightRock w-9 h-9 rounded-sm"></div>
      </div>
      <h4>USER</h4>
      <label for="search" class="sr-only">Search</label>
      <div class="relative text-gray-400 border-White m-2">
        <SearchIcon class="absolute h-5 w-5 z-10 m-3" aria-hidden="true" />
        <!-- voir a comprendre pourquoi j'ai un ring bleu -->
        <input
          id="search"
          class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
          placeholder="Search Users"
          type="search"
          name="user"
          v-model="user"
          :disabled="wait"
        />
      </div>
      <h4>SUCCESS</h4>
      <div class="flex">
        <div class="border-2 text-center border-LightRock w-9 h-9 rounded-sm mr-1"><h4 class="text-Green">W</h4></div>
        <div class="border-2 text-center border-LightRock w-9 h-9 rounded-sm mr-1"><h4 class="text-Red">L</h4></div>
        <div class="border-2 text-center border-LightRock w-9 h-9 rounded-sm"><h4 class="text-Orange">E</h4></div>
      </div>
      <h4>CHAMPION PLAYED</h4>
      <label for="search" class="sr-only">Search</label>
      <div class="relative text-gray-400 border-White m-2">
        <SearchIcon class="absolute h-5 w-5 z-10 m-3" aria-hidden="true" />
        <!-- voir a comprendre pourquoi j'ai un ring bleu -->
        <input
          id="search"
          class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
          placeholder="Search Champions"
          type="search"
          name="user"
          v-model="champion"
          :disabled="wait"
        />
      </div>
      <div class="flex">
        <div class="border-2 bg-Gravel border-LightRock w-9 h-9 rounded-full mr-1"></div>
        <div class="border-2 bg-Gravel border-LightRock w-9 h-9 rounded-full mr-1"></div>
        <div class="border-2 bg-Gravel border-LightRock w-9 h-9 rounded-full mr-1"></div>
        <div class="border-2 bg-Gravel border-LightRock w-9 h-9 rounded-full mr-1"></div>
        <div class="border-2 bg-Gravel border-LightRock w-9 h-9 rounded-full mr-1"></div>
        <div class="border-2 bg-Gravel border-LightRock w-9 h-9 rounded-full"></div>
      </div>
      <h4>MAP PLAYED</h4>
      <div class="flex">
        <div class="border-2 text-center border-LightRock w-20 h-9 rounded-sm mr-1"></div>
        <div class="border-2 text-center border-LightRock w-20 h-9 rounded-sm"></div>
      </div>
      <h4>ITEM PLAYED</h4>
      <div class="relative text-gray-400 border-White m-2">
        <SearchIcon class="absolute h-5 w-5 z-10 m-3" aria-hidden="true" />
        <!-- voir a comprendre pourquoi j'ai un ring bleu -->
        <input
          id="search"
          class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
          placeholder="Search Item"
          type="search"
          name="user"
          v-model="item"
          :disabled="wait"
        />
      </div>
      <ToolsButtonSubmit
              @action="submit"
              txtButton="Apply Filter"
              class="w-[200px]"
              :color="''"
            />
    </div>
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";
import ToolsButtonSubmit from "../buttons/ToolsButtonSubmit.vue";
export default {
  components: {
    SearchIcon,
    ToolsButtonSubmit
},
  data() {
    return {
      user: "",
      champion: "",
      item: "",
      wait: false,
    };
  },
  methods: {
    submit() {
      //ici on va soumettre les filtres rempli
    }
  },
};
</script>
