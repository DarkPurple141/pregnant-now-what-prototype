<template>
  <div id="app">
    <mobile-header v-if="isHeaderRoute($route.name)" :location="$route.name"/>
    <router-view></router-view>
    <mobile-footer v-if="$route.name != 'Entry'"/>
  </div>
</template>

<script>
import MobileFooter from '@/components/MobileFooter'
import MobileHeader from '@/components/MobileHeader'

export default {
  name: 'app',
  components: { MobileFooter, MobileHeader },

  methods: {
      isHeaderRoute: (route) => {
         return (route != 'This Week' && route != 'Entry')
      }
  }
}
</script>

<style lang='less'>
@import './assets/colors.less';

*, *:after, *:before {
   margin: 0;
   padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @primary-text;
  font-size: 16px;
  height: 100vh;
}

main {
   padding-bottom: 60px;
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
