<template>
  <div id="app">
    <router-view class="main"></router-view>
    <van-tabbar
      active-color="orange"
      v-model="active"
      :fixed="false"
      v-show="isShow"
    >
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name: 'List' }"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="shop" :to="{ name: 'List' }">发现</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager" :to="{ name: 'User' }"
        >我的</van-tabbar-item
      >
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
  width: 100vw;
  height: 100vh;
}

* {
  box-sizing: border-box;
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
}
.main {
  flex: 1;
  overflow: auto;
}
img {
  max-width: 100%;
}
</style>
