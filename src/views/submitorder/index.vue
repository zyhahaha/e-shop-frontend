<template>
  <div class="submitoreder">
    <OrderLocation />
    <!-- content -->
    <div class="content">
      <ul class="list">
        <li class="list-item" v-for="(productItem, key) in productList" :key="key">
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

    <OrderCoupon />
    
    <div class="bottom">
      <p class="bottom-count">合计</p>
      <p class="bottom-price">¥{{ orderPrice }}</p>
      <p class="bottom-submit" @click="onConfirmOrder">提交订单</p>
    </div>
  </div>
</template>

<script>
import { VUE_APP_IMAGE_HOST } from "@/libs/constant"
import { defineComponent } from "vue";
import { QueryOrderDetail, ConfirmOrder } from '@/api/order'
import OrderCoupon from './components/coupon.vue'
import OrderLocation from './components/location.vue'

export default defineComponent({
  name: "SubmitOrder",
  components: {
    OrderCoupon,
    OrderLocation
  },
  data() {
    return {
      VUE_APP_IMAGE_HOST,
      orderId: '',
      orderDetail: {},
      productList: [],
      orderPrice: 0
    };
  },
  created(){
    this.orderId = this.$route.params.id
    this.getOrderDetail()
  },
  methods: {
    getOrderDetail(){
      QueryOrderDetail(this.orderId).then(res => {
        this.orderDetail = res
        this.productList = res.productList || []

        this.orderPrice = 0
        this.productList.forEach(item => {
          this.orderPrice += (item.price * item.count)
        })
      })
    },
    onConfirmOrder(){
      ConfirmOrder(this.orderId).then(res => {
        this.$router.push(`/payment`)
      })
    }
  }
});
</script>

<style lang="scss" scoped>
.submitoreder {
  background-color: #f5f5f5;
  min-height: 100vh;
}

.content {
  background-color: #ffffff;
  margin-top: 0.2rem;
  padding: 0.3rem;
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
          // overflow: hidden;
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
  height: 0.88rem;
  line-height: 0.88rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 8px 0px rgba(210, 210, 210, 0.5);
  text-align: center;
  &-count {
    font-size: 0.28rem;
    color: #333333;
    font-weight: bold;
    margin-left: 0.3rem;
    margin-right: 0.2rem;
    float: left;
  }
  &-price {
    float: left;
    display: inline-block;
    font-size: 0.32rem;
    color: #157658;
    font-size: 0.32rem;
    font-weight: bold;
  }
  &-submit {
    width: 2rem;
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #157658;
    font-size: 0.28rem;
    color: #ffffff;
    float: right;
  }
}
</style>