import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {

    render() {
        return (

            <nav className="nav-menu white">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo nav-logo"></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="grey-text text-darken-3"><i className="material-icons left">phone</i>341-155889498</li>
                        <li><a href="#" className="grey-text text-darken-3">Info</a></li>
                        <li><a href="#" className="grey-text text-darken-3">Servicios</a></li>
                        <li><a href="#" className="grey-text text-darken-3">Contacto</a></li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Nav;