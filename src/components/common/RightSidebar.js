import React from 'react'
import "./RightSidebar.css";
import {Row,Col} from "react-bootstrap";

function RightSidebar() {
    return (
        <div className="rightsidenav-block">
            {/* heading */}
            <div>
                <h6 className="p-3" style={{color:"blue"}}>Tasks</h6>
            </div>
            {/* heading ends */}

            {/* tasks */}
            <div className="ml-3">
                <p className="font-weight-bold">Today</p>
                <Row>
                <Col md={1}>
                <span className="red-dot"></span>
                </Col>
                <Col>
                <p className="tasks">Meeting with lead at 3:00 p.m.</p>
                </Col>
                </Row>
                <Row>
                <Col md={1}>
                <span className="green-dot"></span>
                </Col>
                <Col >
                <p className="tasks">Message from Martin</p>
                </Col>
                </Row>
            </div>

            <div className="ml-3">
                <p className="font-weight-bold">Tomorrow</p>
                <Row>
                <Col md={1}>
                <span className="red-dot"></span>
                </Col>
                <Col>
                <p className="tasks">Meeting with lead at 3:00 p.m.</p>
                </Col>
                </Row>
                <Row>
                <Col md={1}>
                <span className="green-dot"></span>
                </Col>
                <Col >
                <p className="tasks">Message from Martin</p>
                </Col>
                </Row>
            </div>
            {/* tasks end */}
        </div>
    )
}

export default RightSidebar
