<template>
  <div class="home">
    <van-sticky class="top">
      <!-- <van-icon name="comment" /> -->
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <!-- <van-icon name="enlarge" /> -->
    </van-sticky>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="i in banners.data" :key="i.id">
        <img :src="i.coverImage | dalImg" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="hot">
      <h3>热卖爆品，火热感恩</h3>
      <p>千元全面屏现货抢</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadProducts"
        class="content"
      >
        <van-row type="flex" justify="space-around">
          <van-col span="11" v-for="item in products" :key="item.id">
            <van-card tag="新品热卖">
              <template #thumb>
                <img :src="item.coverImage | dalImg" alt="item.name" />
              </template>
              <template #title>
                <h4>{{ item.name }}</h4>
              </template>
              <template #desc>
                <p class="desc">描述信息</p>
              </template>
              <template #price>
                <p class="price">
                  ￥<span>{{ item.price }}</span
                  >起
                </p>
              </template>
              <template #footer>
                <van-button @click="toDetail(item.id)">立即购买</van-button>
              </template>
            </van-card>
          </van-col>
        </van-row>
      </van-list>

      <div class="huasuan">
        <h4>感恩节必读省钱攻略怎么买最划算<a href=""></a></h4>
      </div>
    </div>
    <div class="fuli">
      <div class="left">
        <h4>
          附加福利，<br />
          送手机感恩礼
        </h4>
        <a href="">领取福利</a>
        <a href="">挑选手机</a>
      </div>
      <div class="right">
        <h2>福利</h2>
        <p></p>
      </div>
    </div>
    <!-- 返回顶部 -->
    <div @click="toTop" class="backTop">↑</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { loadBanners } from "@/services/banner.js";
import { loadProducts } from "@/services/products.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      value: "",
      page: 1,
      products: [],
      token: "",
      loading: false,
      finished: false,
      pages: 1,
    };
  },
  created() {
    this.loadBanner();
    this.loadProducts();

    // this.loadProducts();
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        name: "Detail",
        params: { id },
      });
    },
    async loadBanner() {
      const banner = await loadBanners();
      this.banners = banner.data;
      console.log(this.banners);
    },
    async loadProducts() {
      const res = await loadProducts();
      this.page++;
      this.pages = res.pages;
      this.products.push(...res.data.data);
      if (this.page > this.pages) {
        this.finished = true;
      }
      console.log(this.products);
    },
    toTop() {
      this.$nextTick(function () {
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    },
  },
};
</script>
<style scoped>
img {
  width: 100vw;
}

.top .van-sticky {
  display: flex;
}

.hot {
  background-color: rgb(245, 180, 59);
  padding: 16px 8px 5px 8px;
}

.hot p {
  font-size: 14px;
}

.hot h3,
.hot p {
  text-align: center;
}

.hot h3 {
  color: rgba(126, 77, 29, 1);
}

.van-col {
  margin-bottom: 10px;
}

.van-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;
}

.van-card__header {
  display: block;
}

.van-card__header img {
  width: 100vw;
  height: 20vh;
}

.van-card__header h4 {
  width: 150px;
  height: 32px;
  margin: 0 auto;
  text-align: left;
}

.van-card__content {
  display: block;
  min-height: 0;
}

.van-card__content .desc {
  font-size: 12px;
  margin: 5px;
}

.price {
  color: red;
}

.price span {
  margin: 0 5px;
  font-weight: bold;
  font-size: 16px;
}

.van-card__footer {
  text-align: center;
}

.van-card__footer .van-button {
  background-color: red;
  color: white;
  width: 100px;
  height: 30px;
  font-size: 13px;
  margin: 5px 0;
}

.van-card__thumb {
  position: static;
}

.van-tag--mark {
  border-radius: 0;
}

.van-tag--mark {
  border-radius: 0;
  padding: 5px;
}

.van-card__tag {
  top: 0;
}

.huasuan {
  width: 100%;
  height: 103px;
  background-color: rgba(245, 87, 78, 1);
  margin-top: 5px;
}

.huasuan h4 {
  color: rgba(255, 255, 255, 1);
  width: 150px;
  text-align: left;
  margin-left: 120px;
  padding-top: 30px;
}

.fuli {
  width: 100%;
  height: 162px;
  background-color: rgba(245, 87, 78, 1);
  display: flex;
  justify-content: space-around;
  padding: 15px;
}

.fuli .left {
  width: 103px;
}

.fuli .left h4 {
  color: rgba(255, 242, 239, 1);
}

.fuli .left a {
  display: block;
  width: 103px;
  height: 38px;
  left: 33px;
  top: 348px;
  color: rgba(245, 87, 78, 1);
  background-color: rgba(255, 242, 239, 1);
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
}

.fuli .right {
  position: relative;
}

.fuli .right h2 {
  width: 145px;
  height: 56px;
  color: rgba(245, 197, 172, 1);
  background-color: rgba(222, 76, 68, 1);
  font-size: 31px;
  text-align: center;
  line-height: 76px;
  margin-left: 20px;
}

.fuli .right p {
  width: 183px;
  height: 56px;
  color: rgba(80, 80, 80, 1);
  background-color: rgba(245, 197, 172, 1);
}

.backTop {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: rgb(240, 236, 236);
  position: fixed;
  right: 10px;
  bottom: 70px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
}
</style>
