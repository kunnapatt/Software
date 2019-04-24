import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://66.media.tumblr.com/d6ae4ab9c011517614fa97d69c36ac00/tumblr_pobp02mM8j1y5lwrqo1_500.gif',
        id: '1',
        title: 'January',
        date: '2017-01-30' },
      { imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/949592555970255733/3AA3F8BE356E4BFE6D6A182FB5FCAFEB7D051FB8/',
        id: '2',
        title: 'Feburary',
        date: '2017-02-30' },
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIEbH-baNgJZFYY9letkHIyG9udeXHiFa2Hqm69Ujz7NwHmb5wQ',
        id: '3',
        title: 'March',
        date: '2017-03-30' },
      { imageUrl: 'https://cdn1.wakanim.tv/movies-pictures/8de0ed8e-99c9-427b-be53-ee6cc20e1b90.jpg',
        id: '4',
        title: 'April',
        date: '2017-04-30' },
      { imageUrl: 'https://i.ytimg.com/vi/HtpmMKZ4ACU/maxresdefault.jpg',
        id: '5',
        title: 'May',
        date: '2017-05-30' },
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGRCUiXBhbgBilwQDA7AcShAiyXoc19rW01l6B5fTmC6QxnTO',
        id: '6',
        title: 'June',
        date: '2017-06-30' }
    ],
    loadedWork: [
      { imageUrl: 'https://66.media.tumblr.com/d6ae4ab9c011517614fa97d69c36ac00/tumblr_pobp02mM8j1y5lwrqo1_500.gif',
        id: '11',
        title: 'January',
        date: '2017-01-30' },
      { imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/949592555970255733/3AA3F8BE356E4BFE6D6A182FB5FCAFEB7D051FB8/',
        id: '21',
        title: 'Feburary',
        date: '2017-02-30' },
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIEbH-baNgJZFYY9letkHIyG9udeXHiFa2Hqm69Ujz7NwHmb5wQ',
        id: '31',
        title: 'March',
        date: '2017-03-30' },
      { imageUrl: 'https://cdn1.wakanim.tv/movies-pictures/8de0ed8e-99c9-427b-be53-ee6cc20e1b90.jpg',
        id: '41',
        title: 'April',
        date: '2017-04-30' },
      { imageUrl: 'https://i.ytimg.com/vi/HtpmMKZ4ACU/maxresdefault.jpg',
        id: '51',
        title: 'May',
        date: '2017-05-30' },
      { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGRCUiXBhbgBilwQDA7AcShAiyXoc19rW01l6B5fTmC6QxnTO',
        id: '61',
        title: 'June',
        date: '2017-06-30' }
    ],
    user: {
      id: 'abacadaba',
      registeredMeetup: ['aaabbbccc']
    }
  },
  mutations: {

  },
  actions: {

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
    },
    loadedWork (state) {
      return state.loadedWork.sort((workA, workB) => {
        return workA.date > workB.date
      })
    },
    featuredWork (state, getters) {
      return getters.loadedWork.slice(0, 5)
    },
    loadeddetail (state) {
      return (workId) => {
        return state.loadedWork.find((work) => {
          return work.id === workId
        })
      }
    }
  }
})
