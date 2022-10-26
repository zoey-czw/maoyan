<template>
  <div class="nav-scroll-view">
    <App-scroll class="nav-scroll" :width="movieListWidth" :isScrollX="true" :isScrollY="false">
      <div class="nav-list" ref="navList">
        <ul>
          <li v-for="(item,index) in navListData" :key="index" 
          :class="{current:item.current}"
          @click="routerToAction(item)">{{item.title}}</li>
        </ul>
      </div>
    </App-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navListData: [
        {
          title: "预告片",
          id: 1067226,
          current: true,
        },
        {
          title: "新片看点",
          id: 1331498,
          current: false,
        },
        {
          title: "每周必看",
          id: 1560874,
          current: false,
        },
        {
          title: "说电影",
          id: 1074953,
          current: false,
        },
        {
          title: "好片推荐",
          id: 1794454,
          current: false,
        },
        {
          title: "犯罪",
          id: 1150199,
          current: false,
        },
        {
          title: "奇幻",
          id: 1466543,
          current: false,
        }
      ],
      movieListWidth: "",
      preCurrent: ''
    };
  },
  methods: {
    routerToAction(item) {
      this.navListData.map(item=>item.current=false);
      item.current = true;
      this.$router.push({query:{voideType:item.id}});
    }
  },
  mounted() {
    this.movieListWidth = this.$refs.navList.clientWidth + "px";
  }
};
</script>

<style lang="scss">
.nav-scroll-view {
  width: 100%;
  line-height: 46px;
  background-color: #fff;
  .nav-scroll {
    height: 100%;
    .nav-list {
       width: max-content;
      ul {
        overflow: hidden;
        li {
          float: left;
          height: 100%;
          margin: 0 8px;
          font-size: 14px;
          color: #333;
          text-align: center;
        }
        .current {
          font-size: 16px;
          font-weight: bold;
          position: relative;
          &::after {
            content: '';
            height: 3px;
            width: 20px;
            background-color: #F03D37;
            position: absolute;
            bottom: 2px;
            left: 50%;
            margin-left: -10px;
          }
        }
      }
    }
  }
}
</style>

