import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};
export const dynamicParams = false;
export async function generateStaticParams() {
  return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId: id } = await params;
  return {
    title: `Product ${id}`,
    description: `Description for product ${id}`,
  };
};

const ProductDetailPage = async ({ params }: Props) => {
  //const id = (await params).productId;
  const { productId: id } = await params;
  return <div>ProductDetailPage - {id}</div>;
};

export default ProductDetailPage;
