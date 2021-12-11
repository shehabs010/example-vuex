<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul v-for="item in example1" :key="item.id">
      <li><router-link to="">{{item.name}}</router-link></li>
      
    </ul>
    <form>
      <p>
          <label for="email">Validation Email with action</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            @input="validEmail"
          >
          <label class="error-msg" v-if="!$store.state.validation.isValidEmail">Email is invalid</label>
        </p>
      <p>
          <label for="email">Validation Email with getter</label>
        <input
          id="email"
          v-model="email2"
          type="email"
          name="email"
          @change="validEmailByGetter"
        >
        <label class="error-msg" v-if="!validEmailByGetter">Email is invalid</label>
      </p>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data(){
    return{
      email:null,
      email2:null
    }
  },
  methods:{
    validEmail(){
      this.$store.dispatch('validation/validEmail',this.email);
    },
  },
  computed:{
    ...mapGetters({
      friendsGetters: 'ex1/friendsGetters',
      validEmailGetters: 'validation/validEmailGetter'
    },
    ),
    validEmailByGetter(){
      return this.email2 === null ? true : this.validEmailGetters(this.email2);
    },
    example1(){
      return this.friendsGetters;
    }
  }
}
</script>
<style scoped>
.error-msg{
  color: red;
}
</style>