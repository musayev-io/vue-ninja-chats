<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red"> {{ feedback }}</p>
          <button class="btn teal">Enter chat</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push( {name: 'Chat', params: { name: this.name }} )
      } else {
        this.feedback = "You must provide a name to join"
      }
    }
  }
}
</script>


<style></style>
