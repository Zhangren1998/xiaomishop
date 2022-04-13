<template>
  <div class="listView">
    <div class="list">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="i in cateData.data" :title="i.name" :key="i.id" @click="clickHandle(i.id)" />
      </van-sidebar>
      <div class="content">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :immediate-check="false"
          @load="onLoad(index)">
          <van-card style="flex:1" v-for="i in products" :num="i.amount" :price="i.price" :title="i.name"
            :thumb="i.coverImage | dalImg" :key="i.id" @click="toDetail(i.id)" />
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { productCategories } from '@/services/products_categories'
import { loadProducts } from '@/services/products'
export default {
  name: 'XiaomiMallList',

  data () {
    return {
      activeKey: 0,
      cateData: [],
      products: [],
      loading: false,
      finished: false,
      index: 5,
      page: 1,
      length: 0
    };
  },

  mounted () {

  },
  created () {
    this.loadProductCategories()
    this.onLoad(this.activeKey + 5)
  },
  methods: {
    async onLoad (index) {
      // console.log(index);
      // this.finished = false
      const data = await loadProducts({ category: index, page: this.page })
      // console.log(data.data);
      this.products.push(...data.data.data)
      this.page++
      console.log(data.data.total);
      console.log(this.products.length);
      if (this.products.length >= data.data.total) {
        console.log('big');
        this.finished = true;
      }
    },
    async loadProductCategories () {
      const data = await productCategories()
      this.cateData = data.data
      // console.log(this.cateData);
    },
    clickHandle (i) {
      console.log(i);
      this.products = []
      this.page = 1
      // this.finished = false;
      this.onLoad(i)
    },
    // async loadProduct (i) {

    // },
    toDetail (id) {
      this.$router.push({ name: 'Detail', params: { id } })
    }
  },
};
</script>

<style  scoped>
.list {
  display: flex;
  width: 100vw;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.listView {
  width: 100vw;
}
</style>
