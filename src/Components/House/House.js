import React from 'react';

function House(props) {

   const {id, name, address, city, state, zip} = props.house;

   return (
      <div className='house_container'>
         <header>
            <h3>Property Name: <span>{name}</span></h3>
            <button className='delete_property' id={id} onClick={props.deleteHouse}>X</button>
         </header>

         <h3>Address: <span>{address}</span></h3>

         <h3>City: <span>{city}</span></h3>

         <h3>State: <span>{state}</span></h3>

         <h3>ZIP: <span>{zip}</span></h3>
      </div>
   );
}

export default House;