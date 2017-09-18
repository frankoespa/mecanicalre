import React, { Component } from 'react';
import './Truno.css';
import logoW from '../img/icon-whatsap.svg';

class Turno extends Component {
    render() {
        return (
            <div className="grey darken-3 center-align app-margen-abajo">
                <h4 className="white-text app-titulo2">¡ESTAMOS EN WHATSAPP!</h4>
                <div className="caja-w">      
                        <img src={logoW} alt="whatsap" className="imagen-w" />        
                        <h4 className="white-text numtel">341-5889498</h4>
                </div>
            </div>
        );
    }
}

export default Turno;