import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import paralax1 from '../img/paralax1.jpg';

class Paralax extends Component {

    componentDidMount() {
        const parax = findDOMNode(this.refs.parax);
        window.$(parax).parallax()
    }

    render() {
        return (

            <div className="parallax-container app-margen-abajo" style={{ height: "400px",display:"flex",justifyContent: "center",alignItems: "center" }}>
                <h3 className="white-text app-colorfondo1trans app-titulo-parallax center-align">Más De 150 Clientes Confían En Nosotros</h3>
                <div className="parallax" ref="parax"><img src={paralax1} alt="paralax1" /></div>
            </div>
        );
    }
}

export default Paralax;