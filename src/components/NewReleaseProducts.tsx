import { FetchProducts } from "@/app/actions/GetStripeProduct";
// import Link from "next/link";
import ProductCard from "./ProductCard";



const NewReleaseProducts =  async()=>{
    const product = await FetchProducts();
    const newProducts = product.filter((product)=> product.metadata?.NewRelease === 'true')
    console.log(newProducts);
    return (
        <section className="py-10">
            <div className="main-container">
                <div className="flex justify-center items-center">
                    <h1 className="text-[32px] uppercase font-bold ">New Release</h1>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
                    {newProducts?.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewReleaseProducts