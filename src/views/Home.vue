<template>
  <div class="home">
    <p>Home tab: {{ message }}</p>
    <AnalyticApps></AnalyticApps>
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src

import AnalyticApps from "@/components/AnalyticApps.vue";

export default {
  name: "Home",
  components: {
    AnalyticApps,
  },
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  mounted() {
    this.app = this.$store.getters.getCurrentApp;
  },
};
</script>
