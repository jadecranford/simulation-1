import React, { Component } from 'react';
import BinButton from './BinButton.js';
import { Link } from 'react-router-dom';

class BinOverview extends Component {
   constructor() {
      super();

      this.state = {
         bins: [
            {number: 1, show: false},
            {number: 2, show: false},
            {number: 3, show: false},
            {number: 4, show: true},
            {number: 5, show: false},
            {number: 6, show: true},
            {number: 7, show: false},
            {number: 8, show: true},
            {number: 9, show: true}
         ]
      }
   }

  render() {
    return (
      <div>
         {this.state.bins.map( (bin, index) => {
            return (
               <Link to='/bin/bin'>
                  <BinButton title={bin.number} show={bin.show} />
               </Link>
            )
         })}
      </div>
    );
  }
}

export default BinOverview;
