import {createStore} from 'redux';

const initialState = {
   houses: [],
   name: '',
   address: '',
   city: '',
   state: '',
   zip: 0,
   img: '',
   mortgage: '',
   rent: ''
}

export const UPDATE_HOUSES = 'UPDATE_HOUSES';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_STATE= 'UPDATE_STATE';
export const UPDATE_ZIP = 'UPDATE_ZIP';
export const UPDATE_IMG = 'UPDATE_IMG';
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
export const UPDATE_RENT = 'UPDATE_RENT';

function reducer(state = initialState, action) {
   const {type, payload} = action;
   console.log(state)

   switch(type) {
      case UPDATE_HOUSES:
         const newHouses = [...state.houses, payload]
         return {
            ...state,
            houses: newHouses
         }
      case UPDATE_NAME:
         return {
            ...state,
            name: payload
         }
      case UPDATE_ADDRESS:
         return {
            ...state,
            address: payload
         }
      case UPDATE_CITY:
         return {
            ...state,
            city: payload
         }      
      case UPDATE_STATE:
         return {
            ...state,
            state: payload
         }
      case UPDATE_ZIP:
         return {
            ...state,
            zip: payload
         }      
      case UPDATE_IMG:
         return {
            ...state,
            img: payload
         }      
      case UPDATE_MORTGAGE:
         return {
            ...state,
            mortgage: payload
         }
      case UPDATE_RENT:
         return {
            ...state,
            rent: payload
         }                 
      default:
         return state;
   }
}

export default createStore(reducer);