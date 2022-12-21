<template>
  <div class="w-full">
    <div class="flex h-72 bg-[#808080] rounded-2xl mx-8"></div>
    <div class="h-32 flex -mt-16">
      <div class="m-auto flex w-1/4">
        <label for="search" class="sr-only">Search</label>
        <div
          class="relative bg-DarkRock text-white border-White m-2 flex rounded-full items-center justify-between h-15 w-full"
        >
        <div class="flex">
          <SearchIcon
            class="h-10 w-10 p-2 z-10 my-auto ml-3 text-Gravel rounded-full"
            aria-hidden="true"
          />
          <input
            id="search"
            class="bg-DarkRock block h-15 border-transparent focus:ring-0 border-0 rounded-full text-White placeholder-Gravel"
            placeholder="Search"
            type="search"
            name="search"
          />
        </div>
          <Button50Slot class="mr-3 flex"
            ><AdjustmentsIcon
              class="h-12 w-12 p-2 m-auto -rotate-90"
            ></AdjustmentsIcon
          ></Button50Slot>
        </div>
      </div>
      <button
        class="bg-white h-15 rounded-full py-2 px-8 my-auto mr-24"
        @click.prevent="open = true"
      >
        <h5 class="text-black font-bold">Start an Event</h5>
      </button>
    </div>

    <div name="content" class="m-8">
      <ul
        role="list"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  3xl:grid-cols-5"
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
import ModalClear from "@core/components/modal/ModalClear.vue";
import CreateEvent from "@modules/marketPlace/event/views/CreateEvent.vue";
import EventCard from "@modules/marketPlace/event/views/EventCard.vue";
import EventServices from "@axios/services/eventServices";
//tool
import { AdjustmentsIcon, SearchIcon } from "@heroicons/vue/outline";
import useStoreAuth from "@stores/auth";
import Button50Slot from "@components/buttons/Button50Slot.vue";

export default {
  components: {
    SearchIcon,
    ModalClear,
    CreateEvent,
    EventCard,
    Button50Slot,
    AdjustmentsIcon,
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
