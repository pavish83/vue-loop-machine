<template>
  <div class="pad-wrap">
      <div v-for="(audio,index) in audioFiles" :key="index">
          <PadItem :audio-item="audio"></PadItem>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import PadItem from '@/components/PadItem';

export default {
  data() {
    return {

    };
  },
  components: {
      PadItem
  },
  computed: {
    ...mapState(['audioFiles']),
  }
};
</script>

<style>
.pad-wrap {
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
}

.drum-pad {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 1px solid grey;
  background-color: lightgray;
  cursor: pointer;
}

.play {
  background-color: green;
}

.off {
  background-color: grey;
}
</style>