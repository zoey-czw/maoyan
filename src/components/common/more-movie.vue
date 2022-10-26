<template>
  <div class="more-movie-view">
    <div class="more-movie">
      <ul>
        <li class="movie-box" v-for="item in Data" :key="item.id" @click="routerToAction(item)">
          <h4>{{item.comingTitle}}</h4>
          <!-- 图片 -->
          <div class="movie-box-content">
            <img :src="item.imgUrl" alt>
            <!-- 中间信息 -->
            <div class="moreMovie-m">
              <div class="title">
                <h4>{{item.name}}</h4>
                <div class="version" v-if="item.version1">
                  <span v-if="item.version1">{{item.version1}}</span>
                  <span v-if="item.version2">{{item.version2}}</span>
                </div>
              </div>
              <div class="title-btm">
                <p class="more-grade" v-if="item.grade>0">
                  <span>观众评</span>
                  <span>{{item.grade}}</span>
                </p>
                <p class="more-grade" v-else>
                  <span>想观看人数</span>
                  <span>{{item.wish}}</span>
                </p>
                <div class="star">主演:{{item.star}}</div>
                <div class="showInfo">{{item.showInfo}}</div>
              </div>
            </div>
          </div>
          <!-- 购票/预售 -->
          <div class="red sale" v-if="item.globalReleased">购票</div>
          <div class="yellow sale" v-else-if="item.showInfo">想看</div>
          <div class="green sale" v-else>预售</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Data: Array
  },
  methods: {
    routerToAction(item) {
      this.$router.push({path:'/home/'+item.id});
      this.$store.dispatch("movieDetail/getHotDetailData",item.id); //数据请求
      this.$store.dispatch("movieDetail/getCinemaData", {
      movieId: this.$route.params.id,
      updateShowDay: true,
      optimus_risk_level: 71,
      optimus_code: 10,
      // day: new Date().toLocaleDateString().replace(/\//g,'-'), //不设置默认当天
      cityId: 20
    }); //影院数据请求
    }
  },
};
</script>

<style lang="scss">
//更多电影列表
.more-movie {
  margin-top: 16px;
  ul {
    li {
      position: relative;
      border-bottom: 1px solid #f3f3f3;
      > h4 {
        color: #333;
        margin-top: 12px;
      }
      .movie-box-content {
        width: 100%;
        height: 114px;
        display: flex;
        align-items: center;
        > img {
          width: 64px;
          height: 90px;
        }
        // 中间部分
        .moreMovie-m {
          width: 58vw;
          margin-left: 12px;
          display: flex;
          flex-direction: column;
          // 标题
          .title {
            max-height: 24px;
            width: max-content;
            margin-bottom: 7px;
            line-height: 24px;
            overflow: hidden;
            display: flex;
            align-items: center;
            h4 {
              color: #333;
              font-weight: bold;
              font-size: 17px;
            }
            .version {
              height: 14px;
              color: #3c9fe6;
              margin-left: 4px;
              border: 1px solid #3c9fe6;
              font-size: 10px;
              display: flex;
              align-items: center;
              span:nth-child(1) {
                display: inline-block;
                color: #fff;
                background-color: #3c9fe6;
                line-height: 14px;
                padding: 0 2px;
              }
              span:nth-child(2) {
                display: inline-block;
                padding: 0 2px;
              }
            }
          }
          // 标题-底部
          .title-btm {
            line-height: 22px;
            font-size: 13px;
            color: #666;
            .more-grade {
              span:nth-child(2) {
                margin-left: 2px;
                font-size: 14px;
                font-weight: bold;
                color: #faaf00;
              }
            }
            .star {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
      // 购票/预售
      .sale {
        width: 47px;
        line-height: 27px;
        text-align: center;
        border-radius: 4px;
        color: #fff;
        position: absolute;
        top: 50%;
        right: 0;
      }
      .red {
        background-color: #f03d37;
      }
      .green {
        background-color: #3c9fe6;
      }
      .yellow {
        background-color: #faaf00;
      }
    }
  }
}
</style>
