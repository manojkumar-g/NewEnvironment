import React from 'react';
import {render} from 'react-dom';
import css from './styles/home.styl'

class App extends React.Component{
  render(){
    return(
      <h1>Que? Pasa</h1>
    );
  }
}

render(<App/>,document.getElementById('root'))
