<template>
  <div class="flex flex-1 flex-col h-96 p-4">
    <div class="mb-1 h-3/5 w-full flex-shrink-0 bg-slate-500 rounded-xl"></div>
    <div class="mt-1 flex justify-between items-center">
      <h4 class="text-white">{{ data.name }}</h4>
      <h5 class="text-white">{{ data.game }}</h5>
    </div>
    <div class="mt-1 flex justify-between items-center">
      <p class="text-white">{{ $dayjs(data.date).format("DD-MM-YYYY") }}</p>
      <p class="text-white">
        {{ $dayjs().to($dayjs(data.date)) }}
      </p>
    </div>
    <div class="mt-1 flex justify-between items-center">
      <p class="text-white">{{data.orga}}</p>
      <p class="text-white">
        {{data.country}}
      </p>
    </div>
    <div class="mt-1 flex justify-between items-center">
      <p class="text-white">{{data.ticket}} Tickets</p>
      <p class="text-white">
        {{data.price}} €
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      dateNow: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
