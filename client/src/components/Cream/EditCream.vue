<template>
    <div>
        <h1 class="edit-header">Edit cream</h1>
        <div class="edit-container">
            <form v-on:submit.prevent="editCream" class="form">
                <p>ชื่อสินค้า: <input type="text" v-model="cream.name"></p>
                <p>แบรนด์: <input type="text" v-model="cream.brand"></p>
                <p>วิธีใช้: <input type="text" v-model="cream.usage"></p>
                <p>ตำเตือน: <input type="text" v-model="cream.warning"></p>
                <p>วันที่ผลิต: <input type="time" v-model="cream.manufactureDate"></p>
                <p>วันที่หมดอายุ: <input type="time" v-model="cream.expiryDate"></p>
                <p>ส่วนประกอบ: <input type="text" v-model="cream.components"></p>
                <p>
                    <button type="submit" class="edit-btn">Edit cream</button>
                    <button v-on:click="navigateTo('/creams/')" class="back-btn">Back</button>
                </p>
            </form>
            <div class="user-details">
                <p>ชื่อสินค้า: {{ cream.name }}</p>
                <p>แบรนด์: {{ cream.brand }}</p>
                <p>วิธีใช้: {{ cream.usage }}</p>
                <p>คำเตือน: {{ cream.warning }}</p>
                <p>วันที่ผลิต: {{ cream.manufactureDate }}</p>
                <p>วันที่หมดอายุ: {{ cream.expiryDate }}</p>
                <p>ส่วนประกอบ: {{ cream.components }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import CreamService from '../../services/CreamService';

    export default {
        data () {
            return {
                cream: {
                    name: '',
                    brand: '',
                    usage: '',
                    warning: '',
                    manufactureDate: '',
                    expiryDate: '',
                    components: '',
                }
            }
        },
        methods: {
            async editCream () {
                try {
                    await CreamService.put(this.cream)
                    this.$router.push({
                        name: 'creams'
                    })
                }catch (error) {
                    console.log(error)
                }
            },
            navigateTo(route) {
            this.$router.push(route)
        }
        },
        async created () {
            try {
                let creamId = this.$route.params.creamId
                this.cream = (await CreamService.show(creamId)).data
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