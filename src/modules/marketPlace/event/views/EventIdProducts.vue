<template>
  <div class="my-14 w-[90%] max-w-[1260] mx-auto">
    <div class="my-9">
      <h2 class="text-5xl font-medium">Drops</h2>
      <div class="grid grid-cols-4 gap-6 mt-8">
        <div v-for="item in drops" class="h-full w-full">
          <img :src="'/img/KarmineCorp/Products/' + item.img" alt="" class="" />
          <div
            class="absolute lineGradient top-0 bottom-0 left-0 right-0"
          ></div>
          <div class="absolute bottom-4 left-4">
            <p class="text-xl font-bold text-white">{{ item.name }}</p>
            <p class="text-3xl font-black text-white">
              {{ item.price }}<span>€</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-9">
      <h2 class="text-5xl font-medium">Merch</h2>
      <div class="grid grid-cols-4 gap-6 mt-8">
        <div v-for="item in merch" class="h-full w-full">
          <img :src="'/img/KarmineCorp/Products/' + item.img" alt="" class="" />
          <div
            class="absolute lineGradient top-0 bottom-0 left-0 right-0"
          ></div>
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
</template>

<script>
import Products from "@components/profile/view/Products.vue";
import SvgTarget from "@components/SvgTarget.vue";

export default {
  components: {
    Products,
    SvgTarget,
  },
  props: ["data"],
  data() {
    return {
      LolState: true,
      ValoState: true,
      drops: [
        { img: "LECSkinBundle.png", name: "LEC Skin Bundle", price: "100" },
        { img: "SakenMVPSkin.png", name: "Saken MVP Skin", price: "40" },
        { img: "Group7839.png", name: "Karmine Corp Charm", price: "20" },
      ],
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
