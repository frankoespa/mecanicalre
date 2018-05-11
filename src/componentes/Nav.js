import React, { Component } from 'react';
import './Nav.css';
import logo from '../img/LogoMecanica.svg'

class Nav extends Component {

    componentDidMount(){
        window.$(this.drop).dropdown()
    }

    render() {
        return (

            <nav className="nav-menu white scrollspy" id="inicio">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo nav-logo"><img src={logo} alt="Mecánica Esparza" className="nav-imagen"/></a>
                    <ul id="nav-mobile" className="right">
                        <li className="white-text app-colorfondo1 nav-num hide-on-med-and-down"><i className="material-icons left">phone</i>(341) - 155889498</li>
                        <li className="hide-on-med-and-down"><a href="#servicios" className="grey-text text-darken-3">Servicios</a></li>
                        <li className="hide-on-med-and-down"><a href="#nosotros" className="grey-text text-darken-3">Nosotros</a></li>
                        <li className="hide-on-med-and-down"><a href="#contacto" className="grey-text text-darken-3">Contacto</a></li>
                        <li className="hide-on-large-only"><a className="dropdown-button grey-text text-darken-3" ref={(drop) => { this.drop = drop }} href="#!" data-activates="dropdown1"><i className="material-icons right">more_vert</i></a></li>
                    </ul>               
                </div>
        
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#servicios" className="grey-text text-darken-3">Servicios</a></li>
                    <li><a href="#nosotros" className="grey-text text-darken-3">Nosotros</a></li>
                    <li><a href="#contacto" className="grey-text text-darken-3">Contacto</a></li>
                </ul>
            </nav>

        );
    }
}

export default Nav;