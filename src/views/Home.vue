<template>
  <div class="home">
    <p>Home tab</p>
    <AnalyticApps></AnalyticApps>
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
};
</script>
