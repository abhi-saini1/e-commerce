// import { useState } from 'react';

// interface Product {
//   id: string;
//   name: string;
//   price_id: string | null;
//   unit_amount: number | null;
//   image: string;
//   currency: string | null;
//   description: string;
//   metadata: object;
// }

// interface SearchProductsProps {
//   products: Product[];
// }

// const SearchResult: React.FC<SearchProductsProps> = ({ products }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div>
//         {filteredProducts.map(product => (
//           <div key={product.id}>
//             <img src={product.image} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>{product.unit_amount ? `${product.unit_amount / 100} ${product.currency}` : 'No price available'}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResult;