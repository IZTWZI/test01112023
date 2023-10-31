
<template>
    <div>
        <h1 class="edit-header">Edit User</h1>
        <div class="edit-container">
            <form v-on:submit.prevent="editUser" class="form">
                <p>name: <input type="text" v-model="user.name"></p>
            <p>lastname: <input type="text" v-model="user.lastname"></p>
            <p>email: <input type="text" v-model="user.email"></p>
            <p>password: <input type="text" v-model="user.password"></p>
                <p>
                    <button type="submit" class="edit-btn">Edit user</button>
                    <button v-on:click="navigateTo('/users/')" class="back-btn">Back</button>
                </p>
            </form>
            <div class="user-details">
                <p>name: {{ user.name }}</p>
            <p>lastname: {{ user.lastname }}</p>
            <p>email: {{ user.email }}</p>
            <p>password: {{ user.password }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import UsersService from '../../services/UsersService';

    export default {
        data () {
            return {
                user: {
                    name: '',
                    lastname: '',
                    email: '',
                    password: '',
                    status: 'active',
                }
            }
        },
        methods: {
            async editUser () {
                try {
                    await UsersService.put(this.user)
                    this.$router.push({
                        name: 'users'
                    })
                }catch (error) {
                    console.log(error)
                }
            }
        },
        async created () {
            try {
                let userId = this.$route.params.userId
                this.user = (await UsersService.show(userId)).data
            }catch (error) {
                console.log (error)
            }
        }
    }
</script>
<style scoped>
    .edit-header {
        width: 100%;
        background-color: #564335; /* Brown color */
        color: #f8f8f8;
        padding: 15px 20px;
        margin-bottom: 20px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .edit-container {
        display: flex;
        justify-content: space-between;
    }

    .form {
        flex: 1;
        max-width: 60%; /* Adjust the width as needed */
        padding: 20px;
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .user-details {
        flex: 1;
        max-width: 50%; /* Adjust the width as needed */
        padding: 20px;
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-left: -10px; /* Adjust the negative margin as needed */
    }
    .form {
        margin-right: 10px; /* Adjust the margin between the two boxes */
    }
    .form {
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }


    .form p {
        margin: 10px 0;
    }

    .form input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
    }

    .edit-btn {
        padding: 10px;
        background-color: #3498db;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-right: 10px;
    }

    .edit-btn:hover {
        background-color: #2980b9;
    }

    .back-btn {
        padding: 10px;
        background-color: #998570;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .back-btn:hover {
        background-color: #876e56;
    }

    .user-details {
        margin-top: 20px;
    }

    .user-details p {
        margin: 5px 0;
    }
</style>