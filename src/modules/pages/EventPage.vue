<template>
  <div v-if="!loading" class="max-w-screen h-full scrollbarV">
    <div class="px-48">
      <!-- An attempt to a responsive page -->
      <div class="flex flex-row justify-center mt-8">
        <img
          :src="infoEvent.posterPic"
          class="rounded-2xl min-w-[400px] max-w-full max-h-[642px] h-fit"
        />
        <div class="flex flex-col ml-16">
          <div class="flex flex-[0.99] mt-[1.6vw] flex-col w-[24vw]">
            <div class="text-[2.5vw] 2xl:text-5xl text-white font-bold">
              {{ infoEvent.name }}
            </div>
            <div class="flex">
              <div class="flex flex-col w-full">
                <div class="flex gap-[0.625vw] items-center">
                  <ImgFormated
                    v-if="infoEvent"
                    :key="infoEvent.owner._id"
                    :size="'s'"
                    :src="infoSpace.picture"
                    :targetSpace="infoEvent.owner._id"
                    :type="'avatar'"
                    class="h-[1.6vw] w-[1.6vw] rounded-full bg-slate-300 my-[0.4vw]"
                  />
                  <div class="text-[0.83vw] text-white font-medium">
                    Organised by @{{ infoSpace.nameSpace }}
                  </div>
                </div>
                <button
                  class="text-black rounded-full h-[1.7vw] mt-[0.6vw] w-[8vw] bg-white flex"
                  @click="goTo()"
                >
                  <div class="flex items-center m-auto">
                    <SvgTarget
                      :target="'Tickets'"
                      color1="#000"
                      :height="(1 * windowWidth) / 100"
                      :width="(1 * windowWidth) / 100"
                      class="mr-[0.41vw]"
                    ></SvgTarget>
                    <h4 class="text-black text-[0.7vw] font-black">
                      Buy Tickets
                    </h4>
                  </div>
                </button>

                <div class="grid grid-cols-2 mt-10 gap-y-12 gap-x-16">
                  <div class="col-span-1">
                    <div class="flex flex-row">
                      <SvgTarget
                        :target="'Calendar'"
                        class="my-auto"
                        :height="windowWidth / 100"
                        :width="windowWidth / 100"
                      />
                      <p class="text-[0.83vw] font-medium my-auto pl-2">
                        Dates
                      </p>
                    </div>
                    <h3 class="text-[1.04vw] font-black">
                      {{ $dayjs(infoEvent.date).format("MM.DD.YYYY") }}
                    </h3>
                    <h3 class="text-[1.04vw] font-black">
                      at {{ $dayjs(infoEvent.date).format("hh:mm A") }}
                    </h3>
                  </div>
                  <div class="col-span-1">
                    <div class="flex flex-row">
                      <SvgTarget
                        :target="'Maps'"
                        class="my-auto"
                        :height="windowWidth / 100"
                        :width="windowWidth / 100"
                      />
                      <p class="text-[0.83vw] font-medium my-auto pl-2">
                        Location
                      </p>
                    </div>
                    <h3
                      class="text-[1.04vw] font-black"
                      v-if="infoEvent.venueName"
                    >
                      {{
                        infoEvent.venueName +
                        ", " +
                        infoEvent.adress +
                        ", " +
                        infoEvent.city +
                        ", " +
                        infoEvent.country
                      }}
                    </h3>
                    <h3 class="text-[1.04vw] font-black">Lieu inconnu</h3>
                  </div>
                  <div class="col-span-1">
                    <div class="flex flex-row">
                      <SvgTarget
                        :target="'Calendar'"
                        class="my-auto"
                        :height="windowWidth / 100"
                        :width="windowWidth / 100"
                      />
                      <p class="text-[0.83vw] font-medium my-auto pl-2">
                        Booking Time Left
                      </p>
                    </div>
                    <h3 class="text-[1.04vw] font-black">
                      {{ $dayjs(infoEvent.date).fromNow() }}
                    </h3>
                  </div>
                  <div class="col-span-1">
                    <div class="flex flex-row">
                      <SvgTarget
                        :target="'Bootcamps'"
                        class="my-auto"
                        :height="windowWidth / 100"
                        :width="windowWidth / 100"
                      />
                      <p class="text-[0.83vw] font-medium my-auto pl-2">
                        Remaining Seats
                      </p>
                    </div>
                    <h3 class="text-[1.04vw] font-black">
                      {{ this.infoEvent.ticketsRemaining }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex[0.01]">
            <div v-for="item in nav" :key="item" class="flex">
              <Button40Slot class="mr-[0.41vw]">
                <SvgTarget
                  class="m-auto flex-row"
                  :target="item.icon"
                  :width="20"
                  :height="20"
                ></SvgTarget>
              </Button40Slot>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row"></div>
      <div class="mt-18">
        <div class="w-full border-b-2 border-Gravel flex justify-around">
          <div class="-mb-0.5">
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'About'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'About'"
            >
              <p
                class="text-xl font-medium"
                :class="select === 'About' ? 'text-White' : 'hover:text-White'"
              >
                About
              </p>
            </button>
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'Format'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'Format'"
            >
              <p
                class="text-xl font-medium"
                :class="select === 'Format' ? 'text-White' : 'hover:text-White'"
              >
                Format
              </p>
            </button>
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'Venue'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'Venue'"
            >
              <p
                class="text-xl font-medium"
                :class="select === 'Venue' ? 'text-White' : 'hover:text-White'"
              >
                Venue
              </p>
            </button>
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'Products'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'Products'"
            >
              <p
                class="text-xl font-medium"
                :class="
                  select === 'Products' ? 'text-White' : 'hover:text-White'
                "
              >
                Products
              </p>
            </button>
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'People'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'People'"
            >
              <p
                class="text-xl font-medium"
                :class="select === 'People' ? 'text-White' : 'hover:text-White'"
              >
                People
              </p>
            </button>
          </div>
        </div>
      </div>

      <div>
        <EventIdAbout
          v-if="select === 'About'"
          :data="infoEvent"
          :spaceName="infoSpace.nameSpace"
        ></EventIdAbout>
        <EventIdFormat
          v-if="select === 'Format'"
          :data="infoEvent"
        ></EventIdFormat>
        <EventIdVenue
          v-if="select === 'Venue'"
          :data="infoEvent"
        ></EventIdVenue>
        <EventIdProducts
          v-if="select === 'Products'"
          :data="infoEvent"
        ></EventIdProducts>

        <EventIdPeople
          v-if="select === 'People'"
          :data="infoEvent"
        ></EventIdPeople>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button40Slot from "@components//buttons/Button40Slot.vue";
import EventIdAbout from "@modules/platforms/events/EventIdAbout.vue";
import EventIdFormat from "@modules/platforms/events/EventIdFormat.vue";
import EventIdVenue from "@modules/platforms/events/EventIdVenue.vue";
import EventIdProducts from "@modules/platforms/events/EventIdProducts.vue";
import EventIdPeople from "@modules/platforms/events/EventIdPeople.vue";

//services
import SvgTarget from "@components/SvgTarget.vue";
import ImgFormated from "@components/img/ImgFormated.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  dataEvent: Object,
  dataSpace: Object,
});

const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);
let nav = ref([
  { name: "Link", icon: "Link", target: "Link" },
  { name: "Share", icon: "Share", target: "Share" },
  { name: "Heart", icon: "Heart", target: "Heart" },
  { name: "Save", icon: "Save", target: "Save" },
]);
const loading = ref(true);
let infoEvent = ref(props.dataEvent);
let infoSpace = ref(props.dataSpace);
let select = ref("About");
const router = useRouter();

const goTo = () => {
  router.push({ name: "EventBuyTicket", params: { id: infoEvent.value._id } });
};

onMounted(() => {
  loading.value = false;
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  });
});
</script>

<style lang="scss" scoped></style>
