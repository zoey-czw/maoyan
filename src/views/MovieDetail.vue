<template>
  <div class="movie-detail-view">
    <App-scroll class="movie-detail-wrap" :needScrollHeight="true" :canScrollPull="false">
      <div class="movieDetail-wrap">
        <!-- 头部 -->
        <AppTop :title="hotDetailData.name" :showLBtn="true"/>
        <AppOpen/>
        <!-- banner -->
        <Movie-detail-banner :data="hotDetailData"/>
        <!-- dataList -->
        <Data-list :showDays="showDays" :completeFlage="completeFlage"/>
        <!-- 全城  品牌  特色 -->
        <Cinema-top/>
        <!-- 电影院数据 -->
        <Cinema-list :data="cinemaData"/>
      </div>
    </App-scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import AppTop from "../components/common/app-top";
import AppOpen from "../components/common/app-open";
import MovieDetailBanner from "../components/movie-detail/movieDetail-banner";
import DataList from "../components/movie-detail/data-list";
import CinemaTop from "../components/movie/cinema/cinema-top";
import CinemaList from "../components/movie/cinema/cinema-list";

import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    AppTop,
    AppOpen,
    MovieDetailBanner,
    DataList,
    CinemaTop,
    CinemaList
  },
  computed: {
    ...mapState({
      hotDetailData: state => state.movieDetail.hotDetailData,
      completeFlage: state => state.movieDetail.completeFlage,
      showDays: state => state.movieDetail.showDays,
      cinemaData: state => state.movieDetail.cinemaData
    })
  },
  mounted() {
    this.$store.dispatch("movieDetail/getHotDetailData", this.$route.params.id); //数据请求
    this.$store.dispatch("movieDetail/getCinemaData", {
      movieId: this.$route.params.id,
      updateShowDay: true,
      optimus_risk_level: 71,
      optimus_code: 10,
      // day: '2020-09-27', //不设置默认当天
      cityId: 20
    });
  }
};
</script>


<style lang="scss">
.movie-detail-view {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 100;
  .movie-detail-wrap {
    width: 100%;
    height: 100%;
  }
}
</style>
