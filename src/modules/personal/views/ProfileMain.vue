<template>
  <div>
    <MainContent />
    <NavProfile />
  </div>
</template>

<script>
import MainContent from "@core/components/profile/MainContent.vue";
import NavProfile from "@core/components/profile/NavProfile.vue";
export default {
  components: {
    MainContent,
    NavProfile,
  },
};
</script>
