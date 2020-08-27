import React from 'react'
import {Row,Col,Card} from "react-bootstrap";
import "./Reports.css";
import attachicon from "../../../svg-icons/link-m.svg";
import uploadicon from "../../../svg-icons/inbox-unarchive-line.svg";
import DataTable from 'react-data-table-component';

const data = [{ id: 1, 
    name:"Report_April.doc",
    description:"April's report....",
    date:"20/4/20"},

    { id: 1, 
        name:"Report_April.doc",
        description:"April's report....",
        date:"20/4/20"},

        { id: 2, 
            name:"Report_March.doc",
            description:"March's report....",
            date:"26/3/20"},

            { id: 3, 
                name:"Deal_Report.doc",
                description:"Deal report....",
                date:"14/3/20"},

                { id: 4, 
                    name:"Report_Feb.doc",
                    description:"Feb's report....",
                    date:"25/2/20"},

                    { id: 5, 
                        name:"Report_Jan.doc",
                        description:"Jan's report....",
                        date:"31/1/20"},
    
    
    ];
    
    
    const columns = [
      {
        name: 'Name',
        selector: 'name',
      },
      {
        name: 'Description',
        selector: 'description',
      },
      {
        name: 'Date',
        selector: 'date',
      }
    ];

function Reports() {
    return (
        <div className="mb-5">
            <Row>
                <Col md={8}>   
                    {/* file uploader */}
                    <div className="file-uploader">
                    <Card className="shadow card-style">
                    <Card.Body className="p-2">
                        <Row>
                            {/* attach icon */}
                            <Col md={1}>
                            <img src={attachicon} className="attach-icon mt-2"></img>
                            </Col>

                            <Col>
                                <Row><h6 className="header m-0">Attach a Report</h6></Row>
                                <Row><p className="content m-0">Click on attach icon for selecting files</p></Row>
                            </Col>

                            {/* file uploader */}
                            <Col className="pl-0" md={1}>
                            <img src={uploadicon} className="attach-icon mt-2"></img>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                    </div>

                    {/* reports list */}
                    <div className="mt-5">
                    <Card>
                    <Card.Body>
                        <Card.Text>
                        <div className="mt-2">
                                <DataTable
                            title="Uploaded Reports"
                            columns={columns}
                            data={data}
                        />
                            </div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
                </Col>

                 {/* received reports    */}
                <Col>
                    <div className="reports-received">
                        <h5 className="right-title">Reports Received</h5>
                        
                        {/* reports received list */}
                        <div className="reports-received-list">
                            <Row>
                                <Col>Report_April.doc</Col>
                                <Col>3 days ago</Col>
                            </Row>
                            <Row>
                                <Col>Report_Deal_gh.doc</Col>
                                <Col>15 days ago</Col>
                            </Row>
                            <Row>
                                <Col>Report_March.doc</Col>
                                <Col>1 month ago</Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Reports
