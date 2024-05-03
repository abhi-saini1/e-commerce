import prisma from '@/library/prismadb';



export const GetOrders = async (user:any) =>{
    try{
        const orders = prisma.order.findMany({
            where: {userId: user.id},
            include: {items: true}
        });
        return orders
    }catch(error){
        console.error('Error Fetching orders:',error);
        throw error;
    }
}