<template>
  <div id="app">
<<<<<<< HEAD
    <router-view class="main"></router-view>
    <van-tabbar :route="true" active-color="rgba(255, 112, 58, 1)" v-model="active" v-show="isShow" :fixed="false" class="main-nav">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name: 'List' }">分类</van-tabbar-item>
      <van-tabbar-item icon="shop" :to="{ name: 'News' }">发现</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" :to="{ name: 'User' }">我的</van-tabbar-item>
=======
    <router-view class="view" />
    <div style="height: 5rem" class="box"></div>
    <van-tabbar
      :route="true"
      active-color="#1989fa"
      v-model="active"
      v-show="isShow"
      class="main-nav"
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" :to="{ name: 'List' }"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="user-o" :to="{ name: 'User' }"
        >我的</van-tabbar-item
      >
>>>>>>> 5f7ea8cfd79ddedc76f6d96595753034fe4eddbd
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "XiaomiMallApp",

  data() {
    return {
      active: 0,
    };
  },

  mounted() {},

  methods: {},
  computed: {
    isShow() {
      if (this.$route.meta.tabHide) {
        return false;
      } else {
        return true;
      }
    },
  },
  components: {},
};
</script>
<style>
#app,
html,
body {
  width: 100%;
  height: 100vh;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100vw;
  height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  position: relative;
}

.main {
  flex: 1;
  overflow: auto;
}

.view::after {
  content: "";
  height: 50px;
  display: block;
}

.van-card__price {
  margin-left: 8px;
  color: #e26a3c;
}
.info {
  position: relative;
}
#news {
  position: absolute;
  right: 5vw;
  top: 5vh;
}
img {
  max-width: 100%;
}
</style>
