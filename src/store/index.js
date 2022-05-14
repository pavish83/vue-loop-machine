import { createStore } from 'vuex'

export default createStore({
  state: {
    loopSwitchOn: false,
    audioFiles: [
      {
        label: "sound_1",
        on: false,
        cue: false,
        key: "1",
        file: require("../assets/sound_1.mp3"),
      },
      {
        label: "sound_2",
        on: false,
        cue: false,
        key: "2",
        file: require("../assets/sound_2.mp3"),
      },
      {
        label: "sound_3",
        on: false,
        cue: false,
        key: "3",
        file: require("../assets/sound_3.mp3"),
      },
      {
        label: "sound_4",
        on: false,
        cue: false,
        key: "4",
        file: require("../assets/sound_4.mp3"),
      },
      {
        label: "sound_5",
        on: false,
        cue: false,
        key: "5",
        file: require("../assets/sound_5.mp3"),
      },
      {
        label: "sound_6",
        on: false,
        cue: false,
        key: "6",
        file: require("../assets/sound_6.mp3"),
      },
      {
        label: "sound_7",
        on: false,
        cue: false,
        key: "7",
        file: require("../assets/sound_7.mp3"),
      },
      {
        label: "sound_8",
        play: false,
        key: "8",
        file: require("../assets/sound_8.mp3"),
      },
      {
        label: "sound_9",
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
