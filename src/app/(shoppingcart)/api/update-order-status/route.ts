import prisma from '@/library/prismadb';
import { NextResponse,NextRequest } from 'next/server';

export async function POST(req:NextRequest){
    const body = await req.json()
    const {orderId,status} = body

    try{
        const updatedOrder = await prisma.order.update({
            where:{id:orderId},
            data: {status: status}
        })
        return NextResponse.json({updatedOrder})
    }catch(error){
        console.log(error)
        return
    }
}