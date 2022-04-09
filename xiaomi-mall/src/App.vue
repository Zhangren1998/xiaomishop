<template>
  <div id="app">
    <router-view />
    <van-tabbar active-color="#1989fa" v-model="active" :fixed="false" v-show="isShow">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" :to="{ name: 'List' }">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" :to="{ name: 'User' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'XiaomiMallApp',

  data () {
    return {
      active: 0
    };
  },

  mounted () {

  },

  methods: {

  },
  computed: {
    isShow () {
      if (this.$route.meta.tabHide) {
        return false
      } else {
        return true
      }
    }
  }
};
</script>
<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
