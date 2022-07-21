import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


const SideBar = (props) => {
    const {
        visible,
        setVisible
    } = props
    return (
        
        // <div className={`d-none d-md-block ${visible ? '' : ''}`} 
        <div className={
            `${visible ? 'd-block' : 
                typeof visible === 'undefined' ? 
                    'd-none d-md-block' : 'd-none'}`
        } 
        // <div className={`${visible ? 'd-none d-md-block' : 'd-none'}`} 
            style={{backgroundColor: 'silver', width: '264px'}} >
            <Nav 
                className="flex-column"
            >
                <Nav.Link href="#home">
                    <Link to="/home">Home</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                    <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                    <Link to="/login">Login</Link>
                </Nav.Link>
            </Nav>
        </div>
    
    )
}

export default SideBar