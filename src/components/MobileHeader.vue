<template lang="html">
   <header>
      <div class="current">{{ location }}</div>
   </header>
</template>

<script>
export default {
   props: {
      location: String
   }
}
</script>

<style lang='less' scoped>
@import '../assets/colors.less';

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
  background-color: @primary-color;
  color: @grey;
  border-bottom: 1px solid @border;
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
