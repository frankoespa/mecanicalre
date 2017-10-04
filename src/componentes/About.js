import React, { Component } from 'react';
import './About.css'

class About extends Component {

    componentDidMount() {
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

    }

    render() {
        return (
            <div className="container center-align app-section scrollspy" id="nosotros">
                <h5 className="white-text app-colorfondo2 app-titulo z-depth-5" ref={(titulo) => { this.titulo = titulo }}>¿POR QUÉ NOSOTROS?</h5>
                <p className="flow-text grey-text text-darken-3 app-desc" ref={(frase1) => { this.frase1 = frase1 }}>Somos una empresa especializada en servicios de mecánica integral automotriz desde hace 30 años, contando con un equipo de profesionales experimentados, equipamiento y tecnología de vanguardia</p>
                <p className="flow-text grey-text text-darken-3 app-desc" ref={(frase2) => { this.frase2 = frase2 }}>Si se presenta un problema en su vehículo, lo eliminaremos de forma rápida y efectiva realizando todos los trabajos relacionados con la reparación de su vehículo, de manera eficiente y económica</p>
                <p className="flow-text grey-text text-darken-3 app-desc" ref={(frase3) => { this.frase3 = frase3 }}>Estamos listos para ofrecerle una gama completa de servicios para el mantenimiento y reparación de su vehículo</p>
            </div>
        );
    }
}

export default About;