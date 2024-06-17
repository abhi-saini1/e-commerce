'use client';
import React from "react";
import FormatPrice from "@/types/FormatPrice";
import getCurrentUser from "../(auth)/actions/getCurrentUser";
import { getOrders } from "@/app/actions/getOrders";
import Image from "next/image";
import {motion} from 'framer-motion'
const page = async () => {
  const user = await getCurrentUser();
  const orders = await getOrders(user);
  return (
    <>
      {user ? (
        <motion.div className="main-container py-20" initial={{opacity:0}} animate={{opacity: 1, transition:{
          delay: 2.4, duration: 0.4, ease: 'easeIn'
        }}}>
          <div className="">
            <h3 className="text-1xl font-semibold">Hello, {user.name}</h3>
            <p>{user?.email}</p>
          </div>

          <h1 className="font-bold text-xl text-center underline">Orders</h1>
          {orders?.length === 0 ? (
            <div>
              <h1>No Orders Placed</h1>
            </div>
          ) : (
            <>
              {orders?.map((order) => (
                <div key={order.id} className="rounded-lg p-8 my-4 bg-gray-300">
                  <h2 className="font-medium text-xs">
                    Order Number: {""}
                    {order.id.replaceAll(/\D/g, "")}
                  </h2>
                  <p className="text-xs">Status: {order.status}</p>
                  <div className="text-sm lg:flex items-center gap-4">
                    {order.items.map((product) => (
                      <div key={product.id} className="py-2">
                        {product.image && (
                          <Image
                            src={product.image}
                            width={100}
                            height={100}
                            alt={`image for ${product.name}`}
                          />
                        )}
                        <h2 className="py-1">{product.name}</h2>
                        <span className="text-xs">{product.size}</span>
                        <div className="flex items-center gap-3">
                            <p>Quanity:{product.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-bold py-2">
                    Total: {FormatPrice(order.amount)}
                  </p>
                </div>
              ))}
            </>
          )}
        </motion.div>
      ) : (
        <>
        <div className="h-90 flex items-center justify-center text-2xl uppercase">
            Please Sign In To View Orders
        </div>
        </>
      )}
    </>
  );
};

export default page;
