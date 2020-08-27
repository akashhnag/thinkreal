import React from 'react'
import Sidebar from "../common/Sidebar";
import Dashboard from "./Dashobard/Dashboard";
import Projects from "./Projects/Projects";
import Tasks from "./Tasks/Tasks";
import Leads from "./Leads/Leads";
import Messages from "./Messages/Messages";
import Reports from "./Reports/Reports";
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
                        <Route path='/tasks'  component={Tasks}></Route>
                        <Route path='/leads'  component={Leads}></Route>
                        <Route path='/reports'  component={Reports}></Route>
                        <Route path='/messages'  component={Messages}></Route>
                
                </Col>
            </Row>           
        </div>
    )
}

export default Body
