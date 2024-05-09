'use client'

import { ReactNode } from "react";
import { CartProvider as Cart } from "use-shopping-cart";

export default function CartContext({
    children,
}: {children: ReactNode}){
    return(
        <Cart mode="payment" cartMode="client-only" stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
        currency="INR"
        successUrl="/"
        cancelUrl="/"
        shouldPersist={true}
        language="en-US">
            {children}
        </Cart>
    )
}