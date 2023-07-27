import axios from 'axios'

// อ่าน token จาก localStorage
const token = localStorage.getItem('token') || ''

const BackendService = axios.create({
    baseURL: 'http://localhost:3000/api/',
    withCredentials: false,
    headers: {
        'Authorization': 'Bearer ' + token // ใส่ token ไปด้วยก่อนส่งไปที่ backend ทุกครั้ง
    }
})

// CRUD Product -----------------------------------
// Read All Products
function getAllProducts() {
    return BackendService.get('products')
}

// Read One Product
function getOneProduct(id: string) {
    return BackendService.get('products/' + id)
}

export {
    BackendService,
    getAllProducts,
    getOneProduct
}