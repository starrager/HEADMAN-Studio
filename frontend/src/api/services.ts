import { api } from './api'

export const servicesApi={
    getAll:()=>api.get('/services'),
}