import React from 'react'
import { Row,Col,Form,Card } from "react-bootstrap";
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
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
                </Form>                
                </Col>

                <Col>
                <Form>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
                </Form>   
                </Col>

                <Col>
                <Form>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
                </Form>
                </Col>

                <Col>
                <Form>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
