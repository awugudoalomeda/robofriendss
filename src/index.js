import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Hello2 from './Hello2';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <Hello properties1 = {'Manager of the Club of 16'}  properties2 = {'Chairman of the Club of 32'}/>
    <Hello2 value ={'Dont do that'} />
  </React.StrictMode>,
  document.getElementById('mago')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
