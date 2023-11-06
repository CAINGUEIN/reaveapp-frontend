<template>
  <div class="bg-Black p-6 rounded-lg text-center flex flex-col">
    <button
      class="text-right hover:border-2 hover:border-Stone w-auto absolute top-7 right-7"
      @click="$emit('close')"
    >
      X
    </button>
    <h3>How do you want to name this Space?</h3>
    <InputModel
      class="mt-4"
      :data="name"
      v-model="name.value"
      :errors="errors"
    ></InputModel>
    <button
      class="bg-white h-15 rounded-full p-4 px-8 mx-auto mt-4"
      @click.prevent="submit()"
    ></button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
});

const name = {
  label: "Room name",
  name: "name",
  type: "text",
  value: "",
};

const submit = async () => {
  this.errors = {};
  let submitData = {
    name: this.name.value,
    type: "space",
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
};
</script>
