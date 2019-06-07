import React, {Component} from 'react';

class House extends Component {
   render() {

      const {name, address, city, state, zip} = this.props.house;

      return (
         <div className='house_container'>
            <header>
               <h3>Property Name: <span>{name}</span></h3>
               <button className='delete_property'>X</button>
            </header>

            <h3>Address: <span>{address}</span></h3>

            <h3>City: <span>{city}</span></h3>

            <h3>State: <span>{state}</span></h3>

            <h3>ZIP: <span>{zip}</span></h3>
         </div>
      );
   }
}

export default House;