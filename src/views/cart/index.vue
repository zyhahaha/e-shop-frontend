<template>
  <div>
    <ul class="goods">
      <li class="goods-item">
        <p class="goods-img"></p>
        <div class="goods-item__wrap">
          <p class="name">百搭短袖T恤 百搭短袖T恤 百搭短袖…</p>
          <p class="spec">黑色；圆领款；M(165)</p>
          <p class="price">¥ 239</p>
        </div>
      </li>
      <li class="goods-item">
        <p class="goods-img"></p>
        <div class="goods-item__wrap">
          <p class="name">百搭短袖T恤 百搭短袖T恤 百搭短袖…</p>
          <p class="spec">黑色；圆领款；M(165)</p>
          <p class="price">¥ 239</p>
        </div>
      </li>
      <li class="goods-item">
        <p class="goods-img"></p>
        <div class="goods-item__wrap">
          <p class="name">百搭短袖T恤 百搭短袖T恤 百搭短袖…</p>
          <p class="spec">黑色；圆领款；M(165)</p>
          <p class="price">¥ 239</p>
        </div>
      </li>
    </ul>
    <!-- bottom -->
    <div class="count">
      <span class="count-selected">已选（3）</span>
      <p class="count-btn">结算</p>
      <p class="count-price">合计 <span>¥127</span></p>
    </div>
    <TabBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "CartView",
  components: {
    TabBar,
  },
});
</script>

<style lang="scss" scoped>
.goods-img {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  // background-color: #ccc;
}
.goods {
  &-item {
    padding: 0.30rem;
    border-bottom: 1px solid #F5F5F5;
    &__wrap {
      display: inline-block;
      height: 1.6rem;
      margin-left: 0.30rem;
      vertical-align: top;
      .spec {
        display: inline-block;
        padding: 0.08rem;
        margin: 0.14rem 0rem 0.32rem;
        font-size: 0.20rem;
        color: #999;
        background-color: #F3F3F3;
      }
      .price {
        color: #157658;
        font-weight: bold;
      }
    }
  }
}
.count {
  position: fixed;
  bottom: 1rem;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(210, 210, 210, 0.5);
  p {
    display: inline-block;
    float: right;
  }
  &-selected {
    margin-left: 0.9rem;
    font-size: 0.24rem;
  }
  &-price {
    font-weight: bold;
    span {
      margin-left: 0.2rem;
      font-size: 0.32rem;
      color: #157658;
    }
  }
  &-btn {
    margin-left: 0.14rem;
    width: 2rem;
    background-color: #157658;
    color: #fff;
    text-align: center;
  }
}
</style>