<template>
  <div>
    <van-nav-bar title="我的购物车" style="border-bottom:1px solid grey" />
    <div class="nodata" v-if="false" style="height:100vh;line-height:100vh;text-align: center;font-size: 18px;">
      <p>您的购物车暂无商品 <router-link to="/" style="color:#1989fa">去逛逛~</router-link>
      </p>
    </div>
    <div class="hasdata" v-else>

      <van-swipe-cell>
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
          thumb="https://img01.yzcdn.cn/vant/cat.jpeg">
          <template #tag>
            <van-checkbox style="background-color: #ff149312" v-model="checked"></van-checkbox>
          </template>
        </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" style="height:100%" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
          thumb="https://img01.yzcdn.cn/vant/cat.jpeg">
          <template #tag>
            <van-checkbox style="background-color: #ff149312" v-model="checked"></van-checkbox>
          </template>
        </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" style="height:100%" />
        </template>
      </van-swipe-cell>

      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="allChecked">全选</van-checkbox>
      </van-submit-bar>
    </div>

  </div>
</template>

<script>
import { loadCartAPI } from '@/services/carts'
export default {
  name: 'XiaomiMallCart',

  data () {
    return {
      data: [
        {
          isChecked: false
        }
      ],
      allChecked: false
    };
  },
  created () {
    this.loadCarts()
  },
  mounted () {

  },

  methods: {
    async loadCarts () {
      const data = await loadCartAPI()
      console.log(data.data);
      this.data = data.data.data
    },
    toggle (index) {
      this.$refs.checkboxes[index].toggle();
    },
    onSubmit () { }
  },
  computed: {
    nodata () {
      if (this.data.length == 0) {
        return true
      }
      else {
        return false
      }
    },
    // allChecked: {
    //   get () { },
    //   set (v) {

    //   }
    // }
  }
};
</script>

<style  scoped>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>
