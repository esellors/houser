import React, {Component} from 'react';
import House from '../House/House';

class Dashboard extends Component {
   render() {
      return (
         <div>
            <div>Dashboard</div>
            <House />
         </div>
      );
   }
}

export default Dashboard;