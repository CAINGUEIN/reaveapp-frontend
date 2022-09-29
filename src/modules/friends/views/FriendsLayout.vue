<template>
  <div class="flex flex-col h-screen">
    <nav
      class="mt-2 flex h-16 min-w-max justify-between items-center bg-DarkRock rounded-full"
    >
      <div name="space-name" class="flex ml-4">
        <ImgFormated
          :key="store.spaceKey + spaceId"
          :targetSpace="spaceId"
          :size="'xs'"
          :type="'friend'"
          class="rounded-full my-auto"
        />
        <h4 v-if="spaceId!== ''" class="ml-2">{{ storeSpace.dataSpace[spaceId].nameSpace }}</h4>
      </div>
      <div></div>
    </nav>
    <div v-if="storeSpace.dataSpace !== ''" class="flex-1 flex">
      <ChatBox :key="spaceId" :spaceId="spaceId" />
    </div>
  </div>
</template>

<script>
import useStoreSpace from "@stores/storeSpace";
import useStoreAuth from "@stores/auth";
import ImgFormated from "@core/components/img/ImgFormated.vue";
import ChatBox from "../../../core/components/chat/ChatBox.vue";
export default {
  data() {
    const storeSpace = useStoreSpace();
    const store = useStoreAuth();
    return {
      storeSpace,
      store,
      spaceId: "",
    };
  },
  methods: {
    async paramInURL() {
      console.log("in param URL");
      if (Object.keys(this.$route.query).length === 0) {
        console.log("si rien " + this.$route.query);
        //si rien on degage c'est pas normal
      } else {
        this.spaceId = this.$route.query.id;
        console.log(this.$route.query);
      }
    },
  },
  watch: {
    '$route.query.id'() {
      this.spaceId = this.$route.query.id;
    }
  },
  async mounted() {
    await this.paramInURL();
    console.log("le friends layout est mounted");
  },
  components: { ImgFormated, ChatBox },
};
</script>
