<template>
    <nav class="navbar navbar-light p-3 fixed-top navbaradmin">
        <div class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
            <a class="navbar-brand text-white" href="#">Vue Stock</a>
            <button class="navbar-toggler d-md-none collapsed mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="col-12 col-md-4 col-lg-2">
            <input class="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search">
        </div>
        <div class="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
            <div class="mr-3 mt-1">
                <span></span>
            </div>
            <div class="dropdown">
                <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ user.firstname }} {{ user.lastname }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Messages</a></li>
                  <li><a class="dropdown-item" href="#logout" @click="logout">Sign out</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    // Read user data from LocalStorage
    const user = JSON.parse(localStorage.getItem('user') || "{}")

    // logout
    const logout = () => {
        // ลบข้อมูลออกจาก LocalStorage
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        // ส่งไปหน้า Login
        window.location.href = '/login'
    }
</script>

<style scoped>

</style>