<template>
  <div class="content">
    <p class="please">请注册</p>

    <input v-model="name" class="name" type="text" placeholder="请输入用户名" />
    <input
      v-model="password"
      class="password"
      type="text"
      placeholder="请输入密码"
    />
    <input
      v-model="repassword"
      class="password"
      type="text"
      placeholder="请确认密码"
    />
    <input
      v-model="mobile"
      class="password"
      type="text"
      placeholder="请输入手机号"
    />
    <button class="login" @click="onRegister">注册</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AccountRegister } from "@/api/account";

export default defineComponent({
  name: "RegisteredView",
  components: {},
  data() {
    return {
      name: "",
      password: "",
      repassword: "",
      mobile: "",
    };
  },
  methods: {
    onRegister() {
      AccountRegister({
        accountName: this.name,
        password: this.password,
        repassword: this.repassword,
        mobile: this.mobile,
        role: 0,
      }).then((res) => {
        this.$router.push("/login");
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
    margin-bottom: 0.3rem;
    outline: 0;
  }
  a {
    display: inline-block;
    text-decoration: none;
    margin-top: 0.2rem;
  }
  .login {
    width: 6.5rem;
    height: 0.9rem;
    background-color: #54ad4a;
    border: 0rem;
    box-shadow: 0px 6px 10px rgba(58, 112, 236, 0.3);
    border-radius: 12px;
    margin-top: 1.8rem;
    color: #ffffff;
    font-size: 0.26rem;
    outline: 0;
  }
}
</style>
