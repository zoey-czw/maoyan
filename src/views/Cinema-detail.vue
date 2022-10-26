<template>
  <div class="cinema-detail-view">
    <App-scroll class="cinema-detail-wrap" :needScrollHeight="true" :canScrollPull="false">
      <div class="cinemaDetail-wrap">
        <!-- 头部 -->
        <div class="cinemaDetail-top">
          <AppTop :showLBtn="true" :title="cinemaData.name"/>
          <AppOpen/>
        </div>
        <!-- 主体 -->
        <div class="cinemaDetail-bottom">
          <!-- 面包屑导航 -->
          <div class="crumbs">猫眼电影 > {{cinemaData.name}}</div>
          <!-- 地址 -->
          <div class="addr">
            <div class="addr-l">
              <p>{{cinemaData.name}}</p>
              <p>{{cinemaData.addr}}</p>
            </div>
            <div class="addr-r iconfont icon-location"></div>
          </div>
          <!-- banner -->
          <Cinema-banner :data="moviesData" :completeFlage="completeFlage" 
          :dateListData="dateListData"/>
        </div>
      </div>
    </App-scroll>
  </div>
</template>
<script>
import AppTop from "../components/common/app-top";
import AppOpen from "../components/common/app-open";
import CinemaBanner from "../components/cinema-detail/cinema-banner";

import { mapState } from "vuex";

export default {
  components: {
    AppTop,
    AppOpen,
    CinemaBanner
  },
  computed: {
    ...mapState({
      cinemaArrangementData: state => state.cinemaDetail.cinemaArrangementData,
      cinemaData: state => state.cinemaDetail.cinemaData,
      moviesData: state => state.cinemaDetail.moviesData,
      completeFlage: state => state.cinemaDetail.completeFlage,
      dateListData: state => state.cinemaDetail.dateListData
    })
  },
  provide() {
    return {
      cinemaArrangementData: this.cinemaArrangementData,
    }
  },
  mounted() {
    //请求数据
    this.$store.dispatch("cinemaDetail/getCinemaArrangementData", {
      cinemaId: this.$route.query.cinemaId,
      movieId: this.$route.query.movieId
    });
  }
};
</script>

<style lang="scss">
.cinema-detail-view {
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1000;
  .cinema-detail-wrap {
    width: 100%;
    height: 100%;
    .cinemaDetail-wrap {
      .cinemaDetail-bottom {
        padding: 0 12px;
        //面包屑
        .crumbs {
          color: #777;
          font-size: 14px;
          line-height: 40px;
        }
        //地址
        .addr {
          display: flex;
          .addr-l {
            flex: 1;
            overflow: hidden;
            padding-right: 16px;
            p:nth-child(1) {
              font-size: 16px;
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            p:nth-child(2) {
              font-size: 14px;
              color: #777;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              line-height: 30px;
            }
          }
          .addr-r {
            font-size: 22px;
            padding: 0 12px 0 20px;
            color: lightskyblue;
            border-left: 1px solid #ccc;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
