import { Breadcrumb, Container, Nav, Navbar } from 'react-bootstrap';
import "./NavbarGame.css"

function NavbarGame() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky='top'>
        <Container fluid>
          <Navbar.Brand>
            <Breadcrumb id="navbar-breadcrumb">
              <Breadcrumb.Item href="/">Game Shows</Breadcrumb.Item>
            </Breadcrumb>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Nav.Link href="">Docs</Nav.Link> */}
              <Nav.Link href="https://github.com/FlipGoncalves/GameShows">GitHub</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarGame