import React from "react";
import { FaStar } from "react-icons/fa";
import ProductActions from "./ProductActions";

// Assuming product data structure matches the mock
interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    reviewCount: number;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {product.name}
      </h1>

      <p className="mt-6 text-3xl text-gray-900">
        MWK {product.price.toFixed(2)}
      </p>

      {/* Rating */}
      <div className="mt-6 flex items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                product.rating > i ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
        <p className="ml-2 text-sm text-gray-600">
          ({product.reviewCount} reviews)
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <p className="text-base text-gray-700">{product.description}</p>
      </div>

      {/* Action buttons (quantity, add to cart, etc.) */}
      <ProductActions productId={product.id} />
    </section>
  );
};

export default ProductDetails;
