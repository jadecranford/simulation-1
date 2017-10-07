// import React, { Component } from 'react';
// import axios from 'axios';
//
// import BinOverview from './BinOverview';
//
// export default class BinData extends Component {
//    constructor() {
//       super();
//
//       this.state = {
//          binData: ['1', '2']
//       }
//    }
//
//    componentDidMount() {
//       this.getBinData();
//    }
//
//    getBinData = (id) => {
//       axios.get(`http://localhost:8888/bins/${id}`).then( response => {
//          this.setState({
//             binData: response.data
//          })
//       })
//    }
//
//    render() {
//       return (
//          <div>
//          <BinOverview bins={this.state.binData} />
//          </div>
//
//       )
//    }
// }
