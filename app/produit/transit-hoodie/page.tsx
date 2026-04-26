import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";
import { getProductBySlug } from "../../../lib/products";

export default function TransitHoodiePage() {
  const product = getProductBySlug("transit-hoodie");

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}