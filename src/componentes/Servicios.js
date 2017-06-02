import React, { Component } from 'react';
import './Servicios.css';
import mec from '../img/icon-mec.svg';
import pc from '../img/icon-pc.svg';
import mant from '../img/icon-mant.svg';
import freno from '../img/icon-freno.svg';
import motor from '../img/icon-motor.svg';
import susp from '../img/icon-susp.svg';


class Servicios extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h4 className="center-align grey-text text-darken-3 app-titulo z-depth-5">SERVICIOS</h4>
                    </div>
                    <div className="col s12 m4 center-align">
                        <img src={mec} alt="icon-llaves" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">General</h5>
                    </div>
                    <div className="col s12 m4 center-align">
                        <img src={pc} alt="icon-pc" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Diagnósis</h5>
                    </div>
                    <div className="col s12 m4 center-align">
                        <img src={mant} alt="icon-mant" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Mantenimiento</h5>
                    </div>
                    <div className="col s12 m4 center-align">
                        <img src={motor} alt="icon-motor" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Motor</h5>
                    </div>
                    <div className="col s12 m4 center-align">
                        <img src={freno} alt="icon-frenos" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Frenos</h5>
                    </div>
                    <div className="col s12 m4 center-align">
                        <img src={susp} alt="icon-susp" className="serv-icon"/>
                        <h5 className="grey-text text-darken-3 app-servicios">Suspensión</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Servicios;