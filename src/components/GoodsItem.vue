<template>
  <div class="goods-item">
    <p class="goods-img"></p>
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
  background-color: #ccc;
}
</style>