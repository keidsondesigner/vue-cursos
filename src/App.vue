<template>
  <div id="app">
    <HeaderComponent />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
  },
};

</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3, h4, h5, h6, p, a {
  text-align: start;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-exact-active {
  color: #4b8;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
