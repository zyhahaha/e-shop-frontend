<template>
  <div class="goods-item">
    <p class="goods-img">
      <img src="http://121.4.102.246:7001/e-shop/goods/goods-01.jpg" alt="">
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GoodsItem",
});
</script>

<style lang="scss" scoped>
.goods-img {
  flex: 1;
}
.goods-img {
  width: 100%;
  height: 2rem;
  // background-color: #ccc;
}
</style>