<template>
  <div class="mx-auto flex flex-col w-[1000px]">
    <div class="h-[230px] rounded-2xl">
      <div class="w-[1000] h-[230] rounded-2xl overflow-hidden">
        <img
          v-if="store.dataAccount.userTag === 'Karmine Corp'"
          src="/img/KarmineCorp/KC_banner.png"
          alt=""
          class="h-auto"
        />
        <ImgFormated
          v-else
          :key="store.avatarKey"
          :size="'page'"
          :type="'banner'"
          class="h-auto"
        />
      </div>
      <img
        v-if="store.dataAccount.userTag === 'Karmine Corp'"
        src="/img/KarmineCorp/KC_pp.png"
        alt=""
        class="absolute rounded-md left-8 -bottom-8 border-4 border-Anthracite"
      />
      <ImgFormated
        v-else
        :key="store.avatarKey"
        :size="'xl'"
        :type="'avatar'"
        class="absolute rounded-md left-8 -bottom-8 border-4 border-Anthracite"
      />
      <button
        @click="goBack"
        class="absolute left-6 top-6 z-10 h-8 w-8 flex bg-black rounded-full"
      >
        <Chevron class="rotate-90 m-auto" />
      </button>
    </div>
    <div class="mt-10 ml-8">
      <div class="flex items-center absolute right-0 -top-8">
        <Button40Slot class=""
          ><DotsHorizontalIcon class="h-6 m-auto"></DotsHorizontalIcon
        ></Button40Slot>
        <Button40Slot class="m-3"
          ><PaperAirplaneIcon class="h-6 m-auto rotate-45"></PaperAirplaneIcon
        ></Button40Slot>
        <button
          class="text-black rounded-full h-10 px-10 bg-white"
          @click="goTo(infoEvent._id)"
        >
          <h4 class="text-black text-xl font-black">Follow</h4>
        </button>
      </div>
      <p class="font-black text-2xl text-white">Karmine Corp</p>
      <p class="font-medium text-base text-Gravel">@KarmineCorp</p>
      <div class="flex justify-between mt-6">
        <p class="w-4/5 text-white font-normal text-xl">
          Structure esport présente sur League of Legends
          <span class="text-Blue">#LFL</span> , Rocket League, Trackmania, TFT,
          Valorant & SSBU. <span class="text-Blue">#KCORP</span>
        </p>
        <div>
          <div class="flex space-x-2">
            <div class="rounded-full h-9 w-9 bg-yellow-500"></div>
            <div class="rounded-full h-9 w-9 bg-yellow-500"></div>
            <div class="rounded-full h-9 w-9 bg-gray-500"></div>
            <div class="rounded-full h-9 w-9 bg-orange-700"></div>
          </div>
          <p class="text-base text-Gravel text-right mt-3">
            & <span class="text-white font-bold">41</span> more
          </p>
        </div>
      </div>
      <div class="flex mt-4">
        <p class="flex text-Gravel items-center">
          <SvgTarget target="Calendar" :height="24" :width="24"></SvgTarget>
          Joined May 2023
        </p>
        <p class="flex text-Gravel items-center ml-8">
          <LinkIcon class="h-6"></LinkIcon>karmineshop.com
        </p>
      </div>
      <div class="flex mt-4 mb-8">
        <p class="flex text-Gravel items-center">
          <span class="text-white font-bold mr-1">106</span> Following
        </p>
        <p class="flex text-Gravel items-center ml-8">
          <span class="text-white font-bold mr-1">2.8M</span> Followers
        </p>
        <p class="flex text-Gravel items-center ml-8">
          <span class="text-white font-bold mr-1">256</span> Posts
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//component
import Chevron from "@assets/icons/Chevron.vue";
import Button40Slot from "@components//buttons/Button40Slot.vue";
import {
  DotsHorizontalIcon,
  PaperAirplaneIcon,
  LinkIcon,
} from "@heroicons/vue/outline";
//tool
import useStoreAuth from "@stores/auth";
import SvgTarget from "../SvgTarget.vue";
import ImgFormated from "../img/ImgFormated.vue";
export default {
  components: {
    Chevron,
    PaperAirplaneIcon,
    Button40Slot,
    DotsHorizontalIcon,
    SvgTarget,
    LinkIcon,
    ImgFormated,
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
  mounted() {
    console.log(this.store);
  },
};
</script>
