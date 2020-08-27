import React,{useState} from 'react';
import Calendar from 'react-calendar';
import {Row,Col} from "react-bootstrap";
import CalenderTask from "../../common/CalenderTask";
import 'react-calendar/dist/Calendar.css';

function Tasks() {
    const [value, onChange] = useState(new Date())

    return (
        <div>
            <Row>
                {/* calender part */}
                <Col md={4}>
                <div className="calender-block">
                    <div className="m-2">
                        <h6 className="calender-heading p-3">Calender</h6>
                    </div>
                    <div >
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                    </div>
                </div>
                
                </Col>

                {/* tasks part */}
                <Col>
                    <div className="mt-4">
                        
                        {/* task list */}
                        
                        <CalenderTask title="Today"></CalenderTask>
                        
                       
                        <CalenderTask title="Tomorrow"></CalenderTask>
                        
                        </div>
                        </Col>
                        </Row>
                        
               

        </div>
    )
}

export default Tasks
