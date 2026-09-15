import {defineStore} from 'pinia'
import { servicesApi } from '@/api/services'

export const useServicesStore=defineStore('services',{
    state:()=>({
        services:[]as{
            id:string
            name:string
            description:string
            category:string
            price:number
            durationMinutes:number
            isActive:boolean
        }[],
        loading:false
    }),

    getters:{
        grouped:(state)=>{
            const groups:Record<string,any[]>={}
            
            for(const service of state.services){
                if(!groups[service.category]){
                    groups[service.category]=[]
                }
                groups[service.category]?.push(service)
            }
            return groups
        }
    },

    actions:{
        async fetchServices(){
            if(this.services.length>0)return 

            this.loading=true

            try{
                const {data}=await servicesApi.getAll()
                this.services=data
            }finally{
                this.loading=false
            }
        }
    }
})