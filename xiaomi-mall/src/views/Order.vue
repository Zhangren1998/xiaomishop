<template>
  <div>
    <van-nav-bar title="结算" left-text="" left-arrow @click-left="onClickLeft" />
    <van-address-list :list="list" />
    <div class="pay">
      <div class="zhifu">
        <van-cell title="微信支付" icon="gold-coin-o" is-link value="工行信用卡支付，享随机立减" />
        <van-field name="radio" label="">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1"></van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="zhifu">
        <van-cell title="支付宝" icon="gold-coin-o" is-link value="支付订单，赢1999元大红包" />
        <van-field name="radio" label="">
          <template #input>
            <van-radio-group direction="horizontal">
              <van-radio name="1"></van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="zhifu">
        <van-cell title="小米钱包" icon="gold-coin-o" is-link value="绑新卡支付，享最高立减99元" />
        <van-field name="radio" label="">
          <template #input>
            <van-radio-group direction="horizontal">
              <van-radio name="1"></van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="zhifu">
        <van-cell title="银联在线支付" icon="gold-coin-o" is-link value="" />
        <van-field name="radio" label="">
          <template #input>
            <van-radio-group direction="horizontal">
              <van-radio name="1"></van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="zhifu">
        <van-cell title="翼支付" icon="gold-coin-o" is-link value="" />
        <van-field name="radio" label="">
          <template #input>
            <van-radio-group direction="horizontal">
              <van-radio name="1"></van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
    </div>
    <p class="rules">*查看支付活动规则</p>
    <van-cell title="快速配送（免运费）" is-link value="不限送货时间" />
    <van-cell title="电子发票" is-link />
    <van-cell title="优惠券" is-link value="无可用" />
    <div class="product">
      <div class="item" v-for="item in 3" :key="item">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1061cd8d46977b5291d481d0cd44105e.jpg?thumb=1&w=250&h=250&f=webp&q=90"
          alt="" />
        <p>Redmi K50 电竞版</p>
        <span>x1</span>
        <span>1599元</span>
      </div>
    </div>
    <van-submit-bar :price="3050" button-text="去付款" @submit="onSubmit" @click="topay" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
      ],
      products: [],
    };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    onSubmit () {
      this.$router.push({
        name: "Pay",
      });
    },
    topay () { },
  },
};
</script>

<style scoped>
.view {
  height: 100vh;
  background-color: rgb(244, 242, 242);
}

.van-nav-bar {
  margin-bottom: 10px;
}

.van-address-list {
  height: 90px;
  padding: 0;
  margin-bottom: 10px;
}

.van-address-list__bottom {
  display: none;
}

.zhifu {
  display: flex;
}

.zhifu .van-icon-arrow {
  display: none;
}

.van-field {
  width: 15%;
}

.zhifu .van-cell__value {
  font-size: 12px;
  margin-left: -50px;
  text-align: left;
}

.rules {
  font-size: 14px;
  text-align: right;
  margin: 10px 5px;
  color: rgba(80, 80, 80, 1);
}

.box {
  display: none;
}

.product {
  background-color: #fff;
  margin: 10px 0;
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
</style>
