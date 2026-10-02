import { api } from './api'

export interface OrderData{
    serviceId:string
    masterId:string
    appointmentTime:string
}

export const orderApi={
    makeOrder:(data:OrderData)=>api.post('/appointments',data),
    getOrders:()=>api.get('/appointments/master')
}