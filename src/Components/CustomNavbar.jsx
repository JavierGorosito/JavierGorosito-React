import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const CustomNavbar = () => {
    return (
        <header>
             <Navbar className="navBar">
                 <Container>
                <Navbar.Brand href="#home"><img
                    src="./Image/WhatsApp Image 2022-09-10 at 5.12.51 PM.png"
                    width="100"
                    height="100"
                    className="d-inline-block align-center"
                    /> {' '} El Tony Delivery </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-links">
                    <Nav.Link href="#home">Cervezas</Nav.Link>
                    <Nav.Link href="#link">Vinos</Nav.Link>
                    <NavDropdown title="Varios" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Aperitivos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Accesorios
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Contacto
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
            </Navbar>
        </header>

    )
     
    }

export default CustomNavbar;