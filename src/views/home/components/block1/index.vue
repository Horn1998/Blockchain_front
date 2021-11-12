<template>
  <div class="block1-container">
    <div class="columns is-mobile">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="card-img">
              <img
                src="@/assets/home_images/hy.png"
                height="64"
                width="64"
                alt="补习"
              />
            </div>
            <div class="card-headline">专业咨询</div>
            <div class="card-info">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="card-img">
              <img
                src="@/assets/home_images/dh.png"
                height="64"
                width="64"
                alt="补习"
              />
            </div>
            <div class="card-headline">定制方案</div>
            <div class="card-info">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="card-img">
              <img
                src="@/assets/home_images/hr.png"
                height="64"
                width="64"
                alt="补习"
              />
            </div>
            <div class="card-headline">落地辅导</div>
            <div class="card-info">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="card-img">
              <img
                src="@/assets/home_images/lp.png"
                height="64"
                width="64"
                alt="预读"
              />
            </div>
            <div class="card-headline">考前评测</div>
            <div class="card-info">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
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
$second-color: #ebfffc;
.block1-container {
  .card {
    .card-content {
      padding: 30px;
      .card-headline {
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 1.5em;
        font-weight: 900;
        color: $primary-color;
      }
      .card-info {
        font-size: 16px;
      }
    }
    margin: 0 auto;
    width: 220px;
    height: 300px;
    // padding: 30px;
  }
}
</style>