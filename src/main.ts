import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Custom CSS
import './styles/custom.css'

// Vue Sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
.use(router)
.use(VueSweetalert2)
.mount('#app')
