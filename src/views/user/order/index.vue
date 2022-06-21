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
      <ul class="list">
        <li class="list-item" @click="$router.push(`/user/order/detail/${orderItem.id}`)" v-for="(orderItem, key) in orderList" :key="key">
          <div class="list-item_top">
            <p class="list-item_top--num">
              <span>订单编号</span>
              <span>{{ orderItem.order_no }}</span>
            </p>
            <span class="list-item_top--state">{{ orderStatusDict[orderItem.order_status] || '未知' }}</span>
          </div>
          <div class="list-item_detail" v-for="(productItem, key) in orderItem.productList" :key="key">
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
          <div class="list-item_bottom">
            <p class="list-item_bottom--total">共{{ orderItem.productList.length }}件商品</p>
            <p class="list-item_bottom--pay">实付<span>¥{{ computeOrderPrice(orderItem.productList) }}</span></p>

            <p class="list-item_bottom--more">再来一单</p>
          </div>
        </li>
        <!-- <li class="list-item">
          <div class="list-item_top">
            <p class="list-item_top--num">
              <span>订单编号</span>
              <span>375261945907821</span>
            </p>
            <span class="list-item_top--state">待发货</span>
          </div>
          <div class="list-item_detail">
            <p class="list-item_detail--img">
              <img src="" alt="" />
            </p>
            <div class="list-item_detail--text">
              <p>北欧简约立式台灯约立式台灯立式台灯台灯约</p>
              <span>3M;黑色;可调节</span>
            </div>
            <div class="list-item_detail--digital">
              <p class="list-item_detail--digital__price">¥1298</p>
              <p class="list-item_detail--digital__count">×1</p>
            </div>
          </div>
          <div class="list-item_bottom">
            <p class="list-item_bottom--total">共6件商品</p>
            <p class="list-item_bottom--pay">实付<span>¥1536</span></p>

            <p class="list-item_bottom--more">再来一单</p>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item_top">
            <p class="list-item_top--num">
              <span>订单编号</span>
              <span>375261945907821</span>
            </p>
            <span class="list-item_top--state">待付款</span>
          </div>
          <div class="list-item_detail">
            <p class="list-item_detail--img">
              <img src="" alt="" />
            </p>
            <div class="list-item_detail--text">
              <p>北欧简约立式台灯约立式台灯立式台灯台灯约</p>
              <span>3M;黑色;可调节</span>
            </div>
            <div class="list-item_detail--digital">
              <p class="list-item_detail--digital__price">¥1298</p>
              <p class="list-item_detail--digital__count">×1</p>
            </div>
          </div>
          <div class="list-item_bottom">
            <p class="list-item_bottom--total">共6件商品</p>
            <p class="list-item_bottom--pay">实付<span>¥1536</span></p>

            <p class="list-item_bottom--more red">去付款</p>
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { VUE_APP_IMAGE_HOST } from "@/libs/constant"
import { defineComponent } from "vue";
// import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src
import { QueryOrderList } from '@/api/order'

export default defineComponent({
  name: "NewOrder",
  data(){
    return {
      VUE_APP_IMAGE_HOST,
      orderList: [],
      orderStatusDict: {
        0: '待付款',
        1: '待发货',
        2: '已发货',
        3: '已完成'
      }
    }
  },
  created(){
    this.getOrderList()
  },
  methods: {
    getOrderList(){
      QueryOrderList({user_id: localStorage.getItem('userId')}).then(res => {
        this.orderList = res.list || []
      })
    },
    computeOrderPrice(productList){
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
.nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #fff;
  color: #666666;
  text-align: center;
  li {
    flex: 1;
    &.active {
      color: #157648;
    }
  }
}
.content {
  width: 100%;
  background-color: #f7f8fb;
  margin-top: 0.4rem;
  .list {
    padding: 0.4rem;
    &-item {
      background-color: #fff;
      margin-top: 0.4rem;
      // padding: 0.56rem 0.6rem;
      &_top {
        // display: inline-block;
        height: 0.8rem;
        line-height: 0.8rem;
        border-bottom: 1px solid #f7f7f7;
        padding: 0rem 0.3rem;
        &--num {
          float: left;
          color: #999;
          font-size: 0.24rem;
          span {
            margin-right: 0.2rem;
          }
        }
        &--state {
          float: right;
          color: #9e2731;
          font-size: 0.24rem;
        }
      }
      &_detail {
        border-bottom: 1px solid #f7f7f7;
        padding: 0.3rem;
        display: flex;
        &--img {
          width: 1.2rem;
          height: 1.2rem;
          border: 1px solid rgb(226, 226, 226);
          img {
            width: 100%;
            max-height: 100%;
          }
        }
        &--text {
          flex: 1;
          margin-left: 0.2rem;
          margin-right: 0.52rem;
          p {
            font-size: 0.24rem;
            color: #333333;
            margin-bottom: 0.26rem;
          }
          span {
            background-color: #f3f3f3;
            font-size: 0.2rem;
            color: #999;
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
      &_bottom {
        height: 0.86rem;
        line-height: 0.86rem;
        display: flex;
        padding: 0rem 0.3rem;
        &--total {
          width: 1.1rem;
          font-size: 0.24rem;
          color: #666666;
        }
        &--pay {
          flex: 1;
          margin-left: 0.2rem;
          font-size: 0.24rem;
          color: #666666;
          //   p {
          //     font-size: 0.24rem;
          //     color: #666666;
          //   }
          span {
            font-size: 0.32rem;
            color: #333;
            font-weight: bold;
            margin-left: 0.2rem;
            vertical-align: middle;
          }
        }
        &--more {
          width: 1.24rem;
          height: 0.48rem;
          line-height: 0.48rem;
          text-align: center;
          background-color: #dcebe6;
          font-size: 0.24rem;
          color: #157648;
          margin-top: 0.2rem;
          &.red {
            color: red;
            background-color: #ffe7e9;
          }
        }
      }
    }
  }
}
</style>