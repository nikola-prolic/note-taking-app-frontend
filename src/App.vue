<template>
  <div id="app">
    <NavigationBar />
    <router-view />
    <NoteList class="list"/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import NoteList from './components/NoteList.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    NoteList
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
}
.list {
  display: none;
}
</style>
