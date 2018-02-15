<template>
  <main class="main">
    <app-header
      :period="activeCard.period"
      :next="nextCard"/>
    <transition name="component-fade">
       <card :card="activeCard" :key="active"/>
    </transition>
    <!--  <div>HELLO</div>  -->
  </main>
</template>

<script>
import Card from '@/components/Card'
import AppHeader from '@/components/AppHeader'

export default {
  name: 'hello',

  components: {
    AppHeader,
    Card
  },

  data () {
    return {
      active: 0,
      cards: [
         {
            period: "5-6 Weeks",
            content: {
               need: {
                  words: [
                     {
                        header: "Visit GP",
                        description: "Before you're able to formally join the hospital's antenatal program you'll need to confirm you are pregnant with a GP."
                     }
                  ]
               },
               medico: {
                  words: [
                     {
                        header: "Pregnancy blood test",
                        description: "Your doctor can give you a blood pregnancy test as early as 11–14 days after ovulation. To perform a blood pregnancy test, the doctor draws blood from a vein in your arm. This blood is sent to a laboratory for testing. The results of most blood pregnancy tests take at least a couple of days. The laboratory then advises the doctor of the result."
                     },
                     {
                        header: "Pregnancy urine test (hCG)",
                        description: "A human chorionic gonadotropin (hCG) urine test is a pregnancy test. A pregnant woman’s placenta produces hCG, also called the pregnancy hormone. If you’re pregnant, the test can usually detect this hormone in your urine about 10 days after your first missed period. This is when the fertilized egg attaches to the uterine wall."
                     },
                     {
                        header: "Discuss models of care",
                        description: "Antenatal care is the care you receive from healthcare professionals during your pregnancy. This care can be provided by a team that can include a doctor, a midwife, and usually with a doctor who specialises in pregnancy and birth (an obstetrician)."
                     }
                  ]
               },
               todo: {
                  words: [
                     {
                        header: "Arrange follow up care with GP",
                        description: "One option is Antenatal Share Care with your GP. This means that your GP and the midwives and doctors at the hospital (Gosford or Wyong) work together to care for you during your pregnancy. Your GP provides most of your antenatal care, and refers you to the hospital if you experience complications."
                     },
                     {
                        header: "Consider the models of care",
                        description: "There is no right answer here, this should be your own choice, and the one you're most comfortable with."
                     }
                  ]
               }
            }
         },
         {
            period: "6-9 Weeks",
            content: {
               need: {
                  words: [
                     {
                        header: "Visit GP",
                        description: "Before you're able to "
                     }
                  ]
               },
               medico: {
                  words: [
                     {
                        header: "Pregnancy urine test",
                        description: "Before you're able to "
                     },
                     {
                        header: "Pregnancy blood test (hCG)",
                        description: "Before you're able to "
                     },
                     {
                        header: "Discuss models of care",
                        description: "Before you're able to "
                     }
                  ]
               },
               todo: {
                  words: [
                     {
                        header: "Arrange follow care with GP",
                        description: "Before you're able to "
                     },
                     {
                        header: "Consider models of care",
                        description: "There is no right answer here, this should be your own choice, and the one you're most comfortable with."
                     }
                  ]
               }
            }
         }
      ]
    }
  },

  methods: {
      nextCard() {
         if (this.active == this.cards.length -1) {
            return;
         }
         this.active = this.active + 1
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
