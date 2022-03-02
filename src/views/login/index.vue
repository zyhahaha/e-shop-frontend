<template>
  <div class="login-page view" v-show="loding">
    <div class="header_top"></div>
    <slot name="header">
      <!-- <header><img className="{'min_logo':min_logo}" src={require('../../assets/images/login/logo.png')}/></header> -->
    </slot>
    <div class="header_bottom"></div>
    <section class="logo_main">
      <form focusin="focusinMethod" focusout="focusoutMethod">
        <!-- {/* <div id="log1" v-if="mobileState">
              <article className="clearfix tel">
                <div className="index_div">
                  <input type="tel" v-model="mobileNum" className="form-control" maxlength="11" name="loginMobile" placeholder="请输入手机号码" />
                </div>
              </article>
              <article className="clearfix">
                <div className="index_div">
                  <input type="tel" v-model="validCodeNum" placeholder="请输入验证码" className="form-control" maxlength="6" id="code" name="code" />
                  <div className="code_btn_txt" click="getValidCode" v-if="codeState">获取验证码</div>
                  <div className="code_btn_txt" v-if="codeState2">获取验证码</div>
                  <div className="code_btn_d" v-if="!codeState&&!codeState2">{this.state.timeNum}s后重新获取</div>
                </div>
              </article>
              <div className="btn_div_d">
                <button type="button" className="logo_btn btn click_btn" onClick={this.login} id="log2_dl">
                  登录
                </button>
              </div>
        </div> */}-->
        <!-- {/* 账号密码登录 */} -->
        <div id="log2" v-if="accountState">
          <article class="clearfix man">
            <div class="index_div">
              <input
                type="tel"
                onchange="{this.changeAccountState}"
                v-model="accountNum"
                maxlength="11"
                minlength="11"
                class="form-control"
                id="username"
                name="username"
                placeholder="请输入账号"
              />
            </div>
          </article>
          <article class="clearfix">
            <div class="index_div">
              <input
                onchange="{this.changePasswordState}"
                v-model="passwordNum"
                class="passwordType form-control"
                maxlength="6"
                minlength="6"
                type="tel"
                id="password"
                name="enPassword"
                placeholder="请输入密码"
                keyup="login"
              />
            </div>
          </article>
          <div class="btn_div_d">
            <button
              type="button"
              class="logo_btn btn click_btn"
              onclick="{this.login}"
              id="log2_dl"
            >登录</button>
          </div>
        </div>
      </form>
      <div class="deal_div clearfix">
        <div class="fl" v-if="typeAPP">
          <a click="user_agreement">
            用户登录即代表同意
            <span>《用户协议》</span>
          </a>
        </div>
        <div class="fr">
          <div
            click="forgetPwd"
            class="disableCss"
            id="btn_pwd"
            v-show="!mobileState && dahuaShow"
          >忘记密码？</div>
        </div>
      </div>
    </section>
    <footer class="footer_fixed"></footer>
    <div class="footer-wrapper clearfix" onclick="{this.login}" v-show="dahuaShow">
      <!-- {/* <div className="btn_block" id="cardLoginDiv" v-if="mobileState">账号密码登录</div> */} -->
      <div class="btn_block" id="telLoginDiv">手机验证登录</div>
    </div>

    <!-- {/* <div className="alr_bg" v-if="alr_show">
          <div className="alt1">
            <div className="alt_title">密码错误</div>
            <p>是否找回密码</p>
            <div className="btn_div">
              <input type="button" className="cancel" value="否" click="alr_show=false"/>
              <input type="button" className="active" value="是" click="confirmFindPSW()"/>
            </div>
          </div>
    </div> */}-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  components: {},
});
</script>

<style lang="sass" scoped>
.login-page
  &.view
    width: 100%
    background: hsl(0, 0%, 100%)

  header
    text-align: center
    font-size: 0
    height: 10.5%
    min-height: 1.4rem

  .header_top
    // height: 10%;
    height: 0.5rem

  .header_bottom
    height: 0.5rem

  header img
    width: 1.4rem

  header img.min_logo
    width: 1rem

  .logo_main
    background: #fff
    padding: 0 0.6rem
    height: 4.48rem

  form
    height: 85%

  .dahuaAPP
    height: 5.2rem

  & form
    height: 94%

  & article
    height: 30%

  & article:nth-child(2)
    height: 15%
    color: #777
    font-size: 0.24rem

  & article:nth-child(2) span
    color: #ee3f44

  & .btn_div_d
    height: 20%

  & .code_btn_txt
    margin-top: 0.34rem !important

  .clearfix
    zoom: 1

  #log1,
  #log2
    height: 100%

  article
    height: 33%

  .index_div
    border: 0
    border-bottom: 1px solid #ececec
    margin-top: 0.4rem
    float: left
    height: 65%
    width: 100%

  & .form-control
    width: 100%
    height: 100%
    background: #fff
    font-size: 0.32rem
    display: block
    text-indent: 0.1rem
    outline: none
    border: 0

  .clearfix:after
    content: '.'
    display: block
    height: 0
    clear: both
    visibility: hidden

  .btn_div_d
    margin-top: 0.4rem
    background: #fff
    color: #ee3f44
    border: none
    width: 100%
    height: 23%
    font-size: 0.36rem
    border-radius: 0 0 5px 5px

  & .btn
    text-align: center
    width: 100%
    height: 100%
    margin: 0 auto
    border: 0
    display: block
    font-size: 0.32rem

  & .dis_btn
    color: #f9c5c6
    background: #f58c8f

  & .click_btn
    color: #fff
    background: #ee3f44

  .deal_div
    margin-top: 0.3rem
    font-size: 0.24rem

  .disableCss
    color: #333
    text-decoration: none
    background: #fff
    font-size: 0.24rem
    cursor: pointer

  .footer_fixed
    margin: 0
    background: #fff
    height: 22%
    text-align: right

  .footer-wrapper
    position: fixed
    bottom: 0.5rem
    right: 0.1rem
    width: 100%
    background: #fff
    // -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    // -webkit-tap-highlight-color: transparent; /* For some Androids低版本的安卓，4.0以下 */
    // -webkit-tap-highlight-color: #000000
    // -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

  .btn_block
    font-size: 0.28rem
    background: #fff
    color: #ee3f44
    float: right
    display: inline-block
    margin-right: 0.6rem
    // -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    // -webkit-tap-highlight-color: transparent; /* For some Androids低版本的安卓，4.0以下 */
    // -webkit-tap-highlight-color: #000000
    // -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

  .code_btn_txt
    float: right
    display: inline-block
    margin: 0 !important
    font-size: 0.28rem !important
    color: #ee3f44 !important
    background: #fff !important
    margin-top: 0.2rem !important
    width: 2rem !important
    text-align: right
    line-height: 0.3rem
    height: 0.4rem !important
    margin-right: 0.1rem !important
    cursor: pointer

  #code
    width: 3.6rem
    float: left
    display: inline-block

  .fl a
    color: #999

  .fl span
    color: #666
    font-size: 0.24rem

  .code_btn_d
    float: right
    display: inline-block
    margin: 0
    font-size: 0.28rem
    color: #999
    background: #fff
    margin-top: 0.2rem
    width: 2rem
    text-align: right

  .alr_bg
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.4)
    z-index: 9999

  .model_btn_div
    width: 100%
    display: block
    border-top: 1px solid #ececec
    height: 1rem
    line-height: 1rem
    margin-top: 0.3rem
    border-radius: 0 0 5px 5px

  & .cancel,

  & .active
    float: left
    display: inline-block
    width: 49.9%
    background: #fff
    line-height: 1rem
    font-size: 0.32rem
    text-align: center
    border: none

  & .cancel
    color: #333
    border-right: 1px solid #ececec
    border-radius: 0 0 0 0.2rem

  & .active
    color: #ee3f44
    border-radius: 0 0 0.2rem 0

  .result
    position: absolute
    width: 6rem
    min-height: 3rem
    left: 10%
    top: 30%
    background: #fff
    border-radius: 0.2rem
    z-index: 100000

  .btn_bottom
    border: 0
    background: #fff
    font-size: 0.3rem
    color: #ee3f44
    line-height: 1rem
    text-align: center
    width: 100%
    border-radius: 0 0 0.2rem 0.2rem

  .model_title
    font-size: 0.42rem
    margin-top: 0.7rem
    color: #333

  .model_con
    line-height: 0.42rem
    font-size: 0.3rem
    color: #999
    text-align: center
    padding: 0 0.26rem

  .btn_div
    background: #fff
    color: #ee3f44
    border: none
    width: 100%
    line-height: 1rem
    font-size: 0.36rem
    border-top: 1px solid #ddd
    border-radius: 0 0 5px 5px

  & .btn_bottom
    border: 0
    background: #fff
    font-size: 0.42rem
    color: #ee3f44

  .color_ee3f44
    color: #ee3f44

  .alt_nonentity,
  .alt_tate,
  .alt_succeed
    position: absolute
    width: 70%
    min-height: 3rem
    left: 15%
    top: 30%
    background: #fff
    border-radius: 0.2rem
    z-index: 100000

  .alt_title
    margin-top: 0.6rem
    font-size: 0.36rem

  .disableCss
    color: #333
    text-decoration: none
    background: #fff
    font-size: 0.24rem
    cursor: pointer

  .coverBg
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.4)
    z-index: 9999

  .alt,
  .alt1,
  .alt2,
  .alt3
    position: absolute
    width: 6rem
    min-height: 3rem
    left: 10%
    top: 30%
    background: #fff
    border-radius: 0.2rem
    z-index: 100000
    padding-bottom: 0.2rem

  .alt_title
    font-size: 0.32rem
    padding-bottom: 0.2rem
    width: 100%
    text-align: center
    background: #fff !important
    margin-top: 0.5rem
    font-weight: bold

  .alt p,
  .alt1 p
    font-size: 0.28rem
    text-align: center
    width: 4.9rem
    margin: 0 auto
    color: #323232
    text-indent: 0 !important

  .alt2 p,
  .alt3 p
    font-size: 0.28rem
    text-align: center
    width: 80%
    margin: 0 auto
    margin-top: 0.5rem
    color: #323232
    text-indent: 0 !important

  .btn_div
    width: 100%
    text-align: center
    background: #fff !important
    margin-top: 0.5rem
    padding: 0

  .alt input,
  .alt1 input,
  .alt2 input,
  .alt3 input
    line-height: 0.5rem
    width: 1.6rem
    text-align: center
    border-radius: 0.1rem
    font-size: 0.24rem
    color: #fff
    border: 0

  .dial
    display: inline-block
    width: 1.6rem
    line-height: 0.5rem
    text-align: center
    border-radius: 0.1rem
    font-size: 0.24rem
    color: #fff

  .active
    background: #ee3f43

  .cancel
    background: #868686
</style>