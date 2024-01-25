<template>
  <div class="h-full max-h-full overflow-auto scrollbarV">
    <div class="flex-1 h-full mx-[90px]">
      <DashboardLol
        v-if="view === 'dashboard' && option === 'lol'"
        class="w-full h-full"
        @action="(e) => (dataOptionWait = e)"
        :paramOptionGame="paramOptionGame"
      ></DashboardLol>
      <DashboardValo
        v-if="view === 'dashboard' && option === 'valo'"
        class="w-full h-full"
      ></DashboardValo>
      <DashboardOw
        v-if="view === 'dashboard' && option === 'ow'"
        class="w-full h-full"
      ></DashboardOw>
      <FriendsCalendar
        v-if="view === 'calendar'"
        class="w-full h-full my-auto"/>
    
      <MatchHistoryLol
        v-if="view === 'history' && option === 'lol'"
        class="w-full h-full"
      ></MatchHistoryLol>
      <MatchHistoryOw
        v-if="view === 'history' && option === 'ow'"
        class="w-full h-full"
      ></MatchHistoryOw>
      <MatchHistoryValo
        v-if="view === 'history' && option === 'valo'"
        class="w-full h-full"
      ></MatchHistoryValo>
      <Conceptor v-if="view === 'conceptor'" class="w-full h-full" />
      <PersonalWallet
        v-if="view === 'wallet'"
        class="w-full h-full"
        @action="changeView"
      ></PersonalWallet>
      <PersonalOperator
        v-if="view === 'operator'"
        class="w-full h-full"
      ></PersonalOperator>
      <PersonalWalletBallance
        v-if="view === 'walletBallance'"
        class="w-full h-full"
        @action="changeView"
      ></PersonalWalletBallance>
      <PersonalWalletInventory
        v-if="view === 'walletInventory'"
        class="w-full h-full"
        @action="changeView"
      ></PersonalWalletInventory>
      <PersonalWalletTransaction
        v-if="view === 'walletTransaction'"
        class="w-full h-full"
        @action="changeView"
      ></PersonalWalletTransaction>
    </div>
    <CreateCalendarEvent
      @isOpenModal="closeModal"
      :isOpenModal="isOpenModal"
      :data="data"
    />
  </div>
</template>

<script>
//component
import PersonalCalendar from "@modules/personal/views/PersonalCalendar.vue";
import FriendsCalendar from "@modules/friends/views/FriendsCalendar.vue";
import Conceptor from "@modules/tools/conceptor/Conceptor.vue";
import CreateCalendarEvent from "@core/components/modal/CreateCalendarEvent.vue";
import DashboardLol from "@modules/personal/views/DashboardLol.vue";
import DashboardValo from "@modules/personal/views/DashboardValo.vue";
import DashboardOw from "@modules/personal/views/DashboardOw.vue";
import MatchHistoryLol from "@modules/personal/views/MatchHistoryLol.vue";
import MatchHistoryOw from "@modules/personal/views/MatchHistoryOw.vue";
import MatchHistoryValo from "@modules/personal/views/MatchHistoryValo.vue";
import PersonalWalletBallance from "@modules/personal/views/PersonalWalletBallance.vue";
import PersonalWalletInventory from "@modules/personal/views/PersonalWalletInventory.vue";
import PersonalWalletTransaction from "@modules/personal/views/PersonalWalletTransaction.vue";

import PersonalWallet from "./PersonalWallet.vue";
//tool
import useStoreAuth from "@stores/auth";
//assets
import PersonalOperator from "../../operator/EventOperator.vue";

export default {
  components: {
    PersonalCalendar,
    CreateCalendarEvent,
    DashboardLol,
    DashboardValo,
    Conceptor,
    DashboardOw,
    FriendsCalendar,
    MatchHistoryLol,
    MatchHistoryOw,
    MatchHistoryValo,
    PersonalWallet,
    PersonalOperator,
    PersonalWalletBallance,
    PersonalWalletInventory,
    PersonalWalletTransaction,
  },
  data() {
    const store = useStoreAuth();
    return {
      view: "dashboard",
      option: "lol",
      store,
      space: "",
      isOpenModal: false,
      data: "",
      dataOptionGame: [{ slot: "ALL", value: "" }],
      paramOptionGame: {
        numberValue: "10",
        selectTypeValue: "match",
        selectChampionValue: "",
      },
      dataOptionWait: "",
    };
  },
  methods: {
    openModal(e) {
      console.log(e);
      this.isOpenModal = true;
      this.data = e;
    },
    closeModal() {
      this.isOpenModal = false;
    },
    setCompenentOptionGame(value) {
      let arrayStock = [{ slot: "ALL", value: "" }];
      for (let index = 0; index < value.length; index++) {
        arrayStock.push({ slot: value[index], value: value[index] });
      }
      this.dataOptionGame = arrayStock;
    },
    setParamOptionGame(value) {
      this.paramOptionGame = value;
    },
    goTo(target) {
      this.$router.push({ name: target, params: { view: "Events" } });
    },
    changeView(value) {
      this.view = value;
    },
    setUrl(value) {
      this.$router.replace({
        name: this.$route.name,
        params: { view: value },
      });
    },
    getUrl() {
      if (Object.keys(this.$route.params).length > 0) {
        this.view = this.$route.params.view;
      } else {
        this.view = "account";
      }
    },
  },
  watch: {
    dataOptionWait() {
      this.setCompenentOptionGame(this.dataOptionWait);
      console.log("dans le watcher");
    },
    view() {
      this.setUrl(this.view);
    },
    "$route.params.view"(newValue) {
      this.view = newValue;
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>
