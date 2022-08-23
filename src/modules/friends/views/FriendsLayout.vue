<template>
  <div v-if="!storeSpace.isWaiting" class="flex flex-col h-full">
    <nav
      class="mt-2 flex h-16 min-w-max justify-between items-center bg-DarkRock rounded-full"
    >
      <div name="space-name" class="flex ml-4">
        <img
          src="https://via.placeholder.com/36"
          alt=""
          class="rounded-full my-auto"
        />
        <h4 class="ml-2">{{ storeSpace.dataSpace.nameSpace }}</h4>
      </div>
      <div></div>
    </nav>
    <div class="flex-1 flex">
      <h1>WIP</h1>
    </div>
  </div>
</template>

<script>
import useStoreSpace from "@stores/storeSpace";
export default {
  data() {
    const storeSpace = useStoreSpace();
    return {
      view: "chat",
      storeSpace,
      space: "",
    };
  },
  methods: {
    async paramInURL() {
      console.log("in param URL");
      if (Object.keys(this.$route.query).length === 0) {
        console.log("si rien " + this.$route.query);
        //si rien on degage c'est pas normal
      } else {
        console.log(this.$route.query);
        await this.storeSpace.feedDataSpace(this.$route.query);
        this.space === this.storeSpace.dataSpace;
      }
    },
  },
  async mounted() {
    await this.paramInURL();
    console.log("le friends layout est mounted");
  },
};
</script>
