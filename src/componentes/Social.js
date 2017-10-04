import React, { Component } from 'react';
import './Social.css'
import face from '../img/facebook.svg'

class Social extends Component {

    componentDidMount(){
        window.kissuiScrollAnim.add(this.face, {
            'in': 'bounceIn'
        });
    }

    render() {
        return (
            <div className="social-caja hide-on-small-only" ref={(face)=>{this.face=face}}>
                <a href="https://www.facebook.com/mecanicaLResparza" className="btn btn-floating btn-large pulse"><img src={face} alt="facebook" className="social-face" /></a>
            </div>
        );
    }
}

export default Social;