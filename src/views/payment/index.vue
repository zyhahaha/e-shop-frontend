<template>
  <div class="payment">
    <div style="margin-bottom: 0.5rem;">支付成功</div>
    <button style="margin-right: 0.1rem;" @click="$router.push(`/`)">返回首页</button>
    <button @click="$router.push(`/user/order`)">查看订单</button>
  </div>
</template>

<script>
export default {
  name: "PaymentView",
};
</script>
<style lang="scss" scoped>
.payment {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 1rem;
  text-align: center;
  button {
    font-size: 12px;
  }
}
</style>
