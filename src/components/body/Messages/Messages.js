import React from 'react'
import {Row,Col} from "react-bootstrap";
import "./Messages.css";
import usericon from "../../../svg-icons/account-circle-line.svg";

function Messages() {
    return (
        <div className="ml-3 mt-2">
            <Row>
                {/* contacts */}
                <Col md={4}>
                    <div className="contacts-heading-block">
                        <h5 className="contacts-heading p-3">Contacts</h5>
                    </div>

                    <div className="contact-list-block">
                        <ul className="contact-list">
                            <li className="mt-1">
                                <div className="contacts p-2">
                                    <img src={usericon} className="user-icon"></img>
                                    <span className="ml-3">Martin Merces</span>
                                </div>
                            </li>
                            <li className="mt-1">
                                <div className="contacts p-2">
                                    <img src={usericon} className="user-icon"></img>
                                    <span className="ml-3">George Fields</span>
                                </div>
                            </li>
                            <li className="mt-1">
                                <div className="contacts p-2">
                                    <img src={usericon} className="user-icon"></img>
                                    <span className="ml-3">Jones Dermont</span>
                                </div>
                            </li>
                            <li className="mt-1">
                                <div className="contacts p-2">
                                    <img src={usericon} className="user-icon"></img>
                                    <span className="ml-3">Rishi Bhatia</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>

                {/* chatwindow */}
                <Col>
                </Col>
            </Row>
        </div>
    )
}

export default Messages
