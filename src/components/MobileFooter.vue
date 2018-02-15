<template lang="html">
   <footer>
     <nav>
        <ul class="nav-buttons">
           <li class="nav-button" :class="{ 'nav-button-active':  activeRoute(button.name)}" v-for="button in buttons">
             <div class="nav-button-container">
                <i class="material-icons">{{ button.icon }}</i>
             </div>
             <label>{{ button.name }}</label>
           </li>
        </ul>
     </nav>
   </footer>
</template>

<script>

export default {

   data() {
      return {
         buttons: [
            { icon: "update", name: "This Week"},
            { icon: "today", name: "Schedule"},
            { icon: "info", name: "Info"},
            { icon: "person", name: "Profile"}
         ]
      }
   },

   methods: {
      activeRoute(name) {
         return name == "This Week"
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors.less';

.nav-buttons {
   cursor: pointer;
   display: flex;
   flex-direction: row;
   width: 100%;
   height: 70px;
   border-top: 1px solid @border;
}

.nav-button {
   color: @grey-light;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 25%;
}
/*
.nav-button:nth-child(-n+3) {
   border-right: 0.5px solid white;
}
*/
.nav-button:hover, .nav-button:focus {
   background-color: @primary-color-light;
   color: @grey;
}

.nav-button-active {
   background-color: @primary-color-light;
   color: @grey;
}

footer {
   width: 100%;
   background-color: @primary-color;
   position: fixed;
   bottom: 0;
   height: 70px;
}
</style>
