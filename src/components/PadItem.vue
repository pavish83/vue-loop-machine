<template>
    <div>
        <div class="drum-pad" :class="{'play': audioItem.on, 'off': !audioItem.on}" @click="handleClick(audioItem.key)">
            <div class="audio-label">{{audioItem.label}}</div>
            <audio loop :id="audioItem.key" :ref="`player-${audioItem.key}`" :src="audioItem.file"></audio>
            <div>loop: {{loop}} s</div>
            <div class="bar" v-if="showProgress">
                <div class="in"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name: 'pad-item',
    props: ['audioItem'],
    data () {
        return {
            active: 0,
            showProgress: false
        }
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
    unmounted () {
        this.stopTimer();
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
                this.showProgress = false;
                this.stop();
                this.stopTimer();
            } else {
                this.startTimer();
                this.showProgress = true;
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
        align-items: center;
        margin: 5px;
        border: 1px solid #808080;
        background-color: #808080;
        cursor: pointer;
        border-radius: 10%;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
    }

    .audio-label {
        padding: 15px 0;
    }

    .play {
        background-color: #90EE90;
        color: #2c3e50;
    }

    .off {
        background-color: #808080;
    }
    .bar {
        border: 1px solid #666;
        height: 5px;
        width: 70%;
        margin-top: 15px;
        .in {
            animation: fill 8s infinite;
            animation-timing-function: linear;
            height: 100%;
            background-color: #0000FF;
        }
    }

    @keyframes fill {
        0% {
            width: 0%;
        }
        25% {
            width: 25%;
        }
        50% {
            width: 50%;
        }
        75% {
            width: 75%;
        }
        100% {
            width: 100%;
        }
    }
</style>