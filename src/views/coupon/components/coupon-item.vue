<template>
  <li class="coupon-item" @click="$router.push('/')">
    <div class="coupon-item_introduce">
      <span class="coupon-item_introduce--money">¥ 100</span>
      <span class="coupon-item_introduce--reduce">满999减100</span>
      <p class="coupon-item_introduce--Scope">仅限购包包、服装</p>
    </div>
    <div class="coupon-item_use">
      <p class="coupon-item_use--data">2022/6/30-2022/7/31</p>
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CouponItem",
});
</script>
<style lang="scss" scoped>
.coupon-item {
  background-image: url("~@/assets/use2.png");
  height: 2.32rem;
  margin-bottom: 0.2rem;
  position: relative;
  &_introduce {
    &--money {
      font-size: 0.6rem;
      color: #157658;
      font-weight: bold;
      position: absolute;
      top: 0.68rem;
      left: 0.86rem;
    }
    &--reduce {
      font-size: 0.2rem;
      color: #157658;
      margin-left: 0.06rem;
      position: absolute;
      top: 0.96rem;
      left: 2.38rem;
    }
    &--Scope {
      font-size: 0.2rem;
      color: #999999;
      position: absolute;
      bottom: 0.32rem;
      left: 1.32rem;
    }
  }
  &_use {
    //   width: 2.4rem;
    //   height: 2rem;
    &--data {
      font-size: 0.2rem;
      color: #ffffff;
      position: absolute;
      bottom: 0.32rem;
      right: 0.35rem;
    }
  }
}
</style>