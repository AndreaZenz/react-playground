import { Container, ListGroup } from 'react-bootstrap';

type CartProps = {
  cart: { id: number; title: string; price: number }[];
};

export default function Cart({ cart }: CartProps) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container className="mt-4">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <ListGroup className="mb-3">
            {cart.map((item, index) => (
              <ListGroup.Item key={index}>
                {item.title} - ${item.price}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4>Total: ${total}</h4>
        </>
      )}
    </Container>
  );
}

/*
  Cart.tsx - Cart Page Demo

  Fundamentals used in this page:

  1. Lifting State Higher:
     - Cart state moved to App so it can be shared across multiple pages (Shop and Cart).

  2. Props for Data Sharing:
     - Cart page receives the `cart` array from App via props.
     - Shop page receives `onAddToCart` function to add items.

  3. React Router:
     - Introduced a new route `/cart` to navigate between Shop and Cart.
     - Sidebar now links to the Cart page.

  4. Array Methods:
     - Used `.reduce()` to calculate total cart price.
     - Used `.map()` to render list of items inside a ListGroup.

  Notes:
  - Demonstrates how state can be lifted and shared across different routes.
  - Next step could be removing items from the cart or persisting it in localStorage.
*/

