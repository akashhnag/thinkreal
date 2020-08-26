import React from 'react'
import {Navbar, Col} from 'react-bootstrap';
import "./Navbar.css";

function TopNavbar() {
    return (
        <div>            
            <Navbar className="Navbar" expand="lg">   
                {/* brand logo */}
                <Col>
                    <Navbar.Brand href="#home"><h2>Think Real</h2></Navbar.Brand>
                </Col>

                {/* search box */}
                <Col>
                    <input type="text" placeholder="Search.." className="inputBox"></input>
                </Col>

                {/* notifications    */}
                <Col>                
                    <Navbar.Collapse className="justify-content-end">
                    Notifications
                    {/* <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text> */}
                    </Navbar.Collapse>
                </Col>            
            </Navbar>
        </div>
    )
}

export default TopNavbar
