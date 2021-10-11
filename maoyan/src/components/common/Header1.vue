<template>
  <div class="header1">
    <div><i class="iconfont icon-xiangzuo" @click="goBack" v-if="$route.name=='Item'"></i></div>
    <div><slot></slot></div>
    <div><i  class="iconfont icon-hanbaobao" v-if="$route.name!='Item'"></i></div>
  </div>
</template>
<script>
export default {
  name: "Header1",
  data() {
    return {};
  },
  methods: {
    goBack(){
      this.$router.push('/')
    },
  },
  components: {},
};
</script>
<style scoped>
.header1 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #e54847;
  color: #fff;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-bottom: 1px solid #e54847;
}
.header1 div:nth-of-type(1) {
  width: 10%;
}
.header1 div:nth-of-type(2) {
  width: 80%;
  font-size: 18px;

}
.header1 div:nth-of-type(3) {
  width: 10%;
  margin: 0px;
}

</style>