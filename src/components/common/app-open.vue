<template>
  <div class="appOpen-view">
    <div class="app-open">
      <!-- logo -->
      <i class="iconfont icon-maoyan"></i>
      <!-- logo+中间部分 -->
      <div class="appOpen-content">
        <h2>猫眼</h2>
        <span>在线选座，热门影讯，爱上看电影</span>
      </div>
      <!-- 打开app -->
      <div class="open">打开app</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-open {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  > i {
    font-size: 44px;
    color: #ef4238;
    margin: 0 12px;
  }
  .appOpen-content {
    flex: 1;
    color: #222222;
    font-size: 11px;
    > span {
      color: #999999;
      font-size: 12px;
    }
  }
  .open {
    width: 68px;
    line-height: 30px;
    text-align: center;
    background-color: #ef4238;
    font-size: 12px;
    color: #fff;
    margin-right: 12px;
    border-radius: 8px;
  }
}
</style>
