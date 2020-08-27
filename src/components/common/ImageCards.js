import React from 'react'
import {Row,Col,Card} from "react-bootstrap";
import img from "./building1.jpg";
import "./ImageCards.css";

function ImageCards() {
    return (
        <div>
            <Card style={{borderRadius:"10px"}}>
                <Card.Img variant="top" src={img} style={{borderRadius:"10px",height:"150px"}}/>
                <Card.Body className="image-card-body">
                    <Card.Title className="image-card-title mb-0">Icon sterling Towers</Card.Title>
                    <Card.Text>
                        <div>
                        In Vancouver
                        </div>
                        
                        <div className="mt-2">
                            <Row>
                                <Col>
                                    <p className="mb-0 p-0 text-uppercase view-share">View</p>
                                </Col>
                                <Col>
                                    <p className="float-right mb-0 p-0 text-uppercase view-share">Share</p>
                                </Col>
                            </Row>
                        </div>
                    </Card.Text>
                </Card.Body>
                </Card>
        </div>
    )
}

export default ImageCards
