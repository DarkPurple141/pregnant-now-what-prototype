<template lang="html">
   <section
      class="card-article-content card">
      <h3>{{ item.header }}</h3>
      <p>{{ ellipsise(item.description) }}</p>
      <div @click="toggle(item)" class="icon-container">
         <i class="material-icons icon">keyboard_arrow_right</i>
      </div>
   </section>
</template>

<script>
import { ellipsise } from '../helpers.js'

export default {
   props: {
      item: Object,
      toggle: Function
   },

   methods: {
      ellipsise
   }
}
</script>

<style lang="less" scoped>
@import '../assets/icon.less';

section {
   position: relative;
}

h3 {
   margin-bottom: 10px;
}

.icon-container {
   right: -60px;
   top: 40%;
}

</style>
