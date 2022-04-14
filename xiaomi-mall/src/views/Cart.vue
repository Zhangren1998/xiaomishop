<template>
  <div>
    <van-nav-bar
      title="我的购物车"
      left-arrow
      @click-left="onClickLeft"
      style="border-bottom: 1px solid grey"
    />
    <div
      class="nodata"
      v-if="nodata"
      style="
        height: 100vh;
        line-height: 100vh;
        text-align: center;
        font-size: 18px;
      "
    >
      <p>
        您的购物车暂无商品
        <router-link to="/" style="color: #1989fa">去逛逛~</router-link>
      </p>
    </div>
    <div class="hasdata" v-else>
      <van-swipe-cell v-for="i in data" :key="i.id">
        <van-card
          :num="+i.amount"
          :price="'总价' + i.price * i.amount"
          :desc="'仓库剩余' + i.product.amount"
          :title="i.product.name"
          class="goods-card"
          :thumb="i.product.coverImage | dalImg"
        >
          <template #price-top> 单价：{{ i.price }} </template>
          <template #tag>
            <van-checkbox
              style="background-color: #ff149312"
              v-model="i.isChecked"
            >
            </van-checkbox>
          </template>
          <template #tags>
            <van-stepper
              :step="step"
              v-model="i.amount"
              theme="round"
              button-size="22"
              disable-input
              @plus="add(i)"
              @minus="minus(i)"
            />
          </template>
        </van-card>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            style="height: 100%"
            @click="del(i.id)"
          />
        </template>
      </van-swipe-cell>

      <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="allChecked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { loadCartAPI, delCartProduct } from "@/services/carts";
import { addCart } from "@/services/details";
import { Toast } from "vant";
export default {
  name: "XiaomiMallCart",

  data() {
    return {
      data: [],
      count: 0,
      step: 1,
    };
  },
  created() {
    this.loadCarts();
  },
  mounted() {},

  methods: {
    async loadCarts() {
      const data = await loadCartAPI();
      //需要先给获取到的数据设置isChecked属性和值再给变量否则会导致复选框点击不更改
      data.data.data.map((i) => {
        i.isChecked = false;
      });
      this.data = data.data.data;
      console.log(this.data);
      this.count = this.data.reduce((pre, val) => pre * 1 + val.amount * 1, 0);
      this.$store.state.count = this.count;
    },
    async del(id) {
      const data = await delCartProduct(id);
      this.loadCarts();
      Toast(data.data.msg);
    },
    onClickLeft() {
      this.$router.back();
    },
    async add(i) {
      await addCart({
        product: i.product.id,
        amount: this.step,
        price: i.price,
      });
      const res = await loadCartAPI();
      this.list = res.data.data;
      console.log(this.list.reduce((pre, val) => pre * 1 + val.amount * 1, 0));
      this.$store.state.carts.count = this.list.reduce(
        (pre, val) => pre * 1 + val.amount * 1,
        0
      );
    },
    async minus(i) {
      await addCart({
        product: i.product.id,
        amount: -this.step,
        price: i.price,
      });
      const res = await loadCartAPI();
      this.list = res.data.data;
      console.log(this.list.reduce((pre, val) => pre * 1 + val.amount * 1, 0));
      this.$store.state.carts.count = this.list.reduce(
        (pre, val) => pre * 1 + val.amount * 1,
        0
      );
    },
    onSubmit() {
      this.$router.push({
        name: "Order",
      });
    },
  },
  computed: {
    nodata() {
      if (this.data.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    allChecked: {
      get() {
        return this.data.every((v) => v.isChecked == true);
      },
      set(v) {
        this.data.map((i) => (i.isChecked = v));
      },
    },
    total() {
      return (
        this.data
          .filter((v) => v.isChecked == true)
          .reduce((pre, val) => pre * 1 + val.price * val.amount, 0) * 100
      );
    },
  },
};
</script>

<style scoped>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>
