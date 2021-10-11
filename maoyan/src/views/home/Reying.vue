<template>
  <div>
    <!--好评电影-->
    <Haoping :haoping="haoping"></Haoping>

    <!-- 热映电影 -->
    <Hot :reyingList="reyingList"></Hot>
  </div>
</template>
<script>
//引入 热映的组件
import Hot from "@/components/home/Hot.vue"; //绝对路径
import Haoping from "@/components/home/Haoping.vue";
import axios from "axios";
export default {
  name: "Reying",
  data: function () {
    return {
      reyingList: [],
      haoping: "",
    };
  },
  components: {
    Hot,
    Haoping,
  },
  mounted() {
    //热映
    axios
      .get(
        "/ajax/movieOnInfoList?token=&optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res);
        res.data.movieList.forEach((item) => {
          item.img = item.img.replace("w.h", "128.180");
        });
        this.reyingList = res.data.movieList;
      });
    //好评
    axios
      .get(
        "/ajax/topRatedMovies?token=&optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res);
        this.haoping = res.data;
      });
  },
};
</script>

<style>
</style>