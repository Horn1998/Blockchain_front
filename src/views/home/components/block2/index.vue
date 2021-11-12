<template>
  <div class="block2-container">
    <el-row>
      <el-col :span="18" class="left-block">
        <div class="sub-block-1">
          <div class="sub-block-1-headline">
            <span>雅思、托福、GRE、</span><br /><span> 考研英语、考博英语</span>
          </div>
          <br />
          <div class="sub-block-1-info">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              ratione qui id. Provident magnam rerum accusamus fugit corporis
            </p>
          </div>
          <div class="sub-block-1-footer">
          <button @click="routePath(lm_url)" class="button is-danger is-light is-rounded">了 解 更 多</button>
          </div>
        </div>
        <div class="sub-block-2"></div>
        <div class="sub-block-3">
          <img src="@/assets/home_images/smile.jpg" alt="" />
        </div>
      </el-col>
      <el-col :span="6" class="right-block">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/home_images/ys.png" alt="Placeholder image" />
          </div>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <!-- <label class="label is-medium">一对一专业咨询</label> -->
                <div class="control">
                  <input
                    class="input"
                    type="email"
                    placeholder="请输入手机号"
                  />
                </div>
              </div>
              <br />
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="验证码" />
                </p>
                <p class="control">
                  <a class="button"> 获取验证码 </a>
                </p>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-success submit">免费预约</button>
                </div>
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
  data() {
    return {
      lm_url: "/english-education-intro",
    };
  },
  methods: {
    routePath(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style  src='@/styles/bulma.css'  scoped></style>
<style lang="scss" scoped>
$white-color: #ffffff;
$primary-color: #F14242;
$second-color: #242952;
$shadow:10px 10px 5px #888888;
.block2-container {
  margin-top: 55px;
  margin-bottom: 35px;
  height: 500px;
  .left-block {
    .sub-block-1 {
      padding: 30px;
      position: absolute;
      color: $white-color;
      width: 490px;
      height: 380px;
      background-color: $primary-color;
      // background-image: linear-gradient(to right, #f8aba6, #f26522);
      // box-shadow:$shadow;
      top: 0px;
      z-index: 1;
      .sub-block-1-headline {
        font-size: 3em;
      }
      .sub-block-1-info {
        font-size: 1.5em;
        margin-bottom: 1.5em;
        margin-right: 30px;
      }
      .sub-block-1-footer {
        button {
          width: 170px;
        }
      }
    }
    .sub-block-2 {
      padding: 30px;
      position: absolute;
      font-size: 3em;
      width: 300px;
      height: 345px;
      background-color: $second-color;
      // box-shadow:$shadow;
      left: 500px;
      top: 35px;
      z-index: 0;
    }
    .sub-block-3 {
      position: absolute;
      z-index: 2;
      left: 490px;
      top: 70px;
      img {
        height: 400px;
      }
    }
  }
  .right-block {
    // display: none;
    .card {
      height: 445px;
      // margin-top: 35px;
      .card-image {
        img {
          // height: 200px;
          width: 300px;
        }
      }
      .submit {
        width: 100%;
      }
    }
  }
}
</style>
		