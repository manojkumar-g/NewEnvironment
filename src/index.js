import React from 'react';
import {render} from 'react-dom';
import css from './styles/home.styl'
import App from'./App'

render(<App/>,document.getElementById('root'));
window.alert("Am first");
require.ensure([],
  (require)=>{
    require('./alert');
  }
)
