import { UseWishListStore } from "@/store/UseWishListStore";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const WishListIcon = () => {
  const wishlistStore = UseWishListStore();
  return (
    <Link href={"/wishlist"} className={`${wishlistStore.wishList.length > 0 ?'text-black' : null}`}>
      <AiOutlineHeart />
      <span className="">
        
      </span>
    </Link>
  );
};

export default WishListIcon;
