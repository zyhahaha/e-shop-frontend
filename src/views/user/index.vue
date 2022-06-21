<template>
  <div>
    <div class="personal">
      <div class="card">
        <div class="card-inner">
          <div class="card-inner-top">
            <p class="avatar">
              <img :src="VUE_APP_IMAGE_HOST + '/' + userInfo.avatar" alt="" />
            </p>
            <p class="name">{{ userInfo.username }}</p>
          </div>
          <div class="card-inner-bottom">
            <div class="card-inner-bottom__item">
              <p class="highlight">3</p>
              <p class="description" @click="$router.push('/coupon')">优惠券</p>
            </div>
            <div class="card-inner-bottom__item">
              <!-- <p class="highlight">3</p> -->
              <p class="highlight">
                <i class="iconfont icon-info"></i>
              </p>
              <p class="description">关于我们</p>
            </div>
          </div>
        </div>
      </div>
      <!-- order -->
      <div class="order">
        <div class="order-inner">
          <p class="order-inner__title">我的订单</p>
          <ul>
            <li @click="$router.push('/user/order')">
              <i class="iconfont icon-daizhifu"></i>
              <br />
              <span>待支付</span>
            </li>
            <li @click="$router.push('/user/order')">
              <i class="iconfont icon-daifahuo"></i>
              <br />
              <span>待发货</span>
            </li>
            <li @click="$router.push('/user/order')">
              <i class="iconfont icon-daishouhuo"></i>
              <br />
              <span>待收货</span>
            </li>
            <li @click="$router.push('/user/order')">
              <i class="iconfont icon-daishouhuo"></i>
              <br />
              <span>已完成</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- list -->
      <ul class="list">
        <li @click="$router.push('/user/order')">
          <i class="iconfont icon-quanbudingdan"></i>
          <span>全部订单</span>
          <i class="iconfont icon-ic_right" style="float: right"></i>
        </li>
        <li @click="$router.push('/coupon')">
          <i class="iconfont icon-youhuiquan"></i>
          <span>优惠券</span>
          <i class="iconfont icon-ic_right" style="float: right"></i>
        </li>
        <li @click="$router.push('/address')">
          <i class="iconfont icon-shouhuodizhi"></i>
          <span>收货地址</span>
          <i class="iconfont icon-ic_right" style="float: right"></i>
        </li>
      </ul>
    </div>
    <TabBar />
  </div>
</template>

<script lang="ts">
import { VUE_APP_IMAGE_HOST } from "@/libs/constant"
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "UserView",
  components: {
    TabBar,
  },
  data(){
    return {
      VUE_APP_IMAGE_HOST,
      userInfo: {}
    }
  },
  created(){
    let userStr = localStorage.getItem('userInfo')
    if (userStr) {
      this.userInfo = JSON.parse(userStr)
    }
  }
});
</script>

<style lang="scss" scoped>
.avatar {
  position: absolute;
  top: -0.2rem;
  left: 0.4rem;
  width: 1.4rem;
  height: 1.4rem;
  overflow: hidden;
  // background-color: #157658;
  img {
    width: 100%;
  }
}
.name {
  margin-left: 2.08rem;
  padding-top: 0.4rem;
  font-weight: bold;
  text-align: left;
}
.personal {
  background-color: #f5f5f5;
  height: 100vh;
  .card {
    height: 3.6rem;
    padding: 0.6rem 0.32rem 0.4rem;
    background-color: #dcebe6;
    box-sizing: border-box;
    text-align: center;
    &-inner {
      height: 100%;
      background-color: #fff;
      &-top {
        position: relative;
        height: 1.2rem;
        margin-bottom: 0.34rem;
      }
      &-bottom {
        display: flex;
        &__item {
          flex: 1;
          // height: 1.4rem;
          .highlight {
            margin-bottom: 0.12rem;
            font-size: 0.36rem;
            color: #157658;
            font-weight: bold;
          }
          .description {
            font-size: 0.24rem;
            color: #999;
          }
        }
      }
    }
  }
  .order {
    padding: 0.3rem;
    background-color: #fff;
    &-inner {
      height: 2rem;
      box-shadow: 0px 0px 4px 0px rgba(119, 163, 149, 0.2);
      &__title {
        padding-top: 0.24rem;
        margin-left: 0.3rem;
        margin-bottom: 0.4rem;
        font-size: 0.24rem;
        color: #333;
        font-weight: bold;
      }
      ul {
        display: flex;
        text-align: center;
        li {
          flex: 1;
          span {
            margin-top: 0.14rem;
            color: #666;
            font-size: 0.24rem;
          }
        }
      }
    }
  }
  .list {
    li {
      height: 0.88rem;
      line-height: 0.88rem;
      margin-bottom: 0.02rem;
      background-color: #fff;
      // text-align: left;
      color: #333;
      i {
        margin: 0rem 0.28rem;
      }
    }
  }
}
</style>