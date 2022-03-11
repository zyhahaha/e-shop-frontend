<template>
  <div class="tab-bar">
    <div class="tab-wrap">
      <p class="tab-home" @click="$router.push('/')">
        <!-- <img src="@/assets/home/tab-ico-home-pre.png" alt /> -->
        <!-- <img v-if="path === '/'" src="@/assets/home/tab-ico-home-pre.png" alt>
        <img v-else src="@/assets/home/tab-ico-home-nor.png" alt>-->
        <br />首页
      </p>
      <p @click="$router.push('/cart')">
        <!-- <img src="@/assets/home/tab-ico-community-nor.png" alt /> -->
        <br />购物车
      </p>
      <p @click="$router.push('/user')">
        <!-- <img src="@/assets/home/tab-ico-me-nor.png" alt /> -->
        <!-- <img v-if="path === '/my'" src="@/assets/home/tab-ico-me-pre.png" alt>
        <img v-else src="@/assets/home/tab-ico-me-nor.png" alt>-->
        <br />我的
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabBar",
});
// eslint-disable-next-line vue/multi-word-component-names
// import { Component, Vue } from "vue-property-decorator";
// @Component
// export default class TabBar extends Vue {
//   public data() {
//     return {
//       path: this.$route.path,
//     };
//   }
//   private created() {}
// }
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  border-top: 1px solid #ccc;
  // opacity: 0.7;
  font-size: 0.24rem;
  background-color: #fff;
  text-align: center;
  // img {
  //   width: 0.28rem;
  // }
  .tab-wrap {
    display: flex;
    p {
      flex: 1;
    }
    img {
      width: 0.56rem;
    }
    .tab-home {
    }
  }
}
</style>