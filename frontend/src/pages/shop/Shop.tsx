import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../components/Card';


type ShopProps = {
  onAddToCart: (product: { id: number; title: string; description: string; price: number }) => void;
};

export default function Shop({ onAddToCart }: ShopProps) {
  const products = [
    { id: 1, title: "Laptop", description: "High performance laptop", price: 1200 },
    { id: 2, title: "Headphones", description: "Noise cancelling headphones", price: 200 },
    { id: 3, title: "Smartphone", description: "Latest model smartphone", price: 800 },
  ];

  return (
    <Container className="mt-4">
      <h1>Shop Page</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card 
              title={product.title}
              description={product.description}
              price={product.price}
              onAdd={() => onAddToCart(product)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}





/*
  Home.tsx - JSX & Props Demo

  Fundamentals used in this page:

  1. JSX:
     - Used to render HTML-like elements inside JavaScript.
     - JavaScript expressions inside {} to dynamically render content.

  2. Functional Components:
     - Created a reusable Product component.

  3. Props:
     - Passed `name` and `price` from parent (Home) to child (Product).
     - Demonstrates how to send data from parent to child component.

  4. Rendering Lists:
     - Used .map() to iterate over an array of products.
     - Each component rendered from a list has a unique `key` prop.

  Notes:
  - The Product component is stateless and purely presentational.
  - Easy to extend with conditional rendering, events, and state in next steps.
*/


/*
  Shop.tsx - Reusable Components Demo

  Fundamentals used in this page:

  1. Reusable Components:
     - Created a custom Button component wrapping React-Bootstrap Button.
     - Created a Card component to display product info.

  2. Props:
     - Passed title, description, and price into the Card.
     - Passed label, variant, and onClick into the Button.

  3. Composition:
     - Card uses Button inside → shows how components can be combined together.

  Notes:
  - These components are reusable across the app (e.g. same Card for movies, food items).
  - This prepares us for adding interactivity (state, events) in the next steps.
*/


/*
  Shop.tsx - Lifting State Up Demo

  Fundamentals used in this page:

  1. Lifting State Up:
     - Moved cart state from Card (child) to Shop (parent).
     - This allows multiple components to share and update the same state.

  2. Props as Callbacks:
     - Passed a function (handleAddToCart) from parent to child (Card).
     - Child calls this function to update parent state.

  3. Data Flow in React:
     - Demonstrates one-way data flow: parent holds state, child receives props and notifies parent via callbacks.

  Notes:
  - This pattern is essential when multiple components need to work with the same data.
  - Prepares us for more advanced global state management (Context, Redux, Zustand).
*/

