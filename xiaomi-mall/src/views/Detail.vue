<template>
  <div id="detail">
    <van-nav-bar
      :title="detail.name"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <img :src="detail.coverImage | dalImg" />
    <div class="content">
      <p>{{ detail.name }}</p>
      <div class="price">
        <h3>￥{{ detail.price }}</h3>
        <p>
          ￥<span>{{ (detail.price + 100).toFixed(2) }}</span>
        </p>
        <p>直降100元</p>
      </div>
      <van-cell title="分期" is-link value="花呗分期/小米分期" />
      <van-cell title="已选" is-link :value="detail.name" />
      <van-cell title="送至" is-link value="北京市朝阳区" />
      <p class="huan">支持7天退换货</p>
    </div>

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="detail.id"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="badge" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="show = true"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <van-popup v-model="popupShow">
      <span>您还没有登录</span>
      <router-link :to="{ name: 'Login' }"> 去登录？ </router-link>
    </van-popup>
  </div>
</template>

<script>
import { loadCartAPI } from "@/services/carts";
import { getDetails, addCart } from "@/services/details";
import { serveUrl } from "@/utils/request";
import { Toast } from "vant";
export default {
  name: "XiaomiMallDetail",

  data() {
    return {
      areaList: {},
      popupShow: false,
      count: this.$store.state.count,
      detail: [],
      show: false,
      token: "",
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img01.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img01.yzcdn.cn/1p.jpg", // 用于预览显示的规格类目图片
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品

        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "",
      },
    };
  },

  mounted() {},
  created() {
    this.loadDetail(), this.loadCount();
  },
  methods: {
    async loadCount() {
      const data = await loadCartAPI();
      this.count = data.data.data.reduce(
        (pre, val) => pre * 1 + val.amount * 1,
        0
      );
    },
    async loadDetail() {
      const data = await getDetails(this.$route.params.id);
      this.detail = data.data.data;
      this.sku.list[0].price = this.detail.price * 100;
      this.sku.list[0].stock_num = this.detail.amount;
      this.sku.list[0].id = this.detail.id;
      this.sku.tree[0].v[0].imgUrl = serveUrl + this.detail.coverImage;
      this.sku.tree[0].v[0].previewImgUrl = serveUrl + this.detail.coverImage;
      this.goods.picture = serveUrl + this.detail.coverImage;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    async onAddCartClicked(sku) {
      if (sessionStorage.getItem("token")) {
        const data = await addCart({
          amount: sku.selectedNum,
          price: sku.selectedSkuComb.price / 100,
          product: sku.selectedSkuComb.id,
        });
        console.log(data);
        if (data.data.code == 1) {
          Toast("加入成功");
          this.count = this.$store.state.count;
          this.loadCount();
          this.show = false;
        }
      } else {
        this.show = false;
        this.popupShow = true;
      }
    },
    onBuyClicked() {},
  },
  computed: {
    badge() {
      if (sessionStorage.getItem("token")) {
        if (this.$store.state.count > 0) {
          return this.$store.state.count;
        } else {
          return "";
        }
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.detail {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.detail p {
  width: 100vw !important;
}

img {
  width: 100vw !important;
}

.content {
  width: 100vw;
  padding: 5px 15px;
}

.content h3 {
  color: rgba(255, 112, 58, 1);
  /* margin: 5px 0; */
}
.price {
  display: flex;
  padding: 5px 0;
  align-items: center;
}
.price p:nth-of-type(1) {
  margin: 0 10px;
  color: rgba(166, 166, 166, 1);
  font-size: 14px;
}
.price span {
  text-decoration: line-through;
}
.price p:nth-of-type(2) {
  background-color: rgba(255, 112, 58, 1);
  color: white;
  padding: 3px;
  font-size: 12px;
}
.van-cell {
  padding: 5px;
}
.van-cell__value {
  text-align: left;
}
.huan {
  font-size: 12px;
  color: rgba(128, 128, 128, 1);
  margin: 5px 30px;
}
</style>
