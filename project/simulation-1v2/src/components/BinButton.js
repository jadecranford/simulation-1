import React, { Component } from 'react';

class BinButton extends Component {
   constructor(props) {
      super(props);

      this.state = {
         binTitle: "",
         default: "+ Add inventory to bin"
      }
   }

   componentDidMount() {
      if(this.props.show) {
         this.setState({binTitle: "Bin " + this.props.title})
      }
      else {
         this.setState({binTitle: this.state.default})
      }
   }

   render (props) {
      return (
         <div>
            <button className='shelf'>
               {this.state.binTitle}
            </button>
         </div>
      )
   }
}

export default BinButton;
