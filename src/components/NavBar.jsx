import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isProductsHovered, setIsProductsHovered] = useState(false);
    const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
    const [isAccountHovered, setIsAccountHovered] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    }, []);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Maru Dry Fruits
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <NavDropdown
                                title="Products"
                                onMouseEnter={() => setIsProductsHovered(true)}
                                onMouseLeave={() => setIsProductsHovered(false)}
                                show={isProductsHovered}
                            >
                                <NavDropdown.Item as={Link} to="/products">
                                    All
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={Link}
                                    to="/products/dry-fruits"
                                >
                                    Dry Fruits
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={Link}
                                    to="/products/festival-packs"
                                >
                                    Festival Packs
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="About Us"
                                onMouseEnter={() => setIsAboutUsHovered(true)}
                                onMouseLeave={() => setIsAboutUsHovered(false)}
                                show={isAboutUsHovered}
                            >
                                <NavDropdown.Item as={Link} to="/about#contact">
                                    Contact Us
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavDropdown title="Log In">
                                <NavDropdown.Item>
                                    <Form inline>
                                        <Row>
                                            <Col xs="auto">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="username"
                                                    className=" me-2"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="auto">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="password"
                                                    className=" me-2"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="auto">
                                                <Button type="submit">
                                                    Submit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
