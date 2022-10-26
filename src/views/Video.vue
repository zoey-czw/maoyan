<template>
  <div class="video-view page">
    <div class="video-wrap">
      <App-scroll class="video-scroll">
        <!-- 顶部 -->
        <div class="video-view-top">
          <App-open/>
          <App-top/>
          <!-- 视频菜单 -->
          <Nav-scroll/>
        </div>
        <Video-list :videoData="videoData"/>
      </App-scroll>
    </div>
  </div>
</template>

<script>
import AppTop from "../components/common/app-top";
import AppOpen from "../components/common/app-open";
import NavScroll from "../components/video/nav-scroll";
import VideoList from "../components/video/video-list";
import { mapState } from "vuex";

export default {
  components: {
    AppTop,
    AppOpen,
    NavScroll,
    VideoList
  },
  computed: {
    ...mapState({
      videoData: state => state.video.videoData
    })
  },
  beforeCreate() {
    this.$store.dispatch("video/getVideoData"); //数据请求
  }
};
</script>

<style lang="scss">
.video-view {
  .video-wrap {
    width: 100%;
    height: 100%;
    .video-scroll {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

