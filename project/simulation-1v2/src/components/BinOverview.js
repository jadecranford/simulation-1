import React, { Component } from 'react';
import BinButton from './BinButton.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BinData from './BinData';

export default class BinOverview extends Component {
   constructor() {
      super();

      this.state = {
         binData: []
      }
   }

   componentDidMount() {
      const { params } = this.props.match;
      this.getBinData(params.shelfletter);
   }


   getBinData = (shelfletter) => {
      axios.get(`http://localhost:8888/bins/${shelfletter}`).then( response => {
         console.log("11111111111111", response);
         this.setState({
            binData: response.data
         })
      })
   }

   render() {
      return(
         <div>
            {this.state.binData.map((bin, index) => {
               return (
                  <Link to='/bin/bin'>
                     <BinButton bin={bin} key={index} />
                  </Link>
               )
            })}
         </div>
      )
   }

}

// function BinOverview(props) {
//    console.log(props)
//    return (
//       <div>
//          {props.bins.map((bin, index) => {
//             return (
//                <Link to='/bin/bin'>
//                   <BinButton bin={bin} key={index} />
//                </Link>
//             )
//          })}
//       </div>
//    )
// }


/*
export default class BinData extends Component {
   constructor() {
      super();

      this.state = {
         binData: ['1', '2']
      }
   }

   componentDidMount() {
      this.getBinData();
   }

   getBinData = (id) => {
      axios.get(`http://localhost:8888/bins/${id}`).then( response => {
         this.setState({
            binData: response.data
         })
      })
   }

   render() {
      return (
         <div>
         <BinOverview bins={this.state.binData} />
         </div>

      )
   }
}
*/

// class BinOverview extends Component {
//
//   render(props) {
//     return (
//       <div>
//          {props.bins.map( (bin, index) => {
//             return (
//                <Link to='/bin/bin'>
//                   <BinButton bin={bin} key={index} />
//                </Link>
//             )
//          })}
//       </div>
//     );
//   }
// }
//
