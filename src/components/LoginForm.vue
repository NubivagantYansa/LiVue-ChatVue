<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{ error }}</div>
      <button>Login</button>
</form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
export default {
    setup(props, context) {
        //refs
        const email= ref("")
        const password = ref("")

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login( email.value, password.value)
            if (!error.value) {
                context.emit("login")
            }
        }
        return {email, password, handleSubmit, error}
    }

}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
</style>