import React from "react";
import './Header.css';

function Header(){
    return(
        <>
            <div className="head">
                <h2>Divya</h2>
                <div className="xtra">
                    <ul>
                        <li>Home</li>
                        <li>Resume</li>
                        <li>Projects</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;