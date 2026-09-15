import {Request,Response} from 'express'
import prisma from '../prisma'

export const getMasters=async(req:Request,res:Response)=>{
    try{
        const masters=await prisma.master.findMany()
        
        if(!masters)return res.status(500).json({error:'masters not found'})

        return res.json(masters)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'get masters error'})
    }
}