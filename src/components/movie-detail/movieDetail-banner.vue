<template>
  <div class="movie-detail-banner-view">
    <div class="movieDetail-banner">
      <!-- 毛玻璃背景图 -->
      <img :src="data.img" alt class="bottom-img">
      <!-- 左侧图 -->
      <img :src="data.img" class="movieDetail-l">
      <!-- 中间 -->
      <div class="movieDetail-m">
        <h3 class="title">{{data.name}}</h3>
        <p v-if="data.enm" class="enm">{{data.enm}}</p>
        <p v-if="data.sc" class="sc">{{data.sc}} 分</p>
        <p v-else class="wish">{{data.wish}}人想看</p>
        <div>
          <p class="cat">{{data.cat}}</p>
          <p class="src-dur">{{data.src}}/{{data.dur}}分钟</p>
          <p class="pubDesc">{{data.pubDesc}}</p>
        </div>
      </div>
      <!-- 右侧 -->
      <i class="iconfont icon-youjiantou movieDetail-r"></i>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        data: [Object,Array]
    }
}
</script>

<style lang="scss">
// banner
.movieDetail-banner {
  width: 100%;
  height: 188px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  .bottom-img {
    width: 100%;
    height: 188px;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(10px);
    z-index: -1;
  }
  .movieDetail-l {
    width: 110px;
    height: 150px;
  }
  //中间
  .movieDetail-m {
    height: 100%;
    flex: 1;
    font-size: 14px;
    color: #fff;
    margin-left: 16px;
    h3 {
      font-size: 20px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .enm {
      margin-bottom: 8px;
      line-height: 24px;
    }
    .sc {
      color: #ffcc00;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
    }
    .wish {
      color: #ffcc00;
      font-size: 14px;
      line-height: 24px;
    }
    > div {
      > p {
        line-height: 22px;
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .movieDetail-r {
    font-size: 16px;
    font-weight: bold;
    color: #f3f3f3;
  }
}
</style>
