<template lang="html">
   <main>
   </main>
</template>

<script>
import Article from '@/components/Article'

export default {
   components: {
      Article
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

<style lang="less">
</style>
