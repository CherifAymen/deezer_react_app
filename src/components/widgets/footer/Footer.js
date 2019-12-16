import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{
    return(
        <nav className="navbar navbar-dark bg-danger mb-4">
            <Link className="navbar-brand mx-auto" to="https://www.darija-coding.com">DCoding©2019</Link>
        </nav>
    )
}

export default Footer;
