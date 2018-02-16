<template lang="html">
   <main class="content-area">
      <section class="topic-header">
         {{ $route.name }}
      </section>
      <section class="topic-content">
         <Article v-for="(post, index) in posts" :key="index" :content="post"/>
      </section>
   </main>
</template>

<script>
import Article from '@/components/Article'

export default {
   components: {
      Article
   },

   props: {
      article: String
   },

   data() {
      return {
         posts: []
      }
   },

   beforeMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(posts => posts.splice(0,10))
         .then(posts => posts.forEach(post => {
            this.posts.push({
               title: post.title,
               content: post.body
            })
         }))
   }
}
</script>

<style lang="less" scoped>

.content-area {
   width: 95%;
   margin: 0 auto;
}
.topic-header {

}
</style>
