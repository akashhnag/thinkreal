import React from 'react';
import {Row,Col,Card,ButtonGroup,Button} from "react-bootstrap";
import "./CalenderTask.css";
import tickicon from "../../svg-icons/cil_check-alt.svg";
import crossicon from "../../svg-icons/clarity_window-close-line.svg";

function CalenderTask(props) {
    const{title}=props;
    return (
        <div className="mt-2 mb-5">
                        {/* task heading */}
                        <div className="task-title mb-4">
                            <h6>{title}</h6>
                        </div>

                        {/* task list */}
                        <div>
                        <Card className="shadow task-card" >
                            <Card.Body>
                                <Row>
                                    <Col md={1}>
                                    <span className="red-dot"></span>
                                    </Col>
                                    <Col>
                                    <p className="tasks">Meeting with lead at 3:00 p.m.</p>
                                    </Col>
                                    <Col md={3}>
                                        <ButtonGroup>
                                            <Button className="action-button p-1">
                                                <img src={crossicon} className="tick-icon"></img>
                                            </Button>
                                            <Button className="action-button p-2">-</Button>
                                            <Button className="action-button p-1">
                                                <img src={tickicon} className="tick-icon"></img>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            <Row>
                            <Col md={1}>
                            <span className="green-dot"></span>
                            </Col>
                            <Col >
                            <p className="tasks">Message from Martin</p>
                            </Col>
                            <Col md={3}>
                                        <ButtonGroup>
                                        <Button className="action-button p-1">
                                                <img src={crossicon} className="tick-icon"></img>
                                            </Button>
                                            <Button className="action-button p-2">-</Button>
                                            <Button className="action-button p-1">
                                                <img src={tickicon} className="tick-icon"></img>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                           
                        </div>

                    </div>
    )
}

export default CalenderTask
