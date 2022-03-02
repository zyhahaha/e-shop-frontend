<template>
  <div>
    home
    <TabBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    TabBar,
  },
});
</script>

<style>
</style>