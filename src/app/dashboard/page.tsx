'use client';
import React, { useState, useEffect } from "react";
import FormatPrice from "@/types/FormatPrice";
import getCurrentUser from "../(auth)/actions/getCurrentUser";
import { getOrders } from "@/app/actions/getOrders";
import Image from "next/image";

const Page = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser();
        const userOrders = await getOrders(currentUser);
        setUser(currentUser);
        setOrders(userOrders);
        setLoading(false); // Set loading to false after data fetching completes
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "Failed to fetch data");
        setLoading(false); // Ensure loading is set to false in case of error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {user ? (
        <div className="main-container py-20 z-10">
          <div className="">
            <h3 className="text-1xl font-semibold">Hello, {user.name}</h3>
            <p>{user.email}</p>
          </div>

          <h1 className="font-bold text-xl text-center underline">Orders</h1>
          {orders && orders.length === 0 ? (
            <div>
              <h1>No Orders Placed</h1>
            </div>
          ) : (
            <>
              {orders && orders.map((order) => (
                <div key={order.id} className="rounded-lg p-8 my-4 bg-slate-200">
                  <h2 className="font-medium text-xs">
                    Order Number: {order.id.replaceAll(/\D/g, "")}
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
                          <p>Quantity: {product.quantity}</p>
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
        </div>
      ) : (
        <div className="h-90 flex items-center justify-center text-2xl uppercase">
          Please Sign In To View Orders
        </div>
      )}
    </>
  );
};

export default Page;