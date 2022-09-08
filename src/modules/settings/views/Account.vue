<template>
  <div>
    <h4>EDIT PROFILE</h4>
    <p><span class="text-Red">*</span> indicates required</p>
    <Identity @action="openModal" />
  </div>
</template>

<script>
import Identity from "../../../core/components/settings/account/Identity.vue";
export default {
  components: { Identity },
  methods: {
    openModal(e) {
      this.$emit("action", e);
    },
  },
};
</script>
