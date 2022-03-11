<template>
  <div class="tab-bar">
    <div class="tab-wrap">
      <p class="tab-home" @click="$router.push('/')">
        <i class="iconfont icon-home" style="display: inline-block; font-size: 0.4rem; margin-top: 0.16rem; margin-bottom: 0.06rem;"></i>
        <br />首页
      </p>
      <p @click="$router.push('/cart')">
        <i class="iconfont icon-gouwuche" style="display: inline-block; font-size: 0.4rem; margin-top: 0.16rem; margin-bottom: 0.06rem;"></i>
        <br />购物车
      </p>
      <p @click="$router.push('/user')">
        <i class="iconfont icon-my" style="display: inline-block; font-size: 0.4rem; margin-top: 0.16rem; margin-bottom: 0.06rem;"></i>
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
  // border-top: 1px solid #ccc;
  // opacity: 0.7;
  font-size: 0.24rem;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 0px 2px 0px rgba(210, 210, 210, 0.5);
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