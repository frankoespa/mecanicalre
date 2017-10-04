import React, { Component } from 'react';
import './Scanner.css';
import scan from '../img/scanner.svg';

class Scanner extends Component {

    componentDidMount(){
        window.kissuiScrollAnim.add(this.titulo, {
            'in': 'bounceIn'
        });
        window.kissuiScrollAnim.add(this.frase1, {
            'in': 'fadeIn'
        });
        window.kissuiScrollAnim.add(this.frase2, {
            'in': 'fadeIn'
        });
        window.kissuiScrollAnim.add(this.frase3, {
            'in': 'fadeIn'
        });
        window.kissuiScrollAnim.add(this.icono, {
            'in': 'slideInRight'
        });
    }

    render() {
        return (
            
                <div className="row full-height app-colorfondo2 app-section scrollspy" id="scanner">
                    <div className="col s12 m12 center-align">
                        <h5 className="white-text app-colorfondo3 app-titulo z-depth-5" ref={(titulo)=>{this.titulo=titulo}}>¿SCANNER AUTOMOTRIZ?</h5>
                        <p className="flow-text white-text app-desc" ref={(frase1)=>{this.frase1=frase1}}>Un scanner automotriz es un equipo de diagnóstico que se conecta al sistema informático interno del automóvil</p>
                        <p className="flow-text white-text app-desc" ref={(frase2) => { this.frase2 = frase2 }}>Hoy en día, la mayoría de los vehículos hacen uso de una computadora interna para controlar prácticamente todos sus sistemas y funciones, desde los frenos y la transmisión, hasta el motor</p>
                        <p className="flow-text white-text app-desc" ref={(frase3) => { this.frase3 = frase3 }}>El scanner automotriz accede a la información que estas computadoras generan en caso de un estado de error, ofreciendo datos precisos acerca de la falla que de otro modo podrían ser difíciles de diagnosticar</p>
                    </div>
                    <div className="col s12 m12 center-align" ref={(icono)=>{this.icono=icono}}>
                        <img src={scan} alt="scanner" className="imagen-scanner"/>
                    </div>
                </div>
            
        );
    }
}

export default Scanner;