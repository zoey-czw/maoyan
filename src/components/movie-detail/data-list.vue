<template>
  <div class="data-list-view">
    <App-scroll class="banner-scroll" :width="movieListWidth" :isScrollX="true" :isScrollY="false">
      <ul ref="dateList">
        <li
          v-for="(item,index) in showDays"
          :key="index"
          :class="{current: item==getCurrent}"
          @click="refreshDataAction(item,index)"
        >
          <span v-if="isNeedModifyData">{{item.slice(5).replace('-','月').concat('日')}}</span>
          <span v-else>{{item}}</span>
        </li>
      </ul>
    </App-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieListWidth: "",
      getCurrent: "",
      flage: 1
    };
  },
  props: {
    showDays: Array,
    completeFlage: Boolean,
    isNeedModifyData: {
      type: Boolean,
      default: true
    },
    getDateData: Function
  },
  watch: {
    completeFlage: {
      handler(val) {
        if (val == true) {
          this.$nextTick(() => {
            this.movieListWidth = this.$refs.dateList.clientWidth + "px"; //scroll宽度设置
          });
        }
      },
      immediate: true
    },
    showDays: {
      handler(val) {
        //第一次进入正确显示日期状态
        this.$emit("getDateData", [val[0],0]);
        this.flage++;
        // console.log(this.flage);
        if (this.flage <= 3) {
          this.getCurrent = val[0];
          this.$store.dispatch("movieDetail/getCinemaData", {
            movieId: this.$route.params.id,
            updateShowDay: true,
            optimus_risk_level: 71,
            optimus_code: 10,
            day: val[0], //不设置默认当天
            cityId: 20
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    //根据日期更新电影院数据
    refreshDataAction(date,index) {
      this.getCurrent = date;
      // console.log(date);
      this.$emit("getDateData", [date,index]);
      this.$store.dispatch("movieDetail/getCinemaData", {
        movieId: this.$route.params.id,
        updateShowDay: true,
        optimus_risk_level: 71,
        optimus_code: 10,
        day: date, //不设置默认当天
        cityId: 20
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.data-list-view {
  .banner-scroll {
    width: 100%;
    height: 100% !important;
    margin-top: 0 !important;
    border-bottom: 1px solid #f3f3f3;
    border-top: 1px solid #f3f3f3;
    ul {
      height: 45px;
      overflow: hidden;
      width: max-content;
      .current {
        border-bottom: 2px solid #f03d37;
        color: #f03d37;
      }
      li {
        float: left;
        line-height: 43px;
        padding: 0 12px;
        color: #666;
        font-size: 13px;
      }
    }
  }
}
</style>
