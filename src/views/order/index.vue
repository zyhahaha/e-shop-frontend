<template>
  <div class="order">
    <div class="address"></div>
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
      <p class="count-price">
        合计
        <span>¥127</span>
      </p>
      <p class="count-btn">提交订单</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderView",
};
</script>
<style lang="scss" scoped>
.address {
  height: 2rem;
  background-color: #ccc;
}
.goods-img {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  // background-color: #ccc;
}
.goods {
  &-item {
    padding: 0.3rem;
    border-bottom: 1px solid #f5f5f5;
    &__wrap {
      display: inline-block;
      height: 1.6rem;
      margin-left: 0.3rem;
      vertical-align: top;
      .spec {
        display: inline-block;
        padding: 0.08rem;
        margin: 0.14rem 0rem 0.32rem;
        font-size: 0.2rem;
        color: #999;
        background-color: #f3f3f3;
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
  bottom: 0rem;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(210, 210, 210, 0.5);
  &-price {
    float: left;
    margin-left: 0.3rem;
    font-weight: bold;
    span {
      margin-left: 0.2rem;
      font-size: 0.32rem;
      color: #157658;
    }
  }
  &-btn {
    float: right;
    // margin-left: 0.14rem;
    width: 2rem;
    background-color: #157658;
    color: #fff;
    text-align: center;
  }
}
</style>
