<template>
  <div class="carousel-container">
    <el-row>
      <el-col :span="24">
        <div class="block">
          <el-carousel
            height="500px"
            arrow="hover"
            ref="carousel"
            :autoplay="carouselConfig.autoplay"
            @change="changeSlice"
          >
            <el-carousel-item
              v-for="item in slideList"
              :key="item"
              @click.enter="routePath(item.path)"
            >
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="6" class="right-panel-wrapper">
        <div class="right-panel">
          <div
            v-for="(item, i) in slideList"
            :key="i"
            @mouseover="mouseover(i)"
            @mouseleave="mouseleave(i)"
          >
            <div
              :id="i"
              class="right-panel-item"
              @click="routePath(item.path)"
              :class="i == 0 ? 'right-panel-item-hover' : ''"
            >
              <div class="right-panel-item-inner">
                <span class="right-panel-item-headline">
                  {{ item.title }}
                </span>
                <span class="right-panel-item-info">
                  {{ item.info }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      carouselConfig: {
        height: 600,
        whiteColor: "#ffffff",
        primaryColor: "#00d1b2",
        secondColor: "#ebfffc",
        autoplay: true,
      },
      slideList: [],
    };
  },
  methods: {
    setSlideList(slideList) {
      this.slideList = slideList;
    },
    routePath(path) {
      this.$router.push(path);
    },
    changeSlice(index) {
      let len = this.slideList.length;
      for (let i = 0; i < len; i++) {
        this.rmStyle(i);
      }
      this.addStyle(index);
    },
    mouseover(index) {
      this.$refs.carousel.setActiveItem(index);
      this.carouselConfig.autoplay = false;
    },
    mouseleave(index) {
      this.carouselConfig.autoplay = true;
      index;
    },
    addStyle(index) {
      let style = document.getElementById(index).style;
      style.backgroundColor = this.carouselConfig.primaryColor;
      style.color = this.carouselConfig.whiteColor;
    },
    rmStyle(index) {
      let style = document.getElementById(index).style;
      style.backgroundColor = this.carouselConfig.secondColor;
      style.color = this.carouselConfig.primaryColor;
    },
  },
};
</script>

<style lang="scss" scoped>
$white-color: #ffffff;
$primary-color: #00d1b2;
$second-color: #ebfffc;
.carousel-container {
  .right-panel-wrapper {
    display: none;
    .right-panel {
      background-color: $second-color;
      color: $primary-color;
      width: 100%;
      height: 100%;
      .right-panel-item {
        display: block;
        height: 100px;
        span {
          color: primary-color;
          display: block;
        }
        .right-panel-item-inner {
          padding: 20px;
          .right-panel-item-headline {
            font-size: 1.5em;
          }
          .right-panel-item-info {
            font-size: 1em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
          }
        }
      }
    }
  }

  .right-panel-item-hover {
    background-color: $primary-color;
    color: $white-color;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
