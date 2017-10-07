import React, { Component } from 'react';


export default function(props) {
   let bin = props.bin;

   return (
      <div>
         <button className='shelf'>
            Bin {bin.binnumber}
         </button>
      </div>
   )
}


// class BinButton extends Component {
//
//    componentDidMount() {
//       if(this.props.show) {
//          this.setState({binTitle: "Bin " + this.props.title})
//       }
//       else {
//          this.setState({binTitle: this.state.default})
//       }
//    }
//
//    render (props) {
//       return (
//          <div>
//             <button className='shelf'>
//                {this.state.binTitle}
//             </button>
//          </div>
//       )
//    }
// }
//
// export default BinButton;
