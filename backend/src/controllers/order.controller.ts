import {Request,Response} from 'express'
import prisma from '../prisma'

export const makeOrder=async(req:Request,res:Response)=>{
    try{
        const {serviceId,masterId,appointmentTime}=req.body
        const service=await prisma.service.findUnique({where:{id:serviceId}})

        if(!service)return res.status(500).json({error:'not found service'})

        const durationMinutes=service.durationMinutes
        const totalPrice=service.price

        const order=await prisma.appointment.create({
            data:{
                clientId:req.userId!,
                serviceId,
                masterId,
                appointmentTime,
                totalPrice,
                durationMinutes
            }
        })

        res.status(201).json(order)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:"make an order error"})
    }
}