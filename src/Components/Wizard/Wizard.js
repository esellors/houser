import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         address: '',
         city: '',
         state: '',
         zip: 0
      }
      this.handleInputChange = this.handleInputChange.bind(this);
   }
   handleInputChange(e) {
      console.log('hit')
      const inputID = e.target.id;
      const inputValue = e.target.value;
      console.log(inputID)

      switch(inputID) {
         case 'input_name':
            this.setState({
               name: inputValue
            });
            break;
         case 'input_address':
            this.setState({
               address: inputValue
            });
            break;
         case 'input_city':
            this.setState({
               city: inputValue
            });
            break;
         case 'input_state':
            this.setState({
               state: inputValue
            });
            break;
         case 'input_zip':
            this.setState({
               zip: inputValue
            });
            break;
         default:
            break;
      }
   }
   render() {
      return (
         <div id='wizard_container'>
            <header>
               <h1>Wizard</h1>
               <Link to='/'><button>Cancel</button></Link>
            </header>
            <main>
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
               </form>
            </main>

         </div>
      );
   }
}

export default Wizard;