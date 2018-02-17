<template lang="html">
   <footer>
     <nav>
        <ul class="nav-buttons">
           <li class="nav-button"
           @click="$router.push({ name: button.name, query: { d: Date.now() } })"
           :class="{ 'nav-button-active':  activeRoute(button.name)}"
           v-for="button in buttons">
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
         return name == this.$route.name
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
   height: 60px;
   border-top: 1px solid @border;
}

.nav-button-container {
   line-height: 1;
}

.nav-button {
   color: @icons;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 25%;
}

.nav-button:hover, .nav-button:focus {
   background-color: @primary-color-light;
   color: @grey-light;
}

.nav-button-active {
   background-color: @primary-color-light;
   color: @grey-light;
}

footer {
   width: 100%;
   background-color: @grey;//@secondary-color-light;//;@primary-color-light;
   position: fixed;
   bottom: 0;
   height: 60px;
}
</style>
