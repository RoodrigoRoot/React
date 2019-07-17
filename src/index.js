import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import BadgeNew from './pages/BadgeNew'
import "./global.css"
import Badges from './pages/Badge'

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);
