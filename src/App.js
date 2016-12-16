import React from 'react';
export default class App extends React.Component{
  render(){
    return(
      <div className="container">
        <h1>Hola Como Estas?</h1>
        <button type="button" className="btn btn-success">Lazy Load</button>
      </div>
    );
  }
}
