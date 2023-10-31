<template>
    <div class="cream-container">
      <div class="header">
        <h2>All Cream</h2>
        <p>
          <button @click="logout">Logout</button>
          <button @click="navigateTo('/cream/create/')">Create cream</button>
        </p>
      </div>
      <table>
        <colgroup>
          <col style="width: 30.33%">
          <col style="width: 48.33%">
          <col style="width: 23.33%">
        </colgroup>
        <thead>
          <tr>
            <th class="action-header">ชื่อสินค้า</th>
            <th class="action-header">แบรนด์</th>
            <th class="action-header">ดำเนินการ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cream in creams" :key="cream.id">
            <td>{{ cream.name }}</td>
            <td>{{ cream.brand }}</td>
            <td class="action-cell">
              <button @click="navigateTo(`/cream/${cream.id}`)" class="view-button">ดูข้อมูลสินค้า</button>
              <button @click="navigateTo(`/cream/edit/${cream.id}`)" class="edit-button">แก้ไขข้อมูล</button>
              <button @click="deleteCream(cream)" class="delete-button">ลบข้อมูล</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
    
    <script>
    import CreamService from '@/services/CreamService';
    
    export default {
      data() {
        return {
          creams: [],
        };
      },
      async created() {
        await this.refreshData();
      },
      methods: {
        async logout() {
          this.$store.dispatch('setToken', null);
          this.$store.dispatch('setUser', null);
          this.$router.push({ name: 'login' });
        },
        navigateTo(route) {
          this.$router.push(route);
        },
        async deleteCream(cream) {
          const result = confirm('Want to delete?');
          if (result) {
            try {
              await CreamService.delete(cream);
              await this.refreshData();
            } catch (error) {
              console.error(error);
            }
          }
        },
        async refreshData() {
          this.creams = (await CreamService.index()).data;
        },
      },
    };
    </script>
    
    <style scoped>
    /* Minimalistic styles for the component */
  
    .cream-container {
      max-width: 100%;
      margin: 0;
      padding: 20px;
      font-family: 'Arial', sans-serif;
    }
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #564335; /* SaddleBrown color */
      padding: 10px;
      color: #f7f3e7;
    }
  
    h2 {
      margin: 0;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
  
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
  
    th {
      background-color: #998570;
      color: #f7f3e7;
    }
  
    .action-header, .action-cell {
      text-align: center;
    }
  
    button {
      padding: 5px 10px;
      cursor: pointer;
      border: none;
      border-radius: 3px;
    }
  
    .view-button {
      background-color: #4CAF50; /* Green color */
      color: white;
    }
  
    .edit-button {
      background-color: #FFD700; /* Yellow color */
      color: #333;
    }
  
    .delete-button {
      background-color: #FF6347; /* Red color */
      color: white;
    }
  
    th.action-header,
    td.action-cell {
      text-align: center;
    }
    /* Add more styles as needed */
  
  </style> 