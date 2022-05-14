import { createStore } from 'vuex'

export default createStore({
  state: {
    loopSwitchOn: false,
    audioFiles: [
      {
        label: "clap",
        on: false,
        cue: false,
        key: "1",
        file: require("../assets/sound_1.mp3"),
      },
      {
        label: "bass",
        on: false,
        cue: false,
        key: "2",
        file: require("../assets/sound_2.mp3"),
      },
      {
        label: "pickcut",
        on: false,
        cue: false,
        key: "3",
        file: require("../assets/sound_3.mp3"),
      },
      {
        label: "latint",
        on: false,
        cue: false,
        key: "4",
        file: require("../assets/sound_4.mp3"),
      },
      {
        label: "holdme",
        on: false,
        cue: false,
        key: "5",
        file: require("../assets/sound_5.mp3"),
      },
      {
        label: "zulu",
        on: false,
        cue: false,
        key: "6",
        file: require("../assets/sound_6.mp3"),
      },
      {
        label: "lovefunk",
        on: false,
        cue: false,
        key: "7",
        file: require("../assets/sound_7.mp3"),
      },
      {
        label: "chill",
        play: false,
        key: "8",
        file: require("../assets/sound_8.mp3"),
      },
      {
        label: "groove",
        on: false,
        cue: false,
        key: "9",
        file: require("../assets/sound_9.mp3"),
      },
    ],
  },
  getters: {
  },
  mutations: {
    TOGGLE_LOOP_SWITCH(state) {
      state.loopSwitchOn = !state.loopSwitchOn;
    },
    TOGGLE_PAD_ON(state, payload) {
      state.audioFiles.forEach(pad => {
        if(pad.key === payload) {
          pad.on = !pad.on;
        }
      })
    },
    TOGGLE_PAD_CUE(state, payload) {
      state.audioFiles.forEach(pad => {
        if(pad.key === payload) {
          pad.cue = !pad.cue;
        }
      })
    },
  },
  actions: {
  },
  modules: {
  }
})
