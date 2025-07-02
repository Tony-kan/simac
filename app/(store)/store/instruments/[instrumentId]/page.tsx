import React from "react";

const ProductViewPage = async ({
  params,
}: {
  params: Promise<{ instrumentId: string }>;
}) => {
  const productId = (await params).instrumentId;
  return (
    <div className="h-full min-h-screen">ProductViewPage : {productId}</div>
  );
};

export default ProductViewPage;
