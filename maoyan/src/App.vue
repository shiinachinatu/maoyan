<template>
  <div id="app">
    <Footer></Footer>
    <router-view />
  </div>
</template>

<script>
import Footer from "./components/common/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
/*清除浏览器的默认样式*/
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 12px;
}
</style>
