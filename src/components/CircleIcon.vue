<template lang="html">
   <div class="outer">
      <div class="icon-container icon-bottom">
         <i class="material-icons icon-size-large">brightness_1</i>
      </div>
      <div class="icon-container icon-top">
         <slot></slot>
      </div>
   </div>
</template>

<style lang="less" scoped>
@import '../assets/colors.less';
@import '../assets/icon.less';

.outer {
   width: 50%;
   position: relative;
}

.icon-size {
   font-size: 2em;
}

.icon-size-large {
   font-size: 4em;
}

.icon-bottom {
   top: -1em;
   left: -1em;
   color: @secondary-color;
}

.icon-top {
   top: 0;
   left: 0;
   color: @grey;
}

</style>
