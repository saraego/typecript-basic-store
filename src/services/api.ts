 import axios from "axios";


 export const Api = axios.create({
    baseURL:"http://localhost:3000"
 })


 Api.interceptors.request.use(async (config)=> {
    const userData = await localStorage.getItem('code:codeburgue')
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`
    return config
 })