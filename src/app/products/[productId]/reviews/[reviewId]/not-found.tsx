"use client";
import { usePathname } from "next/navigation";
const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center px-6">
        <h1 className="text-9xl font-extrabold text-[#43A047] animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Review {reviewId} for product {productId} does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
