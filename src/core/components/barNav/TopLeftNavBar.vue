<template>
  <div class="flex flex-col">
    <ToolsButtonNav
      :target="'PersonalMessages'"
      :dataClass="'reave'"
      :comparTarget="store.view"
      class="mb-[18px]"
    >
      <Reave />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'Social'"
      :comparTarget="store.view"
      :dataClass="''"
    >
      <Feed />
    </ToolsButtonNav>
    <ToolsButtonNav :target="'Play'" :comparTarget="store.view" :dataClass="''">
      <Play />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'Academy'"
      :comparTarget="store.view"
      :dataClass="''"
    >
      <Academy />
    </ToolsButtonNav>
    <ToolsButtonNav :target="'Jobs'" :comparTarget="store.view" :dataClass="''">
      <Jobs />
    </ToolsButtonNav>

    <ToolsButtonNav
      :target="'Bootcamps'"
      :comparTarget="store.view"
      :dataClass="''"
    >
      <Bootcamps />

    </ToolsButtonNav>

    <ToolsButtonNav
      :target="'Event'"
      :comparTarget="store.view"
      :dataClass="''"
    >
      <Leagues />
    </ToolsButtonNav>

    <ToolsButtonNav
      :target="'Maps'"
      :comparTarget="store.view"
      :dataClass="''"
    >
      <Maps />

      <Leagues />
    </ToolsButtonNav>
    <ToolsButtonNav :target="'Nft'" :comparTarget="store.view" :dataClass="''">
      <NFTs />
    </ToolsButtonNav>
    <ToolsButtonNav :target="'New'" :comparTarget="store.view" :dataClass="''">
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
import Maps from "../../assets/icons/Maps.vue";
//import { Maps } from "../../assets/svg/products/systems/systemsImport";
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
    Maps
},
  data() {
    const store = useStoreAuth();
    return {
      store,
    };
  },
};
</script>
