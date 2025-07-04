import React, { useState } from "react";
import ProductCard from "@/components/store/landing_page/ProductCard";

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  itemsPerPage = 8,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // --- Event Handlers ---
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      {/* The Grid of Products */}
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="rounded-sm bg-white border-2 border-transparent px-4 py-2 text-sm font-bold text-[#5C1B23] hover:bg-gray-50 hover:border-[#5C1B23] disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-sm text-black font-bold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="rounded-sm bg-white border-2 border-transparent px-4 py-2 text-sm font-bold text-[#5C1B23] hover:bg-gray-50 hover:border-[#5C1B23] disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
