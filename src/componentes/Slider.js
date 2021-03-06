import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {

    constructor(props){
        super(props);
        this.centrar = { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }
    }

    componentDidMount() {
        
        window.$(this.slider).slick({
            "accessibility": false,
            "autoplay": true,
            "autoplaySpeed": 5000,
            "pauseOnHover":false,
            "arrows": false,
            "fade": true,
            "speed": 1500
        })

    }

    render() {
        return (
            <div className="mislider center" ref={(slider)=>{this.slider = slider}}>
                <div className="port-portada port-foto1" style={this.centrar}>
                    <h4 className="white-text port-texto port-titulo">Bienvenidos</h4><br />
                    <h5 className="white-text port-texto port-subtitulo">Somos un centro integral de reparación y mantenimiento de vehículos</h5>
                </div>
                <div className="port-portada port-foto2" style={this.centrar}>
                    <h4 className="white-text port-texto port-titulo">Diagnósticos por Software</h4><br />
                    <h5 className="white-text port-texto port-subtitulo">Contamos con equipo para escanear y encontrar fallas rápidamente en su vehículo</h5>
                    <a href="#scanner" className="app-colorfondo3 waves-effect waves-light btn-large">¿Qué es?</a>
                </div>
                <div className="port-portada port-foto3" style={this.centrar}>
                    <h4 className="white-text port-texto port-titulo">30 Años de Experiencia</h4><br />
                    <h5 className="white-text port-texto port-subtitulo">Personal altamente experimentado y en constante capacitación y perfeccionamiento</h5>
                    <a href="#nosotros" className="app-colorfondo3 waves-effect waves-light btn-large">Conózcanos</a>
                </div>
                <div className="port-portada port-foto4" style={this.centrar}>
                    <h4 className="white-text port-texto port-titulo">Responsabilidad y Compromiso</h4><br />
                    <h5 className="white-text port-texto port-subtitulo">Siempre pensando en el cliente para brindar servicios de calidad</h5>
                </div>
            </div>
        );
    }
}

export default Slider;