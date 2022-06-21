<template>
  <div class="content">
    <p class="please">请登录</p>

    <input v-model="name" class="name" type="text" placeholder="请输入账号" />
    <input
      v-model="password"
      class="password"
      type="text"
      placeholder="请输入密码"
    />
    <!-- <a @clicl="$router.push('/registered')">点击注册</a> -->
    <button class="login" @click="onLogin">登录</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AccountLogin } from "@/api/account";

export default defineComponent({
  name: "LoginView",
  components: {},
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      AccountLogin({
        username: this.name,
        password: this.password,
      }).then((res: any) => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('userId', res.userInfo.id)
        localStorage.setItem('userInfo', JSON.stringify(res.userInfo))
        this.$router.push("/user");
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  padding: 0rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.39);
  .please {
    font-size: 0.46rem;
    font-weight: 800;
    color: #000000;
    position: absolute;
    top: 1rem;
  }
  .name {
    width: 6.5rem;
    height: 0.9rem;
    border: 1px solid #818691;
    border-radius: 12px;
    margin-bottom: 0.3rem;
    margin-top: 2.4rem;
    padding: 0.27rem 0rem 0.26rem 0.3rem;
    box-sizing: border-box;
    color: #818691;
    font-size: 0.26rem;
    outline: 0;
  }
  .password {
    width: 6.5rem;
    height: 0.9rem;
    border: 1px solid #818691;
    border-radius: 12px;
    padding: 0.27rem 0rem 0.26rem 0.3rem;
    box-sizing: border-box;
    color: #818691;
    font-size: 0.26rem;
    outline: 0;
  }
  a {
    display: inline-block;
    text-decoration: none;
    margin-top: 0.2rem;
    color: #818691;
    font-size: 0.24rem;
  }
  .login {
    width: 6.5rem;
    height: 0.9rem;
    background-color: #3a70ec;
    border: 0rem;
    box-shadow: 0px 6px 10px rgba(58, 112, 236, 0.3);
    border-radius: 12px;
    margin-top: 1.5rem;
    color: #ffffff;
    font-size: 0.26rem;
  }
}
</style>
