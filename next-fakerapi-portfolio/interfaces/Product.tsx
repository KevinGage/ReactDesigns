export default interface Product {
  id: number;
  name: string;
  description: string;
  ean: string;
  upc: string;
  image: string;
  images: [{ title: string; description: string; url: string }];
  net_price: number;
  taxes: string;
  price: string;
  catagories: string[];
  tags: string[];
}
