<template>
    <Navbar />
    <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-5 content">
                <router-view />
                <Footer />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Navbar from '../components/backend/Navbar.vue'
    import Sidebar from '../components/backend/Sidebar.vue'
    import Footer from '../components/backend/Footer.vue'
</script>

<style scoped>

</style>