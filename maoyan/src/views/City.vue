<template>
  <div>
    城市列表
    <van-index-bar>
      <van-index-anchor
        v-for="(i, index) in city"
        :key="index"
        :index="i.initial"
      >
        {{ i.initial }}
        <van-cell :title="item.name" dfdshhjjhhj v-for="(item, key) in i.list" :key="key" />
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      city: [],
    };
  },
  created() {
    axios.get("/json/city.json").then((res) => {
      console.log(res);
      this.city = res.data.city;
      console.log(this.city);
    });
  },
};
</script>

<style>
</style>