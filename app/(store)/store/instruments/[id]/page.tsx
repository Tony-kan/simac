import React from "react";

const ProductViewPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="h-full min-h-screen">ProductViewPage : {params.id}</div>
  );
};

export default ProductViewPage;
