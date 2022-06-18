<template>
  <div>
    <div class="content">
      <ul class="list">
        <li class="list-item" v-for="(cartItem, key) in cartList" :key="key">
          <div class="list-item_img">
            <img src="" alt="" />
          </div>
          <div class="list-item_text">
            <div class="list-item_text--top">
              <p>{{ cartItem.goodsName }}</p>
              <span>{{ cartItem.goodsSpec }}</span>
            </div>
            <div class="list-item_text--bottom">
              <div class="list-item_text--bottom__left">
                <p>{{ cartItem.goodsPrice }}</p>
              </div>
              <div class="list-item_text--bottom__right">
                <img src="@/assets/minus.png" alt="" @click="onMinus(cartItem)" />
                <p class="list-item_text--bottom__right---num">{{ cartItem.count }}</p>
                <img src="@/assets/add.png" alt="" @click="onAdd(cartItem)" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- bottom -->
    <div class="count">
      <!-- <span class="count-selected">已选（3）</span> -->
      <p class="count-btn" @click="$router.push('/submitorder')">结算 ({{ cartList.length }})</p>
      <p class="count-price">合计 <span>¥{{ computePrice() }}</span></p>
    </div>
    <TabBar />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "NewCard",
  components: {
    TabBar,
  },
  data() {
    return {
      cartList: [
        {
          goodsName: "百搭短袖T恤 ssss",
          goodsSpec: "asdf",
          goodsPrice: "298",
          count: 1
        },{
          goodsName: "百搭短袖T恤 ssss",
          goodsSpec: "asdf",
          goodsPrice: "298",
          count: 1
        },{
          goodsName: "百搭短袖T恤 ssss",
          goodsSpec: "asdf",
          goodsPrice: "298",
          count: 1
        },
      ],
    };
  },
  methods: {
    onMinus(item) {
      console.log(item);
      item.count --
    },
    onAdd(item) {
      console.log(item);
      item.count ++
    },
    // 计算合计
    computePrice(){
      let totalPrice = 0
      this.cartList.forEach(item => {
        totalPrice += (item.count * item.goodsPrice)
      })
      return totalPrice
    }
  },
});
</script>

<style lang="scss" scoped>
.content {
  //   z-index: 99;
  background-color: #ffffff;
  min-height: 100vh;
  // margin-top: 0.2rem;
  .list {
    &-item {
      padding: 0.3rem;
      position: relative;
      border-bottom: 1px solid rgb(227, 227, 227);
      display: flex;
      &_img {
        // float: left;
        display: inline-block;
        vertical-align: middle;
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid rgb(226, 226, 226);
        margin-right: 0.3rem;
        img {
          width: 100%;
        }
      }
      &_text {
        flex: 1;
        display: inline-block;
        vertical-align: middle;
        &--top {
          text-align: left;
          margin-bottom: 0.3rem;
          p {
            font-size: 0.28rem;
            color: #333333;
            margin-bottom: 0.2rem;

            white-space: nowrap; // 文本强制不换行；
            text-overflow: ellipsis; // 文本溢出显示省略号；
            overflow: hidden; // 溢出的部分隐藏；
          }
          span {
            background-color: #f3f3f3;
            font-size: 0.2rem;
            color: #999;
          }
        }
        &--bottom {
          overflow: hidden;
          &__left {
            float: left;
            color: #157658;
            font-size: 0.28rem;
            height: 0.44rem;
            line-height: 0.44rem;
          }
          &__right {
            float: right;
            overflow: hidden;
            &---num {
              display: inline-block;
              background-color: #dcebe6;
              padding: 0.06rem 0.26rem;
              vertical-align: middle;
            }
            img {
              width: 0.32rem;
              vertical-align: middle;
            }
            // &---minus {
            //   left: -0.24rem;
            //   bottom: -0.35rem;
            //   position: relative;
            // }
            // &---add {
            //   right: -0.84rem;
            //   bottom: 0.35rem;
            //   position: relative;
            // }
          }
        }
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