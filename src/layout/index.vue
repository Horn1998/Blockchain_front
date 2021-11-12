<template>
  <div class="layout-container" ref="layoutContainer">
    <nav-bar class="nav-bar"></nav-bar>
    <left-nav class="left-nav"></left-nav>
    <div id="amc" class="app-main-container" ref="appMainContainer" >
      <app-main class="content"></app-main>
    </div>
    <app-footer class="footer"></app-footer>
  </div>
</template>
<script>
import { LeftNav, AppMain, NavBar, AppFooter } from "./components";
export default {
  name: "layout",
  components: {
    LeftNav,
    NavBar,
    AppMain,
    AppFooter,
  },
  watch() {
    this.getHeight();
  },
  methods: {
    getHeight() {
      console.log(document.getElementById("amc").style.height);
    },
  },
};
</script>

<style lang="scss" scoped>
$gray-color: #ededed;
.is-height {
  height: 1000px;
}
.layout-container {
  //因为有padding 所以要加30px
  min-width: 1230px;
  .app-main-container {
    background-color: $gray-color;
    .content {
      padding-top: 100px;
      padding-left: 350px;
      margin: 0 auto;
      height: 1000px;
      width: 1600px;

    }
  }
}
.left-nav {
  position: fixed;
  top:0px;
  left: 0px;
  width:300px;
}
.nav-bar {
  height: 70px;
  background-color: antiquewhite;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 9999;
}
.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  z-index: 9999;
}

</style>