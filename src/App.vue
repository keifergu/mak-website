<template>
  <div id="app">
    <app-bar />
    <router-view></router-view>
  </div>
</template>

<script>

  import AppBar from './components/AppBar'
  export default {
    name: 'app',
    components: { AppBar }
  }

</script>

<style>
</style>
