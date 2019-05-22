<template>
  <div>
    <h1>User</h1>
    <div>
      <form @submit.prevent="submit">
        <input type="text" v-model="id">
        <button>send</button>
      </form>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: ''
        }
    },
  methods: {
    submit(e) {
      this.$router.push("/user/"+this.id);
      this.id = ""
    }
  }
};
</script>

<style>
</style>
