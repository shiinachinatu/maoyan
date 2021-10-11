<template>
  <div class="haoping-con">
    <div v-html="haoping"></div>
  </div>
</template>

<script>
export default {
  name: "Haoping",
  props: ["haoping"],
};
</script>

<style>
.haoping-con {
  border-bottom: 10px solid #f5f5f5;
}
.hot-celebrities-list,
.top-rated-list {
  overflow: scroll;
  white-space: nowrap;
  width: 95%;
}
.top-rated {
  padding: 12px 0 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
}
.top-rated .title {
  margin: 0;
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
}
.top-rated-list {
  overflow: scroll;
  white-space: nowrap;
}
.top-rated-item {
  display: inline-block;
  width: 85px;
  overflow: hidden;
  margin-right: 10px;
}
.top-rated-item .poster {
  width: 85px;
  height: 115px;
  position: relative;
  margin-bottom: 6px;
}
.default-img-bg {
  background-color: #e1e1e1;
  background-size: 100% 100%;
}
.poster img {
  height: 100%;
}
.top-rated-item .poster .wish-bg {
  display: inline-block;
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 0;
  background-image: -webkit-linear-gradient(top, rgba(77, 77, 77, 0), #000);
  background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
}

.top-rated-item .poster .score,
.top-rated-item .poster .wish {
  position: absolute;
  left: 4px;
  bottom: 2px;
  color: #faaf00;
  font-size: 11px;
  font-weight: 600;
}
</style>