import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { useShoppingCart } from "use-shopping-cart";

 const CartIcon = () =>{
    const {cartDetails} = useShoppingCart();
    const cartItems = Object.values(cartDetails ?? {});

    return (
        <Link href={'/cart'} className="relative">
            <LuShoppingCart/>
            {cartItems.length > 0 && (
                <span className="absolute left-3 bottom-3 rounded-full text-sm font-bold w-5 h-5 bg-[#FC8729]  text-white flex items-center justify-center pb-0">
                    {cartItems.length}
                </span>
            )}
        </Link>
    )
}
export default CartIcon