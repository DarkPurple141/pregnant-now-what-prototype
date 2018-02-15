<template lang="html">
   <header>
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
      next: Function
   }
}
</script>

<style lang='less' scoped>
@import '../assets/colors.less';
@import '../assets/icon.less';

header {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px;
  height: 56px;
  background-color: @secondary-color-light;
  color: @grey;
  border-bottom: 1px solid @border;
}

.icon-container {
   top: 9px;
   right: 10px;
}

.icon-top {
   color: black;
}

.arrow {
   font-size: 1.5em;
}

header nav {
   padding: 5px 0px;
}

header div {
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  padding: 5px 0px;
}

.logo {
   width: 50%;
   background-color: @secondary-color-light;
}
</style>
