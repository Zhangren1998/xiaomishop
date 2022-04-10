<template>
  <div class="listView">
    <div class="list">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="i in cateData.data"
          :title="i.name"
          :key="i.id"
          @click="loadProduct(i)"
        />
      </van-sidebar>
      <div class="content">
        <van-card
          style="flex:1"
          v-for="i in products.data"
          :num="i.amount"
          :price="i.price"
          :title="i.name"
          :thumb="i.coverImage | dalImg"
          :key="i.id"
          @click="toDetail(i.id)"
        />
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
      page: 1,
      products: []
    };
  },

  mounted () {

  },
  created () {
    this.loadProductCategories()
    this.loadProduct(this.activeKey + 5)
  },
  methods: {
    async loadProductCategories () {
      const data = await productCategories()
      this.cateData = data.data
      // console.log(this.cateData);
    },
    async loadProduct (i) {
      const data = await loadProducts({ category: i.id ? i.id : i })
      this.products = data.data
    },
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
