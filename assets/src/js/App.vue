<template>
  <div id="app">
    <global-header />
    <router-view>
    </router-view>
  </div> 
</template>

<script>
import Header from 'js/header'
import store from 'js/store'

console.log(store)
export default {
  name: 'app',
  data: () => {
    return {
      store: store
    }
  },
  components: {
    'global-header': Header
  },
  mounted () {
    console.log(this.$http)
    this.$http.get('/live/dota/熊猫').then(data => {
      console.log(data)
      store.state.videoStore['DOTA']['熊猫'] = data.body
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
