import Breadcrumbs from "@/components/store/product_details/BreadCrumbs";
import CustomerReviews from "@/components/store/product_details/CustomerReviews";
import ProductDetails from "@/components/store/product_details/ProductDetails";
import ProductImageGallery from "@/components/store/product_details/ProductImageGallery";
import { fetchProductById } from "@/constants/data";
import React from "react";
import { notFound } from "next/navigation";

const ProductViewPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  const product = await fetchProductById(productId);
  console.log("Product fetched:", product);

  // If product doesn't exist, show a 404 page
  if (!product) {
    notFound();
  }
  return (
    <section className="h-full min-h-screen">
      <div className="max-w-2xl mx-auto py-10 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <Breadcrumbs category={product.category} productName={product.name} />

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Left Column: Image Gallery */}
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />

          {/* Right Column: Product Details and Actions */}
          <div className="mt-10 lg:mt-0">
            <ProductDetails product={product} />
          </div>
        </div>

        {/* Full-width section for reviews below the main grid */}
      </div>
      <div className="mt-16 w-full">
        <CustomerReviews reviews={product.reviews} />
      </div>
    </section>
  );
};

export default ProductViewPage;
