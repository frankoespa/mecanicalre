import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import './Portada.css'

class Portada extends Component {

    componentDidMount() {
        const slider = findDOMNode(this.refs.slider);
        window.$(slider).carousel({fullWidth: true});
        setInterval(()=>window.$(slider).carousel('next'),5000)
    }

    render() {
        return (

            <div className="carousel carousel-slider center configslider" ref="slider" data-indicators="true">
                <div className="carousel-item portada foto1" href="#one!">
                    <h1 className="white-text port-titulo">Mecánica General</h1>
                </div>
                <div className="carousel-item portada foto2" href="#two!">
                    <h1 className="white-text port-titulo">Diagnósticos por Software</h1>
                </div>
                <div className="carousel-item portada foto3" href="#three!">
                    <h1 className="white-text port-titulo">Limpieza de Inyectores</h1><br/>
                    <h1 className="white-text port-titulo">Pre ITV</h1>
                </div>
                <div className="carousel-item portada foto4" href="#four!">
                    <h1 className="white-text port-titulo">Mantenimiento</h1><br/>
                    <h1 className="white-text port-titulo">Aceite y Filtros</h1>
                </div>
            </div>

        );
    }
}

export default Portada;