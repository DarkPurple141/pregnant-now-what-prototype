import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: {
            authenticated: false
        },

        profile: {
           conception: new Date(2018,1,1),
           due: new Date(2018,9,1) // Date should be + 280
        }
     },

     getters: {
       isLoggedIn: ({ loggedIn }) => {
          return loggedIn.authenticated
       },

       conception: ({ profile }) => {
          return profile.conception
       },

       due: ({ profile }) => {
          return profile.due
       }
     },

     mutations: {
        login: ({ loggedIn }) => {
           loggedIn.authenticated = true
        }
     }
})
