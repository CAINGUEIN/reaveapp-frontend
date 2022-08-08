<template>
  <div class="flex flex-col">
    <ToolsButtonNav :target="'PersonalMessages'" :dataClass="''">
      <Reave/>
    </ToolsButtonNav>
    <ToolsButtonNav :target="'Social'" :dataClass="''">
      <Feed />
    </ToolsButtonNav>
    <ToolsButtonNav :target="'Play'" :dataClass="''">
      <Play/>
    </ToolsButtonNav>
    <ToolsButtonNav :target="'Academy'" :dataClass="''">
      <Academy/>
    </ToolsButtonNav>
     <ToolsButtonNav :target="'Jobs'" :dataClass="''">
      <Jobs/>
    </ToolsButtonNav>
    <ToolsButtonNav :target="'Bootcamps'" :dataClass="''">
      <Bootcamps/>
    </ToolsButtonNav>
    <ToolsButtonNav :target="'League'" :dataClass="''">
      <Leagues/>
    </ToolsButtonNav>
    <ToolsButtonNav :target="'Nft'" :dataClass="''">
      <NFTs/>
    </ToolsButtonNav>
    <ToolsButtonNav :target="'New'" :dataClass="''">
      <News/>
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
import Reave from "../../assets/icons/Reave.vue";
export default {
  components: { ToolsButtonNav, Feed, Play, Academy, Jobs, Bootcamps, Leagues, NFTs, News, Reave },
  props: ["dataButtons"],
};
</script>
