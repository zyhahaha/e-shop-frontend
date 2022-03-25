<template>
  <div class="tab-bar">
    <div class="tab-wrap">
      <p class="tab-home" @click="$router.push('/')">
        <i
          :class="{active: tabType === 'home'}"
          class="iconfont icon-home"
          style="display: inline-block; font-size: 0.4rem; margin-top: 0.16rem; margin-bottom: 0.06rem;"
        ></i>
        <br />首页
      </p>
      <p @click="$router.push('/cart')">
        <i
          :class="{active: tabType === 'cart'}"
          class="iconfont icon-gouwuche"
          style="display: inline-block; font-size: 0.4rem; margin-top: 0.16rem; margin-bottom: 0.06rem;"
        ></i>
        <br />购物车
      </p>
      <p @click="$router.push('/user')">
        <i
          :class="{active: tabType === 'user'}"
          class="iconfont icon-my"
          style="display: inline-block; font-size: 0.4rem; margin-top: 0.16rem; margin-bottom: 0.06rem;"
        ></i>
        <br />我的
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRaw, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "TabBar",
  setup() {
    const route = useRoute();
    const name = toRaw(route).name;
    const tabType = ref(name);
    return {
      tabType,
    };
  },
});
</script>

<style lang="scss" scoped>
.active {
  color: #157658;
}
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  font-size: 0.24rem;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 0px 2px 0px rgba(210, 210, 210, 0.5);
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