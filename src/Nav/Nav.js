import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <React.Fragment>
            <div className="navbar">
                <Link to="/" className="navLink">About Me</Link>
                <Link to="/EllerExperience" className="navLink">Experience and Education</Link>
                <Link to="/EllerSkills" className="navLink">Skills and Technologies</Link>
            </div>
        </React.Fragment>
    )
}

export default Nav;