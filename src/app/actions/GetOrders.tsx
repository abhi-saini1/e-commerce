import prisma from '@/library/prismadb';



export const GetOrders = async (user:any) =>{
    try{
        const orders = prisma.order.findMany({
            where: {userId: user.id},
            include: {items: true}
        });
        return orders
    }catch(err){
        console.log('Error Fetching orders:',err);
        throw err;
    }
}