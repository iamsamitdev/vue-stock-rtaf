import axios from 'axios'

const authService = axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default authService