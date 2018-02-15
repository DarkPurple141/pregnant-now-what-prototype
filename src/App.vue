<template>
  <div id="app">
    <router-view></router-view>
    <mobile-footer/>
  </div>
</template>

<script>
import MobileFooter from '@/components/MobileFooter'

export default {
  name: 'app',
  components: { MobileFooter }
}
</script>

<style lang='less'>
@import './assets/colors.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @primary-text;
  height: 100%;
}

main {
   padding-bottom: 60px;
}

*, *:after, *:before {
   margin: 0;
   padding: 0;
}

h1, h2, h3, h4, h5, h6 {
   color: @primary-text;
}

p {
   font-family: 'San Francisco', 'Helvetica Neue';
   line-height: 1.8;
   color: @secondary-text;
}

</style>
