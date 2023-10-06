import axios from 'axios'

const baseURL=import.meta.env.MODE==='development'?"http://localhost:8080/api":"/api"
export default  axios.create({

    baseURL,
    withCredentials:true
    
})