<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul v-for="item in example1" :key="item.id">
      <li><a href="">{{item.name}}</a></li>
      
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  computed:{
    example1(){
      return this.$store.getters['ex1/friendsGetters']
    }
  }
}
</script>
