import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";
import { getProductBySlug } from "../../../lib/products";

export default function Layer01Page() {
  const product = getProductBySlug("layer-01");

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}