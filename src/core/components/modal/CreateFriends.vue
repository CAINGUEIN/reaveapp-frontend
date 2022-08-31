<template>
  <div class="bg-Black p-8 rounded-lg h-screen text-center">
    <button
      class="text-right hover:border-2 hover:border-Stone w-auto absolute top-0 right-2"
      @click="$emit('close')"
    >
      X
    </button>
    <ProfilForSpace v-if="target === ''" @close="$emit('close')" />
  </div>
</template>

<script>
import ProfilForSpace from "@core/components/modal/CreateFriendsElements/ProfilForSpace.vue";
export default {
  components: { ProfilForSpace },
  data() {
    return {
      target: "",
    };
  },
};
</script>
