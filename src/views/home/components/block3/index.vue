<template>
  <div class="block3-container">
    <div class="block-1">
      <span>出国留学</span>
    </div>
    <div class="block-2"></div>
    <div class="block-3">
      <img src="@/assets/home_images/-min.jpg" alt="" />
    </div>
    <div class="block-4">
      <div>
        <div class="block-info">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            voluptatum quam sequi accusantium ullam atque, debitis facere quidem
            ratione aperiam repudiandae tempore officiis, esse repellendus sunt.
            Cumque ex maxime dolorem!
          </p>
        </div>
        <div class="block-footer">
          <button class="button is-success">了 解 更 多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style  src='@/styles/bulma.css'  scoped></style>
<style lang="scss" scoped>
$white-color: #ffffff;
$primary-color: #ec4141;
$secondary-color: #242952;
.block3-container {
  position: relative;
  margin-top: 90px;
  margin-bottom: 30px;
  height: 550px;
  padding: 80px;
  background-color: $secondary-color;
  .block-1 {
    float: right;
    color: $white-color;
    font-size: 3em;
    z-index: 0;
  }
  .block-2 {
    position: absolute;
    width: 300px;
    height: 550px;
    top: 100px;
    left: 550px;
    background-color: $primary-color;
    z-index: 1;
  }
  .block-3 {
    position: absolute;
    z-index: 2;
    left: 450px;
    top: 200px;
    img {
      height: 400px;
    }
  }
  .block-4 {
    padding: 30px;
    position: absolute;
    z-index: 3;
    background-color: $white-color;
    top: 150px;
    height: 350px;
    width: 450px;
    .block-info {
      font-size: 1.5em;
      margin-bottom: 1.5em;
      margin-right: 30px;
    }
    .block-footer {
      button {
        width: 170px;
      }
    }
  }
}
</style>
