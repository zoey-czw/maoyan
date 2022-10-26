<template>
  <div class="cinema-view">
    <div
      class="cinema-box"
      v-for="item in data"
      :key="item.id"
      v-show="item.price"
      @click="routerToAction(item)"
    >
      <!-- 电影名 -->
      <div class="title">
        <span>{{item.title}}</span>
        <i>{{item.price}} 元起</i>
      </div>
      <!-- 地址 -->
      <div class="location">
        <span>{{item.location}}</span>
        <i>{{item.distance}}</i>
      </div>
      <!-- 优惠信息 -->
      <div class="lable-wrap">
        <div class="lable" v-for="(item,index) in item.lable" :key="index">
          <span class="green" v-if="item.allowRefund">{{item.allowRefund}}</span>
          <span class="green" v-if="item.endorse">{{item.endorse}}</span>
          <span class="yellow" v-if="item.vipTag">{{item.vipTag}}</span>
          <span class="green" v-if="item.hallType">{{item.hallType}}</span>
          <span class="green" v-if="item.hallType2">{{item.hallType2}}</span>
        </div>
      </div>
      <!-- 开卡特惠信息 -->
      <div class="discountText" v-if="item.discountText">
        <span>卡</span>
        {{item.discountText}}
      </div>
      <!-- 近期场次 -->
      <div class="showTimes" v-if="item.showTimes">{{item.showTimes}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  methods: {
    routerToAction(item) {
      //跳转路由，并传参
      this.$router.push({
        path: "/home/cinemaDetail",
        query: { cinemaId: item.id, movieId: this.$route.params.id }
      });
      //请求数据
      this.$store.dispatch("cinemaDetail/getCinemaArrangementData", {
        cinemaId: this.$route.query.cinemaId,
        movieId: this.$route.query.movieId
      });
    }
  }
};
</script>


<style lang="scss">
.cinema-box {
  box-sizing: border-box;
  margin: 12px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 12px;
  // 标题
  .title {
    font-size: 16px;
    line-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    > span {
      color: #000;
    }
    > i {
      color: #f03d37;
      margin-left: 10px;
    }
  }
  // 地址
  .location {
    color: #666;
    line-height: 30px;
    font-size: 14px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    > i {
      margin-left: 30px;
    }
  }
  //优惠信息
  .lable-wrap {
    display: flex;
    span {
      font-size: 12px;
      margin-right: 4px;
      padding: 0 2px;
    }
    .green {
      color: #589daf;
      border: 1px solid #589daf;
    }
    .yellow {
      color: #ff9900;
      border: 1px solid #ff9900;
    }
  }
  //开卡特惠
  .discountText {
    margin-top: 8px;
    color: #999;
    font-size: 12px;
    > span {
      background-color: #589daf;
      color: #fff;
      font-size: 10px;
      display: inline-block;
      width: 15px;
      line-height: 15px;
      text-align: center;
    }
  }
  //近期场次
  .showTimes {
    margin-top: 8px;
    color: #999;
    font-size: 12px;
  }
}
</style>
