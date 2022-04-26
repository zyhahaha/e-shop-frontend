<template>
  <div class="order">
    <ul class="nav">
      <li :class="{ active: orderType === 1 }">全部</li>
      <li>待付款</li>
      <li>待发货</li>
      <li>已发货</li>
      <li>已完成</li>
    </ul>
    <div class="content">
      <ul class="goods">
        <!-- <div style="height: 0.2rem;">
          <p class="date"></p>
          <p class="status">已完成</p>
        </div>-->
        <li class="goods-item">
          <p class="goods-img">
            <img src="http://121.4.102.246:7001/e-shop/goods/goods-04.jpg" alt="" />
          </p>
          <div class="goods-item__wrap">
            <p class="name">海氏海诺 创口贴</p>
            <p class="spec">6片装(165)</p>
            <p class="price">¥ 68</p>
          </div>
        </li>
        <li class="goods-item">
          <p class="goods-img">
            <img src="http://121.4.102.246:7001/e-shop/goods/goods-03.jpg" alt="" />
          </p>
          <div class="goods-item__wrap">
            <p class="name">999 复方百部止咳糖浆</p>
            <p class="spec">100ml*1瓶/盒</p>
            <p class="price">¥ 58</p>
          </div>
        </li>
      </ul>

      <p class="recommend" style="margin-bottom: 0px; margin-top: 0.3rem">- 热门推荐 -</p>
      <div>
        <GoodsList />
      </div>
    </div>
  </div>
</template>

<script>
import GoodsList from "@/components/GoodsList.vue";
export default {
  name: "MyOrderView",
  components: {
    GoodsList
  },
  data() {
    return {
      orderType: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #fff;
  color: #666;
  text-align: center;
  li {
    flex: 1;
    &.active {
      color: #157658;
    }
  }
}
.content {
  box-sizing: border-box;
  // height: 100vh;
  padding-bottom: 0.6rem;
  padding-top: 1rem;
  background-color: #f7f8fb;
}
.goods-img {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  // background-color: #ccc;
}
.goods {
  background-color: #fff;
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

.recommend {
  padding: 0.4rem 0px;
  margin: 0.16rem 0px;
  background-color: #fff;

  font-size: 0.24rem;
  text-align: center;
}
</style>
