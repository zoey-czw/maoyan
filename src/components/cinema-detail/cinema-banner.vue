<template>
  <div class="cinema-banner-view" v-if="data[selectImg]">
    <!-- 毛玻璃背景图 -->
    <div class="img-btm">
      <img :src="data[selectImg].img" alt class="bottom-img">
      <div class="marsk"></div>
    </div>
    <!-- banner -->
    <App-scroll class="banner-scroll" :width="movieListWidth" :isScrollX="true" :isScrollY="false">
      <div class="cinema-banner" ref="cinemaBanner">
        <!-- 轮播图 -->
        <div class="imgList">
          <ul>
            <li v-for="(item,index) in data" :key="item.id" @click="selectMovieAction(index)">
              <img :src="item.img" alt>
            </li>
          </ul>
        </div>
      </div>
    </App-scroll>
    <!-- 标题信息 -->
    <div class="title">
      <div class="title-top">
        <span class="name">{{data[selectImg].name}}</span>
        <span v-if="data[selectImg].sc != '0.0'" class="grad">
          {{data[selectImg].sc}}
          <i>分</i>
        </span>
        <span v-else class="grad">
          {{data[selectImg].wish}}
          <i>人想看</i>
        </span>
      </div>
      <div class="desc">{{data[selectImg].desc}}</div>
    </div>
    <!-- 日期选择 -->
    <div class="data">
      <Data-list
        :completeFlage="completeFlage"
        :isNeedModifyData="false"
        :showDays="dateListData[selectImg]"
        @getDateData="getDateData"
      />
    </div>
    <!-- 场次列表 -->
    <Cinema-arrangement
      :dateData="dateData"
      :dateDataIndex="dateDataIndex"
      :selectImg="selectImg"
      :movieListData="movieListData"
    />
  </div>
</template>

<script>
import DataList from "../movie-detail/data-list";
import CinemaArrangement from "./cinema-arrangement";
export default {
  props: {
    data: {
      type: Array,
      default: [
        {
          id: 1328712,
          name: "我和我的家乡",
          img:
            "http://p0.meituan.net/148.208/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg",
          sc: "0.0",
          wish: 390214,
          desc: "153分钟 | 剧情 | 黄渤,葛优,范伟"
        }
      ]
    },
    completeFlage: Boolean,
    dateListData: Array
  },
  data() {
    return {
      movieListWidth: "",
      selectImg: 0,
      dateData: "",
      dateDataIndex: 0,
      movieListData: []
    };
  },
  components: {
    DataList,
    CinemaArrangement
  },
  watch: {
    completeFlage: {
      handler(val) {
        if (val == true) {
          //scroll宽度设置
          this.$nextTick(() => {
            this.movieListWidth = this.$refs.cinemaBanner.clientWidth + "px";
          });
          this.movieListData = this.data[0];
        }
      },
      immediate: true
    }
  },
  methods: {
    selectMovieAction(index) {
      this.selectImg = index;
      this.movieListData = this.data[index];
    },
    //获取日期信息
    getDateData(val) {
      console.log(val);
      this.dateData = val[0];
      this.dateDataIndex = val[1];
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.cinema-banner-view {
  // 背景图
  .img-btm {
    position: absolute;
    z-index: -1;
    left: 0;
    width: 100%;
    height: 135px;
    overflow: hidden;
    // 毛玻璃
    .bottom-img {
      width: 100%;
      height: 135px;
      filter: blur(10px);
    }
    .marsk {
      width: 100%;
      height: 135px;
      opacity: 0.4;
      background-color: #aaa;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  //轮播图
  .banner-scroll {
    height: 135px;
    margin-top: 16px;
    .cinema-banner {
      position: relative;
      height: 135px;
      width: max-content;
      // 轮播图
      .imgList {
        ul {
          height: 135px;
          display: flex;
          align-items: center;
          // transform: translate(50px);
          li {
            > img {
              width: 76px;
              height: 110px;
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
  //标题信息
  .title {
    width: 100%;
    height: 66px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    .title-top {
      .name {
        font-size: 16px;
        font-weight: bold;
      }
      .grad {
        color: #ffb400;
        font-size: 16px;
        font-weight: bold;
        i {
          font-size: 12px;
        }
      }
    }
    .desc {
      font-size: 14px;
      color: #777;
      line-height: 30px;
    }
  }
  //日期信息
}
</style>
