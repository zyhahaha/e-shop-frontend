<template>
  <div style="background-color: #F7F8FB;">
    <!-- <span @click="isShowMenu = true">home</span> -->
    <div>
      <!-- <p style="height: 150px; background-color: #ccc;"></p> -->
      <!-- <p style="height: 150px; background-color: #ccc;"></p> -->
      <div style="font-size: 0px;">
        <img src="@/assets/home/banner.png" alt="" style="width: 100%;">
      </div>
      <p class="recommend">- 热门推荐 -</p>
      <div>
        <GoodsList />
      </div>
    </div>
    <TabBar />
    <TabMenu :isShowMenu="isShowMenu" @changeMenuStateClose="isShowMenu = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue";
import TabMenu from "@/components/TabMenu.vue";
import GoodsList from "@/components/GoodsList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TabBar,
    TabMenu,
    GoodsList,
  },
  setup() {
    return {
      users: {},
      isShowMenu: false,
    };
  },
});
</script>
<style lang="scss" scoped>
.recommend {
  padding: 0.4rem 0px;
  margin: 0.16rem 0px;
  background-color: #fff;

  font-size: 0.24rem;
  text-align: center;
}
</style>

