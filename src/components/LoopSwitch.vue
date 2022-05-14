<template>
  <div>
      <div>
        <label for="loop-switch">{{loopSwitchOn ? 'On' : 'Of'}}</label>  
        <input id="loop-switch" type="checkbox" v-model="loopSwitchOn" @click="handleClick">    
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    methods: {
        ...mapMutations(['TOGGLE_LOOP_SWITCH']),
        handleClick() {
            this.TOGGLE_LOOP_SWITCH();
        },
    
      
    },
    computed: {
        ...mapState(['loopSwitchOn']),
    },
}
</script>

<style>

</style>