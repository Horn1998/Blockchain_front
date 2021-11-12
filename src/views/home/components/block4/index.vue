<template>
  <div class="block4-container">
    <div class="columns is-mobile">
      <div class="column">
        <div class="left-block-container">
          <img src="@/assets/home_images/ggg.jpg" alt="" />
        </div>
      </div>
      <div class="column">
        <div class="right-block-container">
          <div>
            <div class="block-headline">
              <span> 外教口语 </span>
            </div>
            <div class="block-info">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet voluptatum quam sequi accusantium ullam atque, debitis
                facere quidem ratione aperiam repudiandae tempore officiis, esse
                repellendus sunt. Cumque ex maxime dolorem!
              </p>
            </div>
            <div class="block-footer">
              <button class="button is-success">了 解 更 多</button>
            </div>
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
.block4-container {
   height: 550px;
  .left-block-container {
    padding: 30px;
  }
  .right-block-container {
    padding: 30px;
    .block-headline {
      color: $primary-color;
      font-size: 3em;
      margin-bottom: 0.5em;
    }
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