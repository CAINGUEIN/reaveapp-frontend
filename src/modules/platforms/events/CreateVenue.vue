<!-- This is used to create a venue profile -->

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
        <h4 class="text-center">How do you want to</h4>
        <h4 class="text-center">name this venue ?</h4>
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
          <p class="text-black font-bold">Create</p>
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
        placeholder: String,
        name: {
          label: "VENUE NAME",
          name: "name",
          type: "text",
          value: "",
          placeholder: " ",
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
        type: "Venue",
      };
        console.log('voici le ', submitData);
        //faire le submit
        let result = await EventServices.createVenue(submitData);
        if (result.data.success) {
          console.log(result.data.data);
           this.$router.push({
            name: "VenueId",
            params: { id: result.data.data._id },
          });
        }
         else {
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
  