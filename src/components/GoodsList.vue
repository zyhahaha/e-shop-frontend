<template>
  <div class="goods-list">
    <div class="goods-item" @click="$router.push(`/goods/${goodsItem.id}`)" v-for="(goodsItem, key) in goodsList" :key="key">
      <p class="goods-img">
        <img :src="VUE_APP_IMAGE_HOST + '/' + goodsItem.image" alt="" />
      </p>
      <div style="padding: 0.16rem">
        <p class="goods-title">{{ goodsItem.name }}</p>
        <p class="goods-pic">¥ {{ goodsItem.price }}</p>
        <p class="goods-subtitle">{{ goodsItem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { QueryProductList } from "@/api/product";
import { VUE_APP_IMAGE_HOST } from "@/libs/constant"

export default defineComponent({
  name: "GoodsList",
  data() {
    return {
      VUE_APP_IMAGE_HOST,
      goodsList: []
    };
  },
  created(){
    QueryProductList({}).then(res => {
      // console.log('---------->', res)
      this.goodsList = res.list
    })
  }
});
</script>

<style lang="scss" scoped>
.goods-list {
  overflow: hidden;
  padding: 0.2rem 0.2rem 2rem;
}

.goods-item {
  box-sizing: border-box;
  float: left;
  margin-bottom: 0.28rem;
  border-radius: 0.1rem;
  box-shadow: 0px 0px 3px 0px rgba(221, 221, 221, 0.5);
  width: 3.4rem;
  text-align: left;
  margin-right: 0.15rem;
  background-color: #fff;
}
.goods-img {
  width: 100%;
  height: 3rem;
  // background-color: #ccc;
}
.goods-title {
  font-size: 0.28rem;
  color: #333;
}
.goods-pic {
  padding: 0.1rem;
  font-size: 0.32rem;
  color: #157658;
  font-weight: bold;
}
.goods-subtitle {
  font-size: 0.24rem;
  color: #999;
  line-height: 0.36rem;
}
</style>