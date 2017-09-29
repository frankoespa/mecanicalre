import React, { Component } from 'react';
import './Map.css';

class Map extends Component {

    constructor(props) {
        super(props);
        this.cord = { lat: -32.997708, lng: -60.66822179999997 }
    }

    componentDidMount() {

        const marco = new window.google.maps.Map(this.map, {
            center: this.cord,
            zoom: 19
        });
        new window.google.maps.Marker({
            position: this.cord,
            map: marco,
            title: 'Mecánica Esparza',
            animation: window.google.maps.Animation.BOUNCE
        });
        window.kissuiScrollAnim.add(this.titulo, {
            'in': 'bounceIn'
        });
        window.kissuiScrollAnim.add(this.map, {
            'in': 'fadeIn'
        });
        window.kissuiScrollAnim.add(this.info, {
            'in': 'fadeIn'
        });

    }

    render() {
        return (
            <div className="row app-colorfondo3 app-section" style={{marginBottom:"0"}}>
                <div className="col s12 center-align">
                    <h5 className="grey-text text-darken-3 white app-titulo z-depth-5" ref={(titulo)=>{this.titulo=titulo}}>VEN A VISITARNOS</h5>
                </div>
                <div className="col s12 l6 map" ref={(map)=>{this.map=map}}></div>
                <div className="col s12 l6 center-align valign-wrapper" style={{height: "400px",justifyContent: "center"}}>
                    <div ref={(info) => { this.info = info }}>
                        <h5 className="grey-text text-darken-3 map-titulo map-titulogrande">DIRECCIÓN</h5>
                        <h5 className="white-text map-titulo">Lamadrid 2424</h5>
                        <h5 className="grey-text text-darken-3 map-titulo map-titulogrande">TELÉFONOS</h5>
                        <h5 className="white-text map-titulo">(341)-155889498</h5>
                        <h5 className="white-text map-titulo">(341)-4610836</h5>
                        <h5 className="grey-text text-darken-3 map-titulo map-titulogrande">HORARIO</h5>
                        <h5 className="white-text map-titulo">Lun a Vie de:<br></br><strong className="app-colortexto1">8:00</strong> a <strong className="app-colortexto1">12:00</strong> y <strong className="app-colortexto1">14:30</strong> a <strong className="app-colortexto1">19:00</strong></h5>
                        <h5 className="grey-text text-darken-3 map-titulo map-titulogrande">E-MAIL</h5>
                        <h5 className="white-text map-titulo">tallerlresparza@hotmail.com</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;