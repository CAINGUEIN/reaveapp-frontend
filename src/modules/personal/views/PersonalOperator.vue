<template>
  <div class="flex flex-wrap overflow-auto">
    <div class="h-20 w-full flex justify-evenly">
      <button
        class="bg-White text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White m-auto"
        @click.prevent="open = true"
      >
        <PlusIcon class="mx-2 h-5 w-5" />
      </button>
    </div>
    <div name="leftContent" class="w-1/5 max-w-2/5"></div>
    <div name="rightContent" class="w-4/5 max-w-3/5 space-y-4">
      <div
        v-for="item in data"
        class="w-full bg-Rock rounded-lg"
        @click="goTo(item._id)"
      >
        <h3>{{ item.name }}</h3>
        <div class="flex justify-between">
          <h3>{{ item.ticket }}/ {{ item.ticket + item.soldTicket.length }}</h3>
          <h3 class="ml-4">
            Nombre de tickets vendu {{ item.soldTicket.length }} pour
            {{ item.price * item.soldTicket.length }} coin de revenue
          </h3>
        </div>
      </div>
    </div>
    <ModalClear :open="open" @action="close()">
      <CreateEvent @action="close()"></CreateEvent>
    </ModalClear>
  </div>
</template>

<script>
//component
import ModalClear from "@core/components/modal/ModalClear.vue";
import InputModel from "@components/inputs/InputModel.vue";
import WalletCard from "@components/eventCardContent/WalletCard.vue";
//services
import EventServices from "@axios/services/eventServices";
//tool
import useStoreAuth from "@stores/auth";
import { PlusIcon } from "@heroicons/vue/solid";
import CreateEvent from "../../marketPlace/event/views/CreateEvent.vue";

export default {
  components: { ModalClear, InputModel, WalletCard, PlusIcon, CreateEvent },
  data() {
    const store = useStoreAuth();
    return {
      open: false,
      store,
      errors: {},
      data: "",
    };
  },
  methods: {
    close() {
      this.open = false;
    },
    goTo(target) {
      this.$router.push({ name: "ProjectId", params: { id: target } });
    },
    async searchEventOperator() {
      //recup de toute les datas dans les event qui on pour owner le id du user
      let result = await EventServices.searchPersonalEventOperator();
      if (result.data.success) {
        this.data = result.data.data;
      }
    },
  },
  mounted() {
    this.searchEventOperator();
  },
};
</script>
