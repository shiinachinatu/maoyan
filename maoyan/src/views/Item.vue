<template>
  <div>
    <Header1>{{ itemObj.nm }}</Header1>
    <Header2>19.9元起购票</Header2>
    <div class="showBody">
      <div class="showBox">
        <img :src="itemObj.img" />
        <div class="textBox">
          <h2>{{ itemObj.nm }}</h2>
          <p>{{ itemObj.enm }}</p>
          <span
            >{{ itemObj.sc }}
            <p>{{ itemObj.snum }}</p>
          </span>
          <p>{{ itemObj.cat }}</p>
          <p>{{ itemObj.src }}/{{ itemObj.episodeDur }}分钟</p>
          <p>{{ itemObj.pubDesc }}</p>
        </div>
      </div>
    </div>
    <div class="time">时间router</div>
    <!--  -->
    <div class="slect">
      <div>左router</div>
      <div>中router</div>
      <div>右router</div>
    </div>
    <div v-for="i in area" :key="i.id" class="msg-consider">
      <div>
        <span class="moveTitle">{{ i.nm }}</span>
        <p class="price">{{ i.price }}元</p>
      </div>
      <div class="address">{{ i.addr }}</div>
      <div v-for="lab in i.labels" :key="lab.id" class="ticket-tag">
        {{ lab.name }}
      </div>
    </div>
  </div>
</template>

<script>
import Header1 from "@/components/common/Header1.vue";
import Header2 from "@/components/common/Header2.vue";
import axios from "axios";
export default {
  name: "Item",
  data() {
    return {
      id: 0,
      itemObj: {},
      area: [],
      labels: [],
    };
  },
  components: {
    Header2,
    Header1,
  },
  mounted() {
    // console.log(this.$route);
    this.id = this.$route.params.id;
    // console.log(this.id);
    axios
      .get(
        "/api/mtrade/mmdb/movie/v5/" +
          this.id +
          ".json?optimus_uuid=3084E8D0146211ECA50A477D88250D251D93073CCDCC41D9A4CAC797521EC42D&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        // console.log(res);
        var data = res.data.data.movie;
        data.img = data.img.replace("w.h", "148.208");
        this.itemObj = data;
      });
    // ---------------------------------------------下面是-------------------------------------------------------
    axios
      .get(
        "/api/mtrade/mmcs/cinema/v1/select/movie/cinemas.json?limit=20&offset=0&utm_term=7.5&client=iphone&channelId=4&areaId=-1&brandId=-1&districtId=-1&hallType=-1&lineId=-1&movieId=1356063&serviceId=-1&stationId=-1&showDate=2021-09-24&cityId=20&ci=20"
      )
      .then((res) => {
        console.log(res);
        this.area = res.data.data.cinemas;
        console.log(this.area,'area的数据');
      });
  },
};
</script>

<style scoped>
.showBody {
  background: #777;
  width: 100%;
  height: 188px;
}
.showBody img {
  /* 110 150 */
  width: 110px;
  height: 150px;
  margin: 16px;
}
.showBox {
  position: relative;
}
.textBox {
  position: absolute;
  left: 160px;
  top: 20px;
}
.time {
  background: red;
}
.slect {
  display: flex;
  justify-content: space-around;
  background: rgba(6, 6, 6, 0.6);
}
.msg-consider {
  margin-left: 10px;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
}
.moveTitle{
  font-weight: 500;
}
.address {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  /* overflow: hidden; */
}
.price {
  margin-right: 10px;
  margin-top: 10px;
  float: right;
  color: #f03d37;
  font-size: 18px;
}
.ticket-tag {
  border: 1px solid blue;
  display: inline;
  margin-right: 5px;
  font-size: 14px;
}
</style>