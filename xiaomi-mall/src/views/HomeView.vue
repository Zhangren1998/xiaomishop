<template>
  <div class="home">
    <van-sticky>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </van-sticky>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="i in banners.data" :key="i.id">
        <img :src="i.coverImage | dalImg" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// @ is an alias to /src
import { loadBanners } from '@/services/banner.js'
export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      value: ""
    }
  },
  created () {
    sessionStorage.setItem('active', 0)
    this.loadBanner()
  },
  methods: {
    async loadBanner () {
      const banner = await loadBanners()
      this.banners = banner.data
      console.log(this.banners);
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>
