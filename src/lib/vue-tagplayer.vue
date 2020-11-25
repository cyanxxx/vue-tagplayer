<template>
    <div ref="tagplayer"></div>
</template>

<script>
import TagPlayer from '@/assets/tagplayer/TagPlayer.min'
const events = [
    "abort", "canplay", "canplaythrough",
    "durationchange", "emptied", "ended",
    "error", "loadeddata", "loadedmetadata",
    "loadstart", "mozaudioavailable", "pause",
    "play", "playing", "progress", "ratechange",
    "seeked", "seeking", "stalled", "suspend",
    "timeupdate", "volumechange", "waiting",
    "screenshot", "thumbnails_show", "thumbnails_hide",
    "notice_show", "notice_hide", "quality_start", "quality_end",
    "destroy", "resize", "fullscreen", "fullscreen_cancel",
    "subtitle_show", "subtitle_hide", "subtitle_change",
    "add_tags"
]
export default {
    name: 'vue-tagplayer',
    props: {
        options: Object,
        initTagPlayer: Function
    },
    data() {
        return {
             tp: null
        }
    },
    mounted() {
        const tp = this.tp = new TagPlayer({
            ...this.options,
            container: this.$refs.tagplayer
        })
        this.initTagPlayer(tp)
        this.registerEvent(tp)
    },
    methods: {
        registerEvent(player) {
            events.forEach(event => {
                player.on(event, (...args) => this.$emit(event, ...args)) 
            }) 
        }
    }
   
}
</script>

<style>

</style>