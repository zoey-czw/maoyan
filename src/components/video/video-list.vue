<template>
  <div class="videoList-view">
    <div class="video-box" v-for="item in videoData" :key="item.id">
      <div class="video-top">
        <!-- <video :src="item.videoUrl" controls></video> -->
        <img :src="item.coverImg" alt>
        <h4>{{item.title}}</h4>
        <div class="video-iconPlay">
          <i class="iconfont icon-play"></i>
        </div>
        <div class="viewCount">
          <i class="iconfont icon-play"></i>
          <span>{{item.viewCount}}</span>
        </div>
      </div>
      <div class="video-bottom">
        <div class="videoBtm-l">
          <img :src="item.coverImg" alt>
          <div class="author">{{item.author}}</div>
        </div>
        <div class="videoBtm-r">
          <div>
            <i class="iconfont icon-zanpress"></i>
            <span>{{item.upCount}}</span>
          </div>
          <div>
            <i class="iconfont icon-xinxi"></i>
            <span>{{item.dur}}</span>
          </div>
          <div>
            <i class="iconfont icon-ArtboardCopy"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoData: Array
  }
};
</script>

<style lang="scss">
.videoList-view {
  .video-top {
    width: 100%;
    height: 232px;
    position: relative;
    color: #fff;
    > img {
      width: 100%;
      height: 232px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    > h4 {
      font-size: 16px;
      line-height: 40px;
      width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .video-iconPlay {
      position: absolute;
      width: 58px;
      line-height: 58px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.4);
      top: 50%;
      left: 50%;
      margin: -25px 0 0 -25px;
      border-radius: 50%;
      > i {
        font-size: 18px;
      }
    }
    .viewCount {
      font-size: 10px;
      position: absolute;
      bottom: 10px;
      left: 12px;
      i {
        font-size: 10px;
        margin-right: 4px;
      }
    }
  }
  .video-bottom {
    width: 100%;
    height: 46px;
    padding: 0 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .videoBtm-l {
      display: flex;
      align-items: center;
      color: #666;
      font-size: 12px;
      > img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 6px;
      }
    }
    .videoBtm-r {
      display: flex;
      font-size: 12px;
      > div {
          margin: 0 8px;
          >i {
              font-size: 18px;
              margin-right: 4px;
          }
      }
    }
  }
}
</style>
