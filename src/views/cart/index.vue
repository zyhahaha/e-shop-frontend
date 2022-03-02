<template>
  <div>
    <div className="card-buy-page">
        <div class="line_bold" onclick="ceshi()"></div>
        <div class="list">
          <ul>
            <li v-for="(item,index) in [{}]" :key="index" class="clearfix"
                click="index_click(item.name,index+1);link(item.countdownTime,item.id)">
              <div class="fl view">
                <!-- <img class="discount" v-if="item.discount" src='"../../assets/images/discount"+parseInt(item.discount)+".png"' /> -->
                <img src="item.image"/>
              </div>
              <div class="fl describe">
                <div class="title">
                  <span>tagName</span>stateName
                </div>
                <br/>
                <div class="time">
                  introduction
                </div>
                <br/>
                <div class="countDown fff" v-if="item.countdownTime&&time_post(item.countdownTime).countDownState">
                  <!-- {/* {"倒计时："+time_post(item.countdownTime).htmlHour+":"+time_post(item.countdownTime).minute+":"+time_post(item.countdownTime).seconds} */} -->
                </div>
                <div v-else class="countDown fff"></div>
                <br/>
                <div class="price">
                  <span class="red">￥</span>44
                  <span>11.22</span>
                </div>
              </div>
              <div class="button time_return">
                test
                <!-- {/* {this.state.item.countdownTime&&time_post(item.countdownTime).countDownState?'即将开始':'立即订购'} */} -->
              </div>
            </li>
          </ul>
        </div>
        <!-- <div class="No_items">
          <img src="../../assets/images/No_items.png" />
          <br />
          <span>暂无商品，敬请期待</span>
        </div> -->
      </div>
    <TabBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "CartView",
  components: {
    TabBar,
  },
});
</script>

<style lang="scss" scoped>
.card-buy-page {
  .line_bold {
    width: 100%;
    height: 0.2rem;
    background: #f5f5f5;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  ul {
    padding: 0 0.3rem;
    background: #fff;
  }

  ul li {
    padding: 0.3rem 0;
    position: relative;
    border-bottom: 1px solid #ececec;
    overflow: hidden;
  }

  ul li:last-child {
    border: 0;
  }

  ul li .view {
    width: 2rem;
    height: 2rem;
    margin-right: 0.3rem;
    position: relative;
  }

  ul li .view img {
    width: 100%;
    height: 100%;
  }

  ul li .view img.discount {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.48rem;
    height: 0.56rem;
  }

  ul li .describe {
    font-size: 0;
  }

  ul li .describe div {
    display: inline-block;
    line-height: 100%;
  }

  ul li .describe .title {
    font-size: 0.32rem;
    color: #333;
    margin-top: 0.1rem;
  }

  ul li .describe .title span {
    display: inline-block;
    background: linear-gradient(to bottom right, #ee3f8b, #ee3f44);
    border-radius: 0.05rem;
    color: #fff;
    font-size: 0.24rem;
    padding: 0 0.05rem;
    margin-right: 0.1rem;
    vertical-align: top;
  }

  ul li .describe .time {
    font-size: 0.24rem;
    color: #999;
    margin-top: 0.24rem;
    min-height: 0.24rem;
  }

  ul li .describe .countDown {
    font-size: 0.24rem;
    color: #ee3f44;
    margin-top: 0.2rem;
    line-height: 0.36rem;
    height: 0.36rem;
    min-width: 1.94rem;
    background: #fdebec;
    text-align: center;
    border-radius: 0.05rem;
  }

  ul li .describe .countDown.fff {
    background: #fff;
  }

  ul li .describe .price {
    font-size: 0.4rem;
    color: #ee3f44;
    margin-top: 0.2rem;
  }

  ul li .describe .price span {
    display: inline-block;
    margin-left: 0.12rem;
    font-size: 0.24rem;
    color: #999;
    text-decoration: line-through;
  }

  ul li .describe .price span.red {
    margin: 0;
    color: #ee3f44;
    font-size: 0.28rem;
    text-decoration: none;
  }

  ul li .button {
    position: absolute;
    right: 0;
    top: 1.74rem;
    width: 1.36rem;
    line-height: 0.56rem;
    text-align: center;
    border: 1px solid #ee3f44;
    color: #ee3f44;
    border-radius: 0.1rem;
    font-size: 0.24rem;
  }

  ul li .button.time_return {
    color: #fff;
    background: #ccc;
    border-color: #ccc;
  }

  .No_items {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -1.35rem;
    margin-top: -2rem;
    text-align: center;
    font-size: 0;
    width: 2.7rem;
  }

  .No_items img {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .No_items span {
    font-size: 0.28rem;
    color: #666;
  }
}

</style>