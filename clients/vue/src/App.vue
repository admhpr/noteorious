<template>
  <div id="app">
    <Navbar></Navbar>
    <component :is="layout">
      <template v-slot:content>
        <router-view />
      </template>
    </component>
  </div>
</template>

<script>
import Navbar from "@elements/Navbar.vue";
const DEFAULT_LAYOUT = "default";
export default {
  data() {
    return {};
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || DEFAULT_LAYOUT}-layout`;
    }
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "@styles/global.scss";
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
