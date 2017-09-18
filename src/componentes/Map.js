import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import './Map.css';

class Map extends Component {

    constructor(props) {
        super(props);
        this.cord = { lat: -32.997708, lng: -60.66822179999997 }
    }

    componentDidMount() {

        const Mapa = findDOMNode(this.refs.map);
        const marco = new window.google.maps.Map(Mapa, {
            center: this.cord,
            zoom: 18
        });
        const marker = new window.google.maps.Marker({
            position: this.cord,
            map: marco,
            title: 'Mecánica LR Esparza',
            animation: window.google.maps.Animation.BOUNCE
        });

        marco.addListener('center_changed', function () {
            // 3 seconds after the center of the map has changed, pan back to the
            // marker.
            setTimeout(function () {
                marco.panTo(marker.getPosition());
            }, 3000);
        });

    }

    render() {
        return (
            <div className="row" style={{marginBottom:"0"}}>
                <div className="col s12 center-align">
                    <h5 className="white-text app-colorfondo2 app-titulo z-depth-5">VEN A VISITARNOS</h5>
                </div>
                <div className="col s12 l6 map" ref="map"></div>
                <div className="col s12 l6 center-align grey darken-3 valign-wrapper" style={{height: "400px",justifyContent: "center"}}>
                    <div>
                        <h5 className="white-text map-titulo map-titulogrande">DIRECCIÓN</h5>
                        <h5 className="white-text map-titulo">Lamadrid 2424</h5>
                        <h5 className="white-text map-titulo map-titulogrande">TELÉFONOS</h5>
                        <h5 className="white-text map-titulo">341-155889498</h5>
                        <h5 className="white-text map-titulo">341-4610836</h5>
                        <h5 className="white-text map-titulo map-titulogrande">HORARIO</h5>
                        <h5 className="white-text map-titulo">Lun a Vie de:<br></br><strong className="app-colortexto1">8:00</strong> a <strong className="app-colortexto1">12:00</strong> y <strong className="app-colortexto1">14:30</strong> a <strong className="app-colortexto1">19:00</strong></h5>
                        <h5 className="white-text map-titulo map-titulogrande">E-MAIL</h5>
                        <h5 className="white-text map-titulo">tallerlresparza@hotmail.com</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;