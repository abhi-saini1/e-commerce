'use server';
import bcrypt from 'bcrypt'
import prisma from '@/library/prismadb';
import { revalidatePath } from 'next/cache';


export async function createUser(formData:FormData){
    try{
        const email = formData.get('email') as string
        const name = formData.get('name') as string
        const password = formData.get('password') as string

        try{
            const existingUser = await prisma.user.findUnique({
                where: {email}
            })
            if(existingUser){
                throw new Error('You already have a memeber')
            }
            const hashedPassword = await bcrypt.hash(
                password,
                12
            )
            await prisma.user.create({
                data:{
                    email: email,
                    name: name,
                    hashedPassword: hashedPassword
                }
            })
            revalidatePath('/')
        }catch(existingUser){
            return {
                existingUser: 'You already have a memeber, please sign in'
            };
        }
    }catch(error){
        console.log(error);
}
}