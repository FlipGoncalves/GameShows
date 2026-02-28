import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './FooterGame.css'

function FooterGame() {
  return (
    <Navbar fixed='bottom'>
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link className='bottom-nav-link'>Made by: Filipe Gonçalves</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default FooterGame