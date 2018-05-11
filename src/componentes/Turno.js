import React, { Component } from 'react';
import './Turno.css';
import logoW from '../img/icon-whatsap.svg';

class Turno extends Component {

    componentDidMount(){
        window.kissuiScrollAnim.add(this.titulo, {
            'in': 'bounceIn'
        });
        window.kissuiScrollAnim.add(this.icono, {
            'in': 'fadeIn'
        });
        window.kissuiScrollAnim.add(this.num, {
            'in': 'fadeIn'
        });
    }

    render() {
        return (
            <div className="grey darken-3 center-align app-section">
                <h4 className="white-text app-titulo2" ref={(titulo)=>{this.titulo=titulo}}>¡ESTAMOS EN WHATSAPP!</h4>
                <div className="caja-w">      
                    <img src={logoW} alt="whatsap" className="imagen-w" ref={(icono) => { this.icono = icono }}/>        
                    <h4 className="white-text numtel" ref={(num) => { this.num = num }}>341-5889498</h4>
                </div>
            </div>
        );
    }
}

export default Turno;