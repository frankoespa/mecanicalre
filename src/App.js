import React, { Component } from 'react';
import './App.css';
import Nav from './componentes/Nav';
import Slider from './componentes/Slider';
import About from './componentes/About';
import Paralax from './componentes/Paralax';
import Servicios from './componentes/Servicios';
import Map from './componentes/Map';
import Scanner from './componentes/Scanner';
import Turno from './componentes/Turno';
import Footer from './componentes/Footer';





class App extends Component {

    render() {
        return (
            <div className="App">
                <Nav></Nav>
                <Slider></Slider>
                <Servicios></Servicios>
                <Paralax></Paralax>
                <About></About>
                <Scanner></Scanner>
                <Turno></Turno>
                <Map></Map>
                <Footer></Footer>
                
            </div>
        );
    }
}

export default App;
