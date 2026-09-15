import { api } from './api'

export const mastersApi={
    getAll:()=>api.get('/masters'),
}