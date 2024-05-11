'use client';
import React from 'react'
import toast from 'react-hot-toast';
import Products from '@/components/Products';
import { ProductType } from '@/types/ProductTypes';
import { UseWishListStore } from '@/store/UseWishListStore';
import { FaHeartCirclePlus } from 'react-icons/fa6';


const AddToWishListButton = ({
    name,
    id,
    image,
    unit_amount,
    quantity,
}:ProductType) => {
    const wishlistStore = UseWishListStore();

    const addToWishListStore = () =>{
        const existingItem = wishlistStore.wishList.find((wishItem)=>wishItem.id === id)
        if(existingItem){
            toast.error(`${name} is already is your wishlist`);
        } else{
            wishlistStore.addToWishlist({
                name,
                id,
                image,
                unit_amount,
                quantity: 1
            })
            toast.success(`${name} added to wishlist`)
        }
    }
  return (
    <div onClick={addToWishListStore}>
        <FaHeartCirclePlus/>
    </div>
  )
}

export default AddToWishListButton
