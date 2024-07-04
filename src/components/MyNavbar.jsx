import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        // fixed="top"
        collapseOnSelect
        expand="md"
        variant="dark"
        className="navbar bg-dark"
      >
        <Container>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2866/2866935.png"
            style={{
              width: "40px",
              marginRight: "30px",
            }}
            alt="logo"
          />

          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="/" className="brand-name">
              LEARNING-PORTAL
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="about" style={{ textDecoration: "none" }}>
                <Nav.Link href="about">About</Nav.Link>
              </Link>
             
              <NavDropdown title="Codes" id="collapsible-nav-dropdown">
               
                
                <Link to="pythoncodes" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="pythoncodes">
                    Python Codes
                  </NavDropdown.Item>
                </Link>
             
                <Link to="ccodes" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="ccodes">C codes</NavDropdown.Item>
                </Link>
             
                <Link to="javacodes" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="javacodes">
                    Java codes
                  </NavDropdown.Item>
                </Link>
             
                <Link to="compiler" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="compiler">
                   Compiler
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Compilers" id="collapsible-nav-dropdown">
               
                

              <Link to="compiler" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="compiler">
                     C Compiler
                  </NavDropdown.Item>
                </Link>
             
                
                
                <Link to="pythoncompiler" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="pythoncompiler">
                   Python Compiler
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Notes" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Java</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dbms</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">cloud</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default MyNavbar;
