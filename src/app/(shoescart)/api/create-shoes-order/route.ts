import { NextResponse,NextRequest } from "next/server";
import GetCurrentUser from "@/src/app/(auth)/actions/GetCurrentUser";
import prisma from '@/src/library/prismadb';
import Stripe from 'stripe'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-04-10',
  });
  
  interface CartEntry {
    name: string;
    quantity: number;
    price: number;
    image: string;
    size: string;
  }
  
  interface PaymentIntent {
    id: string;
    amount: number;
    currency: string;
  }
  
  const manageStripePaymentIntent = async (
    paymentIntentId: string,
    total: number
  ): Promise<PaymentIntent> => {
    if (paymentIntentId) {
      return await stripe.paymentIntents.update(paymentIntentId, { amount: total });
    }
  
    return await stripe.paymentIntents.create({
      amount: total,
      currency: 'INR',
      automatic_payment_methods: { enabled: true },
    });
  };
  
  const manageOrderInDB = async (
    paymentIntent: PaymentIntent,
    total: number,
    items: CartEntry[],
    userId: string
  ): Promise<void> => {
    const existingOrder = await prisma.order.findUnique({
      where: { paymentIntentID: paymentIntent.id },
    });
  
    if (existingOrder) {
      await prisma.order.update({
        where: { paymentIntentID: paymentIntent.id },
        data: {
          userId,
          amount: total,
          currency: 'INR',
          status: 'awaiting payment',
        },
      });
    } else {
      const createdOrder = await prisma.order.create({
        data: {
          userId,
          amount: total,
          currency: 'INR',
          status: 'awaiting payment',
          paymentIntentID: paymentIntent.id,
        },
      });
  
      const orderItems = items.map(async (item) => {
        await prisma.orderItem.create({
          data: {
            orderId: createdOrder.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            image: item.image,
            size: item.size,
          },
        });
      });
  
      await Promise.all(orderItems);
    }
  };
  
  export async function POST(req: NextRequest) {
    const user = await GetCurrentUser();
  
    if (!user) {
      return NextResponse.json({ error: 'Not signed in' }, { status: 403 });
    }
  
    const userId = user.id;
    const body = await req.json();
    const { items, paymentIntentId, totalAmount } = body;
    const total = totalAmount;
  
    try {
      const paymentIntent = await manageStripePaymentIntent(paymentIntentId, total);
      await manageOrderInDB(paymentIntent, total, items, userId);
      return NextResponse.json({ paymentIntent });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
    }
  }