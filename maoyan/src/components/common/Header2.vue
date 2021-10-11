<template>
  <div class="header2">
    <div>
      <img
        src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png"
        alt="imgtitle"
      />
    </div>
    <div><slot></slot></div>
    <div>
      打开App
      <b> > </b>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header2",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
.header2 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background: #fff;
  position: relative;
}
.header2 div:nth-of-type(1) {
  width: 30%;
}
.header2 div:nth-of-type(1) img {
  width: 94px;
  height: 39px;
  position: absolute;
  top: 10px;
  left: 12px;
}
.header2 div:nth-of-type(2) {
  width: 40%;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: 0px;
  left: 180px;
}
.header2 div:nth-of-type(3) {
  width: 30%;
  font-size: 16px;
  color: #b37e7e;
  font-weight: 700;
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>