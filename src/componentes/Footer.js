import React, { Component } from 'react';
import logo from '../img/LogoMecanica.svg';
import face from '../img/facebook.svg';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer white">
                <div className="container app-section">
                    <div className="row">
                        <div className="col s12 l4 center-align">
                            <img src={logo} alt="Mecánica Esparza" style={{ width: "50%", height: "auto" }} />
                            <p className="grey-text text-darken-3">Centro integral de reparación y mantenimiento de vehículos</p>
                            <p className="grey-text text-darken-3">Lamadrid 2424</p>
                            <p className="grey-text text-darken-3">(341) 155889498</p>
                            <p className="grey-text text-darken-3">(341) 4610836</p>
                            <p className="grey-text text-darken-3">Rosario (Santa Fe)</p>
                        </div>
                        <div className="col s12 l4 center-align">
                            <h5 className="grey-text text-darken-3">Síguenos en Facebook</h5>
                            <a href="https://www.facebook.com/mecanicaLResparza"><img src={face} alt="facebook" style={{ width: "20%", height: "auto" }} /></a>
                        </div>
                        <div className="col s12 l4 center-align">
                            <h5 className="grey-text text-darken-3">Secciones</h5>
                            <ul>
                                <li><a className="grey-text text-darken-3" href="#servicios">Servicios</a></li>
                                <li><a className="grey-text text-darken-3" href="#nosotros">Nosotros</a></li>
                                <li><a className="grey-text text-darken-3" href="#scanner">Scanner</a></li>
                                <li><a className="grey-text text-darken-3" href="#contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright" style={{ backgroundColor: "#2EA1DB" }}>
                    <div className="container center-align">
                        © 2017 Copyright Mecánica LR Esparza
                    </div>
                </div>
                <div className="footer-copyright" style={{ backgroundColor: "#424242" }}>
                    <div className="container center-align">
                        Created by <a className="white-text" href="https://www.linkedin.com/in/francoesparza"><strong>Franco Esparza</strong></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;