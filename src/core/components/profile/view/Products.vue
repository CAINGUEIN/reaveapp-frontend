<template>
  <div class="w-[732px] mx-auto">
    <div class="my-9">
      <div class="flex justify-between">
        <p class="font-bold text-xl text-white">Drops</p>
        <p class="font-normal text-sm text-LightGrey">View all items</p>
      </div>
      <div>
        <div
          class="flex items-center mt-6"
          @click="LolState === true ? (LolState = false) : (LolState = true)"
        >
          <SvgTarget target="LOLIcon"></SvgTarget>
          <div class="w-[128px] h-0.5 bg-LightRock mx-4"></div>
          <SvgTarget
            target="Chevron"
            :class="
              LolState === true
                ? 'transition-all ease-in-out'
                : 'transition-all ease-in-out rotate-180'
            "
          ></SvgTarget>
        </div>
        <div
          class="mt-6"
          :class="
            LolState
              ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 h-auto'
              : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 h-0'
          "
        >
          <div class="grid grid-cols-2 gap-6">
            <div v-for="item in drops.lol" class="h-full w-full lineGradient">
              <img
                :src="'/img/KarmineCorp/Products/' + item.img"
                alt=""
                class="-z-10"
              />
              <div class="absolute bottom-4 left-4">
                <p class="text-xl font-bold text-white">{{ item.name }}</p>
                <p class="text-3xl font-black text-white">
                  {{ item.price }}<span>€</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="flex items-center mt-6"
          @click="ValoState === true ? (ValoState = false) : (ValoState = true)"
        >
          <SvgTarget target="LOLIcon"></SvgTarget>
          <div class="w-[128px] h-0.5 bg-LightRock mx-4"></div>
          <SvgTarget
            target="Chevron"
            :class="
              ValoState === true
                ? 'transition-all ease-in-out'
                : 'transition-all ease-in-out rotate-180'
            "
          ></SvgTarget>
        </div>
        <div
          class="mt-6"
          :class="
            ValoState
              ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 h-auto'
              : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 h-0'
          "
        >
          <div class="grid grid-cols-2 gap-6">
            <div v-for="item in drops.valo" class="h-full w-full">
              <img
                :src="'/img/KarmineCorp/Products/' + item.img"
                alt=""
                class="-z-10"
              />
              <div class="absolute bottom-0 left-0 right-0 top-0 lineGradient"></div>
              <div class="absolute bottom-4 left-4">
                <p class="text-xl font-bold text-white">{{ item.name }}</p>
                <p class="text-3xl font-black text-white">
                  {{ item.price }}<span>€</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-0.5 bg-LightRock"></div>
    <div class="my-9">
      <div class="flex justify-between">
        <p class="font-bold text-xl text-white">Merch</p>
        <p class="font-normal text-sm text-LightGrey">View Shop</p>
      </div>
      <div class="mt-6">
        <div class="grid grid-cols-2 gap-6">
          <div v-for="item in merch" class="h-full w-full">
            <img
              :src="'/img/KarmineCorp/Products/' + item.img"
              alt=""
              class=""
            />
            <div class="absolute bottom-0 left-0 right-0 top-0 lineGradient"></div>
            <div class="absolute bottom-4 left-4">
              <p class="text-sm font-book text-LightGrey">{{ item.collection }}</p>
              <p class="text-xl font-bold text-white">{{ item.name }}</p>
              <p class="text-3xl font-black text-white">
                {{ item.price }}<span>€</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTarget from "@components/SvgTarget.vue";

export default {
  data() {
    return {
      LolState: true,
      ValoState: true,
      drops: {
        lol: [
          { img: "LECSkinBundle.png", name: "LEC Skin Bundle", price: "100" },
          { img: "SakenMVPSkin.png", name: "Saken MVP Skin", price: "40" },
        ],
        valo: [
          { img: "Group7839.png", name: "Karmine Corp Charm", price: "20" },
        ],
      },
      merch: [
        {
          img: "MaillotUltra2023.png",
          collection: "collection",
          name: "Maillot Ultra 2023",
          price: "60",
        },
        {
          img: "MaillotKC.png",
          collection: "collection",
          name: "Maillot The One",
          price: "70",
        },
        {
          img: "CapeKC.png",
          collection: "collection",
          name: "Drapeau The One",
          price: "20",
        },
        {
          img: "EcharpeKC.png",
          collection: "collection",
          name: "Écharpe The One",
          price: "30",
        },
      ],
    };
  },
  components: { SvgTarget },
};
</script>

<style scoped>
.lineGradient {
  background: linear-gradient(
    0.07deg,
    #111111 0.06%,
    rgba(42, 42, 42, 0) 58.15%
  );
}
</style>
