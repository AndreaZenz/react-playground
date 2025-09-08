import { Card as BsCard } from 'react-bootstrap';
import Button from './Button';

type CardProps = {
  title: string;
  description: string;
  price: number;
  onAdd: () => void;
};

export default function Card({ title, description, price, onAdd }: CardProps) {
  return (
    <BsCard className="mb-3">
      <BsCard.Body>
        <BsCard.Title>{title}</BsCard.Title>
        <BsCard.Text>{description}</BsCard.Text>
        <BsCard.Text>
          <strong>${price}</strong>
        </BsCard.Text>

        <Button 
          label="Add to Cart" 
          variant="success" 
          onClick={onAdd} 
        />
      </BsCard.Body>
    </BsCard>
  );
}


/*
  Card.tsx - useState & Events Demo

  Fundamentals used in this component:

  1. useState:
     - Introduced local state (count) to track how many times a product was added to the cart.
     - Initial state set to 0 and updated with setCount.

  2. Event Handling:
     - onClick event on the Button triggers handleAddToCart.
     - Demonstrates interaction between user actions and state updates.

  3. Conditional Rendering:
     - Displayed "Added to cart: X times" only if count > 0.
     - Used ternary operator for pluralization (time/times).

  Notes:
  - This shows how components can manage their own state independently.
  - Prepares us for lifting state up or sharing state across multiple components.
*/



