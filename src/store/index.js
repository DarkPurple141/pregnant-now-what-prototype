import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: {
            authenticated: false
        }
     },

     getters: {
       isLoggedIn: ({loggedIn}) => {
          return loggedIn.authenticated
       }
     },

     mutations: {
        login: ({ loggedIn }) => {
           loggedIn.authenticated = true
        }
     }
})
