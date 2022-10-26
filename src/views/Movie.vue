<template>
  <div class="movie-view page">
    <!-- 顶部 -->
    <div class="movie-view-top">
      <App-top/>
      <App-open v-show="appOpenIsShow"/>
      <!-- 电影菜单 -->
      <Movie-menu/>
    </div>
    <div class="movie-view-bottom">
      <!-- 菜单底部内容 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AppTop from "../components/common/app-top";
import AppOpen from "../components/common/app-open";
import MovieMenu from "../components/movie/movie-menu";
import { mapState } from "vuex";

export default {
  components: {
    AppTop,
    AppOpen,
    MovieMenu
  },
  computed: {
    ...mapState({
      appOpenIsShow: state => state.hot.appOpenIsShow
    })
  },
};
</script>
<style scoped lang="scss">
.movie-view {
  display: flex;
  flex-direction: column;

  .movie-view-top {
    position: relative;
    // height: max-content;
    // top: 0;
    // left: 0;
    width: 100%;
  }
  .movie-view-bottom {
    position: relative;
    width: 100%;
    flex: 1;
  }
}
.subPage {
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  // bottom: 0;
  // padding-bottom: 100px;
  background-color: #fff;
  overflow: hidden;
}
</style>
