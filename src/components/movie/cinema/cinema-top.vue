<template>
  <div class="cinema-top-view">
    <div class="cinema-top">
      <ul>
        <li>全城</li>
        <li>品牌</li>
        <li>特色</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.cinema-top {
  ul {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    color: #777;
    li {
      // width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      &::after {
        content: "";
        display: block;
        border: 4px solid transparent;
        border-top: 4px solid #777;
        margin: 4px 0 0 4px;
      }
    }
  }
}
</style>
