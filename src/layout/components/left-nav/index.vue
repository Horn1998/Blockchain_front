<template>
  <div class="left-nav-container">
    <div class="card" id="left-nav">
      <div class="card-content">
        <aside class="menu">
          <p class="menu-label" style="padding-top:70px;">目录 menu</p>
          <ul class="menu-list">
            <div v-for="(item, i) in navList" :key="i">
              <!-- 没有二级菜单 -->
              <template v-if="!item.subList">
                <li>
                  <a :id="item.path" @click="routePath(item.path)">{{
                    item.title
                  }}</a>
                </li>
              </template>
              <!-- 有二级菜单 -->
              <template v-if="item.subList">
                <li>
                  <a :id="item.path" @click="routePath(item.path)">{{
                    item.title
                  }}</a>
                  <ul>
                    <div v-for="(subItem, j) in item.subList" :key="j">
                      <li>
                        <a
                          :id="subItem.path"
                          @click="routePath(subItem.path)"
                          >{{ subItem.title }}</a
                        >
                      </li>
                    </div>
                  </ul>
                </li>
              </template>
            </div>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "left-nav",
  data() {
    return {
      ieltsList: [
        {
          title: "区块查询",
          path: "/blockSearch",
        },
        {
          title: "交易操作",
          path: "/english-edu/ielts-course-intro",
          subList: [
            {
              title: "交易申请",
              path: "/english-edu/ielts-course-a",
            },
            {
              title: "交易查询",
              path: "/english-edu/ielts-course-b",
            },
          ],
        },
        {
          title: "挖矿操作",
          path: "/english-edu/teachers-intro",
          // subList: [
          //   // {
          //   //   title: "P O W",
          //   //   path: "/english-edu/domestic-teachers",
          //   // },
          //   // {
          //   //   title: "P O S",
          //   //   path: "/english-edu/foreign-teachers",
          //   // },
          // ],
        },
        {
          title: "日志查询",
          path: "/english-edu/training-intro",
        },{
          title: "网络查询",
          path: "/english-edu/training-intro",
        },
      ],
      navList: [
        {
          title: "培训特点",
          path: "/english-edu/training-intro",
        },
        {
          title: "精品班介绍",
          path: "/english-edu/postgraduate-course-intro",
          subList: [
            {
              title: "全能班班型",
              path: "/english-edu/postgraduate-course-a",
            },
            {
              title: "考研专项班",
              path: "/english-edu/postgraduate-course-b",
            },
          ],
        },
        {
          title: "师资介绍",
          path: "/english-edu/teachers-intro",
          subList: [
            {
              title: "国内教师",
              path: "/english-edu/domestic-teachers",
            },
            {
              title: "国外教师",
              path: "/english-edu/foreign-teachers",
            },
          ],
        },
      ],
      isFixed: false,
      offsetTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    this.offsetTop = document.querySelector("#left-nav").offsetTop; // 要滚动到顶部吸附的元素的偏移量
    this.initLeftNav();
    this.setDefaultActive(this.$route.path);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      this.isFixed = scrollTop > this.offsetTop ? true : false; // 如果滚动到顶部了，this.isFixed就为true
    },
    initLeftNav() {
      this.setNavList();
    },
    setNavList() {
      this.navList = this.ieltsList;
    },
    setDefaultActive(activePath) {
      this.$nextTick(function () {
        console.log(activePath)

        document.getElementById(activePath).className = "is-active";
      });
    },
    routePath(path) {
      this.$router.push(path);
    },
  },
  watch: {
    $route(to, from) {
      if (document.getElementById(from.path) != null) {
        document.getElementById(from.path).className = "";
      }
      if (document.getElementById(to.path) != null) {
        document.getElementById(to.path).className = "is-active";
      }
      this.navList = this.ieltsList;
    },
  },
};
</script>
<style  src='@/styles/bulma.css'  scoped></style>
<style lang="scss" scoped>
.left-nav-container {
  .is-fixed {
    position: fixed;
    width: 291px;
    top: 0px;
  }
  .card-content {
    padding: 30px;
  }
  .menu-list {
    margin-left: 0;
  }
  ul,
  li {
    list-style: none;
  }
}
</style>