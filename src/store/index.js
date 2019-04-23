import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://66.media.tumblr.com/d6ae4ab9c011517614fa97d69c36ac00/tumblr_pobp02mM8j1y5lwrqo1_500.gif', id: '1', title: 'January' },
      { imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/949592555970255733/3AA3F8BE356E4BFE6D6A182FB5FCAFEB7D051FB8/', id: '2', title: 'Feburary' },
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIEbH-baNgJZFYY9letkHIyG9udeXHiFa2Hqm69Ujz7NwHmb5wQ', id: '3', title: 'March' },
      { imageUrl: 'https://cdn1.wakanim.tv/movies-pictures/8de0ed8e-99c9-427b-be53-ee6cc20e1b90.jpg', id: '4', title: 'April' },
      { imageUrl: 'https://i.ytimg.com/vi/HtpmMKZ4ACU/maxresdefault.jpg', id: '5', title: 'May' },
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGRCUiXBhbgBilwQDA7AcShAiyXoc19rW01l6B5fTmC6QxnTO', id: '6', title: 'June' }
    ],
    user: {
      id: 'abacadaba',
      registerMeetup: ['aaabbbccc']
    }
  },
  mutations: {
    createWork (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createWork ({ commit }, payload) {
      const work = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date
      }
      // Reach out to firebase and store it
      commit('createWork', work)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
