import React, { Component } from 'react';
import './App.css';
import Nav from './componentes/Nav';
import Portada from './componentes/Portada';


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
