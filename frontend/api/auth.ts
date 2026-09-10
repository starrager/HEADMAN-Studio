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

export const authApi={
    login:(data:LoginData)=>api.post('/auth/login',data),
    register:(data: RegisterData)=>api.post('/auth/register',data),
    me:()=api.get('/auth/me'),
    logout:()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
}