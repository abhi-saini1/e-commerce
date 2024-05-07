import { create } from 'zustand';
import { persist } from 'zustand/middleware';


type CheckoutState = {
    paymentIntent: string,
    onCheckout: string,
    setPaymentIntent: (val: string) => void
    setCheckout: (val: string) => void,
}
export const useCheckOut = create<CheckoutState>()(
    persist(
        // initial state
        (set) => ({
            paymentIntent: '',
            onCheckout: 'cart',

            // set state
            setPaymentIntent: (val) => set((set) => ({ paymentIntent: val })),
            setCheckout: (val) => set((set) => ({ onCheckout: val }))
        }),
        { name: 'checkout-store' }

    )
)