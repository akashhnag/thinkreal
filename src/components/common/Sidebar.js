import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css";
import  "../../App.css";
import pic from "./download.jpg";
import dashboardicon from "../../svg-icons/function-line.svg";
import projectsicon from "../../svg-icons/community-line.svg";

function Sidebar(props) {
    const {dashboard}=props;
    return (
        <div>
            <div className="sidnav-block">
                <div className="avatar-div">
                    <div className="row">
                        <div className="col-3">
                            <div >
                            <img src={pic} alt="Avatar" className="avatar m-4"></img>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mt-4 ml-3 ">
                                <h6 className="mb-0">Nikhil Sharma</h6>
                                <p>Sales Executive</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidenav">
                    {/* tabs */}
                    <div className="mt-3">           
                            
                        <Link to="/">
                            <img src={dashboardicon} className="icon-image"></img>
                            <span className="ml-2 text-capitalize">dashboard</span>
                        </Link>

                        <Link to="/projects">
                            <img src={projectsicon} className="icon-image"></img>
                            <span className="ml-2">Projects</span>
                        </Link>
                           
                            
                           
                        
                            
                            {/* 
                            <a href="">Leads</a>
                            <a href="">Messages</a>
                            <a href="">Analytics</a>
                            <a href="">Reports</a>
                            <a href="">Tasks</a> */}
                    </div>

                    {/* settings and logout */}
                    <div className="mt-5">
                        <a href="">Settings</a>
                        <a href="">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
