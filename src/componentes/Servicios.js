import React, { Component } from 'react';
import './Servicios.css';
import mec from '../img/icon-mec.svg';
import pc from '../img/icon-pc.svg';
import mant from '../img/icon-mant.svg';
import freno from '../img/icon-freno.svg';
import motor from '../img/icon-motor.svg';
import susp from '../img/icon-susp.svg';
import aceite from '../img/icon-oil.svg';
import preitv from '../img/icon-pre.svg';
import trans from '../img/icon-trans.svg';


class Servicios extends Component {

    componentDidMount(){
        window.kissuiScrollAnim.add(this.titulo, {
            'in': 'bounceIn'
        });
        window.kissuiScrollAnim.add(this.general, {
            'in': 'rubberBand'
        });
        window.kissuiScrollAnim.add(this.diag, {
            'in': 'rubberBand'
        });
        window.kissuiScrollAnim.add(this.mantenimiento, {
            'in': 'rubberBand'
        });
        window.kissuiScrollAnim.add(this.motoricon, {
            'in': 'rubberBand'
        });
        window.kissuiScrollAnim.add(this.frenoicon, {
            'in': 'rubberBand'
        });
        window.kissuiScrollAnim.add(this.suspicon, {
            'in': 'rubberBand'
        });
        window.kissuiScrollAnim.add(this.filicon, {
            'in': 'rubberBand'
        });
        window.kissuiScrollAnim.add(this.preicon, {
            'in': 'rubberBand'
        });
        window.kissuiScrollAnim.add(this.tranicon, {
            'in': 'rubberBand'
        });
    }

    render() {
        return (
            <div className="container app-section scrollspy" id="servicios">
                <div className="row">
                    <div className="col s12 center-align">
                        <h5 className="white-text app-colorfondo2 app-titulo z-depth-5" ref={(titulo)=>{this.titulo=titulo}}>SERVICIOS</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(general)=>{this.general=general}}>
                        <img src={mec} alt="icon-llaves" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">General</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(diag) => { this.diag = diag }}>
                        <img src={pc} alt="icon-pc" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Diagnósis</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(mantenimiento) => { this.mantenimiento = mantenimiento }}>
                        <img src={mant} alt="icon-mant" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Mantenimiento</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(motoricon) => { this.motoricon = motoricon }}>
                        <img src={motor} alt="icon-motor" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Motor</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(frenoicon) => { this.frenoicon = frenoicon }}>
                        <img src={freno} alt="icon-frenos" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Frenos</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(suspicon) => { this.suspicon = suspicon }}>
                        <img src={susp} alt="icon-susp" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Suspensión</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(filicon) => { this.filicon = filicon }}>
                        <img src={aceite} alt="icon-susp" className="serv-icon" />
                        <h5 className="grey-text text-darken-3 app-servicios">Aceite y Filtros</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(preicon) => { this.preicon = preicon }}>
                        <img src={preitv} alt="icon-susp" className="serv-icon" />
                        <h5 className="grey-text text-darken-3 app-servicios">Pre ITV</h5>
                    </div>
                    <div className="col s12 m4 center-align" ref={(tranicon) => { this.tranicon = tranicon }}>
                        <img src={trans} alt="icon-susp" className="serv-icon" />
                        <h5 className="grey-text text-darken-3 app-servicios">Transmisión</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Servicios;