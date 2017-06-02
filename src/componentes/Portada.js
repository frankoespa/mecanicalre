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

            <div className="carousel carousel-slider center port-configslider" ref="slider" data-indicators="true">
                <div className="carousel-item port-portada port-foto1" href="#one!">
                    <h4 className="white-text port-texto port-titulo">Bienvenidos</h4><br/>
                    <h5 className="white-text port-texto port-subtitulo">Somos un centro integral de reparación y mantenimiento de vehículos</h5>
                </div>
                <div className="carousel-item port-portada port-foto2" href="#two!">
                    <h4 className="white-text port-texto port-titulo">Diagnósticos por Software</h4><br/>
                    <h5 className="white-text port-texto port-subtitulo">Contámos con equipo para escanear y encontrar fallas rápidamente en su vehículo</h5>
                </div>
                <div className="carousel-item port-portada port-foto3" href="#three!">
                    <h4 className="white-text port-texto port-titulo">50 Años de Experiencia</h4><br/>
                    <h5 className="white-text port-texto port-subtitulo">Personal altamente experimentado y en constante capacitación y perfeccionamiento</h5>
                </div>
                <div className="carousel-item port-portada port-foto4" href="#four!">
                    <h4 className="white-text port-texto port-titulo">Responsabilidad y Compromiso</h4><br/>
                    <h5 className="white-text port-texto port-subtitulo">Siempre pensándo en el cliente para brindar servicios de calidad que superen sus expectativas</h5>
                </div>
            </div>

        );
    }
}

export default Portada;