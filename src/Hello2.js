// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Hello2.css'

const Hello2 = (props) => {
    
        return (
            <div className = 'tc f1'>
                <h1 className ='sol'>Hello People of the World</h1>
                <p>This is Hello2</p>
                <p>{props.value}</p>    
           </div>
            )
          
}
    
  
export default Hello2;