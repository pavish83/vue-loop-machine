<template>
  <div class="loop-machine">
    <div class="app-header">LOOP MACHINE</div>
    <LoopSwitch></LoopSwitch>
    <PadComponent></PadComponent>
  </div>
</template>

<script>

import PadComponent from '@/components/PadComponent.vue'
import LoopSwitch from '@/components/LoopSwitch.vue'

export default {
  name: "LoopMachine",
  data() {
    return {
      
    }
  },
  components: {
    PadComponent,
    LoopSwitch
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
  .app-header {
    margin-bottom: 28px;
    font-size: 20px;
    font-weight: bold;
  }
  .loop-machine {
    margin: 15% 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: lightgrey;
    box-shadow: 5px 5px 8px 3px grey;
    @media screen and (max-width: 700px) {
      margin: 0;
    }
  }
  
</style>