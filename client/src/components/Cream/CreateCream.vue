<template>
    <div>
        <h1 class="form-header">Create Cream</h1>
        <form v-on:submit.prevent="createCream" class="cream-form">
            <p>ชื่อสินค้า: <input type="text" v-model="cream.name"></p>
            <p>แบรนด์: <input type="text" v-model="cream.brand"></p>
            <p>วิธีใช้: <input type="text" v-model="cream.usage"></p>
            <p>ตำเตือน: <input type="text" v-model="cream.warning"></p>
            <p>วันที่ผลิต: <input type="time" v-model="cream.manufactureDate"></p>
            <p>วันที่หมดอายุ: <input type="time" v-model="cream.expiryDate"></p>
            <p>ส่วนประกอบ: <input type="text" v-model="cream.components"></p>
            <p class="button-container">
                <button type="submit" class="create-btn">Create cream</button>
                <button v-on:click="navigateTo('/creams/')" class="back-btn">Back</button>
            </p>
        </form>
    </div>
</template>

<script>
import CreamService from '../../services/CreamService';

export default {
    data() {
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
        async createCream() {
            try {
                await CreamService.post(this.cream)
                this.$router.push({
                    name: 'creams'
                })
            } catch (error) {
                console.log(error)
            }
        },
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
.form-header {
    text-align: center;
    color: #f8f8f8;
    background-color: #564335;
    padding: 15px 0;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cream-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 8px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-top: 5px;
}

.button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.create-btn {
    flex: 1;
    padding: 10px;
    background-color: #3498db;
    /* Blue color */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 5px;
}

.back-btn {
    flex: 1;
    padding: 10px;
    background-color: #998570;
    /* Brown color */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 5px;
    /* Adjust the margin between buttons */
}

.create-btn:hover,
.back-btn:hover {
    opacity: 0.9;
}</style>