import ProductCard from "@/components/ProductCard";
import Product from "@/interfaces/Product";

async function getData(): Promise<{ data: Product[] }> {
  const res = await fetch("https://fakerapi.it/api/v1/products?_quantity=25");

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <section className="flex flex-wrap px-10 justify-evenly">
      {data.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
