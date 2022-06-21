<template>
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
</template>

<script>
export default {
    name: 'OrderCoupon'
}
</script>

<style lang="scss" scoped>
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
</style>