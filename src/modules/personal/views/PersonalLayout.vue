<template>
  <div>
    <nav
      class="mt-2 flex h-16 min-w-max justify-between items-center bg-DarkRock rounded-full"
    >
      <div name="space-name" class="flex flex-1 ml-4">
        <img
          src="http://via.placeholder.com/36"
          alt=""
          class="rounded-full my-auto"
        />
        <h4 class="ml-2">{{ store.dataAccount.userName }}</h4>
      </div>
      <div
        v-if="view === 'dashboard' || view === 'tree' || view === 'history'"
        name="select-game"
        class="flex bg-Rock rounded-full"
      >
        <img
          src="../../../core/assets/icons/League Of Legends.svg"
          alt=""
          class="h-16 w-16 p-4 hover:bg-Stone hover:brightness-200 rounded-full"
          :class="
            option === 'lol'
              ? 'brightness-150 hover:brightness-150 bg-Stone'
              : ''
          "
          @click="option = 'lol'"
        /><img
          src="../../../core/assets/icons/Overwatch.svg"
          alt=""
          class="h-16 w-16 p-4 hover:bg-Stone hover:brightness-200 rounded-full"
          :class="
            option === 'ow'
              ? 'brightness-150 hover:brightness-150 bg-Stone'
              : ''
          "
          @click="option = 'ow'"
        /><img
          src="../../../core/assets/icons/Valorant.svg"
          alt=""
          class="h-16 w-16 p-4 hover:bg-Stone hover:brightness-200 rounded-full"
          :class="
            option === 'valo'
              ? 'brightness-150 hover:brightness-150 bg-Stone'
              : ''
          "
          @click="option = 'valo'"
        />
      </div>
      <div name="icon" class="flex justify-end flex-1 mr-4">
        <TemplateIcon
          class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
          :class="view === 'dashboard' ? 'text-White bg-Stone ' : ''"
          @click="view = 'dashboard'"
        ></TemplateIcon>
        <ShareIcon
          class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
          :class="view === 'tree' ? 'text-White bg-Stone ' : ''"
          @click="view = 'tree'"
        ></ShareIcon>
        <CalendarIcon
          class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
          :class="view === 'calendar' ? 'text-White bg-Stone ' : ''"
          @click="view = 'calendar'"
        ></CalendarIcon>
        <ClipboardListIcon
          class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
          :class="view === 'history' ? 'text-White bg-Stone ' : ''"
          @click="view = 'history'"
        ></ClipboardListIcon>
        <LightningBoltIcon
          class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
          :class="view === 'notifications' ? 'text-White bg-Stone ' : ''"
          @click="view = 'notifications'"
        ></LightningBoltIcon>
        <FolderAddIcon
          class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
          :class="view === 'wallet' ? 'text-White bg-Stone ' : ''"
          @click="view = 'wallet'"
        ></FolderAddIcon>
        <MapIcon
          class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
          :class="view === 'pass' ? 'text-White bg-Stone ' : ''"
          @click="view = 'pass'"
        ></MapIcon>
      </div>
    </nav>
    <div class="flex-1 flex">
      <DashboardLol
        v-if="view === 'dashboard' && option === 'lol'"
        class="w-full"
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
      <MatchHistory
        v-if="view === 'history' && option === 'lol'"
        class="w-full"
      ></MatchHistory>
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

import useStoreAuth from "../../../plugins/stores/auth";
import PersonalCalendar from "./PersonalCalendar.vue";
import PersonalSpacePage from "./PersonalSpacePage.vue";
import CreateCalendarEvent from "../../../core/components/modal/CreateCalendarEvent.vue";
import {
  ShareIcon,
  MapIcon,
  LightningBoltIcon,
  TemplateIcon,
  FolderAddIcon,
  CalendarIcon,
  ClipboardListIcon,
} from "@heroicons/vue/outline";
import DashboardLol from "./DashboardLol.vue";
import DashboardValo from "./DashboardValo.vue";
import DashboardOw from "./DashboardOw.vue";
import UsersServices from "../services/userServices";
import MatchHistory from "./MatchHistory.vue";

export default {
  components: {
    PersonalCalendar,
    PersonalSpacePage,
    CreateCalendarEvent,
    CalendarIcon,
    MapIcon,
    LightningBoltIcon,
    FolderAddIcon,
    ClipboardListIcon,
    TemplateIcon,
    ShareIcon,
    DashboardLol,
    DashboardValo,
    DashboardOw,
    MatchHistory,
  },
  data() {
    const store = useStoreAuth();
    return {
      view: "chat",
      option: "lol",
      store,
      space: "",
      isOpenModal: false,
      data: "",
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
    async feadLastMatch() {
      let result = await UsersServices.feadLastMatch();
      //le bute est de faire une verification des dernier match a chaque mounted de la page
      this.store.setter(result.data.data, "ListLastMatchLol");
      //la push dans le store
      //voir a mettre un CD
    },
  },
  mounted() {
    this.feadLastMatch();
  },
};
</script>
