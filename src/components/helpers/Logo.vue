<template>
  <div class="logo-div">
    <span
      class="logo-title-name"
      >{{ name }}</span
    >
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Logo",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: info.logo_name
    };
  },
};
</script>

<style scoped>
.logo-title-name {
  font-size: 35px;
  font-weight: 500;
  transition: 0.5s all;
}
</style>
