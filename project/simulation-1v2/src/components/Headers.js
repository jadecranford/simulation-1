import React, { Component } from 'react';
import logo from './logo.png';

export default class Header extends Component {
   render () {
      return (
         <div className='header'>
            <div className='logo'>
               <img src={ logo } />
            </div>
            <div className='headerTitle'>SHELFIE</div>
         </div>
      )
   }
}
