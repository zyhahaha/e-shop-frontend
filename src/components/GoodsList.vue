<template>
  <div class="goods-list">
    <div class="goods-item" @click="$router.push('goods')">
      <p class="goods-img"></p>
      <div style="padding: 0.16rem">
        <p class="goods-title">北欧简约立式台灯</p>
        <p class="goods-pic">¥ 298</p>
        <p class="goods-subtitle">简约北欧风，单色立式台灯搭配性冷淡风格</p>
      </div>
    </div>
    <div class="goods-item" @click="$router.push('goods')">
      <p class="goods-img"></p>
      <div style="padding: 0.16rem">
        <p class="goods-title">北欧简约立式台灯</p>
        <p class="goods-pic">¥ 298</p>
        <p class="goods-subtitle">简约北欧风，单色立式台灯搭配性冷淡风格</p>
      </div>
    </div>
    <div class="goods-item" @click="$router.push('goods')">
      <p class="goods-img"></p>
      <div style="padding: 0.16rem">
        <p class="goods-title">北欧简约立式台灯</p>
        <p class="goods-pic">¥ 298</p>
        <p class="goods-subtitle">简约北欧风，单色立式台灯搭配性冷淡风格</p>
      </div>
    </div>
    <div class="goods-item" @click="$router.push('goods')">
      <p class="goods-img"></p>
      <div style="padding: 0.16rem">
        <p class="goods-title">北欧简约立式台灯</p>
        <p class="goods-pic">¥ 298</p>
        <p class="goods-subtitle">简约北欧风，单色立式台灯搭配性冷淡风格</p>
      </div>
    </div>
    <div class="goods-item" @click="$router.push('goods')">
      <p class="goods-img"></p>
      <div style="padding: 0.16rem">
        <p class="goods-title">北欧简约立式台灯</p>
        <p class="goods-pic">¥ 298</p>
        <p class="goods-subtitle">简约北欧风，单色立式台灯搭配性冷淡风格</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import GoodsItem from "./GoodsItem.vue";

export default defineComponent({
  name: "GoodsList",
  components: {
    // GoodsItem,
  },
  setup(props) {
    return {
      goodsList: [{}],
    };
  },
});
</script>

<style lang="scss" scoped>
.goods-list {
  overflow: hidden;
  padding: 0.2rem 0.2rem 2rem;
}

.goods-item {
  box-sizing: border-box;
  float: left;
  padding-right: 0.2rem;
  margin-bottom: 0.28rem;
  border-radius: 0.1rem;
  box-shadow: 0px 0px 3px 0px rgba(221, 221, 221, 0.5);

  width: 50%;
  text-align: left;

  background-color: #fff;
}
.goods-img {
  width: 100%;
  height: 3rem;
  background-color: #ccc;
}
.goods-title {
  font-size: 0.28rem;
  color: #333;
}
.goods-pic {
  padding: 0.1rem;
  font-size: 0.32rem;
  color: #157658;
  font-weight: bold;
}
.goods-subtitle {
  font-size: 0.24rem;
  color: #999;
  line-height: 0.36rem;
}
</style>