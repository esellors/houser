import React, {Component} from 'react';
import axios from 'axios';
import store from '../../store';
import {Link, Redirect} from 'react-router-dom';

class Wizard extends Component {
   constructor(props) {
      super(props);
      const reduxState = store.getState();
      this.state = {
         redirect: false,
         name: reduxState.name,
         address: reduxState.address,
         city: reduxState.city,
         state: reduxState.state,
         zip: reduxState.zip
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.addHouse = this.addHouse.bind(this);
   }
   componentDidMount() {
      store.subscribe(() => {
         this.setState({
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zip: store.getState().zip
         });
      });
   }
   handleInputChange(e) {
      const inputID = e.target.id;
      const inputValue = e.target.value;
      switch(inputID) {
         case 'input_name':
            store.dispatch({
               type: 'UPDATE_NAME',
               payload: inputValue
            });
            break;
         case 'input_address':
            store.dispatch({
               type: 'UPDATE_ADDRESS',
               payload: inputValue
            });
            break;
         case 'input_city':
            store.dispatch({
               type: 'UPDATE_CITY',
               payload: inputValue
            });
            break;
         case 'input_state':
            store.dispatch({
               type: 'UPDATE_STATE',
               payload: inputValue
            });
            break;
         case 'input_zip':
            store.dispatch({
               type: 'UPDATE_ZIP',
               payload: inputValue
            });
            break;
         default:
            break;
      }
   }
   addHouse(e) {
      e.preventDefault();
      const {name, address, city, state, zip} = this.state;

      const newHouse = {
         name,
         address,
         city,
         state,
         zip
      }

      axios.post('/api/houses', newHouse)
         .then(() => {
            this.setState({
               redirect: true
            })
            store.dispatch({
               type: 'UPDATE_NAME',
               payload: ''
            });
            store.dispatch({
               type: 'UPDATE_ADDRESS',
               payload: ''
            });
            store.dispatch({
               type: 'UPDATE_CITY',
               payload: ''
            });
            store.dispatch({
               type: 'UPDATE_STATE',
               payload: ''
            });
            store.dispatch({
               type: 'UPDATE_ZIP',
               payload: ''
            });
         })
         .catch(err => console.log(err.response));
   }
   render() {
      
      const {redirect} = this.state;

      if(redirect) {
         return <Redirect to='/' />
      }

      return (
         <div id='wizard_container'>
            <header>
               <h1>Wizard</h1>
               <Link to='/'><button>Cancel</button></Link>
            </header>
            <section>
               <form>
                  <label htmlFor='input_name'>
                     Property Name
                  </label>
                  <input id='input_name' type='text' value={this.state.name} onChange={this.handleInputChange} />

                  <label htmlFor='input_address'>
                     Address
                  </label>
                  <input id='input_address' type='text' value={this.state.address} onChange={this.handleInputChange} />

                  <label htmlFor='input_city'>
                     City
                  </label>
                  <input id='input_city' type='text' value={this.state.city} onChange={this.handleInputChange} />

                  <span id='state_zip_container'>
                     <label htmlFor='input_state'>
                        State
                     </label>
                     <input id='input_state' type='text' value={this.state.state} onChange={this.handleInputChange} />

                     <label htmlFor='input_zip'>
                        ZIP
                     </label>
                     <input id='input_zip' type='text' value={this.state.zip} onChange={this.handleInputChange} />
                  </span>
                  
                  <Link to='/'>
                     <button onClick={this.addHouse}>Complete</button>
                  </Link>
               </form>
            </section>
         </div>
      );
   }
}

export default Wizard;