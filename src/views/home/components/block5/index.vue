<template>
  <div class="block5-container">
    <div class="columns">
      <div class="bar-1"></div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="content">
          <div class="content-headline">
            <span>图书出版、翻译、音频制作</span>
          </div>
          <div class="content-info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              molestias quos a minima dignissimos laboriosam libero voluptatum
              possimus velit reprehenderit, nam exercitationem ratione, ipsam ea
              facilis maiores rerum sunt. Libero.
            </p>
          </div>
          <div class="content-footer">
            <button class="button is-success">了 解 更 多</button>
          </div>
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
.block5-container {
  height: 500px;
  padding: 30px;
  position: relative;
  .bar-1 {
    position: absolute;
    height: 15px;
    width: 350px;
    left: 60px;
    top: 100px;
    background-color: $primary-color;
  }
  .content {
    position: absolute;
    margin: 0 auto;
    top: 130px;
    left: 60px;
    width: 1000px;
    .content-headline {
      color: $primary-color;
      font-size: 3em;
      margin-bottom: 0.5em;
    }
    .content-info {
      font-size: 1.5em;
      margin-bottom: 1.5em;
      margin-right: 30px;
    }
    .content-footer {
      padding-right: 30px;
      float: right;
      button {
        width: 170px;
      }
    }
  }
}
</style>