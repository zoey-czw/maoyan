<template>
  <div class="movieMenu-view">
    <div class="movie-men">
      <!-- 热映/待映菜单 -->
      <div class="menu-list">
        <!-- 城市选择 -->
        <div class="city">
          <h3>广州</h3>
          <span class="triangle"></span>
        </div>
        <!-- 菜单选择 -->
        <div class="menuSelect">
          <ul>
            <li
              v-for="(item,index) in menuData"
              :key="index"
              @click="currentClassAction(item.left)"
            >
              <router-link class="menu-router" :to="item.routerLink">
                <span>{{item.name}}</span>
              </router-link>
            </li>
            <div class="line" ref="line"></div>
          </ul>
        </div>
        <!-- 右侧搜索 -->
        <div class="search iconfont icon-sousuo"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: [
        { name: "热映", routerLink: "/home/movie/hot", left: "6.5%" },
        { name: "影院", routerLink: "/home/movie/cinema", left: "27.5%" },
        { name: "待映", routerLink: "/home/movie/soon", left: "49%" },
        { name: "经典电影", routerLink: "/home/movie/classic", left: "76%" }
      ]
    };
  },
  methods: {
    currentClassAction(left) {
      this.$refs.line.style.left = left;
    }
  }
};
</script>
<style lang="scss" scoped>
.movieMenu-view {
  background-color: #fff;

  .menu-list {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    //城市设置
    .city {
      color: #666;
      margin-left: 12px;
      display: flex;
      align-items: center;
      span {
        width: 0;
        height: 0;
        border: 4px solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        margin-left: 4px;
        margin-top: 5px;
      }
    }
    //电影菜单
    .menuSelect {
      ul {
        display: flex;
        justify-content: space-around;
        width: 240px;
        line-height: 46px;
        font-size: 15px;
        font-weight: bold;
        position: relative;
        .line {
          display: inline-block;
          width: 5.33333vw;
          border-radius: 1px;
          height: 3px;
          background-color: #f03d37;
          position: absolute;
          bottom: 1px;
          left: 6.5%;
          transition: left 0.2s;
        }
        a {
          color: #666;
        }
        .router-link-active {
          color: #333;
          font-size: 17px;
        }
      }
    }
    //搜索
    .search {
      font-size: 22px;
      color: #ef4238;
      padding: 10px 15px 10px 10px;
      box-sizing: border-box;
    }
  }
}
</style>
