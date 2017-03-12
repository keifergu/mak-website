<template>
  <mu-appbar title="Title" class="app-bar">
    <mu-icon-button icon='menu' slot="left"/>
    <mu-icon-button icon='expand_more' slot="right"/>
  </mu-appbar>
</template>

<script>
  export default {
    name: 'app-bar'

  }
</script>

<style scoped>
  .app-bar {
    text-align: center;
  }
</style>
