<template>
  <div class="classic-view subPage">
    <App-scroll class="classic-scroll-wrap" :needScrollHeight="true">
      <div class="classicWrap">
        <ul>
          <li class="classic-box" v-for="item in classicData" :key="item.id">
            <div class="classic-box-content">
              <!-- 图片 -->
              <img :src="item.imgUrl" alt>
              <!-- 中间信息 -->
              <div class="classic-m">
                <!-- 标题 -->
                <div class="title">
                  <h4>{{item.title}}</h4>
                  <h4>{{item.english}}</h4>
                </div>
                <!-- 标题底部 -->
                <div class="title-btm">
                  <!-- 题材 -->
                  <div class="actors">{{item.actors}}</div>
                  <!-- 播放信息 -->
                  <div class="showInfo">{{item.showInfo}}</div>
                </div>
              </div>
              <!-- 评分 -->
              <div class="grade">
                <span>{{item.grade}}</span> 分
              </div>
            </div>
          </li>
        </ul>
      </div>
    </App-scroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      classicData: state => state.classic.classicData
    })
  },
  beforeCreate() {
    this.$store.dispatch("classic/getClassicData"); //数据请求
  }
};
</script>

<style lang="scss">
.classic-scroll-wrap {
  width: 100%;
  height: 100%;
  .classicWrap {
    ul {
    //   margin-top: 20px;
      li {
        .classic-box-content {
          width: 100%;
          height: 94px;
          display: flex;
          justify-content: space-between;
          margin: 0 0 20px 10px;
          > img {
            width: 66px;
            height: 94px;
          }
          .classic-m {
            margin-left: 10px;
            line-height: 24px;
            color: #666;
            flex: 1;
            width: 46vw;
            .title {
              > h4:nth-child(1) {
                font-size: 15px;
                color: #333;
                font-weight: bold;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              > h4:nth-child(2) {
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
          .grade {
            color: #666;
            font-size: 14px;
            width: 60px;
            margin-right: 20px;
            span {
              color: #faaf00;
            }
          }
        }
      }
    }
  }
}
</style>

