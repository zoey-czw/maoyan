<template>
  <div class="home-view">
      <!-- body 内容部分 -->
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    
    <!-- 底部展示 -->
    <div class="bottom">
      <ul>
        <li v-for="(item,index) in bottomData" :key="index">
          <router-link :to="item.path" class="routerList">
            <i :class="'iconfont'+' '+item.bottomIconfont"></i>
            <span>{{item.contextData}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //底部导航数据
      bottomData: [
        {
          contextData: "电影/影院",
          bottomIconfont: "icon-dianying",
          path: "/home/movie/hot",
          isCurrent: 0
        },
        {
          contextData: "视频",
          bottomIconfont: "icon-shipin2",
          path: "/home/video",
          isCurrent: 1
        },
        {
          contextData: "小视频",
          bottomIconfont: "icon-shipin",
          path: "/home/smallVideo",
          isCurrent: 2
        },
        {
          contextData: "我的",
          bottomIconfont: "icon-me",
          path: "/home/mine",
          isCurrent: 3
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss">
html {
    touch-action: none;  
    background-color: #f3f3f3;
}
.page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow: hidden;
}
.subPage {
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  // bottom: 0;
  // padding-bottom: 100px;
  background-color: #fff;
  overflow: hidden;
}
.bottom {
  width: 100%;
  height: 48px;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  ul {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      .routerList {
        height: 48px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 13px;
        i {
          font-size: 25px;
        }
      }
      a {
        color: #696969;
      }
    }
    .router-link-active {
      color: #f03d37;
    }
  }
}
</style>
