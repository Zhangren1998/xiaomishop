<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="订单详情"
        right-text="分享"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <img src="../assets/103.png" alt="" />
      <p class="alpay">
        <van-icon name="passed" />
        <span>已支付</span>
      </p>
    </div>
    <van-address-list :list="list" />
    <div class="product">
      <div class="item" v-for="item in 3" :key="item">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1061cd8d46977b5291d481d0cd44105e.jpg?thumb=1&w=250&h=250&f=webp&q=90"
          alt=""
        />
        <p>Redmi K50 电竞版</p>
        <span>x1</span>
        <span>1599元</span>
      </div>
    </div>
    <div class="foot">
      <p><span>订单金额：</span><span>￥199</span></p>
      <p>免运费</p>
    </div>
    <p class="last"><span>实付金额：</span><span>￥199</span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "User",
      });
    },
    onClickRight() {},
  },
};
</script>

<style scoped>
.view {
  height: 100%;
  background-color: rgb(244, 242, 242);
}
.top {
  background-color: #fff;
}
.alpay {
  padding: 30px 20px;
}
.alpay span {
  margin: 0 5px;
  font-size: 14px;
}
.van-address-list__bottom {
  display: none;
}
.van-address-list {
  height: 90px;
  padding: 0;
  margin-bottom: 10px;
  margin-top: 5px;
}
.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  color: rgba(80, 80, 80, 1);
}
.item img {
  width: 38px;
  height: 38px;
}
.product {
  background-color: #fff;
}
.foot {
  height: 70px;
  background-color: #fff;
  margin-top: 10px;
  padding: 20px;
  font-size: 13px;
}
.foot p:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.last {
  color: rgba(255, 104, 72, 1);
  display: flex;
  justify-content: space-between;
  background-color: rgb(244, 242, 242);
  padding: 10px 20px;
}
.view::after {
  display: none;
}
</style>
