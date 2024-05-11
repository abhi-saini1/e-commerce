import { UseWishListStore } from '@/store/UseWishListStore'
import Link from 'next/link';
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

const WishListIcon = () => {
    const wishlistStore = UseWishListStore();
  return (
    <Link href={'/wishlist'} className='relative'>
      <AiOutlineHeart/>
      <span className="absolute left-3 bottom-3 rounded-full text-sm font-bold w-5 h-5 bg-[#FC8729]  text-white flex items-center justify-center pb-0">
                    {wishlistStore.wishList.length}
                </span>
    </Link>
  )
}

export default WishListIcon