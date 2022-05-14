<template>
    <div>
        <div class="drum-pad" :class="{'play': audioItem.on, 'off': !audioItem.on}" @click="handleClick(audioItem.key)">
            <div>{{audioItem.label}}</div>
            <audio loop :id="audioItem.key" :ref="`player-${audioItem.key}`" :src="audioItem.file"></audio>
            <div>loop: {{loop}} s</div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    props: ['audioItem'],
    data () {
        return {
            active: 0,
        }
    },
    unmounted () {
        this.stopTimer();
    },
    methods: {
        ...mapMutations(['TOGGLE_PAD_CUE', 'TOGGLE_PAD_ON']),
        handleClick() {
            if(this.active > 0) {
                this.TOGGLE_PAD_CUE(this.audioItem.key);
            } 
            this.TOGGLE_PAD_ON(this.audioItem.key);
            if(!this.audioItem.on) {
                this.stop();
            }
        },
    
        startTimer () {
            if (this.timerId) {
                return
            }
            
            this.timerId = setInterval(() => {
                this.active = (this.active + 1) % 8
            }, 1000)    
        },
        stopTimer () {
            clearInterval(this.timerId)
            this.timerId = null
            this.active = 0
        },
        play() {
            let player = this.$refs[`player-${this.audioItem.key}`];
            player.currentTime = 0;
            player.play();
        },
        stop() {
            let player = this.$refs[`player-${this.audioItem.key}`];
            player.currentTime = 0;
            player.pause();
        },
    },
    computed: {
        ...mapState(['audioFiles', 'loopSwitchOn']),
        loop() {
            return this.active;
        }
    },
    watch: {
        loop: {
            handler() {
                if (this.loopSwitchOn && this.active === 0 && this.audioItem.on) {
                    this.play();
                }
            },
            immediate: true
        },
        loopSwitchOn() {
            if(!this.loopSwitchOn) {
                this.stop();
                this.stopTimer();
            } else {
                this.startTimer();
                if(this.audioItem.on) {
                    this.play();
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .drum-pad {
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin: 5px;
        border: 1px solid grey;
        background-color: grey;
        cursor: pointer;
        border-radius: 10%;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
    }

    .play {
        background-color: #90EE90;
        color: #2c3e50;
    }

    .off {
        background-color: grey;
    }
</style>