<template>
  <div>
    <div class="py-8 flex flex-col">
      <h4 class="text-center">{{ event }}</h4>
      <h5 class="text-center">{{ place }}</h5>
      <img src="/qrimg.png" alt="" class="h-48 w-48 mx-auto mt-8 mb-4" />
      <p class=" text-sm text-Gravel font-medium mx-auto">
        Acquired on {{ $dayjs(this.date).format("MM.DD.YYYY")  }} at {{ $dayjs(this.date).format("hh:mm A") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event", "place", "date"],

  methods: {
    closeModal() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss" scoped></style>
