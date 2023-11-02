<!--ce que doit faire cette page recup les infos et les dispatch mettre un isWaitng
le temps que je dl les infos dans le back avec une petite image d'attente-->

<template>
  <div>
    <div v-if="storeSpace.isWaiting">
      <Waiting />
    </div>
    <router-view v-else />
  </div>
</template>

<script>
import Waiting from "@core/components/page/Waiting.vue";
import useStoreSpace from "@stores/storeSpace";

export default {
  components: { Waiting },
  data() {
    const storeSpace = useStoreSpace();

    return {
      storeSpace,
    };
  },
  methods: {
    async paramInURL() {
      if (Object.keys(this.$route.query).length === 0) {
        console.log("si rien " +this.$route.query);
        //si rien on degage c'est pas normal
      } else {
        console.log(this.$route.query.id);
        await this.storeSpace.feedDataSpace(this.$route.query);
      }
    },
  },
  mounted() {
    this.paramInURL();
  },
};
</script>
