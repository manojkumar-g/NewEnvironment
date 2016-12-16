import React from 'react';
export default class App extends React.Component{
  lazyload(){
    require.ensure([],
      (require)=>{
        require('./alert');
      }
    )
  }
  render(){
    return(
      <div className="container">
        <h1>Hola Como Estas?</h1>
        <button type="button" className="btn btn-success" onClick={this.lazyload}>Lazy Load</button>
      </div>
    );
  }
}
