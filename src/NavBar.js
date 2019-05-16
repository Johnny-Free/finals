import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

export default class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"  onClick = {this.props.handleClick2}>The Movie Project</Navbar.Brand> {/* Passing the event handler from app.js*/}
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"  onClick = {this.props.handleClick2}>Home</Nav.Link> {/* Passing the event handler from app.js*/}
                    </Nav>
                </Navbar>
            </div>
        )
    }
}