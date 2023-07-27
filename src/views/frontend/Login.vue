<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card px-3 py-3">
            <div class="card-body">
                <h4 class="card-title text-center mb-5">เข้าสู่ระบบ</h4>
                <form @submit.prevent="handleSubmit">
                    <div class="form-floating mb-3">
                        <input 
                            autofocus
                            v-model="formData.email" 
                            type="text" 
                            :class="{'is-invalid': v$.email.$errors.length}" 
                            class="form-control" 
                            id="email" 
                            placeholder="Email">
                        <label for="email">Email</label>
                        <div v-for="error of v$.email.$errors" :key="error.$uid">
                            <div class="text-danger my-2">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input 
                            v-model="formData.password" 
                            type="password" 
                            :class="{'is-invalid': v$.password.$errors.length}"
                            class="form-control" 
                            id="password" 
                            placeholder="Password">
                        <label for="password">Password</label>
                        <div v-for="error of v$.password.$errors" :key="error.$uid">
                            <div class="text-danger my-2">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary mt-2" :disabled="loading">
                            {{  loading ? 'กำลังเข้าสู่ระบบ...' : 'Login'  }}
                        </button>
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
    import { useVuelidate } from '@vuelidate/core'
    import { required, email, minLength, helpers } from '@vuelidate/validators'
    import Swal from 'sweetalert2'

    // Import AuthService
    import http from '../../services/AuthService'

    // สร้างตัวแปร loading เพื่อใช้ในการแสดง Loading
    const loading = ref(false)

    // กำหนดค่าเริ่มต้น
    const formData = ref({
        email: '',
        password: ''
    })

    // กำหนดเงื่อนไข
    const rules = {
        email: { 
            required: helpers.withMessage('กรุณากรอกอีเมล์', required),
            email: helpers.withMessage('กรุณากรอกอีเมล์ให้ถูกต้อง', email)
        },
        password: { 
            required: helpers.withMessage('กรุณากรอกรหัสผ่าน', required),
            minLength: helpers.withMessage('กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร', minLength(6))
        }
    }

    // กำหนดค่าเริ่มต้นให้กับ Vuelidate
    const v$ = useVuelidate(rules, formData)

    const handleSubmit = () => {
        
        v$.value.$touch()

        // ตรวจสอบข้อมูลถูกต้อง
        if (!v$.value.$error) {

            // เปิด Loading
            loading.value = true
            
            // เรียกใช้งาน AuthService API
            http.post('auth/login', 
            {
                "email": formData.value.email,
                "password": formData.value.password
            }).then(response => {
                
                // ปิด Loading
                loading.value = false

                // ถ้าเข้าสู่ระบบสำเร็จ
                if(response.data.status === 'ok'){

                    let timerInterval = 0
                    Swal.fire({
                        title: 'เข้าสู่ระบบสำเร็จ',
                        icon: 'success',
                        html: 'กำลังเข้าสู่หน้า dashboard ใน <b></b> วินาที.',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            // ส่งไปหน้า dashboard
                             // บันทึกข้อมูลลง LocalStorage
                            localStorage.setItem('user', JSON.stringify(response.data.user))
                            localStorage.setItem('token', response.data.token)
                            
                            // ส่งไปหน้า Profile
                            window.location.href = '/backend/dashboard'
                        }
                    })
                   
                } else {
                    loading.value = false
                    Swal.fire(
                        'เข้าสู่ระบบไม่สำเร็จ',
                        'กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
                        'error'
                    )
                }

            }).catch(error => {
                loading.value = false
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