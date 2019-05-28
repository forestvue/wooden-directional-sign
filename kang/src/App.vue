<template>
  <div id="app">
    <router-link to="/">메인</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/contact">contact</router-link>
    <router-link to="/user">user</router-link>

    <ul>
      <span v-for="user in users" :key="user.id">
        &nbsp;<router-link :to="'/user/'+user.id">{{user.id}}</router-link>
      </span>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      users: [
        {id: 1},
        {id: 2},
        {id: 3}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
