<template>
  <div class="goods-list">
    <!-- <GoodsItem v-for="(item, key) in goodsList" :key="key" /> -->
    <div class="container l-class">
      <!-- <image bind:tap="onMore" class="title" src="{{theme.title_img}}"></image> -->
      <div scroll-x class="scroll-view">
        <div class="inner">
          <!-- <block wx:for="{{spuList}}" wx:key="index"> -->
          <div bind:tap="onTap" class="spu-container">
            <!-- <image class="spu-img" src="{{item.img}}"></image> -->
            <p class="goods-img"></p>
            <span class="spu-text">title</span>
            <span class="price-value price-unit">123</span>
            <!-- <l-price
                                l-value-class="price-value"
                                l-unit-class="price-unit"
                                value="{{p.mainPrice(item.price,item.discount_price).price}}">
            </l-price>-->
          </div>
          <!-- </block> -->
        </div>
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
.goods-img {
  width: 2rem;
  height: 2rem;
  background-color: #ccc;
}

/* components/spu-scroll/index.wxss */
.container {
  box-sizing: border-box;
  width: 100%;
  padding: 0.42rem 0 0.34rem 0.28rem;
  background-color: #ffffff;
}

.title {
  width: 0.694rem;
  height: 0.9rem;
}

.price-unit {
  font-size: 0.24rem !important;
  color: #157658 !important;
}

.price-value {
  font-size: 0.26rem !important;
  color: #157658 !important;
}

.scroll-view {
  margin-top: 0.28rem;
  display: flex;
  flex-direction: row;
}

.inner {
  display: flex;
  flex-direction: row;
}

.spu-container {
  margin-right: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spu-text {
  font-size: 0.2rem;
  color: #666666;
  margin-top: 0.2rem;
}

.spu-img {
  width: 0.16rem;
  height: 0.16rem;
}
</style>