<template>
  <div class="h-screen overflow-auto scrollbarV p-16">
    <p class="font-black text-White text-[64px]">EDIT PROFILE</p>
    <p class="mt-6 text-[16px] font-normal text-LightGrey">
      <span class="text-Ruby">*</span> indicates required
    </p>
    <ProfileAppearance @action="openModal" />
    <Identity />
    <Description />
  </div>
</template>

<script>
import Identity from "../../../core/components/settings/account/Identity.vue";
import Description from "../../../core/components/settings/account/Description.vue";
import ProfileAppearance from "../../../core/components/settings/account/ProfileAppearance.vue";
export default {
  components: { Identity, Description, ProfileAppearance },
  methods: {
    openModal(e) {
      this.$emit("action", e);
    },
  },
};
</script>
