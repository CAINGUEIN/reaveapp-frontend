<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="etape = etape - 1"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>
    <button
      class="absolute right-0 rounded-full px-3 z-10"
      @click.prevent="closeModal()"
    >
      <h2 class="text-white">X</h2>
    </button>
    <div class="pt-12 flex flex-col" v-if="etape === 1">
      <h4 class="text-center">How much are you crediting</h4>
      <h4 class="text-center">your Wallet?</h4>
      
      <button
        :class="
          money.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="money.value !== '' ? (etape = 2) : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        etape: 1,

      }
    },
    methods: {
      closeModal() {
      this.$emit("action");
    },
    },
  }
</script>