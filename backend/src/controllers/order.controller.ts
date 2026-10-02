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

export const getOrders=async(req:Request,res:Response)=>{
    try{
        const master=await prisma.master.findUnique({where:{userId:req.userId}})

        if(!master)return res.status(404).json({error:'master not found'})

        const appointments=await prisma.appointment.findMany({
            where:{masterId:master.id},
            include:{
                service:true,
                client:{
                    select:{
                        firstName:true,
                        lastName:true,
                        phone:true
                    }
                }
            },
            orderBy:{appointmentTime:'asc'}
        })

        res.json(appointments)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'get an orders error'})
    }
}