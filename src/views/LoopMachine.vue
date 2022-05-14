<template>
  <div class="loop-machine">
    <LoopSwitch></LoopSwitch>
    <PadComponent></PadComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import PadComponent from '@/components/PadComponent.vue'
import LoopSwitch from '@/components/LoopSwitch.vue'
//import {mapMutations, mapState} from 'vuex';

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
    //...mapMutations(['TOGGLE_INVOICE']),
  },
  computed: {
    //...mapState(['invoiceData']),
  }
};
</script>

<style lang="scss" scoped>
  .loop-machine {
    height: 100%;
    padding: 0;
    margin: 30% auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>