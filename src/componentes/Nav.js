import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {

    render() {
        return (

            <nav className="menu white">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo logo"></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="" className="grey-text text-darken-3">Servicios</a></li>
                        <li><a href="badges.html" className="grey-text text-darken-3">Info</a></li>
                        <li><a href="collapsible.html" className="grey-text text-darken-3">Contacto</a></li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Nav;