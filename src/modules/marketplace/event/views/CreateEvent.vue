<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="(etape = etape - 1), (select = '')"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>
    <button
      class="absolute right-0 rounded-full px-3 z-10"
      @click.prevent="closeModal()"
    >
      <h2 class="text-white">X</h2>
    </button>
    <div class="pt-12 flex flex-col" v-if="etape === 1">
      <h4 class="text-center">Start a Project</h4>
      <button
        @click="(category = 'event'), (etape = 2)"
        class="bg-img1 rounded-xl pl-8 text-left text-white h-15 mt-4"
      >
        <h4>Event</h4>
      </button>
      <button
        @click="(category = 'venue'), (etape = 2)"
        class="bg-img2 rounded-xl pl-8 text-left text-white h-15 mt-4"
      >
        <h4>Venue</h4>
      </button>
      <button
        @click="(category = 'bootcamp'), (etape = 2)"
        class="bg-img3 rounded-xl pl-8 text-left text-white h-15 mt-4"
      >
        <h4>Bootcamp</h4>
      </button>
      <button
        @click="(category = 'shard'), (etape = 2)"
        class="bg-img4 rounded-xl pl-8 text-left text-white h-15 mt-4"
      >
        <h4>Shard</h4>
      </button>

      <!-- list des project type -->
    </div>

    <div class="pt-12 flex flex-col space-y-4" v-if="etape === 2">
      <h4 class="text-center">What type of Event?</h4>
      <button
        @click="(type.value = 'spectacle'), (etape = 3)"
        class="bg-img1 rounded-xl pl-8 text-left text-white h-15 mt-4"
      >
        <h4>Spectacle</h4>
      </button>
      <button
        @click="(type.value = 'tournament'), (etape = 3)"
        class="bg-img2 rounded-xl pl-8 text-left text-white h-15 mt-4"
      >
        <h4>Tournament</h4>
      </button>
      <button
        @click="(type.value = 'festival'), (etape = 3)"
        class="bg-img3 rounded-xl pl-8 text-left text-white h-15 mt-4"
      >
        <h4>Festival</h4>
      </button>
      <button
        @click="(type.value = 'ceremony'), (etape = 3)"
        class="bg-img4 rounded-xl pl-8 text-left text-white h-15 mt-4"
      >
        <h4>Ceremony</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col" v-if="etape === 3">
      <h4 class="text-center">What’s the name of</h4>
      <h4 class="text-center">your {{ type.value }}?</h4>
      <InputModel
        class="mt-4"
        :data="name"
        v-model="name.value"
        :errors="errors"
      ></InputModel>
      <button
        class="bg-white h-15 rounded-full p-4 px-8 mx-auto mt-4"
        @click.prevent="submit()"
      >
        <p class="text-black font-bold">continue</p>
      </button>
    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import EventServices from "@axios/services/eventServices";
export default {
  components: { InputModel },
  data() {
    return {
      name: {
        label: "Project name",
        name: "name",
        type: "text",
        value: "",
      },
      type: {
        label: "Event type",
        name: "orga",
        type: "text",
        value: "",
      },
      category: "",
      etape: 1,
      errors: {},
    };
  },
  methods: {
    async submit() {
      this.errors = {};
      let submitData = {
        name: this.name.value,
        type: this.type.value,
      };
      //faire le submit
      let result = await EventServices.createEvent(submitData);
      if (result.data.success) {
        console.log(result.data.data);
        this.$router.push({
          name: "ProjectId",
          params: { id: result.data.data._id },
        });
      } else {
        this.errors = result.data.data.errors;
      }
    },
    closeModal() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss" scoped></style>
