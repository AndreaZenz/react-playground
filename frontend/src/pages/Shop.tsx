import { Container } from 'react-bootstrap';

type ProductProps = {
  name: string;
  price: number;
  available?: boolean;
};

function Product({ name, price }: ProductProps) {
  return (
    <div className="border p-3 mb-3">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export default function Shop() {
  const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Headphones', price: 200 },
    { name: 'Smartphone', price: 800 },
    { name: 'Mice', price: 50 },
  ];

  return (
    <Container className="mt-4">
      <h1>Shop Page - JSX & Props Demo</h1>
      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
    </Container>
  );
}
