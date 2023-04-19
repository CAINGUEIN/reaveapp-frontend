<template>
  <div class="h-full max-h-full overflow-auto scrollbarV">
    <div class="mx-8 sticky top-0 left-0 right-0 h-15 z-10 bg-Anthracite">
      <div class="flex justify-between bg-DarkRock rounded-full items-center">
        <div name="space-name" class="flex ml-4" @click="goTo('Profile')">
          <ImgFormated
            :key="store.avatarKey"
            :size="'xs'"
            :type="'avatar'"
            class="rounded-full my-auto"
          />
          <h4 class="ml-4">{{ store.dataAccount.userTag }}</h4>
        </div>
        <div class="flex">
            <ToolsButtonNav
              :btnName="'chat'"
              :dataClass="'spaceIcon'"
              :comparTarget="view"
              @click="view = 'chat'"
            >
            <SvgTarget target="Messages"></SvgTarget>
            </ToolsButtonNav>
            <ToolsButtonNav
              :btnName="'operator'"
              :dataClass="'spaceIcon'"
              :comparTarget="view"
              @click="goTo('Operator') "
            >
            <SvgTarget target="Operator"></SvgTarget>
            </ToolsButtonNav>
            <ToolsButtonNav
              :btnName="'notifs'"
              :dataClass="'spaceIcon'"
              :comparTarget="view"
              @click="view = 'notifs'"
            >
            <SvgTarget target="Notification"></SvgTarget>
            </ToolsButtonNav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//component
import ImgFormated from "@core/components/img/ImgFormated.vue";
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import SvgTarget from "@components/SvgTarget.vue";
//tool
import useStoreAuth from "@stores/auth";

export default {
  components: {
    ImgFormated,
    ToolsButtonNav,
    SvgTarget,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      view: "chat"
    };
  },
  methods: {
    goTo(target) {
      this.$router.push({ name: target, params: { target: 'projects' }, });
    },
  },
};
</script>

<style lang="scss" scoped></style>
