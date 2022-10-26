<template>
  <div class="banner-scroll-view">
    <App-scroll class="banner-scroll" :width="movieListWidth" :isScrollX="true" :isScrollY="false">
      <div class="movieList-wrap" ref="movieList">
        <div class="movieList" v-for="item in Data" :key="item.id">
          <div class="movie-content">
            <img :src="item.imgUrl" alt="加载失败">
            <span class="grade" v-if="item.grade>0">观众评分 {{item.grade}}</span>
            <span class="grade" v-else>{{item.wish}} 人想看</span>
          </div>
          <div class="movie-name">{{item.name}}</div>
          <div class="playDate" v-if="item.playDate">{{item.playDate}}</div>
        </div>
      </div>
    </App-scroll>
  </div>
</template>

<script>
export default {
  props: {
    Data: Array,
    completeFlage: Boolean,
  },
  data() {
    return {
      movieListWidth: ""
    };
  },
  watch: {
    completeFlage: {
      handler(val) {
        if (val == true) {
          this.$nextTick(() => {
            this.movieListWidth = this.$refs.movieList.clientWidth + "px"; //scroll宽度设置
          });
        }
      },
      immediate: true
    }
  },
  mounted() {}
};
</script>


<style lang="scss">
// 最受好评电影
.banner-scroll {
  width: 100%;
  height: 100%;
  .movieList-wrap {
    width: max-content;
    display: flex;
    align-items: center;
    .movieList {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 12px;
      // 电影封面
      .movie-content {
        position: relative;
        img {
          width: 85px;
          height: 115px;
        }
        span {
          position: absolute;
          bottom: 2px;
          color: #faaf00;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
      }
      // 电影名称
      .movie-name {
        font-size: 12px;
        color: #222;
        line-height: 24px;
        font-weight: bold;
      }
      .playDate {
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>
