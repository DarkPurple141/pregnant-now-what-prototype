<template lang="html">
<header class="banner">
   <h1>{{ title }}</h1>
   <h3>{{ subtitle }}</h3>
</header>
</template>

<script>
export default {
   data() {
      return {
         title: "Pregnant. Now What?!",
         subtitle: "An application supported by NSW Health."
      }
   }

}
</script>

<style lang="less" scoped>
@import '../assets/colors.less';

.banner {
   background-image: linear-gradient(fade(@primary-color,10%),fade(@primary-color,30%)),url(../../static/pregnant-750w-bw.jpeg);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover, cover;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   flex-direction: column;
}

h1, h3 {
   padding: 5%;
   width: 80%;
   color: @grey-light;
   background-color: fade(@primary-color-light, 90%);
}

h1 {
   font-size: 4em;
}

h3 {
   font-size: 2em;
}


</style>
