import React from 'react'
import {Navbar, Col} from 'react-bootstrap';
import "./Navbar.css";
import bellicon from "../../svg-icons/notifications2.svg";

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
                        <img src={bellicon} ></img>
                    </Navbar.Collapse>
                </Col>            
            </Navbar>
        </div>
    )
}

export default TopNavbar
