<template>
  <div>
    user
    <TabBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "UserView",
  components: {
    TabBar,
  },
});
</script>

<style>
</style>