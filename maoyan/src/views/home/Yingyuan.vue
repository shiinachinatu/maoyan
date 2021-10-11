<template>
  <div>
    <div class="nav">
      <div>全城</div>
      <div>品牌</div>
      <div>特色</div>
    </div>
    <div class="cinema-list">
      <div class="list-warp">
        <div v-html="yingyuan"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Yingyuan",
  data() {
    return {
      yingyuan: "",
    };
  },
  created() {
    axios
      .get(
        "/ajax/moreCinemas?day=2021-09-24&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1632475746810&cityId=30&optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        this.yingyuan = res.data;
      });
  },
};
</script>

<style scoped>
body{
  font-size: 14px;
}
.discount-label ,.normal ,.card{
  font-size: 14px;
}
.nav {
  display: flex;
  justify-content: space-around;
}
.cinema-list .list-wrap .title-block .title {
  height: 23px;
  line-height: 23px;
  font-size: 16px;
  color: #000;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
div {
  display: block;
}
.cinema-list .list-wrap .item {
  padding: 13px 15px 13px 0;
  margin-left: 15px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.mb-line-b {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
    0 bottom repeat-x;
}
a {
  cursor: pointer;
}
.flex {
  -webkit-box-flex: 1;
  flex: 1;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
a,
div {
  -webkit-tap-highlight-color: transparent;
}
.cinema-list .list-wrap .location-block {
  margin-top: 6px;
  font-size: 13px;
  color: #666;
}
</style>