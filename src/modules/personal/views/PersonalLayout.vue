<template>
  <div>
    <nav
      class="sticky top-[102px] left-0 right-0 z-20 h-15 min-w-max bg-Anthracite"
    >
    <div class="flex justify-between bg-DarkRock rounded-full items-center">
      <div name="space-name" class="flex ml-4">
        <img
          src="https://via.placeholder.com/36"
          alt=""
          class="rounded-full my-auto"
        />
        <h4 class="ml-4">{{ store.dataAccount.userName }}</h4>
      </div>
      <LolOptionDashboard
        v-if="view === 'dashboard' && option === 'lol'"
        :dataOptionGame="dataOptionGame"
        @actionParam="(e) => setParamOptionGame(e)"
      />
      <div
        v-if="view === 'dashboard' || view === 'tree' || view === 'history'"
        name="select-game"
        class="flex bg-LightRock rounded-full"
      >
        <ToolsButtonNav
          :target="''"
          :btnName="'lol'"
          :dataClass="'logoGame'"
          :comparTarget="option"
          @click="option = 'lol'"
        >
          <LeagueOfLegend />
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'ow'"
          :dataClass="'logoGame'"
          :comparTarget="option"
          @click="option = 'ow'"
        >
          <Overwatch />
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'valo'"
          :dataClass="'logoGame'"
          :comparTarget="option"
          @click="option = 'valo'"
        >
          <Valorant />
        </ToolsButtonNav>
      </div>
      <div name="icon" class="flex">
        <ToolsButtonNav
          :target="''"
          :btnName="'dashboard'"
          :dataClass="'spaceIcon'"
          :comparTarget="view"
          @click="view = 'dashboard'"
        >
          <Dashboard />
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'tree'"
          :dataClass="'spaceIcon'"
          :comparTarget="view"
          @click="view = 'tree'"
        >
          <Tree />
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'calendar'"
          :dataClass="'spaceIcon'"
          :comparTarget="view"
          @click="view = 'calendar'"
        >
          <Calendar />
          <div class="absolute text-[11px] font-black bottom-[18px]">
            {{ this.$dayjs().format("D") }}
          </div>
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'history'"
          :dataClass="'spaceIcon'"
          :comparTarget="view"
          @click="view = 'history'"
        >
          <MatchHistory />
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'cloud'"
          :dataClass="'spaceIcon'"
          :comparTarget="view"
          @click="view = 'cloud'"
        >
          <Cloud />
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'notifs'"
          :dataClass="'spaceIcon'"
          :comparTarget="view"
          @click="view = 'notifs'"
        >
          <Notification />
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'wallet'"
          :dataClass="'spaceIcon'"
          :comparTarget="view"
          @click="view = 'wallet'"
        >
          <Wallet />
        </ToolsButtonNav>
        <ToolsButtonNav
          :target="''"
          :btnName="'championPass'"
          :dataClass="'spaceIcon'"
          :comparTarget="view"
          @click="view = 'championPass'"
        >
          <ChampionPass />
        </ToolsButtonNav>
      </div></div>
    </nav>
    <div class="flex-1 flex">
      <DashboardLol
        v-if="view === 'dashboard' && option === 'lol'"
        class="w-full"
        @action="(e) => dataOptionWait = e"
        :paramOptionGame="paramOptionGame"
      ></DashboardLol>
      <DashboardValo
        v-if="view === 'dashboard' && option === 'valo'"
        class="w-full"
      ></DashboardValo>
      <DashboardOw
        v-if="view === 'dashboard' && option === 'ow'"
        class="w-full"
      ></DashboardOw>
      <PersonalCalendar
        v-if="view === 'calendar'"
        class="w-full"
        @action="(e) => openModal(e)"
      ></PersonalCalendar>
      <MatchHistoryLol
        v-if="view === 'history' && option === 'lol'"
        class="w-full"
      ></MatchHistoryLol>
      <MatchHistoryOw
        v-if="view === 'history' && option === 'ow'"
        class="w-full"
      ></MatchHistoryOw>
      <MatchHistoryValo
        v-if="view === 'history' && option === 'valo'"
        class="w-full"
      ></MatchHistoryValo>
    </div>
    <CreateCalendarEvent
      @isOpenModal="closeModal"
      :isOpenModal="isOpenModal"
      :data="data"
    />
  </div>
</template>

<script>
//TODO: pensé a faire un systeme de sauvegarde du lieu de navigation
// passé en query le lieu pour si on recharge et que les variable de navigation sont vide
// la recup dans lURL si rien mettre a la page de garde

//component
import PersonalCalendar from "@modules/personal/views/PersonalCalendar.vue";
import PersonalSpacePage from "@modules/personal/views/PersonalSpacePage.vue";
import CreateCalendarEvent from "@core/components/modal/CreateCalendarEvent.vue";
import DashboardLol from "@modules/personal/views/DashboardLol.vue";
import DashboardValo from "@modules/personal/views/DashboardValo.vue";
import DashboardOw from "@modules/personal/views/DashboardOw.vue";
import MatchHistoryLol from "@modules/personal/views/MatchHistoryLol.vue";
import MatchHistoryOw from "@modules/personal/views/MatchHistoryOw.vue";
import MatchHistoryValo from "@modules/personal/views/MatchHistoryValo.vue";
import LolOptionDashboard from "@core/components/layout/LolOptionDashboard.vue";
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
//tool
import useStoreAuth from "@stores/auth";
//assets
import Dashboard from "@assets/icons/Dashboard.vue";
import Tree from "@assets/icons/Tree.vue";
import Calendar from "@assets/icons/Calendar.vue";
import MatchHistory from "@assets/icons/MatchHistory.vue";
import Cloud from "@assets/icons/Cloud.vue";
import Notification from "@assets/icons/Notification.vue";
import Wallet from "@assets/icons/Wallet.vue";
import ChampionPass from "@assets/icons/ChampionPass.vue";
import LeagueOfLegend from "@assets/icons/LeagueOfLegend.vue";
import Overwatch from "@assets/icons/Overwatch.vue";
import Valorant from "@assets/icons/Valorant.vue";

export default {
  components: {
    PersonalCalendar,
    PersonalSpacePage,
    CreateCalendarEvent,
    DashboardLol,
    DashboardValo,
    DashboardOw,
    MatchHistoryLol,
    MatchHistoryOw,
    MatchHistoryValo,
    LolOptionDashboard,
    ToolsButtonNav,
    Dashboard,
    Tree,
    Calendar,
    MatchHistory,
    Cloud,
    Notification,
    Wallet,
    ChampionPass,
    LeagueOfLegend,
    Overwatch,
    Valorant,
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
      dataOptionWait:"",
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
  },
  watch: {
    dataOptionWait() {
      this.setCompenentOptionGame(this.dataOptionWait)
      console.log("dans le watcher");
    }
  },
};
</script>
