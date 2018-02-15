<template lang="html">
   <transition name="component-fade" mode="out-in">
      <section v-if="!toggle.state" :key="'Main'">
         <article class="card-article card">
            <h2 class="card-article-header">Before my appointment</h2>
            <sub-card :toggle="toggleTarget" v-for="item in card.content.need.words" :key="item.header" :item="item"/>
         </article>
         <article class="card-article card">
            <h2 class="card-article-header">What to expect at my appointment</h2>
            <sub-card :toggle="toggleTarget" v-for="item in card.content.medico.words" :key="item.header" :item="item"/>
         </article>
         <article class="card-article card">
            <h2 class="card-article-header">After my appointment</h2>
            <sub-card :toggle="toggleTarget" v-for="item in card.content.todo.words" :key="item.header" :item="item"/>
         </article>
      </section>
      <section v-else :key="'More'">
         <article class="card-article card">
            <h2 class="card-article-header">{{ toggle.target.header }}</h2>
            <p>{{toggle.target.description}}</p>
            <circle-icon @click.native="toggleTarget()">
               <i class="material-icons icon-size">replay</i>
            </circle-icon>
         </article>
      </section>
   </transition>
</template>

<script>
import SubCard from '@/components/SubCard'
import CircleIcon from '@/components/CircleIcon'

export default {
   props: {
      card: Object
   },

   data() {
      return {
         toggle: {
            state: false,
            target: {
               header: "",
               description: ""
            }
         }
      }
   },

   components: {
      SubCard,
      CircleIcon
   },

   methods: {
      toggleTarget(object) {
         if (object) {
            this.toggle.target.header      = object.header
            this.toggle.target.description = object.description
         }

         this.toggle.state = !this.toggle.state
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors.less';
@import '../assets/transitions.less';
@import '../assets/icon.less';

.card {
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-direction: column;
}

.card-article {
   padding: 20px;
   border-top: 1px solid @border;
   min-height: 50vh;
   margin: auto;
}

.card-article-content {
   margin: 10px 0px;
   padding: 10px 0px;
   width: 80%;
   border-bottom: 1px solid @border;
}

.card-article-content:last-child {
   border-bottom: none;
}

.card-article-header {
   margin: 10px 0px;
   border-bottom: 3px solid @primary-color-light;
}


article:nth-child(even) {
   background-color: @grey-light;
}


</style>
