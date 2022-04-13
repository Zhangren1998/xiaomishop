<template>
  <div id="app">
    <router-view class="view" />
    <div style="height: 5rem" class="box"></div>
    <van-tabbar :route="true" active-color="#1989fa" v-model="active" v-show="isShow" class="main-nav">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" :to="{ name: 'List' }">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" :to="{ name: 'User' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "XiaomiMallApp",

  data () {
    return {
      active: 0,
    };
  },

  mounted () { },

  methods: {},
  computed: {
    isShow () {
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
