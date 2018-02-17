<template lang="html">
   <header>
      <nav @click="prev()">
         <div class="icon-container icon-bottom icon-left">
            <i class="material-icons arrow">brightness_1</i>
         </div>
         <div class="icon-container icon-top icon-left">
            <i class="material-icons arrow">chevron_left</i>
         </div>
      </nav>
      <div class="current">Current: {{ period }}</div>
      <nav @click="next()">
         <div class="icon-container icon-bottom">
            <i class="material-icons arrow">brightness_1</i>
         </div>
         <div class="icon-container icon-top">
            <i class="material-icons arrow">chevron_right</i>
         </div>
      </nav>
   </header>
</template>

<script>
export default {
   props: {
      period: String,
      next: Function,
      prev: Function
   }
}
</script>

<style lang='less' scoped>
@import '../assets/colors.less';
@import '../assets/icon.less';

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  background-color: @primary-color-light;
  color: @grey;
  border-bottom: 1px solid @border;
}

nav {
   height: 100%;
   position: relative;
   width: 10%;
}

.icon-bottom {
   color: @primary-color;
}

.icon-container {
   top: 5px;
   right: 10px;
}

.icon-top {
   color: @grey-light;
}

.icon-top:hover {
   color: @grey;
}

.icon-left {
   left: 10px;
}

.arrow {
   font-size: 1.5em;
}

.current {
   width: 80%;
   padding: 0 25px;
}

header div {
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  padding: 5px;
}

</style>
