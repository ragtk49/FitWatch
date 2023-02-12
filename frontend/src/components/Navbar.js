import React from "react";
import "../styles/navbar.css";
import {Link,useMatch,useResolvedPath} from "react-router-dom";

export const Navbar = () => {

    return(
        <nav className = "nav">
            <Link to = "/" className="site-title">AR GYM</Link>
            <ul>
                <CustomLink to="/About">About</CustomLink>
                <CustomLink to="/Trainers">Trainers</CustomLink>
                <CustomLink to="/Courses">Courses</CustomLink>
                <CustomLink to="/SignIn">SignIn</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to,children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname,end:true})
    return (
        <li className ={isActive ? "active" : ""}>
            <Link to = {to} {...props}>{children}</Link>
        </li>
    )

}