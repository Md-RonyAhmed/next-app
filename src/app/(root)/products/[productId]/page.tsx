const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  //const id = (await params).productId;
  const { productId: id } = await params;
  return <div>ProductDetailPage - {id}</div>;
};

export default ProductDetailPage;
