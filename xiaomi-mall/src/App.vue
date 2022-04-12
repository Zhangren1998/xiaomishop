<template>
  <div id="app">
    <router-view />
    <van-tabbar :route="true" active-color="#1989fa" v-model="active" v-show="isShow" :fixed="isFixed" class="main-nav">
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
  created () {
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
    },
    isFixed () {
      if (this.$route.meta.needFixed) {
        return true
      } else {
        return false
      }
    }
  },

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
</style>
