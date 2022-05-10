<template>
  <div class="bg-Black p-8 rounded-lg h-full text-center">
    <button
      class="text-right hover:border-2 hover:border-Stone w-auto absolute top-0 right-2"
      @click="$emit('close')"
    >
      X
    </button>
    <ProfilForSpace v-if="target === ''" />
  </div>
</template>

<script>
import ProfilForSpace from "./CreateFriendsElements/ProfilForSpace.vue";
export default {
  components: { ProfilForSpace },
  data() {
    return {
      target: "",
    };
  },
};
</script>
