<template>
  <div class="flex max-h-screen max-w-screen overflow-hidden">
    <div
      class="w-[360px] bg-DarkRock pl-[30px] max-h-fit pt-6 overflow-hidden flex flex-col sticky top-0 left-0 bottom-0"
    >
      <Reave class="absolute top-[45px] left-[42px]" />
      <div
        name="NavBar"
        class="mt-[108px] pb-5 hover:overflow-auto overflow-hidden scrollbarV"
      >
        <div class="flex flex-col mt-4 items-start">
          <div name="userSettings" class="mb-8">
            <p class="mb-2 text-[20px] text-White font-black pl-6">
              USER SETTINGS
            </p>
            <BtnSettings
              :txtBtn="'Account'"
              :view="view"
              v-model="view"
              :target="'account'"
            />
            <BtnSettings
              :txtBtn="'Privacy & Safety'"
              :view="view"
              v-model="view"
              :target="'privacy'"
            />
            <BtnSettings
              :txtBtn="'Accessibility'"
              :view="view"
              v-model="view"
              :target="'accessibility'"
            />
            <BtnSettings
              :txtBtn="'Activity'"
              :view="view"
              v-model="view"
              :target="'activity'"
            /><BtnSettings
              :txtBtn="'Connections'"
              :view="view"
              v-model="view"
              :target="'connections'"
            />
            <BtnSettings
              :txtBtn="'Home Page'"
              :view="view"
              v-model="view"
              :target="'homePage'"
            /><BtnSettings
              :txtBtn="'Feed Settings'"
              :view="view"
              v-model="view"
              :target="'feedSettings'"
            />
            <BtnSettings
              :txtBtn="'Request Setting'"
              :view="view"
              v-model="view"
              :target="'requestSettings'"
            />
            <BtnSettings
              :txtBtn="'Calendar Settings'"
              :view="view"
              v-model="view"
              :target="'calendarSettings'"
            />
          </div>
          <div name="appSettings" class="mb-8">
            <h3>APP SETTINGS</h3>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'appearance'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'appearance' ? (view = '') : (view = 'appearance')
              "
            >
              Appearance
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'audioVideo'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'audioVideo' ? (view = '') : (view = 'audioVideo')
              "
            >
              Audio & Video
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'textVisuals'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'textVisuals' ? (view = '') : (view = 'textVisuals')
              "
            >
              Text & Visuals
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'notifications'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'notifications'
                  ? (view = '')
                  : (view = 'notifications')
              "
            >
              Notifications
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'keybinds'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'keybinds' ? (view = '') : (view = 'keybinds')"
            >
              Keybinds
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'language'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'language' ? (view = '') : (view = 'language')"
            >
              Language
            </button>
          </div>
          <div name="aiSettings" class="mb-8">
            <h3>AI SETTINGS</h3>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'status'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'status' ? (view = '') : (view = 'status')"
            >
              Status
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'gameOverlay'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'gameOverlay' ? (view = '') : (view = 'gameOverlay')
              "
            >
              Game Overlay
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'maps'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'maps' ? (view = '') : (view = 'maps')"
            >
              Maps
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'health'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'health' ? (view = '') : (view = 'health')"
            >
              Health
            </button>
          </div>
          <div name="economicSettings" class="mb-8">
            <h3>ECONOMIC SETTINGS</h3>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'reaveCoins'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'reaveCoins' ? (view = '') : (view = 'reaveCoins')
              "
            >
              Reave Coins
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'subscriptions'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'subscriptions'
                  ? (view = '')
                  : (view = 'subscriptions')
              "
            >
              Subscriptions
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'paymentBilling'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'paymentBilling'
                  ? (view = '')
                  : (view = 'paymentBilling')
              "
            >
              Payment & Billing
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'walletInventory'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'walletInventory'
                  ? (view = '')
                  : (view = 'walletInventory')
              "
            >
              Wallet & Inventory
            </button>
          </div>
          <div name="reave" class="mb-8">
            <h3>REAVE</h3>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'whoWhy'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'whoWhy' ? (view = '') : (view = 'whoWhy')"
            >
              Who we are & Why
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'connections'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'culture' ? (view = '') : (view = 'culture')"
            >
              Our internal Culture
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'nextEvents'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'nextEvents' ? (view = '') : (view = 'nextEvents')
              "
            >
              Next Events
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'badges'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'badges' ? (view = '') : (view = 'badges')"
            >
              Badges
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'products'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'products' ? (view = '') : (view = 'products')"
            >
              Products
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'patchNotes'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="
                view === 'patchNotes' ? (view = '') : (view = 'patchNotes')
              "
            >
              Patch Notes
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'feedback'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'feedback' ? (view = '') : (view = 'feedback')"
            >
              Give us feedback
            </button>
            <button
              class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5"
              :class="
                view === 'tutorials'
                  ? 'bg-Stone text-White'
                  : 'text-gravel hover:bg-Rock hover:text-LightGrey'
              "
              @click="view === 'tutorials' ? (view = '') : (view = 'tutorials')"
            >
              Tutorials
            </button>
          </div>

          <button
            class="font-medium text-[20px] h-[38px] w-[300px] text-left pl-6 rounded-lg mb-0.5 text-Ruby hover:bg-Ruby hover:text-White"
            
            @click="openModal('logout')"
          >
            Log out
          </button>
        </div>
      </div>
      <div class="absolute inset-0 pointer-events-none rounded-xl"></div>
    </div>

    <div name="content" class="relative flex-1 pt-6">
      <button @click="goBack" class="absolute right-6 top-6 z-10">X</button>
      <Account v-if="view === 'account'" @action="openModal" />
    </div>
    <ModalSettings
      @isOpenModal="closeModal"
      :isOpenModal="isOpenModal"
      :target="target"
    />
  </div>
</template>

<script>
import DeleteAccount from "./DeleteAccount.vue";
import UpdateAccount from "./UpdateAccount.vue";
import Reave from "@core/assets/icons/Reave.vue";
import Account from "./Account.vue";
import ModalSettings from "@core/components/settings/ModalSettings.vue";
import BtnSettings from "@core/components/settings/BtnSettings.vue";
export default {
  components: {
    DeleteAccount,
    UpdateAccount,
    Reave,
    Account,
    ModalSettings,
    BtnSettings,
  },
  data() {
    return {
      view: "",
      isOpenModal: false,
      target: "",
    };
  },
  methods: {
    openModal(e) {
      this.isOpenModal = true;
      this.target = e;
    },
    closeModal() {
      this.isOpenModal = false;
      this.target = "";
    },
    goBack() {
      this.$router.back();
    },
    setUrl(value) {
      this.$router.replace({
        name: this.$route.name,
        params: { view: value }
      })
    },
    getUrl () {
      if (Object.keys(this.$route.params).length > 0) {
        this.view = this.$route.params.view
      } else {
        this.view = 'account'
      }
    },
  },
  watch: {
    view() {
      this.setUrl(this.view)
    }
  },
  mounted () {
    this.getUrl();
  },
};
</script>
