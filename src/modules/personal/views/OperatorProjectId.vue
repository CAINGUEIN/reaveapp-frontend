<template>
  <div>
    <div
      class="relative w-full px-[60px] flex justify-center ring-b-2 border-Gravel pt-28"
    >
      <button
        class="border-b-2 flex-1 text-H4 pb-4"
        :class="
          select === 'Overview'
            ? 'border-White text-White'
            : 'border-Gravel text-Gravel hover:border-Cloud hover:text-Cloud'
        "
        @click="select = 'Overview'"
      >
        Overview
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
      <Overview
        :data="infoEvent"
        v-if="select === 'Overview' && infoEvent !== ''"
      ></Overview>
    </div>
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"></XButton60>
  </div>
</template>

<script>
import eventServices from "@axios/services/eventServices";
import XButton60 from "@components/buttons/XButton60.vue";
import Overview from "@components/projectId/overview/Overview.vue";
export default {
  data() {
    return {
      id: "",
      infoEvent: "",
      infoTicket: "",
      select: "Overview",
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
        this.infoTicket = result.data.data.soldTicket;
      }
    },
  },
  mounted() {
    this.getUrl();
  },
  components: { XButton60, Overview },
};
</script>

<style lang="scss" scoped></style>
