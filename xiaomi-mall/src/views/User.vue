<template>
  <div class="userTem">
    <van-nav-bar title="我的" />
    <div class="info" style="background-color: #e26a3c">
      <img :src="info.avatar | dalImg" alt="" />
      <div class="userInfo">
        <span
          class="nickName"
          v-text="info.nickName"
          style="font-weight: 500"
        ></span>
      </div>
      <router-link :to="{ name: 'xiaoXi' }">
        <van-icon name="comment-o" color="#f5f5f5" size="30" id="news" />
      </router-link>
    </div>
    <van-grid>
      <van-grid-item icon="paid" text="待付款" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="paid" text="待付款" />
      <van-grid-item icon="exchange" text="退换修" />
    </van-grid>
    <div class="card">
      <van-cell value="" is-link v-for="i in contentTop" :key="i.id">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <van-icon
            :icon="i.icon"
            :name="i.icon"
            :color="i.color"
            size="18px"
            style="margin-right: 8px"
          ></van-icon>
          <span class="custom-title">{{ i.title }}</span>
        </template>
      </van-cell>
    </div>
    <div class="card">
      <van-cell value="" is-link v-for="i in contentMid" :key="i.id">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <van-icon
            :icon="i.icon"
            :name="i.icon"
            :color="i.color"
            size="18px"
            style="margin-right: 8px"
          ></van-icon>
          <span class="custom-title">{{ i.title }}</span>
        </template>
      </van-cell>
    </div>
    <div class="card">
      <van-cell value="" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <van-icon
            icon="setting"
            name="setting"
            color="#889bb3"
            size="18px"
            style="margin-right: 8px"
          ></van-icon>
          <span class="custom-title">设置</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getInfo } from "@/services/user/getInfo";
export default {
  name: "XiaomiMallUser",

  data() {
    return {
      info: [],
      contentTop: [
        {
          id: 1,
          title: "优惠券",
          icon: "coupon",
          color: "#ff703a",
        },
        {
          id: 2,
          title: "会员福利",
          icon: "vip-card",
          color: "#ff9500",
        },
        {
          id: 3,
          title: "我的钱包",
          icon: "card",
          color: "#40aefc",
        },
      ],
      contentMid: [
        {
          id: 1,
          title: "服务中心",
          icon: "bell",
          color: "#f5574e",
        },
        {
          id: 2,
          title: "小米之家",
          icon: "wap-home",
          color: "#ff9500",
        },
        {
          id: 3,
          title: "更多功能",
          icon: "weapp-nav",
          color: "#96c338",
        },
      ],
    };
  },

  mounted() {},
  created() {
    this.loadInfo();
  },
  methods: {
    async loadInfo() {
      const data = await getInfo();
      console.log(data.data);
      this.info = data.data.data;
    },
  },
};
</script>

<style scoped>
.userTem {
  background: #f5f5f5;
}

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

.card {
  margin-top: 5vh;
  margin-bottom: 3vh;
}
.van-icon-comment-o:before {
  content: "\e698";
  position: absolute;
  /* top: 80px; */
  right: 20px;
}
</style>
