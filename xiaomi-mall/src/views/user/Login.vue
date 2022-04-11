<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[
          {
            pattern,
            message: '6-18个字符，可使用数字字母下划线组成，必须字母开头',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ validator, message: '密码格式错误' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <router-link class="a-link" :to="{ name: 'Reg' }"
      >没有账号？点击注册</router-link
    >
  </div>
</template>

<script>
import { login } from "@/services/user/login.js";
export default {
  name: "XiaomiMallLogin",

  data() {
    return {
      username: "",
      password: "",
      pattern: /^[a-zA-Z]\w{5,17}$/,
    };
  },

  mounted() {},

  methods: {
    onSubmit() {
      login({ userName: this.username, password: this.password }).then(
        (res) => {
          console.log(res.data);
          sessionStorage.setItem("token", res.data.data);
          this.$router.push("/");
        }
      );
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    validator(val) {
      return /^\w{6,25}$/.test(val);
    },
  },
};
</script>

<style scoped>
.a-link {
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
