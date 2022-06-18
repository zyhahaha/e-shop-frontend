<template>
  <div>
    <p class="carousel" @click="$router.push('/coupon')">
      <img  src="@/assets/banner2.png" alt="" style="height: 6.8rem" />
    </p>
    <div class="info">
      <div class="info-inner">
        <p class="info-inner__title">
          北欧风简约 四角柜子 原木深白色 给你极致的生活体验
        </p>
        <p class="info-inner__subtitle">简约风格的街头感，潮流穿搭。</p>
        <p class="info-inner__price">¥ 699</p>
      </div>
    </div>
    <!-- 优惠券 -->
    <div class="coupon" @click="$router.push('/coupon/get')">
      <div class="coupon-inner">
        <div style="float: left;">
          <p>满999减100元券</p>
          <p>满1699减200元券</p>
        </div>
        <span>立即领取</span>
      </div>
    </div>
    <!-- 描述 -->
    <div class="description">
      <ul class="description-inner">
        <li>品牌: YASAKO</li>
        <li>发货地：上海</li>
        <li>发货时间：七个工作日内</li>
        <li>
          售后：本商品支持7天无理由退换。如有质量问题，请在签收后24小时内联系客服处理。
        </li>
      </ul>
    </div>
    <!-- 图文详情 -->
    <div class="detail">
      <img src="@/assets/banner2.png" alt="" />
    </div>
    <!-- pay -->
    <div class="ctrl">
      <div class="ctrl-left">
        <div class="ctrl-left__home" @click="$router.push('/')">
          <img src="@/assets/home-logo.png" alt="" />
          <p>首页</p>
        </div>
        <div class="ctrl-left__cart" @click="$router.push('/cart')">
          <img src="@/assets/home-logo.png" alt="" />
          <p>购物车</p>
          <div class="ctrl-left__cart--count">
            <p>4</p>
          </div>
        </div>
      </div>
      <div class="ctrl-right">
        <p class="ctrl-right__cart" @click="isShowCard = true">加入购物车</p>
        <p class="ctrl-right__buy" @click="isShowCard = true">立即购买</p>
      </div>
    </div>

    <!-- 弹窗 -->
    <GoodsCard v-if="isShowCard" @onHideCard="isShowCard = false" />
  </div>
</template>

<script>
import GoodsCard from "./components/card.vue";
export default {
  name: "GoodsDetail",
  components: {
    GoodsCard,
  },
  data() {
    return {
      isShowCard: false,
    };
  },
};
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
  background-color: #f5f5f5;
  padding: 0.2rem 0rem;
  &-inner {
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #fff;
    padding: 0rem 0.3rem;
    position: relative;
    overflow: hidden;
    p {
      display: inline-block;
      width: 2.2rem;
      height: 0.48rem;
      line-height: 0.48rem;
      font-size: 0.2rem;
      color: #157658;
      background-color: #dcebe6;
      margin-right: 0.2rem;
      text-align: center;
    }
    span {
      font-size: 0.24rem;
      color: rgb(214, 75, 75);
      float: right;
    }
  }
}
.description {
  padding: 0.1rem;
  margin-bottom: 0.1rem;
  &-inner {
    padding: 0.3rem;
    border: 2px dotted #dcebe6;
    border-radius: 1px;
    li {
      padding: 0.24rem 0rem;
      border-bottom: 1px solid #dcebe6;
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
    padding-left: 0.3rem;
    text-align: center;
    font-size: 0.2rem;
    color: #999999;
    &__home {
      float: left;
      position: fixed;
      bottom: 0.12rem;
    }
    &__cart {
      position: relative;
      bottom: -0.12rem;
      margin-left: 0.6rem;
      &--count {
        width: 0.26rem;
        height: 0.26rem;
        line-height: 0.26rem;
        border-radius: 50%;
        background-color: #9e2731;
        position: absolute;
        top: -0.05rem;
        right: 0.5rem;
        text-align: center;
        p{
          font-size: 0.18rem;
          color: #fff;

        }
      }
    }
    img {
      width: 0.32rem;
    }
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