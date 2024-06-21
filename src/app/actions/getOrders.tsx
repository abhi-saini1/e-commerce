import prisma from '@/library/prismadb'

export const GetOrders = async (user: any) => {
  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: { items: true },
  });

  return orders;
};