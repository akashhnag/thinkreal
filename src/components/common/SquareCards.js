import React from 'react';
import {Card} from "react-bootstrap";
import newleadsicon from "../../svg-icons/ant-design_user-add-outlined.svg";
import messageicon from "../../svg-icons/chat-4-line.svg";  
import usercheckicon from "../../svg-icons/la_user-check-solid.svg";

function SquareCards(props) {
    const{number,content,icon}=props;
    let img;
    switch(icon){
        case "message":img=messageicon;
        break;
        case "newlead":img=newleadsicon;
        break;
        case "usercheck":img=usercheckicon;
        break;
        default:
            break;
    }
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
