<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card px-3 py-3">
            <div class="card-body">
                <h4 class="card-title text-center mb-5">เข้าสู่ระบบ</h4>
                <form @submit.prevent="handleSubmit">
                    <div class="form-floating mb-3">
                        <input v-model="formData.username" type="text" class="form-control" id="username" placeholder="Username">
                        <label for="username">Username</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input v-model="formData.password" type="password" class="form-control" id="password" placeholder="Password">
                        <label for="password">Password</label>
                    </div>
                    <div class="d-grid gap-2">
                        <input type="submit" class="btn btn-primary mt-2" value="Login">
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue'
    // import { useVuelidate } from '@vuelidate/core'
    // import { required, email, minLength } from '@vuelidate/validators'
    import Swal from 'sweetalert2'

    // Import AuthService
    import http from '../../services/AuthService'

    // Use vuelidate
    const formData = ref({
        username: '',
        password: ''
    })

    // const v$ = useVuelidate({
    //     formData: {
    //         email: { required, email },
    //         password: { required, minLength: minLength(6) }
    //     }
    // })

    const handleSubmit = () => {
        // ถ้ากรอกข้อมูลไม่ครบ
        if (formData.value.username === '' || formData.value.password === '') {
            // Sweetalert2
            Swal.fire('กรุณากรอกข้อมูลให้ครบ')
        } else {
            // ถ้ากรอกครบ
            // console.log(formData.value)
            // เรียกใช้งาน AuthService API
            http.post('login', 
            {
                "username": formData.value.username,
                "password": formData.value.password
            }).then(response => {
                // console.log(response.data)
                // ถ้าเข้าสู่ระบบสำเร็จ
                Swal.fire(
                    'เข้าสู่ระบบสำเร็จ',
                    'ยินดีต้อนรับเข้าสู่ระบบ',
                    'success'
                )
                // บันทึกข้อมูลลง LocalStorage
                localStorage.setItem('user', JSON.stringify(response.data))
                
                // ส่งไปหน้า Profile
                window.location.href = '/profile'

            }).catch(error => {
                console.log(error)
                Swal.fire(
                    'เข้าสู่ระบบไม่สำเร็จ',
                    'กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
                    'error'
                )
            })
        }
    }

</script>

<style scoped>

</style>