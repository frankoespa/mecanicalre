import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="container center-align app-margen-abajo">
                        <h5 className="white-text app-colorfondo2 app-titulo z-depth-5">¿POR QUÉ NOSOTROS?</h5>
                        <p className="flow-text grey-text text-darken-3 app-desc">Somos una empresa especializada en servicios de mecánica integral automotriz desde hace 30 años, contando con un equipo de profesionales experimentados, equipamiento y tecnología de vanguardia<br /><br />
                            Si se presenta un problema en su vehículo, lo eliminaremos de forma rápida y efectiva realizando todos los trabajos relacionados con la reparación de su vehículo, de manera eficiente y económica<br /><br/>Estamos listos para ofrecerle una gama completa de servicios para el mantenimiento y reparación de su vehículo</p>    
            </div>
        );
    }
}

export default About;