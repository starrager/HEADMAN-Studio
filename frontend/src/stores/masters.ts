import {defineStore} from 'pinia'
import { mastersApi } from '@/api/masters'

export const useMastersStore=defineStore('masters',{
    state:()=>({
        masters:[] as any[],
        loading:false,
    }),

    actions:{
        async fetchMasters(){
            if(this.masters.length>0)return 

            this.loading=true

            try{
                const {data}=await mastersApi.getAll()
                this.masters=data
            }finally{
                this.loading=false
            }
        }
    }
})