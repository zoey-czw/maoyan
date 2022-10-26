<template>
  <div class="scroll-view" ref="scroll">
    <div class="scroll-wrap" :style="{width: wrapWidth}">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isScrollX: {
      style: Boolean,
      default: false
    },
    isScrollY: {
      style: Boolean,
      default: true
    },
    width: String,
    needScrollHeight: {
      style: Boolean,
      default: false
    },
    canScrollPull: {
      style: Boolean,
      default: true,
    }
  },
  data() {
    return {};
  },
  computed: {
    // 计算最终宽度的样式
    wrapWidth() {
      if (typeof this.width === "string") {
        return this.width;
      } else {
        return this.width + "px";
      }
    }
  },
  mounted() {
    this.scroll = new IScroll(this.$refs.scroll, {
      scrollX: this.isScrollX,
      scrollY: this.isScrollY,
      click: false,
      tap: true,
      probeType: 3
      // scrollbars: true,
      // fadeScrollbars: true
    });
    this.scroll.on("beforeScrollStart", () => {
      this.scroll.refresh();
    });
    //高度监听
    this.needScrollHeight &&
      this.scroll.on("scroll", () => {
        // console.log(this.scroll.y);
        this.$store.commit("hot/setScrollHeight", {
          scrollHeight: this.scroll.y,
          maxScrollH: this.scroll.maxScrollY
        });
        //不能下拉判断
        if(!this.canScrollPull) {
          if(this.scroll.y>=0) {
            this.scroll.scrollTo(0,0,0);
          }
        }
      });
  }
};
</script>

<style>
.scroll-view {
  overflow: hidden;
}
</style>
