import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'; 
// import ReactDOM from 'react-dom';


//selector

const SHANFAR_NAME = 'SHANFAR_NAME';
 const MUNNAR_PLACE = 'MUNNAR_PLACE';
//Action
const mynameShanfarAction = () => ({type : SHANFAR_NAME})
 const mynameNatureAction = () => ({type : MUNNAR_PLACE})

//Reducer
const shanfarReducer = (state,actions) => {
  switch (actions.type){
    case 'SHANFAR_NAME':
      return state = "my name shanfar"
     case 'MUNNAR_PLACE':
     return state = "i love India"
    default :
    return state = "no selected"
    
  }
}
//

let store = createStore(shanfarReducer);

store.subscribe(() => {console.log(store.getState())});

store.dispatch(mynameShanfarAction());
store.dispatch(mynameNatureAction());

ReactDOM.render(<Provider store ={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
