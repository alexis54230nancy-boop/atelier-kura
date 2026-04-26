import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";
import { getProductBySlug } from "../../../lib/products";

export default function GraphiteTeePage() {
  const product = getProductBySlug("graphite-tee");

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}