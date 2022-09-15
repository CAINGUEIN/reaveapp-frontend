<template>
  <div>
    <button
      class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
      :class="view === target
        ? 'bg-Stone text-White'
        : 'text-gravel hover:bg-Rock hover:text-LightGrey'"
      @click="
        $emit(
          'update:modelValue',
          modelValue === target ? (view = '') : (view = target)
        )
      "
    >
      {{ txtBtn }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    txtBtn: {
      type: String,
    },
    target: {
      type: String,
    },
    view: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
    };
  },
};
</script>
