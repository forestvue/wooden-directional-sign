<template>
  <div>
    <h1>Contact</h1>
    <p>
        Here is my email to contact!
        <ul>
            <li>Email : {{email}}</li>
        </ul>
    </p>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
      return {
          email : "sunsmile01023@gmail.com"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
