<template>
  <div>
    <Header2></Header2>
    <Header1></Header1>
    视频
  </div>
</template>
<script>
//引入 头部
import Header1 from "../components/common/Header1.vue";
import Header2 from "../components/common/Header2.vue";
export default {
  name: "Video",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header1,
    Header2,
  },
};
</script>
<style scoped>
</style>