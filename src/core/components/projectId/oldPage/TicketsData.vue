<template>
  <div>
    <div class="w-full pr-16 relative">
      <Button40Slot
        v-if="(yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished"
        :selected="edit"
        class=""
        @click="edit === true ? (edit = false) : (edit = true)"
        ><PencilIcon class="h-5 m-auto"></PencilIcon
      ></Button40Slot>
      <div
        v-if="edit && (yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished"
        class="rounded-xl mt-8"
      >
        <PersonalDateModel
        class="mt-8"
          v-model="openingDate.value"
          :data="openingDate"
        ></PersonalDateModel>
        <p>Applies to all ticket categories.</p>

        <button
          :class="ifUpdating() ? 'bg-white' : 'bg-Gravel cursor-not-allowed'"
          class="text-black rounded-full h-10 px-10 mx-auto mt-6"
          @click.prevent="update()"
        >
          <h4 class="text-black">Format</h4>
        </button>
      </div>
      <div class="w-full mt-8" v-else>
        <p class="font-black text-xl text-white">
          {{ openingDate.label }}
        </p>
        <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
          {{
            openingDate.value === ""
              ? "Empty"
              : $dayjs(openingDate.value).format("dddd DD MMMM YYYY HH:mm")
          }}
        </p>
        <p>Applies to all ticket categories.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronUpIcon, PencilIcon } from "@heroicons/vue/outline";
import EventServices from "@axios/services/eventServices";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import PersonalDateModel from "@components/inputs/PersonalDateModel.vue";
export default {
  components: {
    PencilIcon,
    Button40Slot,
    ChevronUpIcon,
    PersonalDateModel,
  },
  props: ["data", "yourPerm"],
  emits: ["update:modelValue"],
  data() {
    return {
      openingDate: {
        //ici les data a passer dans le personaldate
        label: "Opening date",
        name: "openingDate",
        value: "",
        //yearsBefore et yearAfter doit etre egal a zero au minimum
        yearsBefore: 0,
        yearAfter: 5,
      },
      errors: [],
      edit: false,
    };
  },
  methods: {
    setEdit() {
      if (!this.openingDate.value) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    ifUpdating() {
      if (this.openingDate.value !== this.data.openDate) {
        return true;
      } else {
        return false;
      }
    },
    async update() {
      let body = {
        event_id: this.data._id,
        openDate: this.openingDate.value,
      };
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.edit = false;
      } else {
        this.errors.push(result.data.errors);
        this.eventDate.value = this.data.eventDate;
      }
    },
  },
  watch: {},
  mounted() {
    this.data.openDate ? (this.openingDate.value = this.data.openDate) : "";
    this.setEdit();
  },
};
</script>

<style lang="scss" scoped></style>
