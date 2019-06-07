import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import House from '../House/House';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         houses: []
      }
   }
   componentDidMount() {
      this.getAllHouses();
   }
   getAllHouses() {
      axios.get('/api/houses')
         .then(res => {
            this.setState({
               houses: res.data
            })
         })
         .catch(err => console.log(err.response))
   }
   render() {

      const {houses} = this.state;

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
                     return <House house={house} key={index} />
                  })
               }
            </section>
         </div>
      );
   }
}

export default Dashboard;