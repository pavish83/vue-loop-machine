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
  name: 'pad-list',
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
</style>