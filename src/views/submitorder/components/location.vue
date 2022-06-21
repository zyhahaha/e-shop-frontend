<template>
  <div>
    <!-- choose -->
    <div class="choose" @click="isShowLocation=true" v-if="!isShowLocation">
      <div class="choose-line">
        <img src="@/assets/line2.png" alt />
      </div>
      <div class="choose-logo">
        <p>
          <img src="@/assets/location.png" alt />
          选择地址
        </p>
      </div>
    </div>
    <!-- location -->
    <div class="location" v-if="isShowLocation">
      <div class="location-line">
        <img src="@/assets/line2.png" alt />
      </div>
      <div class="location-detail">
        <div class="location-detail_text">
          <div class="location-detail_text--name">
            <img src="@/assets/location.png" alt />
            <span>周果果 15000822612</span>
          </div>
          <p class="location-detail_text--adress">上海市 浦东新区 桃浦镇山东路168号高新小区3幢702室</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderLocation",
  data() {
    return {
      isShowLocation: false,
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>