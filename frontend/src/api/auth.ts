import { api } from './api'

export interface LoginData{
    email:string
    password:string
}

export interface RegisterData{
    email:string
    password:string
    firstName:string
    lastName:string
    phone:string
}

export interface ProfileData{
    email:string
    firstName:string
    lastName:string
    phone:string
}

export const authApi={
    login:(data:LoginData)=>api.post('/auth/login',data),
    register:(data:RegisterData)=>api.post('/auth/register',data),
    logout:()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    },
    getProfile:(data:ProfileData)=>api.get('/auth/getprofile')
}