import React, { Component } from 'react';
import './App.css';
import Nav from './componentes/Nav';
import Portada from './componentes/Portada';
import About from './componentes/About';
import Servicios from './componentes/Servicios';




class App extends Component {

    render() {
        return (
            <div className="App">
                <Nav></Nav>
                <Portada></Portada>
                <About></About>
                <Servicios></Servicios>
                
            </div>
        );
    }
}

export default App;
