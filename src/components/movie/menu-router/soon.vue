<template>
  <div class="soon-view subPage">
    <div class="soon-wrap">
      <App-scroll class="soon-scroll-wrap" :needScrollHeight="true">
        <div class="soon-box">
          <h4>近期最受期待</h4>
          <BannerScroll :completeFlage="completeFlage" :Data="soonData"/>
          <!-- 更多电影列表 -->
          <MoreMovie :Data="soonListData"/>
        </div>
      </App-scroll>
    </div>
  </div>
</template>

<script>
import MoreMovie from "../../common/more-movie";
import BannerScroll from "../../common/banner-scroll";
import { mapState } from "vuex";
export default {
  components: {
    BannerScroll,
    MoreMovie
  },
  computed: {
    ...mapState({
      soonData: state => state.soon.soonData,
      soonListData: state => state.soon.soonListData,
      completeFlage: state => state.soon.completeFlage
    })
  },
  mounted() {
    this.$store.dispatch("soon/getSoontData"); //数据请求
  }
};
</script>


<style lang="scss">
.soon-view {
  .soon-wrap {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    .soon-scroll-wrap {
      height: 100%;
      padding: 0 12px;
      .soon-box {
        >h4 {
          line-height: 36px;
          color: #333;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
