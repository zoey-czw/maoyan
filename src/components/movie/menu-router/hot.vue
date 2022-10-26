<template>
  <div class="hot-view subPage" ref="hotView">
    <App-scroll class="hot-scroll-wrap" :needScrollHeight="true">
      <h4>最受好评电影</h4>
      <!-- 最受好评电影 -->
      <BannerScroll :Data="hotData" :completeFlage="completeFlage"/>
      <!-- 更多电影列表 -->
      <MoreMovie :Data="originData"/>
    </App-scroll>
  </div>
</template>
<script>
import { mapState } from "vuex";
import MoreMovie from "../../common/more-movie";
import BannerScroll from "../../common/banner-scroll";
export default {
  components: {
    MoreMovie,
    BannerScroll,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      hotData: state => state.hot.hotData,
      originData: state => state.hot.originData,
      completeFlage: state => state.hot.completeFlage
    })
  },

  beforeCreate() {
    this.$store.dispatch("hot/getHotData"); //数据请求
  },
};
</script>

<style lang="scss" scoped>
.hot-view {
  padding: 0 12px;
  .hot-scroll-wrap {
    width: 100%;
    height: 100%;
    h4 {
      line-height: 36px;
      color: #333;
      font-size: 14px;
    }
  }

}
</style>
