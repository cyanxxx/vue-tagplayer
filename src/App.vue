<template>
  <div id="app">
    <vue-tagplayer :options="options" :initTagPlayer="initTagPlayer" @timeupdate="handleChange" @add_tags="refreshHighlight"></vue-tagplayer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      options: {
        loop: false,
        video: {
          url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
        },
        sendTag: this.handleTag
      },
      tp: null
    }
  },
  methods: {
    handleTag() {
      return new Promise((res) => {
        res()
      })
    },
    refreshHighlight() {
      this.tp.setHighlight([{
        text: 1,
        time: 2
      }])
    },
    initTagPlayer(tp) {
      console.log(tp)
      this.tp = tp
    },
    handleChange() {
      console.log(this.tp.video.currentTime)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
