<template>
  <div id="app">
    111
    <lx-button  type="primary" circle plain icon="search" @click="test"></lx-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  methods: {
    test (e) {
      console.log('test', e)
    }
  }
}
</script>

<style lang="scss"></style>
