<template>
  <div>
    近期受期待
    <div class="Top">
      <ul v-for="(i, index) in daiyingList" :key="index">
        <li v-for="(item, index) in i" :key="index"><img :src="item.img" /></li>
      </ul>
    </div>

    <div v-for="(i, index) in daiyingList" :key="index">
      <div>{{ index }}</div>
      <ul>
        <li v-for="(item, index) in i" :key="index" class="textFather">
          <img :src="item.img" />
          <div class="movieText">
            <span>{{ item.nm }}</span>
            <p>{{ item.wish }}想看</p>
            <p>主演{{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Daiying",
  data() {
    return {
      daiyingList: [],
    };
  },
  created() {
    axios
      .get(
        "/ajax/comingList?ci=30&token=&limit=10&optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res);
        var list = res.data.coming;
        var daiying = {};
        list.forEach((item) => {
          item.img = item.img.replace("w.h", "128.180");
          if (daiying[item.comingTitle]) {
            daiying[item.comingTitle].push(item);
          } else {
            daiying[item.comingTitle] = [];
            daiying[item.comingTitle].push(item);
          }
        });
        console.log(daiying, "daiying");
        this.daiyingList = daiying;
      });
  },
};
</script>

<style scoped>
.Top {
  display: flex;
  padding: 15px;
  /* display: inline; */
  overflow: hidden;
  width: 650px;
  height: 100px;
}
.Top ul {
  /* height: 100px;
  width: 2000px; */
  padding: 0px;
  margin: 0px;
}
.Top ul > li {
  /* float: left; */
  margin: 0px;
  padding: 0px;
  display: inline;
}
.Top ul > li > img {
  width: 64px;
  height: 90px;
}

.textFather{
  position: relative;
}
.textFather>img{
  width: 64px;
  height: 90px;
}
.movieText{
  display: inline;
  position: absolute;
  left: 70px;
  top: 5px;
}
.movieText>span{
  display: block;
}
.movieText>P{
  /* display: inline-block; */
}
</style>