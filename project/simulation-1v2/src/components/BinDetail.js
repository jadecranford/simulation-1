import React, { Component } from 'react';

export default class BinDetail extends Component {

   edit = () => {
   }

   delete = () => {
   }

   render() {
      return (
         <form>
            Name: <input type='text' name='name' />
            Price: <input type='text' name='price' />
            <button onClick="">Edit</button>
            <button onClick="">Delete</button>
         </form>
      )
   }

}
