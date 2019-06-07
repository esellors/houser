import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import House from '../House/House';
import store from '../../store';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      const reduxState = store.getState();
      this.state = {
         houses: reduxState.houses
      }
      // this.deleteHouse = this.deleteHouse.bind(this);
   }
   componentDidMount() {
      axios.get('/api/houses')
         .then(res => {
           this.setState({
              houses: res.data
           })
         })
         .catch(err => console.log(err.response));
   }
   deleteHouse(e) {
      e.preventDefault();
      const tgtHouseID = e.target.id;
      console.log(tgtHouseID)
      axios.delete(`/api/houses/${tgtHouseID}`)
         .then(res => {
            console.log(res.data)
            this.setState({
               houses: res.data
            })
         })
         .catch(err => console.log(err.response));
   }
   render() {

      let {houses} = this.state;
      houses.reverse();

      return (
         <div id='dashboard_container'>
            <header>
               <h1>Dashboard</h1>
               <Link to='/wizard'><button>Add New Property</button></Link>
            </header>
            <section>
               <h2>Home Listings</h2>
               {
                  houses && houses.map((house, index) => {
                     return <House house={house} key={index} deleteHouse={this.deleteHouse} />
                  })
               }
            </section>
         </div>
      );
   }
}

export default Dashboard;