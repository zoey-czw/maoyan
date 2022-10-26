<template>
  <div class="cinemaArrangement-view" v-if="movieListData">
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <div class="cinemaArrangement-box">
          <div class="cinema-box-a">
            <div class="time">{{item.tm}}</div>
          </div>
          <div class="cinema-box-b">
            <div class="lang">
              <div>
                <span>{{item.lang}}</span>
                <span class="tp">{{item.tp}}</span>
              </div>
              <div class="th">{{item.th}}</div>
            </div>
          </div>
          <div class="cinema-c">
            <div class="price">￥ {{item.vipPrice}}</div>
            <div class="vipPriceNameNew">{{item.vipPriceNameNew}}</div>
          </div>
          <div class="cinema-d">购票</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    dateData: String,
    dateDataIndex: {
      type: Number,
      // default: 0,
    },
    selectImg: Number,
    movieListData: [Array, Object]
  },
  data() {
    return {
      data: []
    };
  },
  // inject: ['cinemaArrangementData']
  watch: {
    dateDataIndex: {
      handler(val) {
        // console.log(1,this.movieListData.shows[this.dateDataIndex].plist);
        this.data = this.movieListData.shows[this.dateDataIndex].plist.map(
          item => {
            return {
              tm: item.tm,
              lang: item.lang,
              tp: item.tp,
              th: item.th, //激光厅
              vipPrice: item.vipPrice,
              vipPriceNameNew: item.vipPriceNameNew
            };
          }
        );
        // console.log(this.data);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
.cinemaArrangement-view {
  ul {
    li {
      .cinemaArrangement-box {
        width: 100%;
        height: 77px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        box-sizing: border-box;
        padding: 2px 0;
        .cinema-box-a {
          .time {
            font-size: 18px;
          }
        }
        .cinema-box-b {
          .lang {
            line-height: 24px;
            .th {
              color: #777;
            }
          }
        }
        .cinema-c {
            line-height: 24px;
            .price {
                font-size: 16px;
                color: #f03d37;
                font-weight: bold;
            }
            .vipPriceNameNew {
                color: #777;
            }
        }
        .cinema-d {
            width: 45px;
            line-height: 27px;
            text-align: center;
            background-color: #f03d37;
            border-radius: 8px;
            color: #fff;
        }
      }
    }
  }
}
</style>
