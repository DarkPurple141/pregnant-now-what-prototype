<template>
  <main class="main">
    <main-header
      :period="activeCard.period"
      :next="nextCard"
      :prev="prevCard"/>
      <transition name='component-fade' :key="active">
         <card :card="activeCard" :key="active"/>
      </transition>
  </main>

</template>

<script>
import Card from '@/components/Card'
import MainHeader from '@/components/MainHeader'
import { cards } from '@/content/cards'

export default {
  name: 'hello',

  components: {
    MainHeader,
    Card
  },

  data () {
    return {
      active: 0,
      cards: cards
    }
  },

  methods: {
      nextCard() {
         if (this.active == this.cards.length -1) {
            return;
         }
         this.active = this.active + 1
      },
      prevCard() {
         if (this.active <= 0) {
            return;
         }
         this.active = this.active - 1
      }
  },
  computed: {
     activeCard() {
        return this.cards[this.active]
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/transitions.less';


</style>
