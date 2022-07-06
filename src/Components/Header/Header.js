import React,{ useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApiContext } from '../../MainContext';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';



function Header() {

    const { search, setSearch, searchBook, favItemsFromHome }=useContext(ApiContext)

    const favLength = favItemsFromHome.length;
    console.log(favLength)
    
    return (
        <section style={{ backgroundColor: "#283618" }} >
            <div className='container'  >
                <Navbar style={{ backgroundColor:'#fb5607'}}  sticky="top"  expand="lg">
                    <Container  fluid>
                        <Link style={{textDecoration:'none'}} to="/">
                        <Navbar.Brand >
                                <span style={{ color: "#283618", fontFamily: 'Pacifico, cursive' }}>B</span>
                                <span style={{  fontFamily: "Josefin Sans, sans-serif" }}>ook</span>
                                <span style={{ color: "#283618", fontFamily: 'Pacifico, cursive' }}>G</span>
                            <span style={{ fontFamily: "Josefin Sans, sans-serif" }}>ram</span>
                        </Navbar.Brand>
                        </Link>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                
                                <Link to="/favourites" style={{ textDecoration: 'none' }}><Nav.Link href="/favourites">Favourites<Badge bg="primary" size='sm'>{favLength}</Badge></Nav.Link></Link>
                                
                                <Link to="/about" style={{ textDecoration: 'none' }}> <Nav.Link href="/about">Contact Us</Nav.Link></Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)} 
                                />
                                <Button
                                onClick={()=>searchBook(search)}
                                 variant="outline-success">
                                    Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                
            </div>
            
        </section>
    );
}

export default Header;