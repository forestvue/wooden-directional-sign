<template>
  <div id="app">
    <div class="list-container">
      <ul>
        <li><router-link to="/">main</router-link></li>
        <li><router-link to="/about">about</router-link></li>
        <li><router-link to="/contact">contact</router-link></li>
        <li><router-link to="/user">user</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  padding: 0%;
  margin: 0%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.list-container ul {
  display: flex;
  flex-direction: column;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
