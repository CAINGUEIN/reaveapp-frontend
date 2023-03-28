<template>
  <div class="w-[732px] mx-auto">
    <div class="my-9">
      <div class="flex justify-between">
        <p class="font-bold text-xl text-white">Organising</p>
        <p class="font-normal text-sm text-LightGrey">
          View all Organised Events
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-6">
        <div
          v-for="(card, index) in data"
          :class="index <= data.length - 3 ? 'hidden' : ''"
        >
          <CardsEvents :data="card"></CardsEvents>
        </div>
      </div>
    </div>
    <div class="w-full h-0.5 bg-LightRock"></div>
    <div class="my-9">
      <div class="flex justify-between">
        <p class="font-bold text-xl text-white">Playing</p>
        <p class="font-normal text-sm text-LightGrey">View all Matches</p>
      </div>
      <div class="mx-4">
          <div class="flex items-center mt-6">
            <SvgTarget target="LOLIcon"></SvgTarget>
            <div class="w-[128px] h-0.5 bg-LightRock mx-4"></div>
          </div>
          <div class="grid grid-cols-2 gap-10 mt-6 pr-6">
            <div v-for="item in playingGrid.lol" class="flex justify-between">
              <img :src="'/img/KarmineCorp/Events/' + item.event" alt="" />
              <div>
                <p class="text-2xl font-black text-Cloud">{{ item.date[0] }} <span class="text-lg font-black text-Cloud">{{ item.date[1] }} </span></p>
                <p class="text-xs text-LightGrey">{{ item.date[2] }} </p>
              </div>
                  <img class="my-auto" :src="'/img/KarmineCorp/Events/' + item.team1" alt="" />
                  <p class="my-auto text-xs text-LightGrey">VS </p>
                  <img class="my-auto" :src="'/img/KarmineCorp/Events/' + item.team2" alt="" />
            </div>
          </div>
          <div class="flex items-center mt-6">
            <SvgTarget target="VALOIcon"></SvgTarget>
            <div class="w-[128px] h-0.5 bg-LightRock mx-4"></div>
          </div>
          <div class="grid grid-cols-2 gap-10 mt-6 pr-6">
            <div v-for="item in playingGrid.valo" class="flex justify-between">
              <img :src="'/img/KarmineCorp/Events/' + item.event" alt="" />
              <div>
                <p class="text-2xl font-black text-Cloud">{{ item.date[0] }} <span class="text-lg font-black text-Cloud">{{ item.date[1] }} </span></p>
                <p class="text-xs text-LightGrey">{{ item.date[2] }} </p>
              </div>
                  <img class="my-auto" :src="'/img/KarmineCorp/Events/' + item.team1" alt="" />
                  <p class="my-auto text-xs text-LightGrey">VS </p>
                  <img class="my-auto" :src="'/img/KarmineCorp/Events/' + item.team2" alt="" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardsEvents from "@components/profile/elements/CardsEvents.vue";
import SvgTarget from "@components/SvgTarget.vue";
export default {
  components: {
    CardsEvents,
    SvgTarget,
  },
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      playingGrid: {
        lol: [
          {
            event: "LFL.png",
            date: ["6:00", "pm", "June 12th 2024"],
            team1: "KCORP.png",
            team2: "G2.png",
          },
          {
            event: "LFL.png",
            date: ["6:00", "pm", "June 12th 2024"],
            team1: "KCORP.png",
            team2: "VITALITY.png",
          },
          {
            event: "LFL.png",
            date: ["8:00", "pm", "June 14th 2024"],
            team1: "KCORP.png",
            team2: "FNATIC.png",
          },
        ],
        valo: [
          {
            event: "VCT_FR.png",
            date: ["7:00", "pm", "June 13th 2024"],
            team1: "KCORP.png",
            team2: "NAVI.png",
          },
          {
            event: "VCT_FR.png",
            date: ["9:00", "pm", "June 15th 2024"],
            team1: "KCORP.png",
            team2: "G2.png",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
