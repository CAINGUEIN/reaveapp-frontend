<template>
  <div>
    <div class="bg-Gravel w-[1322px] h-[300px] rounded-2xl">
      <div class="w-[1322px] h-[300px] rounded-2xl overflow-hidden">
        <img
          :src="
            'https://media.reave.dev/userbanner/page' +
              store.dataAccount._id +
              'banner.png' ||
            'https://media.reave.dev/userbanner/page' +
              store.dataAccount._id +
              'banner.jpeg'
          "
          alt=""
          class="h-auto"
        />
      </div>
      <img
        :src="
          'https://media.reave.dev/useravatar/xxl' +
          store.dataAccount._id +
          'avatar.png'
        "
        alt=""
        class="absolute rounded-full left-8 -bottom-8"
      />
      <button
        @click="goBack"
        class="absolute left-6 top-6 z-10 h-8 w-8 flex bg-black rounded-full"
      >
        <Chevron class="rotate-90 m-auto" />
      </button>
    </div>
    <div class="mt-8">
      <p>{{ store.dataAccount.profileName }}</p>
      <p>@{{ store.dataAccount.userTag }}</p>
      <p>
        {{
          store.dataAccount.status === "none" ? "" : store.dataAccount.status
        }}
      </p>
      <p>{{ store.dataAccount.bio }}</p>
      <div>
        <p>{{ store.dataAccount.create }}</p>
        <a :href="'https://' + store.dataAccount.link"> <p>{{ store.dataAccount.link }}</p></a>
      </div>
      <div>
        <p>{{ store.dataAccount.birthDate }}</p>
        <p>{{ store.dataAccount.location }}</p>
      </div>
      <div>
        <p>{{ store.dataAccount.following.length }} Following</p>
        <p>{{ store.dataAccount.followers.length }} Followers</p>
        <!-- <p>{{store.dataAccount.posts.length + 1}} Posts</p> -->
      </div>
    </div>
  </div>
</template>

<script>
//component
import Chevron from "@assets/icons/Chevron.vue";
//tool
import useStoreAuth from "@stores/auth";
export default {
  components: {
    Chevron,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>
