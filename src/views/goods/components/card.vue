<template>
  <div class="warp" @click="$emit('onHideCard')">
    <div class="card" @click.stop="">
      <div class="content">
        <div class="content-top">
          <div class="content-top_img">
            <img src="" alt="" />
          </div>
          <div class="content-top_text">
            <p class="content-top_text--price" style="padding-bottom: 0.28rem">
              ¥ 699
            </p>
            <p class="content-top_text--stock">库存: 1381件</p>
          </div>
        </div>
        <div class="content-item">
          <p class="content-item_title">颜色</p>
          <ul class="content-item_color">
            <li class="content-item_color--notcheck">黑色</li>
            <li class="content-item_color--check">白色</li>
            <li class="content-item_color--notcheck">墨绿色</li>
          </ul>
        </div>
        <div class="content-item">
          <p class="content-item_title">款式</p>
          <ul class="content-item_color">
            <li class="content-item_color--notcheck">一字肩款</li>
            <li class="content-item_color--check">圆领款</li>
            <li class="content-item_color--notstock">V领款</li>
          </ul>
        </div>
        <div class="content-item">
          <p class="content-item_title">尺码</p>
          <ul class="content-item_color">
            <li class="content-item_color--check">S</li>
            <li class="content-item_color--notcheck">M</li>
            <li class="content-item_color--notstock">L</li>
            <li class="content-item_color--notcheck">XL</li>
          </ul>
        </div>
        <div class="content-count">
          <p class="content-count_word">购买数量</p>
          <div class="content-count_num">
            <span class="content-count_num-minus">-</span>
            <p class="content-count_num--nums">1</p>
            <span class="content-count_num-add">+</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p
          class="bottom__cart"
         @click="$router.push('/cart')"
        
        >
          加入购物车
        </p>
        <p class="bottom__buy"  @click="$router.push('/submitorder')"  >立即购买</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsCard",
};
</script>

<style lang="scss" scoped>
.warp {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  .card {
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    height: 75vh;
    width: 100%;
    background-color: #fff;

    box-sizing: border-box;
  }
  .content {
    padding: 0.3rem;
    // overflow: hidden;
    &-top {
      margin-bottom: 0.4rem;
      &_img {
        display: inline-block;
        vertical-align: text-bottom;
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid rgb(216, 216, 216);
        margin-right: 0.4rem;
      }
      &_text {
        position: relative;
        display: inline-block;
        // vertical-align: middle;
        &--price {
          font-size: 0.28rem;
          color: #157658;
          font-weight: bold;
        }
        &--stock {
          font-size: 0.2rem;
          color: #999;
        }
      }
    }
    &-item {
      padding-bottom: 0.3rem;
      &_title {
        color: #555555;
        font-size: 0.24rem;
        margin-bottom: 0.26rem;
      }
      &_color {
        color: #333;
        font-size: 0.24rem;
        border-bottom: 0.01rem solid #e9e9e9;
        padding-bottom: 0.3rem;
        overflow: hidden;
        &--notcheck {
          float: left;
          margin-right: 0.2rem;
          padding: 0.16rem 0.26rem;
          background-color: #fff;
          border: 0.02rem solid #333333;
          color: #333333;
        }
        &--check {
          float: left;
          margin-right: 0.2rem;
          padding: 0.16rem 0.26rem;
          border: 0.02rem solid #157658;
          background-color: #157658;
          color: #fff;
        }
        &--notstock {
          float: left;
          margin-right: 0.2rem;
          padding: 0.16rem 0.26rem;
          border: 0.02rem solid #bbb;
          background-color: #fff;
          color: #bbb;
        }
      }
    }
    &-count {
      padding: 0.14rem 0rem;
      overflow: hidden;
      &_word {
        font-size: 0.24rem;
        color: #555555;
        float: left;
      }
      &_num {
        float: right;
        &--nums {
          width: 0.63rem;
          height: 0.48rem;
          background: #dcebe6;
          font-size: 0.24rem;
          color: #333;
          float: left;
          line-height: 0.48rem;
          text-align: center;
        }
        &-minus {
          position: relative;
          left: -0.85rem;
          vertical-align: middle;
          font-size: 0.4rem;
        }
        &-add {
          position: relative;
          right: -0rem;
          vertical-align: middle;
          font-size: 0.4rem;
        }
      }
    }
  }
  .bottom {
    // position: fixed;
    // bottom: 0rem;
    overflow: hidden;
    display: flex;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 0.32rem;
    p {
      flex: 1;
    }
    &__cart {
      background-color: #333;
    }
    &__buy {
      background-color: #157658;
    }
  }
}
</style>