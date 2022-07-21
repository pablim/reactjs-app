import React from 'react'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

const NavBarApp = (props) => {
    return (
        <div style={{height: '64px'}}>
            <Navbar bg="light" fixed='top' style={{padding: '8px'}}>
                <Button 
                        onClick={() => props.visibleSidebar((visible) => !visible)}>
                    <FontAwesomeIcon icon={faBars} />
                </Button>

                <Navbar.Brand href="#" className='ms-2'>
                    {/* <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '} */}
                    Working Logic
                </Navbar.Brand>
                
                    <Container className='justify-content-center'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Container>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                
            </Navbar>
        </div>
    )
}

export default NavBarApp