<template>
  <div id="app">
    <top-bar></top-bar>
    <el-container>
      <el-header>
        <h1>挑个电影看看吧</h1>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import topBar from "@/components/topBar"
export default {
  name: 'App',
  components: {
    topBar
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
