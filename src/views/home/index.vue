<template>
  <div>
    <span @click="isShowMenu = true">home</span>
    <TabBar />
    <TabMenu :isShowMenu="isShowMenu" @changeMenuStateClose="isShowMenu = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue";
import TabMenu from "@/components/TabMenu.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TabBar,
    TabMenu
  },
  setup(){
    return {
      users: {},
      isShowMenu: false
    }
  }
});
</script>

