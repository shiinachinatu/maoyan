<template>
  <div>
    <div class="headertitle">
      <Header1>猫眼电影</Header1>
      <Header2>发现最新最热电影</Header2>
    </div>
    <div class="content">
      <!--4.子路由链接-->
      <div class="childtitle">
        <!-- <span style="color: #ccc">地点</span> -->
        <router-link to="/city"> 地点 <img src="../../../img/向下.png" ></router-link>
        <router-link to="/home/reying">热映</router-link>
        <router-link to="/home/yingyuan">影院</router-link>
        <router-link to="/home/daiying">待映</router-link>
        <router-link to="/home/jingdian">经典电影</router-link>
        <router-link to="/home/search" class="SearchFather">
        <p class="Search">
        </p>
        </router-link>
      </div>
      <!-- 3.子路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//引入 头部
import Header1 from "../../components/common/Header1.vue"; //相对路径
import Header2 from "../../components/common/Header2.vue";
export default {
  name: "Movie",
  data: function () {
    return {
      reyingList: [],
      haoping: "",
    };
  },
  components: {
    Header1,
    Header2,
  },
};
</script>

<style scoped>
/* css 在本页面起效 */
.headertitle {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
 
  z-index: 90;
}
.content {
  margin-top: 160px;
  margin-bottom: 50px;
  z-index: 80;
}
.childtitle {
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 110px;
  width: 100%;
  background: #fff;
  z-index: 89;
  border-bottom: 1px solid #ccc;
}
.childtitle a {
  color: #666;
}
.childtitle a.router-link-exact-active {
  border-bottom: 3px solid #f03d37;
  font-size: 16px;
  font-weight: bold;
}
.SearchFather{
   position:relative;
}
.Search {
  width: 40px;
  height: 40px;
  background: #fff url("../../../img/search.png") no-repeat 10px 10px;
  background-size: 20px 20px;
  position: absolute;
  top: 5px;
  right: -10px;
}
img{
  width: 10px;
  height: 10px;
}
</style>