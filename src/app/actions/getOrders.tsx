import prisma from '@/library/prismadb';
interface User {
  id: string; 
}


export const getOrders = async (user: User) => {
  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: { items: true },
  });

  return orders;
};