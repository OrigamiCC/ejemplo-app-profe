import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {  

  const token = localStorage.getItem('token');

  const onLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  if(!token){
    return null;
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link className='menuButtons' to="/">My app</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link className='menuButtons' to="/">Home</Link></Nav.Link>
            <Nav.Link> <Link className='menuButtons' to="/lugares">Lugares</Link></Nav.Link>
            <NavDropdown title="Mas opciones" id="basic-nav-dropdown">
              <NavDropdown.Item><Link className='menuButtons' to="/eventos">Eventos</Link></NavDropdown.Item>
              {(Boolean(token) && <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  );
}

export default Menu;