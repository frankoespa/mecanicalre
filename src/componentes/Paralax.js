import React, { Component } from 'react';
import paralax1 from '../img/paralax1.jpg';

class Paralax extends Component {

    componentDidMount() {
        window.$(this.parax).parallax();
        window.kissuiScrollAnim.add(this.texto, {
            'in': 'fadeInDown'
        });

        
    }

    render() {
        return (

            <div className="parallax-container" style={{ height: "400px",display:"flex",justifyContent: "center",alignItems: "center" }}>
                <h3 className="white-text app-colorfondo1trans app-titulo-parallax center-align" ref={(texto=>{this.texto = texto})}>Más De 150 Clientes Confían En Nosotros</h3>
                <div className="parallax" ref={(parax)=>{this.parax=parax}}><img src={paralax1} alt="paralax1" /></div>
            </div>
        );
    }
}

export default Paralax;