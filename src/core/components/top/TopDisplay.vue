<template>
  <ul
    role="list"
    class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-3 lg:grid-cols-5"
  >
    <li
      v-for="(top, key) in tops"
      :key="top.name"
      class="col-span-1 flex shadow-sm rounded-md"
    >
      <div
        :class="'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'"
      >
        <h3>{{ key + 1 }}</h3>
      </div>
      <div class="flex-1 flex items-center justify-between truncate">
        <div class="flex justify-between w-full px-4 py-2 items-center">
          <img :src="top.src" alt="" class="rounded-full"/>
          <h3 class="text-White">{{ top.name }}</h3>
          <h3 :class="top.value > 0 ? 'text-Green' : 'text-Red'">{{ top.value }} %</h3>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tops: [
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "9",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "8",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "7",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "6",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "5",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "4",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "3",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "2",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "1",
        },
        {
          name: "Kingans",
          src: "http://via.placeholder.com/40",
          value: "0",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
