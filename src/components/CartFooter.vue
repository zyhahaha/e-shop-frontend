<template>
  <div class="cart-footer">
    <span>全选</span>
    <p>
      合计
      ￥xxx
    </p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CartFooter",
  components: {},
});
</script>

<style lang="scss" scoped>
.cart-footer {
  height: 1rem;
  line-height: 1rem;
}
</style>