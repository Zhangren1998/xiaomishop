<template>
  <div>
    <van-nav-bar
      title="消息通知"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <van-steps direction="vertical" :active="0">
      <van-step>
        <h3 class="van-ellipsis">您的小米商品已出库</h3>
        <p class="van-ellipsis">
          您的订单已出库，预计12/21出库（中通快递：已经到达xx省xx市）
        </p>
        <p>12月20日</p>
      </van-step>
      <van-step>
        <h3 class="van-ellipsis">
          老朋友，送你的感恩现金卷已备好，欢迎下次继续来购买，便宜多多
        </h3>
        <p class="van-ellipsis">请收下我们对你的真诚写意，查收礼物></p>
        <p>12月18日</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style>
.van-icon-arrow-left:before {
  content: "\e668";
  color: gray;
}
.van-nav-bar__title {
  font-size: 18px;
}
</style>
