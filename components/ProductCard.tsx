import Image from 'next/image';
import { Product } from '../data/products';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-4 bg-stone-100 aspect-square p-4">
       {  <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        /> }
       
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-stone-600 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium text-stone-800 mb-1">{product.name}</h3>
        <p className="text-rose-500 font-semibold">₦{product.price}</p>
      </div>
    </div>
  );
}
