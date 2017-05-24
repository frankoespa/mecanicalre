import React, { Component } from 'react';
import './App.css';
import Portada from './componentes/Portada';
import Nav from './componentes/Nav';



class App extends Component {

    render() {
        return (
            <div className="App">
                <Nav></Nav>
                <Portada></Portada>
                
            </div>
        );
    }
}

export default App;
