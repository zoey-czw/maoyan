<template>
  <div class="top-view">
    <!-- 头部展示 -->
    <div class="top">
      <i v-if="showLBtn" class="iconfont icon-youjiantou router-L" @click="routerToAction"></i>
      <h1>{{title}}</h1>
      <i class="iconfont icon-toggle menu-r"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title:{
      type: String,
      default: "猫眼电影",
    },
    showLBtn: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    routerToAction() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  height: 50px;
  width: 100%;
  background-color: #fff;
  color: #fff;
  background: #e54847;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .menu-r{
    position: absolute;
    right: 8px;
  }
  .router-L {
    font-size: 20px;
    transform: rotate(180deg);
    position: absolute;
    left: 8px;
  }
}
</style>
