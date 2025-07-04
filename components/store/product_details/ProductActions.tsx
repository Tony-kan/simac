"use client";

import CustomButton from "@/components/ui/CustomButton";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

interface IProductActionsProps {
  productId: string;
}

/**
 * ProductActions component provides UI to adjust product quantity and perform actions.
 *
 * This component renders:
 *   1. A quantity selector with increment and decrement buttons.
 *   2. Action buttons for adding the product to the cart and proceeding to checkout.
 *
 * Props:
 *   - productId: string, the unique identifier of the product.
 *
 * State:
 *   - quantity: number, the current quantity of the product selected.
 *
 * Handlers:
 *   - handleAddToCart: Logs the action of adding the selected quantity of the product to the cart.
 *
 * @returns {React.ReactElement} The rendered component.
 */

const ProductActions = ({ productId }: IProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${productId} to cart.`);
  };

  return (
    <div className="mt-8">
      {/* Quantity Selector */}
      <div className="flex items-center">
        <h3 className="text-sm font-medium text-gray-900 mr-4">Quantity</h3>
        <div className="flex items-center rounded-md border border-gray-300">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md"
            aria-label="Decrease quantity"
          >
            <FaMinus />
          </button>
          <span className="px-4 py-1.5 text-lg font-semibold text-gray-800">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md"
            aria-label="Increase quantity"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-10">
        <CustomButton
          as="button"
          btnText="Add to Cart"
          icon={<FaShoppingCart />}
          handleClick={handleAddToCart}
          styles="w-full"
        />
        <CustomButton
          as="button"
          btnText="Checkout"
          handleClick={handleAddToCart}
          styles="border-2 bg-transparent w-full border-[#5C1B23] text-[#5C1B23] hover:bg-[#5C1B23] hover:text-[#FFE3BB] hover:shadow-lg active:scale-95"
        />
      </div>
    </div>
  );
};

export default ProductActions;
