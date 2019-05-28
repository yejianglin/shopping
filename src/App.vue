<template>
  <div id="app">
    <keep-alive :include="$store.state.keepAlives">
         <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
	@import "assets/less/vantCss.less";

  body{
    margin: 0!important;
  }
</style>
