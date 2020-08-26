import React from 'react';
import ReactEcharts from 'echarts-for-react';
import RightSidebar from "../../common/RightSidebar";
import SquareCards from "../../common/SquareCards";
import { Col,Row, Card } from 'react-bootstrap';
import img from "./download.jpg";
import "./Dashboard.css";

const option = {
    xAxis: {
        type: 'category',
        data: [0,1,2,3,4,5,6,7,8,9]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [10, 5, 7, 30, 12, 25, 27, 12, 20, 28],
        type: 'line'
    }]
};

function Dashboard() {
    return (
        <div> 
            <Row>          
            <Col md={8}>
                <Card className="mt-4 shadow" style={{borderRadius:"8px"}}>
                    <Card.Body>Hey Nikhil, start typing here to quickly add a lead</Card.Body>
                </Card>

                {/* square cards */}
                <Row>
                    <Col>
                        <SquareCards number={22} content="new leads"></SquareCards>
                    </Col>
                    <Col>
                        <SquareCards number={8} content="new messages"></SquareCards>
                    </Col>
                    <Col>
                        <SquareCards number={10} content="active clients"></SquareCards>
                    </Col>
                </Row>
                {/* square cards ends */}

                {/* chart  */}
                <Row>
                    <Col>
                    <Card className="mt-4 shadow" style={{borderRadius:"8px"}}>                   
                        <Card.Body>
                        <div>
                            <Row>
                                <Col>
                                    {/* <div className="chart-title">Performance</div> */}
                                    <h6 className="chart-title">Performance</h6>
                                </Col>

                                <Col>
                                    <div className="chart-subject">Leads contacted vs Deals closed</div>
                                </Col>
                            </Row>
                        </div>
                            
                            <ReactEcharts 
                        option={option} 
                        style={{height: '250px', width: '100%'}}  
                        className='react_for_echarts' /></Card.Body>
                    </Card>
                    </Col>
                </Row> 
            </Col>
            
            <Col>
            <RightSidebar></RightSidebar>
            </Col>
            </Row>
        </div>
    )
}

export default Dashboard
