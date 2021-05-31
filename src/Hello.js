import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Hello.css'

class Hello extends Component{
    render(){
        return (
        <div className = 'tc f1'>
            <h1 className ='me' >Hello Ladies and Gentlemen</h1>
            <p>{this.props.properties1}</p>
            <p>{this.props.properties2}</p>
       </div>
        )
    }
}

export default Hello;