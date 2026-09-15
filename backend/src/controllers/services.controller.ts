import {Request,Response} from 'express'
import prisma from '../prisma'

export const getServices=async(req:Request,res:Response)=>{
    try{
        const services=await prisma.service.findMany()
        
        if(!services)return res.status(500).json({error:'services not found'})

        return res.json(services)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'get services error'})
    }
}