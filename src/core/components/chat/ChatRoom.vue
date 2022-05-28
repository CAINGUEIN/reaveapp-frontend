<template>
  <div>
    <div name="block-messages">
      
      <div name="form-message" class="flex">
        <InputModel
          class=""
          :data="message"
          @keyup.enter="submit"
          v-model="message.value"
        />
        <ToolsButtonSubmit
          @action="submit"
          txtButton="Envoyer"
          :color="message.value === '' ? 'desactivated' : ''"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputModel from "../inputs/InputModel.vue";
import ToolsButtonSubmit from "../buttons/ToolsButtonSubmit.vue";

export default {
  components: { InputModel, ToolsButtonSubmit },
  data() {
    return {
      message: {
        label: "Message",
        name: "message",
        type: "text",
        value: "",
      },
    };
  },
  methods: {
    submit() {
        if (!this.message.value) {
            alert("enter un message")
            return
        }
        this.$emit("action", this.message.value)
        this.message.value = ""
    },
  },
};
</script>
