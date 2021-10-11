<template>
  <div>
    <ul>
      <li v-for="item in reyingList" :key="item.id">
        <router-link :to="'/item/' + item.id" class="item">
          <div class="item-img"><img :src="item.img" /></div>
          <div class="item-text">
            <div>
              {{ item.nm }}
              <span
                v-if="item.version !== '' && item.version == 'v2d imax'"
                class="max"
                ><span>2D</span> IMAX
              </span>
              <span
                v-if="item.version !== '' && item.version == 'v3d imax'"
                class="max"
                ><span>3D</span> IMAX
              </span>
            </div>
            <div v-if="item.sc !== 0 && item.globalReleased">
              观众评 <span class="score">{{ item.sc }}</span>
            </div>
            <div v-if="item.sc === 0 && !item.globalReleased">
              <span class="score">{{ item.wish }}</span
              >人想看
            </div>
            <div v-if="item.sc === 0 && item.globalReleased">暂无评分</div>
            <div>主演：{{ item.star }}</div>
            <div>{{ item.showInfo }}</div>
          </div>
          <div class="item-btn">
            <div :class="item.globalReleased ? 'gp' : 'ys'">
              {{ item.globalReleased ? "购票" : "预售" }}
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Hot",
  props: ["reyingList"],
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
.item {
  display: flex;
  justify-content: space-around;
  height: 114px;
  padding: 15px;
}
.item .item-img {
  width: 20%;
}
.item .item-img img {
  width: 64px;
  height: 90px;
}
.item .item-text {
  width: 60%;
  padding-left: 5px;
  border-bottom: 1px solid #f5f5f5;
}
.item .item-text div:nth-of-type(1) {
  font-size: 17px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
.item .score {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}

.item .max {
  font-size: 12px;
  font-weight: normal;
  border: 1px solid #3c9fe6;
  color: #3c9fe6;
  padding: 2px;
  padding-left: 0px;
}
.item .max span {
  color: #fff;
  background: #3c9fe6;
  padding: 2px;
}

.item .item-text div:nth-of-type(2),
.item .item-text div:nth-of-type(3),
.item .item-text div:nth-of-type(4) {
  font-size: 13px;
  color: #666;
  margin-bottom: 4px;
}
.item .item-btn {
  width: 20%;
  border-bottom: 1px solid #f5f5f5;
}
.item .item-btn div {
  width: 47px;
  height: 27px;
  background: #f03d37;
  color: #fff;
  line-height: 27px;
  text-align: center;
  border-radius: 5px;
  margin-top: 30px;
}

.item .item-btn .gp {
  background: #f03d37;
}
.item .item-btn .ys {
  background: #3c9fe6;
}
</style>