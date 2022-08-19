<template>
  <div class="flex flex-col">
    <ToolsButtonNav
      :target="'PersonalMessages'"
      :dataClass="''"
      :class="'PersonalMessages' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <Reave />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'Social'"
      :dataClass="''"
      :class="'Social' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <Feed />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'Play'"
      :dataClass="''"
      :class="'Play' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <Play />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'Academy'"
      :dataClass="''"
      :class="'Academy' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <Academy />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'Jobs'"
      :dataClass="''"
      :class="'Jobs' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <Jobs />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'Bootcamps'"
      :dataClass="''"
      :class="'Bootcamps' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <Bootcamps />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'League'"
      :dataClass="''"
      :class="'League' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <Leagues />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'Nft'"
      :dataClass="''"
      :class="'Nft' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <NFTs />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'New'"
      :dataClass="''"
      :class="'New' === store.view ? 'text-Cloud bg-Gravel ' : ''"
    >
      <News />
    </ToolsButtonNav>
  </div>
</template>

<script>
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import Feed from "../../assets/icons/Feed.vue";
import Play from "../../assets/icons/Play.vue";
import Academy from "../../assets/icons/Academy.vue";
import Jobs from "../../assets/icons/Jobs.vue";
import Bootcamps from "../../assets/icons/Bootcamps.vue";
import Leagues from "../../assets/icons/Leagues.vue";
import NFTs from "../../assets/icons/NFTs.vue";
import News from "../../assets/icons/News.vue";
import useStoreAuth from "@stores/auth";
import Reave from "../../assets/icons/Reave.vue";
export default {
  components: {
    ToolsButtonNav,
    Feed,
    Play,
    Academy,
    Jobs,
    Bootcamps,
    Leagues,
    NFTs,
    News,
    Reave,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
    };
  },
};
</script>
