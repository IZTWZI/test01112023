
<template>
    <div>
        <div class="header">
            <h2>Details of the cream</h2>
        </div>
        <div class="details-container">
            <div class="details">
                <h1>Details</h1>
                <p>ชื่อสินค้า: {{ cream.name }}</p>
                <p>แบรนด์: {{ cream.brand }}</p>
                <p>วิธีใช้: {{ cream.usage }}</p>
                <p>คำเตือน: {{ cream.warning }}</p>
                <p>วันที่ผลิต: {{ cream.manufactureDate }}</p>
                <p>วันที่หมดอายุ: {{ cream.expiryDate }}</p>
                <p>ส่วนประกอบ: {{ cream.components }}</p>
                <p><button v-on:click="navigateTo('/creams/')">back</button></p>
            </div>
        </div>
    </div>
</template>

<script>
import CreamService from '@/services/CreamService';

export default {
        data () {
            return {
                cream: null
            }
        },
        async created () {
            try {
                let creamId = this.$route.params.creamId
                this.cream = (await CreamService.show(creamId)).data
            }catch (error) {
                console.log (error)
            }
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            },
        }

    }
</script>

<style scoped>
    div {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f8f8f8;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .header {
        width: 100%;
        background-color: #564335;
        padding: 10px;
        text-align: center;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        margin-bottom: 20px;
    }

    .header h2 {
        margin: 0;
        color: #fff;
    }

    .details-container {
        overflow: hidden;
    }

    .details {
        padding: 20px;
    }

    h1 {
        font-size: 24px;
        color: #333;
    }

    p {
        margin: 10px 0;
        font-size: 16px;
        color: #555;
    }

    button {
        padding: 10px;
        background-color: #987861;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #7c563c;
    }
</style>