import React from 'react'
import img from "./download.jpg";
import {Card} from "react-bootstrap";

function SquareCards(props) {
    const{number,content}=props;
    return (
        <div>
            <Card className="mt-4 shadow" style={{borderRadius:"8px"}}>
                <Card.Body>
                <div className="text-center">
                    <img src={img} style={{width:"45px",height:"45px",borderRadius:"50%"}}></img>
    <h4 className="mt-3">{number}</h4>
    <p className="text-uppercase" style={{color:"blue",fontSize:"13px"}}>{content}</p>
                </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default SquareCards
