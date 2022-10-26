<template>
  <div class="cinema-view subPage">
    <div class="cinema-wrap">
      <!-- 顶部 -->
      <Cinema-top/>
      <!-- 滚动部份 -->
      <App-scroll class="hot-scroll-wrap" :needScrollHeight="true">
        <Cinema-list :data="hotDatcinemaData"/>
      </App-scroll>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import CinemaList from '../cinema/cinema-list'
import CinemaTop from '../cinema/cinema-top'

export default {
  components: {
    CinemaList,
    CinemaTop
  },
  computed: {
    ...mapState({
      hotDatcinemaData: state => state.cinema.cinemaData
    })
  },
  beforeCreate() {
    this.$store.dispatch("cinema/getCinemaData"); //数据请求
  }
};
</script>

<style lang="scss" scoped>
.cinema-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // 滚动部分
  .hot-scroll-wrap {
    width: 98%;
    height: 100%;

  }
}
</style>
