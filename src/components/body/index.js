import React from 'react'
import Sidebar from "../common/Sidebar";
import Dashboard from "./Dashobard/Dashboard";
import Projects from "./Projects/Projects";
import {Row,Col} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Body() {
    return (
        <div>            
            <Row>
                <Col md={3}>
                <Sidebar></Sidebar>
                </Col>

                <Col md={9}>
                        <Route  exact path='/' component={Dashboard}></Route> 
                        <Route path='/projects'  component={Projects}></Route> 
                
                </Col>
            </Row>           
        </div>
    )
}

export default Body
