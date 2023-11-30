<template>
  <div class="px-[144px] w-full max-h-full overflow-auto scrollbarV pb-8">
    <div class="h-72 bg-[#808080] rounded-2xl flex">
      <div class="flex absolute -bottom-7 w-full">
        <div class="mx-auto w-1/3 flex">
          <label for="search" class="sr-only">Search</label>
          <div
            class="relative bg-DarkRock text-white border-White flex rounded-full items-center justify-between h-15 w-full"
          >
            <div class="flex">
              <SearchIcon
                class="h-10 w-10 p-2 z-10 my-auto ml-3 text-Gravel rounded-full"
                aria-hidden="true"
              />
              <input
                id="search"
                class="bg-DarkRock block h-15 border-transparent focus:ring-0 border-0 rounded-full text-White placeholder-Gravel text-xl font-medium"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
            <Button50Slot class="mr-[5px] flex bg-LightRock rounded-full"
              ><AdjustmentsIcon
                class="h-12 w-12 p-2 m-auto -rotate-90"
              ></AdjustmentsIcon
            ></Button50Slot>
          </div>
        </div>
      </div>
    </div>

    <div name="filters" class="w-[40%] flex mx-auto mt-20 mb-14 justify-between">
      <div class="flex flex-col items-center">
        <SvgTarget :height="40" :width="40" target="Eye"></SvgTarget>
        <p class="mt-3 text-white font-bold">Spectacles</p>
      </div>
      <div class="flex flex-col items-center">
        <SvgTarget
          :height="40"
          :width="40"
          color1="#808080"
          target="Fist"
        ></SvgTarget>
        <SvgTarget
          :height="40"
          :width="40"
          target="SOON"
          class="absolute"
        ></SvgTarget>
        <p class="mt-3 text-Gravel font-bold">Tournaments</p>
      </div>
      <div class="flex flex-col items-center">
        <SvgTarget
          :height="40"
          :width="40"
          color1="#808080"
          target="Museum"
        ></SvgTarget>
        <SvgTarget
          :height="40"
          :width="40"
          target="SOON"
          class="absolute"
        ></SvgTarget>
        <p class="mt-3 text-Gravel font-bold">Ceremonies</p>
      </div>
      <div class="flex flex-col items-center">
        <SvgTarget
          :height="40"
          :width="40"
          color1="#808080"
          target="Stars"
        ></SvgTarget>
        <SvgTarget
          :height="40"
          :width="40"
          target="SOON"
          class="absolute"
        ></SvgTarget>
        <p class="mt-3 text-Gravel font-bold">Festivals</p>
      </div>
    </div>

    <div name="content" class="">
      <ul
        role="list"
        class="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5"
      >
        <EventCard
          v-for="card in dataCards"
          :key="card._id"
          @reload="feadDataCards"
          class="col-span-1 flex flex-col rounded-lg text-center"
          :data="card"
        ></EventCard>
      </ul>
    </div>
    <ModalClear :open="open" @action="close()">
      <CreateEvent @action="close()"></CreateEvent>
    </ModalClear>
  </div>
</template>

<script>
//component
import ModalClear from "@components/modal/ModalClear.vue";
import CreateEvent from "@modules/platforms/events/CreateEvent.vue";
import EventCard from "@modules/platforms/events/EventCard.vue";
import EventServices from "@axios/services/eventServices";
//tool
import { AdjustmentsIcon, SearchIcon } from "@heroicons/vue/outline";
import useStoreAuth from "@stores/auth";
import Button50Slot from "@components/buttons/Button50Slot.vue";
import SvgTarget from "@components/SvgTarget.vue";

export default {
  components: {
    SearchIcon,
    ModalClear,
    CreateEvent,
    EventCard,
    Button50Slot,
    AdjustmentsIcon,
    SvgTarget,
  },
  data() {
    const store = useStoreAuth();
    return {
      open: false,
      store,
      errors: {},
      dataCards: {},
    };
  },
  methods: {
    close() {
      this.open = false;
    },
    //faire la route pour recup les data d'event de base recup les 20 prochaines
    async feadDataCards() {
      let result = await EventServices.listCurrentEvent();
      if (result.data.success) {
        this.dataCards = result.data.data;
      } else {
        this.errors = result.data.data.errors;
      }
    },
  },
  mounted() {
    this.feadDataCards();
  },
};
</script>

<style lang="scss" scoped></style>
