<template>
  <div id="app">
    <transition name="load" mode="out-in" appear>
      <main-component/>
    </transition>
  </div>
</template>

<script>
import '@/assets/css/app.css';
import MainComponent from './components/MainComponent';

export default {
  name: 'App',
  components: {
    MainComponent,
  },
};
</script>

<style lang="scss">
@import './../node_modules/vue-select/src/scss/vue-select.scss';

html, body {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
