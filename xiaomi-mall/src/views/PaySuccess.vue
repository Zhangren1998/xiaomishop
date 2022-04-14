<template>
  <div class="box">
    <div class="top">
      <img src="../assets/86.png" alt="" />
      <p>支付成功</p>
    </div>
    <div class="cen">
      <p>小米科技有限责任公司</p>
      <h1>￥199.00</h1>
    </div>
    <div class="foot" @click="back">返回商家</div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push({ name: "OrderDetail" });
    },
  },
};
</script>

<style scoped>
.top {
  width: 100px;
  height: 80px;
  margin: 0 auto;
  text-align: center;
  margin-top: 73px;
}
.top p {
  color: rgba(26, 173, 25, 1);
}
.cen {
  height: 120px;
  text-align: center;
  margin-top: 80px;
}
.cen p {
  color: rgba(80, 80, 80, 1);
  padding: 15px 0;
}
.cen h1 {
  color: rgba(80, 80, 80, 1);
}
.foot {
  height: 40px;
  width: 190px;
  margin: 0 auto;
  line-height: 40px;
  color: rgba(26, 173, 25, 1);
  border: 1px solid rgba(26, 173, 25, 1);
  border-radius: 6px;
  text-align: center;
  margin-top: 100px;
}
</style>
