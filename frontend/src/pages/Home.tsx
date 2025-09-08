import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="mt-5">
      <h1 className="text-primary">Welcome to React-Bootstrap!</h1>
      <Button variant="success">Click me</Button>
    </Container>
  );
}
