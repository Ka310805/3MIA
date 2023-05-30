import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function NavProjeto() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='navbar'>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavProjeto;