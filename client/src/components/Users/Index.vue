<template>
  <div class="cream-container">
    <div class="header">
      <h2>All User</h2>
      <p>
        <button @click="logout">Logout</button>
        <button @click="navigateTo('/user/create/')">Create User</button>
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
          <th class="action-header">name</th>
          <th class="action-header">lastname </th>
          <th class="action-header">email </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.brand }}</td>
          <td class="action-cell">
            <button @click="navigateTo(`/user/${user.id}`)" class="view-button">ดูข้อมูล</button>
            <button @click="navigateTo(`/user/edit/${user.id}`)" class="edit-button">แก้ไขข้อมูล</button>
            <button @click="deleteUser(user)" class="delete-button">ลบข้อมูล</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
  import UsersService from '@/services/UsersService';
  
  export default {
    data() {
      return {
        users: [],
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
      async deleteUser(user) {
        const result = confirm('Want to delete?');
        if (result) {
          try {
            await UsersService.delete(user);
            await this.refreshData();
          } catch (error) {
            console.error(error);
          }
        }
      },
      async refreshData() {
        this.users = (await UsersService.index()).data;
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