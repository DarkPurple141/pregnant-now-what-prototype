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
   },

   mounted() {
      setTimeout(() => {
         this.$store.commit('login')
         this.$router.push({ name: 'This Week'})
      }, 2000)
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors.less';

.banner {
   background-image: linear-gradient(
      fade(@primary-color-light,60%),
      fade(black,100%)),
      url(../../static/pregnant-750w-bw.jpeg);
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
   width: 80%;
   color: @grey-light;
}

h3 {
   padding: 10%;
   background-color: @primary-color;
}

h1 {
   padding: 5%;
   font-size: 4em;
}

h3 {
   font-size: 2em;
}


</style>
