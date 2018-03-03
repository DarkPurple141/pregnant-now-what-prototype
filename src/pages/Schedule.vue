<template lang="html">
   <main>
      <section v-for="i in 10" :key="i">
         <article class="card-article card">
            <h2 class="card-article-header">{{month(i)}}</h2>
         </article>
      </section>
   </main>
</template>

<script>
import { monthToString } from '../helpers'

export default {
   methods: {
      monthToString,
      month(index) {
         return this.monthToString((index +
            this.$store.getters.conception.getMonth()) % 12 + 1)
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/cards.less';

.card-article {
   min-height: 30vh;
}

</style>
