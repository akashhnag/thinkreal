import React from 'react'
import { Row,Col,Form } from "react-bootstrap";
import ImageCards from "../../common/ImageCards";


function Projects() {
    return (
        <div className="mt-4">
            <div>
            <Row>
                <Col>
                <Form>
                <Form.Control as="select">
                <option>Location</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Pune</option>
                <option>Chennai</option>
                </Form.Control>
                </Form>                
                </Col>

                <Col>
                <Form>
                <Form.Control as="select">
                <option>3bhk</option>
                <option>2bhk</option>
                <option>1bhk</option>
                </Form.Control>
                </Form>   
                </Col>

                <Col>
                <Form>
                <Form.Control as="select">
                <option>Pricing</option>
                <option>10,000-15,000</option>
                <option>15,000-20,000</option>
                <option>20,000-25000</option>
                </Form.Control>
                </Form>
                </Col>

                <Col>
                <Form>
                <Form.Control as="select">
                <option>Availability</option>
                <option>Available</option>
                <option>Not Available</option>
                </Form.Control>
                </Form>
                </Col>
            </Row>
            </div>
            
            {/* image gallery */}
            <div className="mt-4">
                <div>
                <Row>
                <Col>
                    <ImageCards></ImageCards>
                </Col>
                <Col>
                    <ImageCards></ImageCards>
                </Col>
                <Col>
                    <ImageCards></ImageCards>
                </Col>
                <Col>
                    <ImageCards></ImageCards>
                </Col>
            </Row>
                </div>

                <div className="mt-3">
                <Row>
                <Col>
                    <ImageCards></ImageCards>
                </Col>
                <Col>
                    <ImageCards></ImageCards>
                </Col>
                <Col>
                    <ImageCards></ImageCards>
                </Col>
                <Col>
                    <ImageCards></ImageCards>
                </Col>
            </Row>
                </div>
            

            
            </div>

            
        </div>
    )
}

export default Projects
