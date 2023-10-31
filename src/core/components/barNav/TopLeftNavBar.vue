<template>
  <div class="flex flex-col">
    <ToolsButtonNav :target="'PersonalMessages'" :dataClass="'reave'" :comparTarget="store.view" class="mb-[18px]">
      <Reave />
    </ToolsButtonNav>

    <!-- NEW -->

    <ToolsButtonNav :target="'Events'" :comparTarget="store.view" :dataClass="''">
      <Events />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Shards'" :comparTarget="store.view" :dataClass="''">
      <Shards />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Hub'" :comparTarget="store.view" :dataClass="''">
      <Hub />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Jobs'" :comparTarget="store.view" :dataClass="''">
      <Jobs />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Academy'" :comparTarget="store.view" :dataClass="''">
      <Academy />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Bootcamps'" :comparTarget="store.view" :dataClass="''">
      <Bootcamps />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Maps'" :comparTarget="store.view" :dataClass="''">
      <Maps />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Conceptor'" :comparTarget="store.view" :dataClass="''">
      <Conceptor />
    </ToolsButtonNav>


    <!-- OLD -->
    <!--
    <ToolsButtonNav :target="'Social'" :comparTarget="store.view" :dataClass="''">
      <Feed />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Play'" :comparTarget="store.view" :dataClass="''">
      <Play />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Academy'" :comparTarget="store.view" :dataClass="''">
      <Academy />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Jobs'" :comparTarget="store.view" :dataClass="''">
      <Jobs />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Bootcamps'" :comparTarget="store.view" :dataClass="''">
      <Bootcamps />

    </ToolsButtonNav>

    <ToolsButtonNav :target="'Event'" :comparTarget="store.view" :dataClass="''">
      <Leagues />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Maps'" :comparTarget="store.view" :dataClass="''">
      <Maps />
    </ToolsButtonNav>

    <ToolsButtonNav :target="'Nft'" :comparTarget="store.view" :dataClass="''">
      <NFTs />
    </ToolsButtonNav>
    
    <ToolsButtonNav :target="'New'" :comparTarget="store.view" :dataClass="''">
      <News />
    </ToolsButtonNav>
    -->

  </div>
</template>

<script>
/* OLD */
/*
  import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
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
    },*/

    /* NEW */

  import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue"; 
  import Events from "../../assets/icons/Events.vue";
  import Shards from "../../assets/icons/Shards.vue";
  import Hub from "../../assets/icons/Hub.vue";
  import Jobs from "../../assets/icons/Jobs.vue";
  import Academy from "../../assets/icons/Academy.vue";
  import Bootcamps from "../../assets/icons/Bootcamps.vue";
  import Maps from "../../assets/icons/Maps.vue";
  import Conceptor from "../../assets/icons/Conceptor.vue";

  import useStoreAuth from "@stores/auth";
  import Reave from "../../assets/icons/Reave.vue";

  export default {
    components: {
      ToolsButtonNav,
      Events,
      Shards,
      Hub,
      Jobs,
      Academy,
      Bootcamps,
      Maps,
      Conceptor,
      Reave
    },

    data() {
      const store = useStoreAuth();
      return {
        store,
      };
    },
  };
</script>