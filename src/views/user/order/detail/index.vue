<template>
  <div class="OrderDetails">
    <div class="location">
      <!-- <div class="location-line">
        <img src="@/assets/line2.png" alt="" />
      </div> -->
      <div class="location-detail">
        <div class="location-detail_text">
          <div class="location-detail_text--name">
            <img src="@/assets/location.png" alt="" />
            <span>周果果 15000822612</span>
          </div>
          <p class="location-detail_text--adress">
            上海市 浦东新区 桃浦镇山东路168号高新小区3幢702室
          </p>
        </div>
      </div>
    </div>
    <div class="information">
      <div class="information-left">
        <p>订单编号</p>
        <span>下单时间</span>
      </div>
      <div class="information-right">
        <p>{{ orderDetail.order_no }}</p>
        <span>2022-06-11 17:31:27</span>
      </div>
    </div>
    <div class="content">
      <ul class="list">
        <li class="list-item" v-for="(productItem, key) in orderDetail.productList" :key="key">
          <div class="list-item_detail">
            <p class="list-item_detail--img">
              <img :src="VUE_APP_IMAGE_HOST + '/' + productItem.image" alt="" />
            </p>
            <div class="list-item_detail--text">
              <p>{{ productItem.name }}</p>
              <span>{{ productItem.spec || '默认' }}</span>
            </div>
            <div class="list-item_detail--digital">
              <p class="list-item_detail--digital__price">¥{{ productItem.price }}</p>
              <p class="list-item_detail--digital__count">×{{ productItem.count }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p class="bottom-count">共{{ orderDetail.productList && orderDetail.productList.length }}件商品</p>
      <div class="bottom-price">
        <p>实付</p>
        <span>¥{{ computeOrderPrice(orderDetail.productList) }}</span>
      </div>
      <!-- <p class="bottom-more">再来一单</p> -->

      <p class="bottom-more red" v-if="orderDetail.order_status === 0" @click.stop="$router.push(`/submitorder/${orderDetail.id}`)">去付款</p>
      <p class="bottom-more red" v-else-if="orderDetail.order_status === 2" @click.stop="()=>{}">确认收货</p>
      <p class="bottom-more" v-else @click.stop="()=>{}">再来一单</p>
    </div>
  </div>
</template>

<script>
import { VUE_APP_IMAGE_HOST } from "@/libs/constant"
import { defineComponent } from "vue";
import { QueryOrderDetail } from '@/api/order'

export default defineComponent({
  name: "OrderDetails",
  data(){
    return {
      VUE_APP_IMAGE_HOST,
      orderDetail: {}
    }
  },
  created(){
    QueryOrderDetail(this.$route.params.id).then(res => {
      this.orderDetail = res || {}
    })
  },
  methods: {
    computeOrderPrice(productList){
      if (!productList || !productList.length) return 0;
      let totalPrice = 0
      productList.forEach(item => {
        totalPrice += (item.price * item.count)
      })
      return totalPrice
    }
  }
});
</script>

<style lang="scss" scoped>
.OrderDetails {
  background-color: #f5f5f5;
  min-height: 100vh;
}
.location {
  width: 100%;
  height: 1.56rem;
  background-color: #FFFFFF;
  position: relative;
  margin-bottom: 0.2rem;
  &-line {
    width: 100%;
    img {
      position: absolute;
      bottom: 0rem;
    }
  }
  &-detail {
    padding: 0rem 0.3rem;
    &_text {
      margin-left: 0.44rem;
      padding-top: 0.44rem;
      &--name {
        position: relative;
        font-size: 0.28rem;
        color: #333;
        margin-bottom: 0.15rem;
        img {
          height: 0.28rem;
          position: absolute;
          left: -0.4rem;
          top: 2px;
        }
      }
      &--adress {
        font-size: 0.24rem;
        color: #666;
      }
    }
  }
}

.information {
  height: 1.48rem;
  background: #ffffff;
  font-size: 0.24rem;
  position: relative;
  &-left {
    color: #999999;
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    P {
      margin-bottom: 0.3rem;
    }
  }
  &-right {
    color: #333;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    text-align: right;
    P {
      margin-bottom: 0.3rem;
    }
  }
}

.content {
  background-color: #ffffff;
  margin-top: 0.2rem;
  padding: 0.3rem;
  min-height: 100vh;
  .list {
    &-item {
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 0px 16px 0px rgba(221, 221, 221, 0.5);
      height: 1.6rem;
      margin-bottom: 0.2rem;
      position: relative;
      &_detail {
        padding: 0.2rem;
        display: flex;
        &--img {
          width: 1.2rem;
          height: 1.2rem;
          border: 1px solid rgb(226, 226, 226);
          margin-right: 0.2rem;
          img {
            width: 100%;
            max-height: 100%;
          }
        }
        &--text {
          flex: 1;
          margin-right: 0.52rem;
          p {
            font-size: 0.24rem;
            color: #333333;
          }
          span {
            background-color: #f3f3f3;
            font-size: 0.2rem;
            color: #999;
            position: absolute;
            bottom: 0.2rem;
          }
        }
        &--digital {
          font-size: 0.24rem;
          &__price {
            color: #333333;
            font-weight: bold;
          }
          &__count {
            color: #999999;
            text-align: right;
          }
        }
      }
    }
  }
}
.bottom {
  position: fixed;
  bottom: 0;
  z-index: 9;
  overflow: hidden;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-top: 2px solid #f7f7f7;
  &-count {
    font-size: 0.24rem;
    color: #666666;
    margin-left: 0.3rem;
    margin-right: 0.2rem;
    float: left;
  }
  &-price {
    float: left;
    p {
      display: inline-block;
      font-size: 0.24rem;
      color: #666666;
      margin-right: 0.1rem;
    }
    span {
      font-size: 0.32rem;
      color: #333333;
      font-weight: bold;
      margin-right: 1.3rem;
    }
  }
  &-more {
    width: 1.24rem;
    height: 0.48rem;
    line-height: 0.48rem;
    background: #dcebe6;
    font-size: 0.24rem;
    color: #157658;
    float: right;
    margin-right: 0.3rem;
    margin-top: 0.18rem;
    &.red {
      color: red;
      background-color: #ffe7e9;
    }
  }
}
</style>