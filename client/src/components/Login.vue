<template>
   <div class="login-container">
        <form v-on:submit.prevent="onLogin">
            <h1>User Login</h1>
            <p>Username: <input type="text" v-model="email" /></p>
            <p>Password: <input type="password" v-model="password" /></p>
            <p><button type="submit">login</button></p>
            <button @click="navigateTo(`/user/create`)" class="view-button">createUser</button>
            <div class="error" v-if="error">{{error}}</div>
        </form>
    </div>
</template>
<script>
import AuthenService from '@/services/AuthenService'
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
        async onLogin() {
            try {
                const response = await AuthenService.login({
                    email: this.email,
                    password: this.password
                })
                console.log(response)
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)

                this.$router.push({
                    name: 'users'
                })

            } catch (error) {
                console.log(error)
                this.error = error.response.data.error
                this.email = ''
                this.password = ''
            }
        }
    }
}
</script>

<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  form {
    max-width: 300px;
    padding: 60px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #998570;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

.view-button{
  background-color: #e1d944;
}

  </style>

<style scoped>
 .error {
 color:red;
 }
</style>