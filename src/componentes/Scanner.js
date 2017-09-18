import React, { Component } from 'react';
import './Scanner.css';
import scan from '../img/scanner.svg';

class Scanner extends Component {
    render() {
        return (
            
                <div className="row full-height app-colorfondo2">
                    <div className="col s12 m12 center-align">
                        <h5 className="white-text app-colorfondo3 app-titulo z-depth-5">¿SCANNER AUTOMOTRIZ?</h5>
                        <p className="flow-text white-text app-desc">Un scanner automotriz es un equipo de diagnóstico que se conecta al sistema informático interno del automóvil.<br></br><br></br>Hoy en día, la mayoría de los vehículos hacen uso de una computadora interna para controlar prácticamente todos sus sistemas y funciones, desde los frenos y la transmisión, hasta el motor.<br></br><br></br>El scanner automotriz accede a la información que estas computadoras generan en caso de un estado de error, ofreciendo datos precisos acerca de la falla que de otro modo podrían ser difíciles de diagnosticar.</p>
                    </div>
                    <div className="col s12 m12 center-align">
                        <img src={scan} alt="scanner" className="imagen-scanner"/>
                    </div>
                </div>
            
        );
    }
}

export default Scanner;