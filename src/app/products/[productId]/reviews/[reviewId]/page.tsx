import { notFound } from "next/navigation";

const ReviewDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if (parseInt(productId) > 100) {
    notFound();
  } else if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
};

export default ReviewDetailPage;
