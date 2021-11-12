
<template>
  <div class="navbar-container" ref="navbarContainer">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          style="background-color: transparent"
          @click="$router.push('/')"
        >
          <img src="@/assets/logo.png"  />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          @click="toggleBurger()"
          :class="{ 'is-active': isToggle }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasic"
        class="navbar-menu"
        :class="{ 'is-active': isToggle }"
      >
        <div class="navbar-end">
          <div v-for="(item, i) in navList" :key="i">
            <!-- 没有二级菜单 -->
            <template v-if="!item.subList">
              <a class="navbar-item" @click="routePath1(item.path)">
                <span class="icon-text">
                  <span class="icon" :class="item.icon.color" v-if="item.icon">
                    <i :class="item.icon.name"></i>
                  </span>
                  <span> {{ item.name }} </span>
                </span>
              </a>
            </template>
            <!-- 有二级菜单 -->
            <template v-if="item.subList">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <span class="icon-text">
                    <span
                      class="icon"
                      :class="item.icon.color"
                      v-if="item.icon"
                    >
                      <i :class="item.icon.name"></i>
                    </span>
                    <span> {{ item.name }} </span>
                  </span>
                </a>
                <div class="navbar-dropdown">
                  <div v-for="(subItem, i) in item.subList" :key="i">
                    <a
                      class="navbar-item"
                      @click="routePath2(subItem.path, subItem.name)"
                    >
                      {{ subItem.name }}
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/home",
      isToggle: false,
      navList: [
        {
          path: "/",
          name: "其它操作",
          icon: {
            name: "el-icon-star-on",
            color: "has-text-danger",
          },
          subList: [
            {
              path: "/english-edu/training-intro",
              name: "雅思",
            },
            {
              path: "/english-edu/training-intro",
              name: "托福",
            },
            {
              path: "/english-edu/training-intro",
              name: "GRE",
            },
          ],
        },
        {
          path: "/",
          name: "充值",
          icon: {
            name: "el-icon-s-promotion",
            color: "has-text-danger",
          },
        },
        {
          path: "/",
          name: "退出",
          icon: {
            name: "el-icon-chat-dot-round",
            color: "has-text-primary",
          },
        },
        {
          path: "/",
          name: "",
          icon: {
            name: "el-icon-notebook-2",
            color: "has-text-info",
          },
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleBurger() {
      this.isToggle = !this.isToggle;
    },
    routePath2(Path, Name) {
      this.$router.push({ path: Path, query: { name: Name } });
      this.$store.commit("changeBlock", Name);
    },
    routePath1(Path) {
      this.$router.push(Path);
    },
  },
};
</script>
<style  src='@/styles/bulma.css' scoped></style>
<style lang="scss" scoped>
$font-color: #323232;
$white-color: #ffffff;
$gray-color: #373d41;
$light-gray-color: #f5f5f5;
$yellow-color: #ffd500;
$black-color: #222222;

.navbar-container {
  nav {
    .navbar-item {
      color: font-color;
    }
    .navbar-menu {
      padding-top: 1em;
      padding-bottom: 1em;
    }
  }
}
</style>

