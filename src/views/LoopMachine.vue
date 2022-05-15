<template>
  <div class="loop-machine">
    <div class="app-header">LOOP MACHINE</div>
    <LoopSwitch></LoopSwitch>
    <PadList></PadList>
  </div>
</template>

<script>

import PadList from '@/components/PadList.vue'
import LoopSwitch from '@/components/LoopSwitch.vue'

export default {
  name: "LoopMachine",
  data() {
    return {
      
    }
  },
  components: {
    PadList,
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
    margin: 10% 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #D3D3D3;
    box-shadow: 5px 5px 8px 3px #808080;
    @media screen and (max-width: 700px) {
      margin: 0;
    }
  }
  
</style>