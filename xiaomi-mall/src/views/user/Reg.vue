<template>
  <div>
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field name="uploader" label="请选择头像">
        <template #input>
          <van-uploader :after-read="afterRead" v-model="fileList" />
        </template>
      </van-field>
      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="男" value="男">男</van-radio>
            <van-radio name="女" value="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="nickName"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
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
      <van-field
        v-model="confirmPassword"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
    <router-link class="a-link" :to="{ name: 'Login' }"
      >已有账号？点击登录</router-link
    >
  </div>
</template>

<script>
import { reg } from "@/services/user/reg";
import { Toast } from "vant";
export default {
  name: "XiaomiMallReg",

  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      fileList: [],
      file: "",
      nickName: "",
      radio: "男",
      pattern: /^[a-zA-Z]\w{5,17}$/,
    };
  },

  mounted() {},

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.file = file.content;
    },
    onSubmit() {
      console.log(this.radio);
      if (
        this.username &&
        this.password &&
        this.password == this.confirmPassword
      ) {
        reg({
          userName: this.username,
          password: this.password,
          avatar: this.file,
          nickName: this.nickName,
          gender: this.radio,
        }).then((res) => {
          console.log(res.data);
          sessionStorage.setItem("token", res.data.data);
          this.$router.push("/");
        });
      }
      if (this.password != this.confirmPassword) {
        Toast("两次输入的密码不一致");
      }
      if (this.username == "" || this.password == "") {
        Toast("帐号密码不能为空");
      }
    },
    onClickLeft() {
      this.$router.back;
    },
    validator(val) {
      return /^\w{6,25}$/.test(val);
    },
  },
};
</script>

<style scoped>
.a-link {
  width: 100vw;
  display: inline-block;
  text-align: center;
}
</style>
