<template>
  <div class="w-full">
    <div class="w-full bg-[#808080] h-0.5"></div>
    <div class="h-32 flex">
      <div class="m-auto flex">
        <label for="search" class="sr-only">Search</label>
        <div
          class="relative bg-LightRock text-white border-White m-2 flex rounded-full h-15"
        >
          <input
            id="search"
            class="bg-LightRock block w-40 h-15 border-transparent focus:ring-0 border-0 rounded-full text-White placeholder-Gravel"
            placeholder="Any Esport game"
            type="search"
            name="search"
          />
          <input
            id="search"
            class="bg-LightRock block w-40 h-15 border-transparent focus:ring-0 border-0 rounded-full text-White placeholder-Gravel"
            placeholder="Anywhere"
            type="search"
            name="search"
          />
          <input
            id="search"
            class="bg-LightRock block w-40 h-15 border-transparent focus:ring-0 border-0 rounded-full text-White placeholder-Gravel"
            placeholder="Anytime"
            type="search"
            name="search"
          /><SearchIcon
            class="h-10 w-10 p-2 z-10 my-auto mr-3 bg-white text-black rounded-full"
            aria-hidden="true"
          />
        </div>
      </div>
      <button
        class="bg-white h-15 rounded-full p-4 my-auto mr-24"
        @click.prevent="open = true"
      >
        <p class="text-black font-bold">Start an Event</p>
      </button>
    </div>
    <div class="w-full bg-[#808080] h-0.5"></div>

    <div name="content" class="m-8">
      <ul
        role="list"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 ml:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6"
      >
        <EventCard
          v-for="card in dataCards"
          :key="card._id"
          @reload="feadDataCards"
          class="col-span-1 flex flex-col divide-y divide-LightRock rounded-lg bg-Rock text-center shadow"
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
import ModalClear from "@core/components/modal/ModalClear.vue";
import CreateEvent from "@modules/marketPlace/event/views/CreateEvent.vue";
import EventCard from "@modules/marketPlace/event/views/EventCard.vue";
import EventServices from "@axios/services/eventServices";
//tool
import { SearchIcon } from "@heroicons/vue/outline";
import useStoreAuth from "@stores/auth";

export default {
  components: { SearchIcon, ModalClear, CreateEvent, EventCard },
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
      let result = await EventServices.listEvent();
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
