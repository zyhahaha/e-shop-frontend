<template>
  <div>
    <p class="carousel">
      <img src="http://121.4.102.246:7001/e-shop/goods/goods-04.jpg" alt="" />
    </p>
    <div class="info">
      <div class="info-inner">
        <p class="info-inner__title">海氏海诺 创口贴</p>
        <p class="info-inner__subtitle">该产品主要用于真皮浅层及其以上的浅表性小创伤、擦伤等,为浅表创面、皮肤损伤提供愈合环境。</p>
        <p class="info-inner__price">¥ 68</p>
      </div>
    </div>
    <!-- 优惠券 -->
    <div class="coupon">
      <div class="coupon-inner"></div>
    </div>
    <!-- 描述 -->
    <div class="description">
      <ul class="description-inner">
        <li>
          品牌：国产
        </li>
        <li>
          发货地：上海
        </li>
        <li>
          物流：顺丰及中通、圆通
        </li>
      </ul>
    </div>
    <!-- 图文详情 -->
    <div class="detail"></div>
    <!-- pay -->
    <div class="ctrl">
      <div class="ctrl-left"></div>
      <div class="ctrl-right">
        <p class="ctrl-right__cart">加入购物车</p>
        <p class="ctrl-right__buy">立即购买</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'GoodsDetail'
}
</script>

<style lang="scss" scoped>
.carousel {
  height: 6.8rem;
  background-color: #ccc;
  img {
    width: 100%;
    max-height: 100%;
  }
}
.info {
  padding: 0.26rem 0.3rem 0.3rem;
  &-inner {
    &__title {
      font-size: 0.32rem;
      font-weight: bold;
    }
    &__subtitle {
      margin-top: 0.18rem;
      margin-bottom: 0.34rem;
      color: #999;
    }
    &__price {
      font-size: 0.44rem;
      font-weight: bold;
      color: #157658;
    }
  }
}
.coupon {
  background-color: #F5F5F5;
  padding: 0.2rem 0rem;
  &-inner {
    height: 0.88rem;
    background-color: #fff;
  }
}
.description {
  padding: 0.1rem;
  margin-bottom: 0.1rem;
  &-inner {
    padding: 0.3rem;
    border: 2px dotted #DCEBE6;
    border-radius: 1px;
    li {
      padding: 0.24rem 0rem;
      border-bottom: 1px solid #DCEBE6;
      &:last-child {
        border: 0px;
        padding-bottom: 0px;
      }
    }
  }
}
.detail {
  height: 6rem;
  background-color: #ccc;
}
.ctrl {
  position: fixed;
  bottom: 0rem;
  display: flex;
  width: 100%;
  height: 1rem;
  &-left {
    width: 2.2rem;
    height: 100%;
    background-color: #fff;
  }
  &-right {
    flex: 1;
    display: flex;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 0.32rem;
    p {
      flex: 1;
    }
    &__cart {
      background-color: #333;
    }
    &__buy {
      background-color: #157658;
    }
  }
}
</style>