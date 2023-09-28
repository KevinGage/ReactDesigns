import Product from "@/interfaces/Product";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col justify-between w-1/6 mx-6 mb-6">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li>price: {product.price}</li>
          <li>taxes: {product.taxes}</li>
          <li>net price: {product.net_price}</li>
        </ul>
      </CardContent>
      <CardFooter>ean: {product.ean}</CardFooter>
    </Card>
  );
}
