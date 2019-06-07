import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
   render() {
      return (
         <div id='wizard_container'>
            <h1>Wizard</h1>
            <Link to='/'><button>Cancel</button></Link>
         </div>
      );
   }
}

export default Wizard;