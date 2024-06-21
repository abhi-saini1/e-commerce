'use client'
import React, { useState } from "react";
import Image from "next/image";
import FormatPrice from "@/src/types/FormatPrice";
import { UseWishListStore } from "@/src/store/UseWishListStore";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import dynamic from "next/dynamic";
const AddToCart  = dynamic(
  () => import('@/src/app/(shoescart)/components/ui/AddToCart')
)

const Page = () => {
  const wishlistStore = UseWishListStore();
  const [selectedSize, setSelectedSize] = useState("");
  const isSizedSelected = selectedSize !== "";

  const showToast = () => {
    toast.error("Please choose a size first");
  };
  return (
    <section className="py-20">
      <div className="main-container">
        {wishlistStore.wishList.length > 0 ? (
          <>
            <span className="font-bold">
              you have {wishlistStore.wishList.length} items in your wishlist
            </span>
            

            <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 my-5">
              {wishlistStore.wishList.map((product) => (
                  <div
                  className="relative group border duration-300 hover:scale-105 flex flex-col items-center justify-center"
                  key={product.id}
                >
                  <Image
                    src={product.image}
                    alt={`image of ${product.name}`}
                    className="cursor-pointer w-[250px] h-[300px]"
                    height={300}
                    width={300}
                  />
                  <div className="absolute top-5 right-0 items-center justify-center gap-3">
                    <button className="mx-2 text-gray-900 p-2 rounded-md hover:text-red-500 " onClick={() =>
                        wishlistStore.removeFromWishlist({
                          ...product,
                        })
                      }
                    >
                      <RxCross2 className="w-[20px] h-[20px]"/>
                    </button>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold">{product.name}</h2>
                    <span>{FormatPrice(product.unit_amount)}</span>
                  </div>
                  <div className="flex  items-center justify-center gap-2">
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="my-2 p-2 border rounded-md"
                      >
                      <option value="">Select Size</option>
                      <option value="UK-6">UK-6</option>
                      <option value="UK-7">Uk-7</option>
                      <option value="UK-8">UK-8</option>
                      <option value="Uk-9">UK-9</option>
                      <option value="UK-10">UK-10</option>
                    </select>
                    <AddToCart
                      name={product.name}
                      image={product.image}
                      price={product.unit_amount}
                      id={product.price_id!}
                      sizeSelect={isSizedSelected}
                      size={selectedSize}
                      onClick={!isSizedSelected ? showToast : undefined}
                      currency="INR"
                    />
                   
                  </div>
                </div>
              ))}
            </div>
        
          </>
        ) : (
          <div className="w-full flex justify-center items-center">
            <h1 className="font-bold text-xl">Your Watchlist is empty</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
