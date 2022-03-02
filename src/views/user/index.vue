<template>
  <div>
    <div className="personal-center-page">
        <div className="header-bg">
          <img src="xxxxxx" alt="" />
        </div>
        <div className="home-top">
          <div className="card-bg-wrap">
            <img className="grade" src="xxxxx" alt="" />
            <img className="company-logo" src="xxxxx" alt="" />
            <p className="piont-use">花积分 &nbsp;
              <img src="xxxxx" alt="" />
            </p>
            <p className="nickname">{ this.state.memberName || 'Carmen Electra' }</p>
            <p className="piont-view">
              <!-- { this.state.availablePoints } -->
              <span>积分</span>
            </p>
            <div className="rights">
              <!-- {
                this.state.equityLogoUrlArr && this.state.equityLogoUrlArr.map(equityLogoUrl => {
                  return (
                    <img click="jump('memberEquity', '/v3/memberEquity')" src={equityLogoUrl} alt="" />
                  );
                })
              } -->
            </div>
          </div>
        </div>
    
        <section>
          <ul className="my_center_list margin-top-20">
            <li className="margin">
              <span className="left-span">我的订单</span>
              <div className="fr right">
                <span>全部订单</span>
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
            </li>
            <li className="orderTab">
              <div className="tabs">
                <div className="tabImg">
                  <img src="{require('../../assets/images/mine/lately_order.png')}" alt="" />
                  {this.state.recentlyPlacedOrderFlag && <img className="redDot" src="{require('../../assets/images/mine/red_dot.png')}" alt="" />}
                </div>
                <span>最近下单</span>
              </div>
              <div className="tabs">
                <div className="tabImg">
                  <img src="{require('../../assets/images/mine/unpaid_order.png')}" alt="" />
                  {this.state.pendingPaymentFlag && <img className="redDot" src="{require('../../assets/images/mine/red_dot.png')}" alt="" />}
                </div>
                <span>待支付订单</span>
              </div>
              <div className="tabs">
                <div className="tabImg">
                  <img src="{require('../../assets/images/mine/completed_order.png')}" alt="" />
                </div>
                <span>已完成订单</span>
              </div>
            </li>
          </ul>
          <!-- <ul className="my_center_list margin-top-20">
            <li className="margin">
              <span className="left-span">我的积分</span>
              <div className="fr right">
                <span>积分明细</span>
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
            </li>
            <li className="orderTab">
              <div className="tabs">
                <div className="tabImg">
                  <img src="{require('../../assets/images/mine/recently_integral.png')}" alt="" />
                  {this.state.recentArrivalFlag && <img className="redDot" src={require('../../assets/images/mine/red_dot.png')} alt="" />}
                </div>
                <span>最近到账</span>
              </div>
              <div className="tabs">
                <div className="tabImg">
                  <img src={require('../../assets/images/mine/about_integral.png')} alt="" />
                  {this.state.imminentArrivalFlag && <img className="redDot" src={require('../../assets/images/mine/red_dot.png')} alt="" />}
                </div>
                <span>即将到账</span>
              </div>
              <div className="tabs">
                <div className="tabImg">
                  <img src={require('../../assets/images/mine/expire_integral.png')} alt="" />
                </div>
                <span>即将过期</span>
              </div>
            </li>
          </ul> -->
    
          <ul className="my_center_list margin-top-20">
            <li>
              <span className="left-span">礼券绑定</span>
              <div className="fr right">
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
            </li>
            <li>
              <span className="left-span">我的礼包</span>
              <div className="fr right">
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
              {this.state.giftBagCount && <p className="tips-coupons">{ this.state.giftBagCount }个礼包待领取</p>}
            </li>
            <li>
              <span className="left-span">我的福利</span>
              <div className="fr right">
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
              <p className="tips-coupons">{this.state.couponNum > 9 ? '9+' : this.state.couponNum}
                <span>张礼券</span>
              </p>
            </li>
          </ul>
          <ul className="my_center_list margin-top-20">
            <li>
              <span className="left-span">邀请亲友</span>
              <div className="fr right">
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
            </li>
          </ul>
          <ul className="my_center_list margin-top-20 fill-blanks">
            <li>
              <span className="left-span">客服投诉和问题反馈</span>
              <div className="fr right">
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
            </li>
            <li>
              <span className="left-span">帮助中心</span>
              <div className="fr right">
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
            </li>
            <li>
              <span className="left-span">系统设置</span>
              <div className="fr right">
                <img src="{require('../../assets/images/mine/rightArrow.png')}" alt="" />
              </div>
            </li>
          </ul>
        </section>
        <TabBar />
      </div>
    <TabBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/TabBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "UserView",
  components: {
    TabBar,
  },
});
</script>

<style lang="scss" scoped>
.personal-center-page {
  padding-bottom: 0.2rem;
  width: 100%;
  height: 100%;
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans",
    "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", FontAwesome, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: #333;
  font-size: 1.6rem;
  user-select: none;// 不允许选中
}

/* header背景 */
.header-bg {
  position: absolute;
}

/* 个人中心列表 */
.my_center_list {
  background-color: #f8f8f8;
  text-align: left;
  overflow: hidden;
  width: 6.9rem;
  margin: auto;
  /* box-shadow: 0 0 10px 0 rgba(0,0,0,0.10); */
  border-radius: 5px;
}
.margin-top-20 {
  margin-top: 0.2rem;
}
.my_center_list li {
  list-style: none;
  height: 0.98rem;
  line-height: 0.98rem;
  padding: 0 0.35rem;
  color: #333;
  border-bottom: 1px solid #ececec;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 0;
  overflow: hidden;
  vertical-align: middle;
}
.my_center_list .margin {
  padding: 0;
  margin: 0 0.35rem;
}
.my_center_list li:last-child {
  border-bottom: none;
}
.my_center_list li .left-span {
  color: #333;
  font-size: 0.28rem;
  line-height: 0.98rem;
  vertical-align: middle;
}
.my_center_list li .leftImg {
  width: 0.48rem;
  vertical-align: middle;
}
.my_center_list li .leftImg2 {
  width: 0.48rem;
  vertical-align: middle;
}
.my_center_list li .fr {
  float: right;
  font-size: 0;
  vertical-align: middle;
}
.my_center_list li .right {
  text-align: right;
  height: 0.98rem;
  vertical-align: middle;
}
.my_center_list li .right span {
  font-size: 0.28rem;
  color: #999;
  margin-right: 0.2rem;
  line-height: 0.98rem;
  vertical-align: middle;
}
.my_center_list li .right img {
  width: 0.16rem;
  height: 0.28rem;
  vertical-align: middle;
}
.my_center_list .orderTab {
  height: 1.5rem;
  overflow: hidden;
  text-align: center;
  border: none;
}
.my_center_list .orderTab .tabs {
  float: left;
  width: 33%;
  text-align: center;
  margin-top: 0.3rem;
  line-height: normal;
}
.my_center_list .orderTab .tabs span {
  font-size: 0.24rem;
  color: #666;
  margin-top: 0.2rem;
  display: inline-block;
}
.my_center_list .orderTab .tabs .tabImg {
  width: 0.56rem;
  height: 0.41rem;
  margin: auto;
  position: relative;
  text-align: left;
}
.my_center_list .orderTab .tabs .tabImg img {
  width: 100%;
}
.my_center_list .orderTab .tabs .tabImg .redDot {
  position: absolute;
  width: 0.16rem;
  right: -0.05rem;
  top: -0.05rem;
}

.home-top {
  position: relative;
  padding-top: 1rem;
  text-align: center;
  .card-bg-wrap {
    position: relative;
    width: 6.9rem;
    height: 2.9rem;
    margin: 0 auto;
    // background: url(../../assets/images/mine/card_bg.png) no-repeat; // flag zhaoyang
    background-size: cover;
    font-size: 0.24rem;
    .grade {
      position: absolute;
      width: 0.86rem;
      left: 0.15rem;
      top: 0.15rem;
    }
    .company-logo {
      position: absolute;
      width: 1.2rem;
      right: 0.15rem;
      top: 0.15rem;
    }
    .piont-use {
      position: absolute;
      right: 0.15rem;
      bottom: 0.35rem;
      font-weight: bold;
    }
    .piont-use img{
      width: 0.1rem;
    }
    .nickname {
      padding-top: 0.55rem;
      font-size: 0.24rem;
      font-weight: bold;
    }
    .piont-view {
      font-size: 0.52rem;
      font-weight: bold;
      color: #a6945d;
      span {
        font-size: 0.24rem;
        font-weight: initial;
        color: #bbbbbb;
      }
    }
    .rights {
      img {
        width: 0.42rem;
      }
    }
  }
}

.fill-blanks {
  margin-bottom: 1rem;
}

.tips-coupons{
  float: right;
  font-size: 0.24rem;
  color: #ee3f43;
}
.tips-coupons span{
  color: #999;
}
</style>