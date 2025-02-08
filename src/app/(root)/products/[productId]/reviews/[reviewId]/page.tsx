import { notFound, redirect } from "next/navigation";

const ReviewDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if (parseInt(productId) > 100) {
    redirect("/products");
  } else if (parseInt(reviewId) > 100) {
    throw new Error(`Invalid review ID: ${reviewId}`);
    notFound();
  }
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
};

export default ReviewDetailPage;
