<template >
  <div class="CouponNotUser">
    <ul class="nav">
      <li :class="{ active: couponType === 1 }" @click="onChangeNav(1)">
        未使用
      </li>
      <li :class="{ active: couponType === 2 }" @click="onChangeNav(2)">
        已使用
      </li>
      <li :class="{ active: couponType === 3 }" @click="onChangeNav(3)">
        已过期
      </li>
    </ul>
    <ul class="coupon" v-if="couponType === 1">
      <couponItem v-for="(item, key) in couponNotUseList" :key="key" />
    </ul>

    <ul class="coupon" v-if="couponType === 2">
      <couponItemUsed v-for="(item ,key) in couponUsedList" :key="key" />
    </ul>
    <ul class="coupon" v-if="couponType === 3">
      <couponItemExpire v-for="(item, key) in couponExpireList" :key="key" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import couponItem from "./components/coupon-item.vue";
import couponItemUsed from "./components/coupon-item-used.vue";
import couponItemExpire from "./components/coupon-item-expire.vue";

export default defineComponent({
  name: "CouponView",
  components: {
    couponItem,
    couponItemUsed,
    couponItemExpire,
  },
  data() {
    return {
      couponType: 1,
      couponNotUseList: [{}, {}, {}, {}, {}],
      couponUsedList: [{}, {}, {}, {}],
      couponExpireList: [{}, {}, {}],
    };
  },
  methods: {
    onChangeNav(type: number) {
      this.couponType = type;
    },
  },
});
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  //当页面需要盖住下面的页面时
  z-index: 9;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: rgb(255, 255, 255);
  font-size: 0.28rem;
  color: #666666;
  text-align: center;
  li {
    flex: 1;
    &.active {
      color: #157648;
      font-weight: bold;
    }
  }
}

.CouponNotUser {
  background: #f5f5f5;
  min-height: 100vh;
  padding-top: 1rem;
}
.coupon {
  padding: 0rem 0.24rem;
  //父盒子没有被撑开时 使用
  overflow: hidden;
}
</style>