import { Container, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Nav className="flex-column bg-light vh-100 p-3" style={{ width: '220px' }}>
        <Nav.Item className="mb-2">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link as={Link} to="/flix">Flix</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link as={Link} to="/food">Food</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Main content */}
      <Container fluid className="p-4">
        <Outlet />
      </Container>
    </div>
  );
}
