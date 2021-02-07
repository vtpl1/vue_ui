<template>
  <div id="app" class="container">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'DeeperLook',
  components: {
    Header
  }
}
</script>
<style>

</style>
