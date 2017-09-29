import React, { Component } from 'react';
import logo from '../img/LogoMecanica.svg';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer white">
                <div className="container app-section">
                    <div className="row">
                        <div className="col s12 m4">
                            <img src={logo} alt="Mecánica Esparza" style={{ width: "50%", height: "auto" }} />
                            <p className="grey-text text-darken-3">Centro integral de reparación y mantenimiento de vehículos</p>
                            <p className="grey-text text-darken-3">Lamadrid 2424</p>
                            <p className="grey-text text-darken-3">(341) 155889498</p>
                            <p className="grey-text text-darken-3">(341) 4610836</p>
                            <p className="grey-text text-darken-3">Rosario (Santa Fe)</p>
                        </div>
                        <div className="col s12 m4 center-align">
                            <h5 className="grey-text text-darken-3">Síguenos en Facebook</h5>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FmecanicaLResparza&tabs&width=340&height=196&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{ border: "none", overflow: "hidden" }} width="340" height="196"  scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                        </div>
                        <div className="col s12 m4">
                            <h5 className="grey-text text-darken-3">Secciones</h5>
                            <ul>
                                <li><a className="grey-text text-darken-3" href="#">Servicios</a></li>
                                <li><a className="grey-text text-darken-3" href="#">Nosotros</a></li>
                                <li><a className="grey-text text-darken-3" href="#">Scanner</a></li>
                                <li><a className="grey-text text-darken-3" href="#">Contacto</a></li>
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