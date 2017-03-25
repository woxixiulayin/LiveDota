<template>
  <div id="app">
    <router-view>
    </router-view>
  </div> 
</template>

<script>
import store from 'js/store'

console.log(store)
export default {
  name: 'app',
  data: () => {
    return {
      store: store
    }
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
