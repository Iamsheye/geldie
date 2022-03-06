import React from "react";

interface IBuyNow {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BuyNow = ({ onClick }: IBuyNow) => {
  return (
    <button
      className="btn-buy mt-6 px-6 py-3 w-full font-semibold rounded-md bg-[#4E44CE] md:w-[343px]"
      onClick={onClick}
    >
      <span>Buy Now</span>
    </button>
  );
};

export default BuyNow;
