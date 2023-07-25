<template>
    <h1>User Prfile</h1>
    <h2>Firstname: {{ user.firstName }}</h2>
    <h2>Lastname: {{ user.lastName }}</h2>
    <h2>Username: {{ user.username }}</h2>
    <h2>Email: {{ user.email }}</h2>
    <button @click="logout" class="btn btn-danger">Logout</button>
</template>

<script setup lang="ts">
    // Read user data from LocalStorage
    const user = JSON.parse(localStorage.getItem('user'))

    // logout
    const logout = () => {
        // ลบข้อมูลออกจาก LocalStorage
        localStorage.removeItem('user')
        // ส่งไปหน้า Login
        window.location.href = '/login'
    }
</script>