import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export const getAdmin = async (req,res) => {
    try{
        const data = await prisma.akun.findMany()
        res.send(data)
    }catch(error){
        console.log(error)
    }
}

export const createAdmin = async (req,res) => {
    try{
        const { nama,password } = req.body
        const hash = await bcrypt.hash(password,10)
        const data = await prisma.akun.create({
            data:{
                nama:nama,
                password:hash
            }
        })
        res.send(data)
    }catch(error){
        console.log(error)
    }
}