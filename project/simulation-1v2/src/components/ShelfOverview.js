import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ShelfOverview extends Component {
   render() {
      return(
         <div className='shelfContainer'>

            <Link to="/bins/A">
               <button className='shelf'>Shelf A</button>
            </Link>

            <Link to="/bins/B">
               <button className='shelf'>Shelf B</button>
            </Link>

            <Link to="/bins/C">
               <button className='shelf'>Shelf C</button>
            </Link>

            <Link to="/bins/D">
               <button className='shelf'>Shelf D</button>
            </Link>

         </div>
      )
   }
}
