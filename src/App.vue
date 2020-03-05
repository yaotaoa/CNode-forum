<template>
  <div id="app">
    <Header></Header>
    <router-view name="main"></router-view>
    <router-view name="sidder"></router-view>
  </div>
</template>
<script>
  import Header from './components/Header'
  export default {
    name: 'app',
    components: {
      Header
    },
  }
</script>
<style lang="less">
  html {
    background-color: #DDDDDD;
	}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
  }
  body,div,span,a,p,ul,li {
	  margin: 0;
	  padding: 0;
  }
</style>
