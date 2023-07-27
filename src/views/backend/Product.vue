<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="dashboard">Dashboard</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Product</li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-6">
            <h1 class="h2 mb-3">Products</h1>
        </div>
        <div class="col-md-6 text-end">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modalId" class="btn btn-success">+ Add product</a>
        </div>
    </div>

    <!-- Popup Add Product-->
    <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">Add new Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit="handleSubmit" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-floating mb-3">
                                    <input 
                                        v-model="formData.name"
                                        type="text" 
                                        class="form-control" 
                                        id="name" 
                                        placeholder="Name">
                                    <label for="name">Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea
                                        v-model="formData.description"
                                        class="form-control h-100" 
                                        id="description" 
                                        rows="3"
                                        placeholder="Description"></textarea>
                                    <label for="name">Description</label>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <input 
                                                v-model="formData.barcode"
                                                type="number" 
                                                class="form-control" 
                                                id="barcode" 
                                                placeholder="Barcode">
                                            <label for="barcode">Barcode</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <input 
                                                v-model="formData.price"
                                                type="number" 
                                                class="form-control" 
                                                id="price" 
                                                placeholder="Price">
                                            <label for="price">Price</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <input 
                                                v-model="formData.stock"
                                                type="number" 
                                                class="form-control" 
                                                id="stock" 
                                                placeholder="Stock">
                                            <label for="stock">Stock</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <input 
                                                v-model="formData.category_id"
                                                type="number" 
                                                class="form-control" 
                                                id="category_id"
                                                placeholder="Cateogry ID">
                                            <label for="category_id">Category ID</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <input 
                                                v-model="formData.user_id"
                                                type="number" 
                                                class="form-control" 
                                                id="user_id" 
                                                placeholder="User ID">
                                            <label for="user_id">User ID</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <input 
                                                v-model="formData.status_id"
                                                type="number" 
                                                class="form-control" 
                                                id="status_id" 
                                                placeholder="Status ID">
                                            <label for="status_id">Status ID</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-4">
                                <button 
                                    v-if="previewImage != 'https://via.placeholder.com/300x300'"
                                    @click="clearImage"
                                    type="button" 
                                    class="btn btn-sm btn-danger position-absolute top-right-icon">
                                    <i class="bi bi-x-circle"></i>
                                </button>
                                <img :src="previewImage" class="img-thumbnail">
                                <input type="file" @change="handleImageChange" accept="image/*" class="form-control my-3">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End Popup -->
    
    <div class="row">
        <div class="col-12 col-xl-12 mb-4 mb-lg-0">
            <div class="card">
                <h5 class="card-header">Product list</h5>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Barcode</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" :key="product.id">
                                    <td>
                                        <img 
                                        :src="'http://localhost:3000/uploads/images/' + product.image" 
                                        width="60" 
                                        class="img-thumbnail">
                                    </td>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.barcode }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.stock }}</td>
                                    <td>{{ product.created_at }}</td>
                                    <td style="width: 140px;">
                                        <a href="#" class="btn btn-sm btn-warning">Edit</a>&nbsp;
                                        <a href="#delete" @click="handleDelete(product.id)" class="btn btn-sm btn-danger">Delete</a>
                                    </td>   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { BackendService, getAllProducts } from '../../services/BackendService';

    // -------- ส่วนของการดึงข้อมูลมาแสดง ----------
    // สร้างตัวแปรไว้เก็บ products
    const products = ref([])

    getAllProducts().then((res) => {
        // console.log(res.data)
        // นำข้อมูลที่ได้มาเก็บไว้ในตัวแปร products
        products.value = res.data
    })

    // -------- ส่วนของการเพิ่มข้อมูล ---------------
    // Preview image
    const previewImage = ref('https://via.placeholder.com/300x300')

    // สร้างฟังก์ชันสำหรับการเลือกไฟล์รูปภาพ
    const handleImageChange = (e) => {
        // นำข้อมูลรูปภาพที่ได้มาเก็บไว้ในตัวแปร previewImage
        previewImage.value = URL.createObjectURL(e.target.files[0])
    }

    // สร้างฟังก์ชันสำหรับลบรูปภาพ
    const clearImage = () => {
        previewImage.value = 'https://via.placeholder.com/300x300'
    }

    // สร้างตัวแปร formData เพื่อเก็บข้อมูลที่ได้จากฟอร์ม
    const formData = ref({
        name: '',
        description: '',
        barcode: '',
        price: '',
        stock: '',
        category_id: '1',
        user_id: '1',
        status_id: '1'
    })

    // สร้างฟังก์ชัน submit ฟอร์ม
    const handleSubmit = (e:any) => {

        const photo: any = previewImage.value != 'https://via.placeholder.com/300x300' ? previewImage.value : null
        e.preventDefault()

        const data = new FormData()
        data.append('name', formData.value.name)
        data.append('description', formData.value.description)
        data.append('barcode', formData.value.barcode)
        data.append('price', formData.value.price)
        data.append('stock', formData.value.stock)
        data.append('category_id', formData.value.category_id)
        data.append('user_id', formData.value.user_id)
        data.append('status_id', formData.value.status_id)
       
        // Append the photo (image file) to the FormData
        if (photo) {
        fetch(photo)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], 'filename.jpg', { type: 'image/jpeg' })
                data.append('photo', file)

                BackendService.post('products', data)
                    .then((res) => {
                        console.log(res.data)
                        // redirect to product
                        window.location.href = 'product'
                    })
                    .catch((error) => {
                        console.error('Error uploading image:', error)
                })
            })
        } else {
        BackendService.post('products', data)
            .then((res) => {
                console.log(res.data)
                // redirect to product
                window.location.href = 'product'
            })
            .catch((error) => {
                console.error('Error posting form data:', error);
            })
        }
    }

    // -------- ส่วนของการลบข้อมูล ---------------
    const handleDelete = (id: number) => {
        if (confirm('Are you sure to delete?')) {
            BackendService.delete(`products/${id}`)
                .then((res) => {
                    console.log(res.data)
                    // redirect to product
                    window.location.href = 'product'
                })
                .catch((error) => {
                    console.error('Error deleting data:', error);
                })
        }
    }

</script>

<style scoped>
    .top-right-icon {
        top: 20;
        right: 0;
    }
</style>