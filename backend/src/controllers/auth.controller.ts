import {Request,Response} from 'express'
import prisma from '../prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register=async(req:Request,res:Response)=>{
    try{
        const {email,password,firstName,lastName,phone}=req.body
        const existingUser=await prisma.user.findUnique({where:{email:email}})

        if(existingUser)return res.status(409).json({error:'user already exists'})

        const passwordHash=await bcrypt.hash(password,10)

        const user=await prisma.user.create({
            data:{
                email,
                passwordHash:passwordHash,
                phone,
                firstName,
                lastName
            }
        })

        const {passwordHash:_,...userWithoutHash}=user

        res.status(201).json(userWithoutHash)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'register error'})
    }
}

export const login=async(req:Request,res:Response)=>{
    try{
        const {email,password}=req.body
        const existingUser=await prisma.user.findUnique({where:{email:email}})

        if(!existingUser)return res.status(401).json({error:'wrong password or email'})

        const hashedPassword=await bcrypt.compare(password,existingUser.passwordHash)
            
        if(!hashedPassword)return res.status(401).json({error:'wrong password or email'})

        const token=jwt.sign(
            {userId:existingUser.id,role:existingUser.role},
            process.env.JWT_SECRET!,
            {expiresIn:'7d'}
        )

        res.json({token,existingUser})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'login error'})
    }
}