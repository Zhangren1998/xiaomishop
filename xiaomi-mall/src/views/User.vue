<template>
  <div>
    <h1>User</h1>
  </div>
</template>

<script>
import { getInfo } from '@/services/user/getInfo'
export default {
  name: 'XiaomiMallUser',

  data () {
    return {

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
      console.log(data);
    }
  },

};
</script>

<style  scoped>
</style>
