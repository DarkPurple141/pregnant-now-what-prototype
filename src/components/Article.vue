<template lang="html">
   <section class="card card-article">
      <h2 class="card-article-header">{{ content.title }}</h2>
      <article class="card-article-content card">
         <p>{{ content.content }}</p>
      </article>
   </section>
</template>

<script>
export default {
   props: {
      content: Object
   }
}
</script>

<style lang="less" scoped>
@import '../assets/cards.less';
</style>
