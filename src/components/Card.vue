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
      <section class="card-reverse card-article" v-else :key="'More'">
         <article class="card-article-content card-reverse-article">
            <h2 class="card-article-header">{{ toggle.target.header }}</h2>
            <p>{{toggle.target.description}}</p>
            <div @click="toggleTarget()" class="icon-container">
               <i class="material-icons icon">keyboard_arrow_left</i>
            </div>
         </article>
      </section>
   </transition>
</template>

<script>
import SubCard from '@/components/SubCard'

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
      SubCard
   },

   methods: {
      toggleTarget(object) {
         if (object) {
            this.toggle.target.header      = object.header
            this.toggle.target.description = object.description
         }

         this.toggle.state = !this.toggle.state
      }
   },

   watch: {
            '$route' (to, from) {
                //on route change re run: onCreated
                this.toggle.state = false
            }
        }
}
</script>

<style lang="less" scoped>
@import '../assets/colors.less';
@import '../assets/transitions.less';
@import '../assets/icon.less';
@import '../assets/cards.less';


.icon-container {
   left: 5%;
   top: 30%;
}

.card-reverse-article {
   margin: 0;
   padding: 0;
}


article:nth-child(even) {
   background-color: @grey-light;
}


</style>
