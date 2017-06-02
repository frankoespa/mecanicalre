import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="container center-align">
                        <h4 className="grey-text text-darken-3 app-titulo z-depth-5">¿QUIÉNES SOMOS?</h4>
                        <p className="flow-text grey-text text-darken-3">Somos una empresa que apuesta por la oferta de servicios de mecánica automotriz desde hace más de 50 años, contando con un equipo de profesionales experimentados, equipamiento y tecnología de vanguardia.<br /><br />
                            Si se presenta un problema en su coche, lo eliminaremos de forma rápida y efectiva realizando todos los trabajos relacionados con la reparación de su vehículo, de manera eficiente y económica.<br />Estamos listos para ofrecerle una gama completa de servicios para el mantenimiento y reparación de su vehículo</p>    
            </div>
        );
    }
}

export default About;