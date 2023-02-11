<template>
  <div class="overflow-y-auto h-screen">
    <div
      class="relative w-full px-[60px] flex justify-center ring-b-2 border-Gravel pt-28"
    >
      <button
        class="border-b-2 flex-1 text-H4 pb-4"
        :class="
          select === 'Venue'
            ? 'border-White text-White'
            : 'border-Gravel text-Gravel hover:border-Cloud hover:text-Cloud'
        "
        @click="select = 'Venue'"
      >
        Venue
      </button>
      <button
        class="border-b-2 flex-1 text-H4 pb-4"
        :class="
          select === 'Staff'
            ? 'border-White text-White'
            : 'border-Gravel text-Gravel hover:border-Cloud hover:text-Cloud'
        "
        @click="select = 'Staff'"
      >
        Staff
      </button>
      <button
        class="border-b-2 flex-1 text-H4 pb-4"
        :class="
          select === 'Logistics'
            ? 'border-White text-White'
            : 'border-Gravel text-Gravel hover:border-Cloud hover:text-Cloud'
        "
        @click="select = 'Logistics'"
      >
        Logistics
      </button>
      <button
        class="border-b-2 flex-1 text-H4 pb-4"
        :class="
          select === 'Marketing'
            ? 'border-White text-White'
            : 'border-Gravel text-Gravel hover:border-Cloud hover:text-Cloud'
        "
        @click="select = 'Marketing'"
      >
        Marketing
      </button>
      <button
        class="border-b-2 flex-1 text-H4 pb-4"
        :class="
          select === 'Customers'
            ? 'border-White text-White'
            : 'border-Gravel text-Gravel hover:border-Cloud hover:text-Cloud'
        "
        @click="select = 'Customers'"
      >
        Customers
      </button>
      <button
        class="border-b-2 flex-1 text-H4 pb-4"
        :class="
          select === 'Analytics'
            ? 'border-White text-White'
            : 'border-Gravel text-Gravel hover:border-Cloud hover:text-Cloud'
        "
        @click="select = 'Analytics'"
      >
        Analytics
      </button>
      <button
        class="border-b-2 flex-1 text-H4 pb-4"
        :class="
          select === 'Finance'
            ? 'border-White text-White'
            : 'border-Gravel text-Gravel hover:border-Cloud hover:text-Cloud'
        "
        @click="select = 'Finance'"
      >
        Finance
      </button>
    </div>
    <div name="content" class="w-full px-[60px] mt-10">
      <Venue
        :yourPerm="yourPerm"
        :data="infoEvent"
        v-if="select === 'Venue' && infoEvent !== ''"
      ></Venue>
      <Staff
        :yourPerm="yourPerm"
        :data="infoEvent"
        @update="updateData"
        v-if="select === 'Staff' && infoEvent !== ''"
      ></Staff>
      <Logistics
        :yourPerm="yourPerm"
        :data="infoEvent"
        @update="updateData"
        v-if="select === 'Logistics' && infoEvent !== ''"
      ></Logistics>
      <Marketing
        :yourPerm="yourPerm"
        :data="infoEvent"
        @update="updateData"
        v-if="select === 'Marketing' && infoEvent !== ''"
      ></Marketing>
      <Analytics
        :yourPerm="yourPerm"
        :data="infoEvent"
        @update="updateData"
        v-if="select === 'Analytics' && infoEvent !== ''"
      ></Analytics>
    </div>
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"></XButton60>
    <div v-if="infoEvent !== ''" class="absolute left-6 top-6 z-10 flex">
      <Naming :yourPerm="yourPerm" class="flex" :data="infoEvent"></Naming>
      <Button40Slot
        v-if="(yourPerm === 'Owner' || yourPerm === 'Admin') && !infoEvent.isPublished"
        class="mt-1 mx-4"
        @click="open = true"
        ><SpeakerphoneIcon class="h-5 m-auto"></SpeakerphoneIcon
      ></Button40Slot>
    </div>
    <ModalClear :open="open" @action="close()">
      <Published :data="infoEvent" @action="close"></Published>
    </ModalClear>
  </div>
</template>

<script>
//components
import XButton60 from "@components/buttons/XButton60.vue";
import Naming from "@components/projectId/Naming.vue";
import Staff from "@components/projectId/staff/Staff.vue";
import Venue from "@components/projectId/venue/Venue.vue";
import Logistics from "@components/projectId/logistics/Logistics.vue";
import Button40Slot from "@components//buttons/Button40Slot.vue";
import Marketing from "@components/projectId/marketing/Marketing.vue";
import Analytics from "@components/projectId/analytics/Analytics.vue";
import ModalClear from "@components/modal/ModalClear.vue";
import Published from "@components/modal/projectId/Published.vue";
//tool
import useStoreAuth from "@stores/auth";
//services
import eventServices from "@axios/services/eventServices";
import { SpeakerphoneIcon } from "@heroicons/vue/outline";
export default {
  components: {
    XButton60,
    Naming,
    Venue,
    Staff,
    Logistics,
    Marketing,
    Button40Slot,
    SpeakerphoneIcon,
    ModalClear,
    Published,
    Analytics,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      id: "",
      infoEvent: "",
      select: "Venue",
      index: 1,
      yourPerm: "",
      open: false,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getUrl() {
      if (Object.keys(this.$route.params).length > 0) {
        this.id = this.$route.params.id;
        this.feadData();
      } else {
        this.goBack();
      }
    },
    async feadData() {
      let body = { _id: this.id };
      let result = await eventServices.dataEvent(body);
      if (result.data.success) {
        this.infoEvent = result.data.data;
        this.perm();
      }
    },
    updateData() {
      //relance un feadData pour mettre a jour
      this.feadData();
    },
    perm() {
      //verif du grade de perm sur certaine route cela est aussi en back
      //a mettre dans les composant qui on besoin de connaitre la perm du user
      let _id = this.store.dataAccount._id;
      console.log(this.infoEvent.staff, _id);
      if (this.infoEvent.owner.user_id._id == _id) {
        this.yourPerm = "Owner";
      } else if (this.matchArray(this.infoEvent.staff, _id)) {
        this.infoEvent.staff.forEach((element) => {
          if (element.staff_id._id === _id) {
            this.yourPerm = element.permission;
          }
        });
      } else {
        this.goBack();
      }
      console.log(this.yourPerm);
    },
    matchArray(array, value) {
      //une fonction helper
      let match = false;
      array.forEach((element) => {
        if (element.staff_id._id === value) {
          match = true;
        }
      });
      return match;
    },
    close(value) {
      this.open = false;
      if (value === "update") {
        this.updateData();
      }
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped></style>
