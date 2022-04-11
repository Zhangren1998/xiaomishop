<template>
  <div>
    <div class="info" style="background-color:#e26a3c">
      <img :src="info.avatar | dalImg" alt="">
      <div class="userInfo">
        <span class="nickName" v-text="info.nickName" style="font-weight:500"></span>
      </div>
    </div>
    <van-grid>
      <van-grid-item icon="paid" text="待付款" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="paid" text="待付款" />
      <van-grid-item icon="exchange" text="退换修" />
    </van-grid>
    <div class="card">
      <van-cell title="优惠券" is-link icon="coupon" />
      <van-cell title="会员福利" is-link icon="vip-card" />
      <van-cell title="我的钱包" is-link icon="card" />
    </div>
  </div>
</template>

<script>
import { getInfo } from '@/services/user/getInfo'
export default {
  name: 'XiaomiMallUser',

  data () {
    return {
      info: []
    };
  },

  mounted () {

  },
  created () {
    this.loadInfo()
  },
  methods: {
    async loadInfo () {
      const data = await getInfo()
      console.log(data.data);
      this.info = data.data.data
    }
  },

};
</script>

<style  scoped>
.info {
  height: 30vh;
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
}

.info img {
  width: 30vw;
  height: 15vh;
  border-radius: 50%;
}

.info .userInfo {
  height: 15vh;
  color: white;
  margin-left: 10px;
  font-size: 22px;
  padding: 8px;
}
</style>
