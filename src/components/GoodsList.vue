<template>
  <div class="goods-list">
    <div class="goods-item">
      <p class="goods-img"></p>
      <div style="padding: 0.16rem">
        <P class="goods-title">北欧简约立式台灯</P>
        <P class="goods-pic">¥ 298</P>
        <P class="goods-subtitle">简约北欧风，单色立式台灯搭配性冷淡风格</P>
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
  padding: 0.2rem 0.2rem 2rem;
}
.goods-img {
  width: 100%;
  height: 3rem;
  background-color: #ccc;
}

.goods-item {
  // border: 2px solid #ddd;
  border-radius: 0.1rem;
  box-shadow: 0px 0px 3px 0px rgba(221, 221, 221, 0.5);

  width: 50%;
  text-align: left;

  background-color: #fff;
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