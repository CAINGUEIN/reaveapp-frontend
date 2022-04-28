<template>
  <div>
    <div name="block-messages">
      
      <div name="form-message">
        <InputModel
          class="mt-8"
          :data="message"
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
import InputModel from "../input/InputModel.vue";
import ToolsButtonSubmit from "../../../support/toolsBox/ToolsButtonSubmit.vue";

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
