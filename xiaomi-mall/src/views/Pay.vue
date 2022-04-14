<template>
  <div>
    <div class="top">
      <div class="left" @click="onClickLeft">取消</div>
      <p>确认支付</p>
    </div>
    <p class="order">小米科技12325345433514号订单</p>
    <h1>￥199.00元</h1>
    <div class="collection">
      <span>收款方</span>
      <p>小米科技有限责任公司</p>
    </div>
    <a @click="confirm">立即支付</a>
    <p class="foot">支付安全由中国人民财产保险股份有限公司承保</p>
    <div class="mask" v-show="show">
      <van-nav-bar
        title="支付"
        left-text="X"
        right-text="使用密码"
        @click-left="ClickLeft"
      />
      <div class="price">
        <p>小米科技有限责任公司</p>
        <h1>￥199.00</h1>
      </div>
      <van-cell title="招商银行信用卡(6666)" is-link />
      <a @click="paysuccess">确认支付</a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Overlay } from "vant";
Vue.use(Overlay);
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    ClickLeft() {
      this.show = false;
    },
    confirm() {
      this.show = true;
    },
    paysuccess() {
      this.$router.push({
          name:"PaySuccess"
      });
    },
  },
};
</script>

<style scoped>
.top {
  height: 55px;
  background-color: rgba(19, 18, 18, 0.893);
  color: white;
  line-height: 55px;
}
.top .left {
  float: left;
  margin-left: 10px;
  font-size: 14px;
}
.top p {
  text-align: center;
}
.order {
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: rgb(12, 12, 12);
}
h1 {
  text-align: center;
  font-weight: 600;
}
.collection {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(159, 157, 157);
  border-bottom: 1px solid rgb(159, 157, 157);
  margin: 40px 0;
  padding: 0 10px;
}
.collection span {
  font-size: 14px;
  color: gray;
}
a {
  display: block;
  width: 90%;
  margin: 0 auto;
  height: 50px;
  background-color: rgba(26, 173, 25, 1);
  color: white;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
}
.foot {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: rgba(128, 128, 128, 1);
  font-size: 13px;
  position: absolute;
  bottom: 0;
}
.mask {
  width: 260px;
  height: 260px;
  background-color: white;
  position: absolute;
  top: 160px;
  left: 53px;
  display: block;
  border: 1px solid rgb(88, 87, 87);
}
.price {
  border-top: 1px solid rgb(223, 222, 222);
  border-bottom: 1px solid rgb(223, 222, 222);
  text-align: center;
  padding: 10px 0;
  color: rgba(102, 102, 102, 1);
}
.price p {
  font-size: 14px;
}
.price h1 {
  color: rgba(0, 0, 0, 1);
}
.mask .van-cell {
  color: rgba(102, 102, 102, 1);
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 20px;
}
</style>
