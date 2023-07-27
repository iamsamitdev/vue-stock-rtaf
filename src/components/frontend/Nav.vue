<template>
    <!-- Create Navbar with bootstrap 5 -->
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
            <router-link class="navbar-brand text-white" to="/">VUE STOCK</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-white"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/">หน้าหลัก</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">เกี่ยวกับเรา</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">ผลงาน</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">บริการ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">ติดต่อเรา</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/register">สมัครสมาชิก</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/login">เข้าสู่ระบบ</router-link>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-warning" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav> 
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>