import React from 'react';

function House(props) {

   const {id, name, address, city, state, zip} = props.house;

   return (
      <div className='house_container'>
         <header>
            <h3>Property Name: <span>{name}</span></h3>
            
         </header>

         <h3>Address: <span>{address}</span></h3>

         <h3>City: <span>{city}</span></h3>

         <h3>State: <span>{state}</span></h3>

         <h3>ZIP: <span>{zip}</span></h3>

         <span id="change_info">
            <button className='edit_property' id={id} onClick={() => alert('You have edited! Trust me. You did the best editing. This has never been so edited before. In fact, your editing is the biggest editing I have ever seen. No one can come close to such clicking and editing. Go ahead and click and edit again!')}>Edit</button>

            <button className='delete_property' id={id} onClick={props.deleteHouse}>Delete</button>
         </span>
      </div>
   );
}

export default House;