import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function rodape() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link>Todos os direitos reservados para Cassio Construções</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default rodape;