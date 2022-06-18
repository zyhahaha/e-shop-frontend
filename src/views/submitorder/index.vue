<template>
  <div class="submitoreder">
    <!-- choose -->
    <div class="choose" @click="isShowLocation=true" v-if="!isShowLocation">
      <div class="choose-line">
        <img src="@/assets/line2.png" alt="" />
      </div>
      <div class="choose-logo">
        <p>
          <img src="@/assets/location.png" alt="" />
          选择地址
        </p>
      </div>
    </div>
    <!-- location -->
    <div class="location" v-if="isShowLocation">
      <div class="location-line">
        <img src="@/assets/line2.png" alt="" />
      </div>
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
    <!-- content -->
    <div class="content">
      <ul class="list">
        <li class="list-item">
          <div class="list-item_detail">
            <p class="list-item_detail--img">
              <img src="" alt="" />
            </p>
            <div class="list-item_detail--text">
              <p>北欧简约立式台灯约立式台灯立式台灯台灯约</p>
              <span>3M;黑色;可调节</span>
            </div>
            <div class="list-item_detail--digital">
              <p class="list-item_detail--digital__price">¥298</p>
              <p class="list-item_detail--digital__count">×1</p>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item_detail">
            <p class="list-item_detail--img">
              <img src="" alt="" />
            </p>
            <div class="list-item_detail--text">
              <p>百搭短袖T恤 街头百搭短袖T恤</p>
              <span>黑色；圆领款；M(165)</span>
            </div>
            <div class="list-item_detail--digital">
              <p class="list-item_detail--digital__price">¥128</p>
              <p class="list-item_detail--digital__count">×3</p>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item_detail">
            <p class="list-item_detail--img">
              <img src="" alt="" />
            </p>
            <div class="list-item_detail--text">
              <p>北欧简约立式台灯约立式台灯立式台灯台灯约</p>
              <span>3M;黑色;可调节</span>
            </div>
            <div class="list-item_detail--digital">
              <p class="list-item_detail--digital__price">¥298</p>
              <p class="list-item_detail--digital__count">×1</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="coupon">
      <div class="coupon-header">
        <p>优惠券</p>
        <span>可使用(3)</span>
      </div>
      <ul class="coupon-item">
        <li class="coupon-item_notchecked">
          <input type="radio" name="choice" id="" />
          <p>满999减100</p>
          <span>2022/6/30-2022/7/31</span>
        </li>
        <li class="coupon-item_checked">
          <input type="radio" name="choice" id="" />
          <p>满999减100</p>
          <span>2022/6/30-2022/7/31</span>
        </li>
        <li class="coupon-item_notchecked">
          <input type="radio" name="choice" id="" />
          <p>满999减100</p>
          <span>2022/6/30-2022/7/31</span>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p class="bottom-count">合计</p>
      <p class="bottom-price">¥1536</p>
      <p class="bottom-submit" @click="$router.push('/payment')">提交订单</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubmitOrder",
  data() {
    return {
      isShowLocation: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.submitoreder {
  background-color: #f5f5f5;
  min-height: 100vh;
}
.choose {
  width: 100%;
  height: 1.76rem;
  background-color: #f6fbf9;
  position: relative;
  &-line {
    width: 100%;
    img {
      position: absolute;
      bottom: 0rem;
    }
  }
  &-logo {
    width: 3.6rem;
    height: 0.88rem;
    line-height: 0.88rem;
    border: 2px solid #157658;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -0.44rem;
    left: 50%;
    margin-left: -1.8rem;
    p {
      font-size: 0.28rem;
      color: #157658;
      img {
        position: absolute;
        height: 0.28rem;
        top: 0.3rem;
        left: 0.9rem;
      }
    }
  }
}

.location {
  width: 100%;
  height: 1.76rem;
  background-color: #f6fbf9;
  position: relative;
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
          border: 1px solid rgb(226, 226, 226);
          margin-right: 0.2rem;
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
.coupon {
  background-color: #ffffff;
  margin-top: 0.2rem;
  // padding: 0rem 0.3rem;
  &-header {
    padding: 0rem 0.3rem;
    height: 0.88rem;
    line-height: 0.88rem;
    border-bottom: 1px solid rgba(205, 205, 205, 0.3);
    p {
      display: inline-block;
      font-size: 0.28rem;
      color: #333333;
    }
    span {
      font-size: 0.24rem;
      color: #999999;
      float: right;
    }
  }

  &-item {
    padding: 0.3rem 0.3rem;
    li:last-child {
      margin-bottom: 0rem;
    }
    &_checked {
      margin-bottom: 0.4rem;
      input {
        margin-right: 0.2rem;
      }
      p {
        display: inline-block;
        font-size: 0.28rem;
        color: #157658;
      }
      span {
        font-size: 0.24rem;
        color: #157658;

        float: right;
      }
    }
    &_notchecked {
      margin-bottom: 0.4rem;
      input {
        margin-right: 0.2rem;
      }
      p {
        display: inline-block;
        font-size: 0.28rem;
        color: #666666;
      }
      span {
        font-size: 0.24rem;
        color: #999999;
        float: right;
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