import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Nav className="flex-column bg-light vh-100 p-3">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
      <Nav.Link as={Link} to="/flix">Flix</Nav.Link>
      <Nav.Link as={Link} to="/food">Food</Nav.Link>
      <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
    </Nav>
  );
}
