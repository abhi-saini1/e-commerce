import { FetchProducts } from "../app/actions/GetStripeProduct";
// import Link from "next/link";
import ProductCard from "./ProductCard";
import Link from "next/link";



const NewReleaseProducts =  async()=>{
    const newproducts = await FetchProducts();
    const newRelease = newproducts.filter((product)=> product.metadata?.NewRelease === 'true')
    console.log(newRelease);
    return (
        <section className="py-10">
            <div className="main-container">
                <div className="flex justify-center items-center">
                    <h1 className="text-[32px] uppercase font-bold ">New Release</h1>
                </div>

                <div className="grid lg:grid-cols-4 gap-10 grid-cols-2 my-5 ">
                    {newRelease?.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
                <div className="flex items-center justify-center my-5">
                    <Link href={'/shop'} className="hover:underline">
                        <span className="font-semibold text-gray-600">View More &#8594; </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NewReleaseProducts