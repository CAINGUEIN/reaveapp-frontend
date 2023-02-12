<template>
  <div>
    <div class="h-full flex flex-col overflow-hidden">
      <div class=" overflow-auto scrollbarV pr-[30px]">
        <div name="reaveShards" class="bg-Gravel h-[300px] rounded-lg">
        <h1></h1>
        <div
          name="explorerBarre"
          class="flex h-20 w-164 justify-between absolute -bottom-8 inset-x-0 mx-auto bg-DarkRock rounded-full p-2"
        >
          <input
            type="text"
            placeholder="Artists, Collections, ..."
            class="bg-DarkRock w-128 min-w-max border-0 rounded-full"
          />
          <ToolsButtonNav
            class="bg-White h-15 w-15"
            :dataClass="'medium'"
            :slot="true"
          >
            <SearchIcon class="h-6 w-6 m-auto"></SearchIcon>
          </ToolsButtonNav>
        </div>
      </div>
      <ScrollVignetteFilter :data="dataFilter" />
      <div name="button" class="flex justify-center mt-18">
        <button class="bg-DarkRock p-2 mx-2 w-64">
          <h4 class="text-White">Discover</h4>
        </button>
        <button class="bg-White p-2 mx-2 w-64">
          <h4 class="text-Anthracite">Create an NFT</h4>
        </button>
      </div>
      <ScrollCards :data="dataCards" :txttitle="'Trending Auctions'" />
      <TopLayoutOneFilter />
      <div name="nftContest" class="h-[300px] mt-12 relative">
        <img
          src="@core/assets/img/contest.png"
          alt=""
          class="absolute object-fill w-full h-[300px]"
        />
        <img
          src="@core/assets/img/gril.png"
          alt=""
          class="absolute object-fill w-full h-[300px]"
        />
        <h1 class="z-10">Nft Content</h1>
        <button class="bg-DarkRock p-2 mx-2 absolute w-32 left-8 bottom-8">
          Explorer
        </button>
      </div>
      <GetCertified />
      <TopLayoutTwoFilters />
      <HowItWorks />
      <QAndR />
      </div>
      
    </div>
  </div>
</template>

<script>
import dataFilter from "@modules/marketPlace/nft/data/filter";
import dataCards from "@modules/marketPlace/nft/data/cards";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import { GlobeIcon, PlusIcon, SearchIcon } from "@heroicons/vue/outline";
import ScrollVignetteFilter from "@core/components/scrollX/ScrollVignetteFilter.vue";
import ScrollCards from "@core/components/scrollX/ScrollCards.vue";
import TopLayoutOneFilter from "@core/components/top/TopLayoutOneFilter.vue";
import GetCertified from "@core/components/elements/GetCertified.vue";
import TopLayoutTwoFilters from "@core/components/top/TopLayoutTwoFilters.vue";
import HowItWorks from "@core/components/elements/HowItWorks.vue";
import QAndR from "@core/components/elements/QAndR.vue";
export default {
  components: {
    ToolsButtonSubmit,
    ToolsButtonNav,
    GlobeIcon,
    PlusIcon,
    SearchIcon,
    ScrollVignetteFilter,
    ScrollCards,
    TopLayoutOneFilter,
    GetCertified,
    TopLayoutTwoFilters,
    HowItWorks,
    QAndR,
  },
  data() {
    return {
      dataFilter: dataFilter,
      dataCards: dataCards,
    };
  },
};
</script>
